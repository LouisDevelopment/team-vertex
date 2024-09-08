<template>
  <div id="heading">
    <h1>Test Game</h1>
    <h2>This game has no content, just testing things right now.</h2>
  </div>
  <div id="unity-container">
    <!-- This div will be the container for the Unity game -->
    <iframe
        :src="gameUrl"
        width="100%"
        height="100%"
        style="border:none"
        allow="fullscreen"
    ></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gameUrl: '/Geometry Smash/index.html', // Path to the copied Unity index.html
    };
  },
};
</script>

<style scoped>
#unity-container {
  width: 100%;
  height: 80vh;
  overflow: hidden;
}
</style>