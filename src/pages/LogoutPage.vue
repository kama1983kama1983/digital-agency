<template>
  <li class="nav-item" >
  <router-link to="#"  @click.prevent="logout">Logout</router-link >
  <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
  </li>
</template>
<script>
export default {
  data() {
    return {
      errorMessage: ""
    }
  },
  methods: {
    async logout() {
      this.errorMessage = ''; // Clear previous errors
      try {
        const response = await fetch('http://localhost:3000/admin/logout', {
          method: 'POST',
          credentials: 'include' // Added to handle cookies if using session-based auth
        });

        if (response.ok) {
          // Logout successful - redirect or update state
          console.log('Logout successful');
          this.$router.push('/admin/login'); // Redirect to login page
        } else {
          // Handle server errors
          const data = await response.json();
          this.errorMessage = data.message || 'Logout failed';
        }
      } catch (error) {
        console.error('Logout error:', error);
        this.errorMessage = 'An error occurred during logout';
      }
    }
  }
}
</script>
