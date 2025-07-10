<template>
<header class="header">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-4 aling-items-justify">
              <RouterLink to="/" class="logo" :style="{textDecoration:'none'}">
                <i class="fas fa-home homeIcon"></i> MyBrand
              </RouterLink>
            </div>

            <div class="col-md-8">
                <nav class="navbar navbar-expand-md navbar-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <router-link class="nav-link"  to="/">Home</router-link>
                            </li>
                           <li class="nav-item">
                                <router-link class="nav-link"  to="/explor">Explor</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link"  to="/about">About</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link"  to="/services">Services</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link"  to="/contact">Contact</router-link>
                            </li>
                              <logout  v-if="isAuthenticated" class="nav-link"/>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</header>
</template>

<script>
import logout from '@/pages/LogoutPage.vue'

export default {
  name: "TheHeader",
  components:{
    logout
  },
  data() {
    return {
      isAuthenticated: false
    };
  },
  created() {
    this.checkAuthStatus();
  },
  watch: {
    '$route': 'checkAuthStatus' // Watch for route changes to update auth status
  },
  methods: {
    async checkAuthStatus() {
      try {
        const response = await fetch('http://localhost:3000/admin/check-auth', {
          credentials: 'include'
        });
        if (response.ok) {
          const data = await response.json();
          this.isAuthenticated = data.isAuthenticated;
        } else {
          this.isAuthenticated = false;
        }
      } catch (error) {
        console.error('Error checking authentication status:', error);
        this.isAuthenticated = false;
      }
    }
  }
}
</script>
