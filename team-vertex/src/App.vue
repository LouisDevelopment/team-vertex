<template>
  <NavBar/>
  <SideBar></SideBar>
  <div class="app-container">
    <div class="content">
      <RouterView/>
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
import Game from "@/components/Game.vue";
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Content,
    Footer,
    Game
  },
}
</script>

<style>
html, body {
  font-family: 'Lato', sans-serif;
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: var(--p-background);
  text-align: center;
  justify-content: center; /* Centers horizontally */
  align-items: flex-start; /* Align items to the top */
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure full viewport height */
  width: 100%; /* Ensure full width */
  margin: 0;
  padding: 0;
  text-align: center;
  justify-content: center; /* Centers horizontally */
  align-items: center; /* Align items to the top */
}

.content {
  flex: 1; /* Expands to fill available space */
  width: 100%; /* Ensure full width */
  padding: 96px 32px 0 32px;
  margin: 0;
  text-align: center;
  justify-content: center; /* Centers horizontally */
  align-items: center; /* Align items to the top */
}

.footer {
  width: 100%; /* Ensure full width */
  background-color: var(--p-header); /* Background color */
  padding: 0.3rem; /* Example padding */
  text-align: center;
  justify-content: center; /* Centers horizontally */
  align-items: center; /* Align items to the top */
}
</style>
