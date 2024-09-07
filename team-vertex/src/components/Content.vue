<template>
  <div class="posts">
    <Card class="post">
      <template #title>Welcome!</template>
      <template #content>
        <p>
          Team Vertex is a game development company (just one guy at the moment) with plans to release a game on Steam in the coming year.
          We (still just me...) also plan to release several browser based games built directly into this website! More updates and progress will be shared soon.
          In the mean time feel free to check out my <a href="https://www.youtube.com/@LouisPog">YouTube channel</a>
        </p>
        <p style="margin-top: 16px">
          This website is a work in progress. Games and other updates will all be added sporadically.
        </p>
      </template>
    </Card>


  </div>
</template>
<script>
  export default {
    name: "Content",
    data() {
      return {

      }
    },
    methods:{
    },
    watch: {

    }
  }
</script>

<style scoped>
.posts{
  display:flex;
  flex-direction: column;
  margin:0px;
  padding: 0px;
  text-align: center;
  justify-content: center; /* Centers horizontally */
  align-items: flex-start; /* Align items to the top */
}
.post{
  margin-bottom: 16px;
  max-width: 1000px;
  display: flex;
  text-align: center;
  justify-content: center; /* Centers horizontally */
  align-items: flex-start; /* Align items to the top */
}
</style>