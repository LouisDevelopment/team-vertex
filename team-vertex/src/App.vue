<template>
  <NavBar/>
  <div class="app-container">
    <div class="content">
      <Content/>
    </div>
    <footer class="footer">
      <Footer/>
    </footer>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Content from "@/components/Content.vue";
import Footer from "@/components/Footer.vue";
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Content,
    Footer
  },
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: var(--p-background);
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure full viewport height */
  width: 100%; /* Ensure full width */
  margin: 0;
  padding: 0;
}

.content {
  flex: 1; /* Expands to fill available space */
  width: 100%; /* Ensure full width */
  padding: 0;
  margin: 0;
  text-align: center;
}

.footer {
  width: 100%; /* Ensure full width */
  background-color: #f1f1f1; /* Background color */
  padding: 0.3rem; /* Example padding */
  text-align: center;
}
</style>
