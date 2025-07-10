<template>
  <div class="col-md-6" :style="{marginTop:'5px'}">
    <div class="card h-100 border-0 shadow-sm overflow-hidden">
      <div class="card-img-top" :style="{ backgroundImage: `url(${image})` }"></div>
      <div class="card-body text-center p-4">
        <h3 class="card-title fw-bold mb-2">{{ title }}</h3>
        <p class="text-muted mb-1 small">{{ subtitle }}</p>
        <p class="text-primary fw-bold mb-0">{{ year }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AgencyCard',
  props: {
    title: String,
    subtitle: String,
    year: String,
    image: String
  }
}
</script>

<style scoped>
.card {
  transition: all 0.3s ease;
  border-radius: 12px;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

.card-img-top {
  height: 200px;
  background-size: cover;
  background-position: center;
}
</style>