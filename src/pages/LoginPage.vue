<template>
  <div class="login-container">
  <form class=" login-form" @submit.prevent="login">
    <div>
      <label class="form-title" label="username">Username:</label>
      <input type="text" class="form-input" id="username" v-model="username" required>
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password"  class="form-input" id="password" v-model="password" required>
    </div>
    <button class="submit-btn" type="submit">Login</button>
    <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
  </form>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
}

.login-form {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  transition: all 0.3s ease;
}

.form-title {
  color: #2c3e50;
  margin-bottom: 8px;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
}

.form-subtitle {
  color: #7f8c8d;
  margin-bottom: 30px;
  text-align: center;
  font-size: 14px;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  margin-bottom: 8px;
  color: #2c3e50;
  font-size: 14px;
  font-weight: 500;
}

.form-input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  transition: border 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
}

.submit-btn {
  width: 100%;
  padding: 14px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.submit-btn:hover {
  background: #2980b9;
}

.error-message {
  color: #e74c3c;
  background: #fdecea;
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
  margin-top: 20px;
  display: flex;
  align-items: center;
}

.error-icon {
  background: #e74c3c;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  font-size: 12px;
  font-weight: bold;
}

.form-footer {
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  color: #7f8c8d;
}

.forgot-password {
  color: #3498db;
  text-decoration: none;
  display: block;
  margin-bottom: 15px;
}

.signup-link {
  color: #3498db;
  text-decoration: none;
  font-weight: 500;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    async login() {
      this.errorMessage = ''; // Clear previous errors
      try {
        const response = await fetch('http://localhost:3000/admin/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password
          }),
          credentials: 'include' // Important for sending cookies
        });

        const data = await response.json();

        if (response.ok) {
          // Login successful
          console.log('Login successful:', data.message);
          // Redirect to admin dashboard or update state
          this.$router.push('/admin'); // Assuming you have Vue Router set up
        } else {
          // Login failed
          this.errorMessage = data.message || 'Login failed. Please try again.';
        }
      } catch (error) {
        console.error('Error during login:', error);
        this.errorMessage = 'An error occurred. Please try again later.';
      }
    }
  }
};
</script>
