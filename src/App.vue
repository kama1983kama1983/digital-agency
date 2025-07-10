<template>
  <div class="container py-5">
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
       h1{
         font-family: fantasy;
       }
      .header {
        background-image: url(&quot;https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80&quot;);
        color: black;
        padding: 20px 0;
      }
      .nav-item a {
          font-weight:bold;
          font-family:"Arial";
          font-size:1.3em;
          color:#212573;
      }
      .nav-item a:hover {
          color: #212573;
      }
       .homeIcon , .logo{
        font-size:1.6em;
        cursor: pointer;
        font-weight: bold;
        color: #212573;
       }
       a .logo{
        text-decoration: none;
       }
      .homeIcon{
          position: relative;
          bottom: 3px;
      }
</style>
