<template>
  <section class="contact-section py-5 my-5 bg-light rounded-3">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center">
          <h2 class="fw-bold mb-4">Digital Agency</h2>
          <p class="lead mb-5">Feel free to contact us for expert digital solutions today!</p>
          
          <div class="d-flex flex-column flex-md-row justify-content-center gap-4 mb-4">
            <a href="mailto:sampie@info.com" class="text-decoration-none text-dark">
              <i class="fas fa-envelope me-2 text-primary"></i> sampie@info.com
            </a>
            <a href="tel:+12322223322" class="text-decoration-none text-dark">
              <i class="fas fa-phone me-2 text-primary"></i> +1 232 222 33 22
            </a>
          </div>

          <div class="d-flex flex-column flex-md-row justify-content-center gap-4 mb-4">
            <a href="https://wa.me/12322223322" target="_blank" class="text-decoration-none text-dark">
              <i class="fab fa-whatsapp me-2 text-success"></i> WhatsApp
            </a>
            <a href="https://www.facebook.com/yourpage" target="_blank" class="text-decoration-none text-dark">
              <i class="fab fa-facebook me-2 text-primary"></i> Facebook
            </a>
          </div>

          <div class="d-flex flex-column flex-md-row justify-content-center gap-4">
            <a href="https://maps.app.goo.gl/yourlocation" target="_blank" class="text-decoration-none text-dark">
              <i class="fas fa-map-marker-alt me-2 text-danger"></i> Find Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection'
}
</script>

<style scoped>
.contact-section {
  background-color: #f1f8ff;
}

a {
  transition: all 0.3s ease;
  padding: 10px 20px;
  border-radius: 50px;
  background-color: white;
}

a:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  color: #0d6efd !important;
}
</style>