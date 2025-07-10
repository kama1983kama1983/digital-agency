<template>
  <div class="admin-dashboard">
    <h1>لوحة تحكم الرسائل</h1>
    <p v-if="loading">جاري تحميل الرسائل...</p>
    <p v-else-if="error" class="error-message">{{ error }}</p>
    <div v-else-if="messages.length === 0" class="no-messages">
      لا توجد رسائل لعرضها.
    </div>
    <div v-else class="messages-table-container">
      <table class="messages-table">
        <thead>
          <tr>
            <th>الاسم</th>
            <th>البريد الإلكتروني</th>
            <th>الرسالة</th>
            <th>التاريخ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="msg in messages" :key="msg.id">
            <td>{{ msg.name }}</td>
            <td>{{ msg.email }}</td>
            <td class="message-cell">{{ msg.message }}</td>
            <td>{{ new Date(msg.timestamp).toLocaleString('ar-EG') }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminDashboard',
  data() {
    return {
      messages: [],
      loading: true,
      error: null
    };
  },
  async created() {
    await this.fetchMessages();
  },
  methods: {
    async fetchMessages() {
      try {
        const response = await fetch('http://localhost:3000/messages', {
          credentials: 'include' // Important for sending cookies
        });
        if (!response.ok) {
          throw new Error('فشل في استرداد الرسائل من الخادم.'); // Failed to retrieve messages from the server.
        }
        const data = await response.json();
        if (data.success) {
          this.messages = data.messages;
        } else {
          throw new Error(data.message || 'حدث خطأ غير معروف.'); // Unknown error occurred.
        }
      } catch (err) {
        console.error('Error fetching messages:', err);
        this.error = err.message || 'تعذر الاتصال بالخادم.'; // Could not connect to server.
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.admin-dashboard {
  max-width: 100%; /* Make it full width */
  margin: 2rem; /* Adjust margin for full width */
  padding: 2rem;
  background-color: #ffffff; /* Changed to white for a cleaner look */
  border-radius: 10px; /* Slightly more rounded corners */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* More pronounced shadow */
}

h1 {
  text-align: center;
  color: #2c3e50; /* Darker, more professional color */
  margin-bottom: 2rem; /* More space below heading */
  font-size: 2.2rem; /* Slightly larger font */
  font-weight: 600; /* Bolder */
}

.messages-table-container {
  overflow-x: auto;
  border: 1px solid #e0e0e0; /* Light border around the container */
  border-radius: 8px; /* Match dashboard border-radius */
}

.messages-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 0; /* Remove top margin as container has padding */
}

.messages-table th,
.messages-table td {
  border: 1px solid #e0e0e0; /* Lighter border color */
  padding: 15px; /* Increased padding for better spacing */
  text-align: right; /* Align text to the right for Arabic */
  vertical-align: top; /* Align content to the top */
}

.message-cell {
  max-width: 200px; /* Adjust as needed to control the width */
  word-wrap: break-word; /* Old property for wrapping */
  overflow-wrap: break-word; /* New property for wrapping */
}

.messages-table th {
  background-color: #f2f2f2; /* Lighter header background */
  color: #333; /* Darker text for header */
  font-weight: bold;
  text-transform: uppercase; /* Uppercase for header text */
  letter-spacing: 0.5px; /* Slight letter spacing */
  font-size: 0.95rem; /* Slightly smaller font for header */
}

.messages-table tbody tr:nth-child(even) {
  background-color: #f9f9f9; /* Lighter even row background */
}

.messages-table tbody tr:hover {
  background-color: #e6f7ff; /* A light blue on hover for better feedback */
  cursor: pointer; /* Indicate clickable rows, even if not clickable yet */
}

.error-message {
  color: #d9534f;
  text-align: center;
  margin-top: 1rem;
  font-weight: bold;
}

.no-messages {
  text-align: center;
  color: #777;
  margin-top: 1rem;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
}
</style>
