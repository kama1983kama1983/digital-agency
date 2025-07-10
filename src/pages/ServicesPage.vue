<template>
  <div class="services-page">
    <header>
      <div class="container">
        <h1 :style="{textAlign:'center'}">Our Technical Services</h1>
        <p :style="{textAlign:'center'}">Premium solutions for your power and infrastructure needs</p>
      </div>
    </header>

    <div class="container">
      <div class="service-grid">
        <!-- Power Solutions Service -->
        <div class="service-card">
          <div class="service-header">
            Power Solutions
          </div>
          <div class="service-content">
            <img :src="Simg1" alt="Power Solutions">
            <p>Comprehensive power distribution and management systems tailored to your needs.</p>
            <ul class="spec-list">
              <li>Standard Capacity <span class="spec-value">1.0x2.5m</span></li>
              <li>Medium Capacity <span class="spec-value">5.0x9.5m</span></li>
              <li>High Capacity <span class="spec-value">20.0x13.5m</span></li>
              <li>Industrial Grade <span class="spec-value">100.0x29.5m</span></li>
            </ul>
            <div style="margin-top: 15px;">
              <span class="tech-badge">Docker</span>
              <span class="tech-badge">Vue</span>
              <span class="tech-badge">SC</span>
            </div>
          </div>
        </div>

        <!-- Infrastructure Service -->
        <div class="service-card">
          <div class="service-header">
            Infrastructure Deployment
          </div>
          <div class="service-content">
            <img :src="Simg2" alt="Infrastructure Deployment">
            <p>Robust infrastructure solutions for any scale operation.</p>
            <ul class="spec-list">
              <li>Small Deployment <span class="spec-value">3.0x6.5m</span></li>
              <li>Enterprise Scale <span class="spec-value">50.0x22.5m</span></li>
              <li>Custom Solutions <span class="spec-value">Custom</span></li>
            </ul>
            <div style="margin-top: 15px;">
              <span class="tech-badge">Cloud</span>
              <span class="tech-badge">Kubernetes</span>
              <span class="tech-badge">CI/CD</span>
            </div>
          </div>
        </div>

        <!-- Monitoring Service -->
        <div class="service-card">
          <div class="service-header">
            System Monitoring
          </div>
          <div class="service-content">
            <img :src="Simg3" alt="System Monitoring">
            <p>24/7 monitoring and analytics for your critical systems.</p>
            <ul class="spec-list">
              <li>Basic Monitoring <span class="spec-value">2.0x4.5m</span></li>
              <li>Advanced Analytics <span class="spec-value">15.0x11.5m</span></li>
              <li>AI Predictive <span class="spec-value">60.0x24.5m</span></li>
            </ul>
            <div style="margin-top: 15px;">
              <span class="tech-badge">AI</span>
              <span class="tech-badge">ML</span>
              <span class="tech-badge">Big Data</span>
            </div>
          </div>
        </div>

        <!-- Custom Solutions -->
        <div class="service-card">
          <div class="service-header">
            Custom Solutions
          </div>
          <div class="service-content">
            <img :src="Simg4" alt="Custom Solutions">
            <p>Tailored technical solutions designed specifically for your requirements.</p>
            <ul class="spec-list">
              <li>Consultation <span class="spec-value">Custom</span></li>
              <li>Implementation <span class="spec-value">Custom</span></li>
              <li>Support <span class="spec-value">Custom</span></li>
            </ul>
            <div style="margin-top: 15px;">
              <span class="tech-badge">Vue</span>
              <span class="tech-badge">Node</span>
              <span class="tech-badge">Docker</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesPage',
  data() {
    return {
      Simg1: '/imgs/services-1.jpg',
      Simg2: '/imgs/services-2.png',
      Simg3: '/imgs/services-3.jpg',
      Simg4: '/imgs/services-4.webp'
    }
  }
  // Component logic here
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  margin: 0;
  font-size: 2.5rem;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 30px;
}

.service-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-header {
  background-color: var(--secondary-color);
  color: white;
  padding: 15px;
  font-size: 1.2rem;
  font-weight: bold;
}

.service-content {
  padding: 20px;
}

.service-content img {
  width: 100%;
  height: auto;
  margin-bottom: 15px;
  border-radius: 4px;
}

.spec-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.spec-list li {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
}

.spec-list li:last-child {
  border-bottom: none;
}

.spec-value {
  font-weight: bold;
  color: var(--accent-color);
}

.tech-badge {
  display: inline-block;
  background-color: var(--dark-color);
  color: white;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  margin-right: 5px;
  margin-bottom: 5px;
}

footer {
  background-color: var(--primary-color);
  color: white;
  text-align: center;
  padding: 20px;
  margin-top: 40px;
}

@media (max-width: 768px) {
  .service-grid {
    grid-template-columns: 1fr;
  }
}
</style>
