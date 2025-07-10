<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Welcome to Our Site</h1>
      <p>Your journey starts here. Explore amazing content tailored just for you.</p>
      <router-link to="/explore" class="btn">Get Started</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheHero"
};
</script>

<style scoped>
.hero {
  background-image: url('https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4e4a56;
  text-align: center;
}
.hero-content {
  max-width: 600px;
}
.btn {
  padding: 10px 20px;
  background-color: #ff4500;
  color: white;
  border: none;
  border-radius: 5px;
  text-decoration: none;
}
</style>
