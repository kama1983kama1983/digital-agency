const express = require('express');
const nodemailer = require('nodemailer');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const session = require('express-session');
const bcrypt = require('bcrypt');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: 'http://localhost:5173', // Allow your frontend origin
    credentials: true // Allow cookies to be sent
}));
app.use(express.json()); // Parse JSON request bodies

// Session Middleware
app.use(session({
    secret: process.env.SESSION_SECRET || 'supersecretkey', // Use a strong secret from .env
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        httpOnly: true, // Prevent client-side JS from reading the cookie
        maxAge: 1000 * 60 * 60 * 24 // 24 hours
    }
}));

// Admin Authentication Middleware
const isAuthenticated = (req, res, next) => {
    console.log('isAuthenticated middleware: req.session =', req.session);
    if (req.session.isAuthenticated) {
        next();
    } else {
        res.status(401).json({ success: false, message: 'Unauthorized' });
    }
};

// SQLite Database Setup
const db = new sqlite3.Database('./messages.db', (err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        // Create messages table if it doesn't exist
        db.run(`CREATE TABLE IF NOT EXISTS messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            message TEXT NOT NULL,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )`, (createErr) => {
            if (createErr) {
                console.error('Error creating table:', createErr.message);
            } else {
                console.log('Messages table created or already exists.');
            }
        });
    }
});

// Nodemailer Transporter Setup (for Gmail)
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // use TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

// API Endpoint to Send Email and Save Message
app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'الرجاء تعبئة جميع الحقول المطلوبة.' }); // Please fill in all required fields.
    }

    // Save message to database
    db.run(`INSERT INTO messages (name, email, message) VALUES (?, ?, ?)`, [name, email, message], function(err) {
        if (err) {
            console.error('Error saving message to database:', err.message);
            return res.status(500).json({ success: false, message: 'حدث خطأ أثناء حفظ الرسالة.' }); // An error occurred while saving the message.
        }
        console.log(`A message has been inserted with rowid ${this.lastID}`);

        // Send email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Send to your own email
            subject: `رسالة جديدة من ${name} عبر الموقع`,
            html: `
                <p><strong>الاسم:</strong> ${name}</p>
                <p><strong>البريد الإلكتروني:</strong> ${email}</p>
                <p><strong>الرسالة:</strong><br>${message}</p>
            `
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return res.status(500).json({ success: false, message: 'حدث خطأ أثناء إرسال البريد الإلكتروني.' }); // An error occurred while sending the email.
            }
            console.log('Email sent:', info.response);
            res.status(200).json({ success: true, message: 'تم إرسال رسالتك بنجاح!' }); // Your message has been sent successfully!
        });
    });
});

// API Endpoint to Get All Messages (for Admin Dashboard)
app.get('/messages', isAuthenticated, (req, res) => {
    db.all(`SELECT id, name, email, message, timestamp FROM messages ORDER BY timestamp DESC`, [], (err, rows) => {
        if (err) {
            console.error('Error retrieving messages:', err.message);
            return res.status(500).json({ success: false, message: 'حدث خطأ أثناء استرداد الرسائل.' }); // An error occurred while retrieving messages.
        }
        res.status(200).json({ success: true, messages: rows });
    });
});

// Admin Login Route
app.post('/admin/login', async (req, res) => {
    const { username, password } = req.body;

    // Check if username and password are provided
    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'الرجاء إدخال اسم المستخدم وكلمة المرور.' });
    }

    // Retrieve admin credentials from environment variables
    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH; // Hashed password

    // Validate username
    if (username !== adminUsername) {
        return res.status(401).json({ success: false, message: 'اسم مستخدم أو كلمة مرور غير صحيحة.' });
    }

    // Compare provided password with the hashed password
    const isMatch = await bcrypt.compare(password, adminPasswordHash);

    if (isMatch) {
        req.session.isAuthenticated = true;
        console.log('Login successful. Session isAuthenticated set to:', req.session.isAuthenticated);
        res.status(200).json({ success: true, message: 'تم تسجيل الدخول بنجاح!' });
    } else {
        console.log('Login failed. Invalid credentials.');
        res.status(401).json({ success: false, message: 'اسم مستخدم أو كلمة مرور غير صحيحة.' });
    }
});

// Admin Logout Route
app.post('/admin/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ success: false, message: 'حدث خطأ أثناء تسجيل الخروج.' });
        }
        res.status(200).json({ success: true, message: 'تم تسجيل الخروج بنجاح.' });
    });
});

// Admin Check Auth Status Route
app.get('/admin/check-auth', (req, res) => {
    if (req.session.isAuthenticated) {
        res.status(200).json({ isAuthenticated: true });
    } else {
        res.status(401).json({ isAuthenticated: false });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
