<template>
  <div class="container" :style="{ textAlign: 'center' }">
    <h1>About Us</h1>
    <p>Digital Agency - Creative Solutions for Your Business</p>
  </div>
  <div class="our-story">

     <div class="image-container">
      <img :src="imageAbout" alt="Image About Page">
    </div>
    <div class="text-container">
      <h1>Our Story</h1>
      <p>We are a passionate team of digital experts dedicated to helping businesses thrive in the online world. With
          years of experience in web design, development, and digital marketing, we create solutions that make a real
          difference.</p>
        <p>Our mission is to deliver exceptional results through creativity, innovation, and technical excellence. We
          believe in building long-term relationships with our clients based on trust and outstanding service.</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutPage",
  data() {
    return {
      imageAbout: '/imgs/about-1.avif'
    }
  }
}
</script>

<style scoped>
.our-story {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem; /* Reduced gap */
  align-items: center; /* Vertically align items */
  padding: 2rem;
  max-width: 1200px; /* Set a max-width for the section */
  margin: 0 auto; /* Center the section */
}

.image-container img {
  width: 100%;
  max-width: 500px; /* Ensure image doesn't get too big */
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.text-container {
  flex: 1;
  line-height: 1.8em; /* Adjusted line height for better readability */
  text-align: left;
}

.text-container h1 {
  color: #333;
  margin-bottom: 1rem;
}

.text-container p {
  color: #555;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .our-story {
    flex-direction: column; /* Stack elements vertically on smaller screens */
    gap: 2rem;
  }
  .image-container {
    margin-bottom: 1.5rem;
  }
  .text-container {
    text-align: center;
  }
}
</style>

