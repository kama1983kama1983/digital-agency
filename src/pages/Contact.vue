<template>
  <div class="contact-page">
    <div :style="{textAlign:'center'}">
      <h1>Contact Us</h1>
      <p>Contact us using the form below:</p>
    </div>
    <form @submit.prevent="sendEmail" class="contact-form">
      <div class="form-group">
        <label for="name">الاسم:</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          required
          placeholder="اسمك"
        >
      </div>

      <div class="form-group">
        <label for="email">البريد الإلكتروني:</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          required
          placeholder="بريدك الإلكتروني"
        >
      </div>

      <div class="form-group">
        <label for="message">الرسالة:</label>
        <textarea
          id="message"
          v-model="form.message"
          required
          placeholder="رسالتك"
          rows="5"
        ></textarea>
      </div>

      <button type="submit" :disabled="isSending">
        {{ isSending ? 'جاري الإرسال...' : 'إرسال الرسالة' }}
      </button>

      <div v-if="message" class="message" :class="{ success: isSuccess, error: !isSuccess }">
        {{ message }}
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '' // 'subject' removed
      },
      isSending: false,
      message: '',
      isSuccess: false
    }
  },
  methods: {
    async sendEmail() {
      this.isSending = true;
      this.message = '';

      try {
        const response = await fetch('http://localhost:3000/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.form.name,
            email: this.form.email,
            message: this.form.message
          })
        });

        const data = await response.json();

        if (response.ok) {
          this.isSuccess = true;
          this.message = data.message; // Message from backend (Arabic)
          this.resetForm();
        } else {
          this.isSuccess = false;
          this.message = data.message || 'حدث خطأ غير متوقع. الرجاء المحاولة مرة أخرى.'; // Unexpected error. Please try again.
        }
      } catch (error) {
        console.error('Failed to send message:', error);
        this.isSuccess = false;
        this.message = 'تعذر الاتصال بالخادم. الرجاء التأكد من تشغيل الخادم.'; // Could not connect to server. Please ensure the server is running.
      } finally {
        this.isSending = false;
      }
    },
    resetForm() {
      this.form = {
        name: '',
        email: '',
        message: '' // 'subject' removed
      };
    }
  }
}
</script>

<style scoped>
.contact-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
 font-family: fantasy;
}

.contact-form {
  margin-top: 2rem;
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input, textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

button {
  background-color: #42b983;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #3aa876;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.message {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 4px;
}

.success {
  background-color: #d4edda;
  color: #155724;
}

.error {
  background-color: #f8d7da;
  color: #721c24;
}
</style>
