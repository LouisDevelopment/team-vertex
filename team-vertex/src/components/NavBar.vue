<template>
  <div class="header">
    <div class="header-left">
      <img class="logo" @click="homePage" draggable="false" src="../assets/VertexLogo.png">
    </div>
    <div class="header-right">
      <Button class="header-button" text aria-label="Play Games" @click="gamePage">
      <i style="padding:8px;" :class="headerItems[1].icon">

      </i>
    </Button>
      <Button class="header-button" text aria-label="profile" @click="toggleProfile">
        <i style="padding:8px;" :class="headerItems[0].icon">
          <Popover ref="op" style="text-align:center;">
            <SelectButton v-model="viewMode" :allowEmpty="false" :options="lightDarkOptions"></SelectButton>
          </Popover>
        </i>
      </Button>
    </div>
  </div>
</template>
<script>
  import {ref} from "vue";

  export default {
    name: "NavBar",
    data() {
      return {
        op: ref(),
        viewMode: "Light",
        lightDarkOptions: [
          "Light",
          "Dark"
        ],
        headerItems: [
          {
            name: "Profile",
            icon: "fa-regular fa-user"
          },
          {
            name: "Play",
            icon: "fa-solid fa-play",
          }
        ],
      }
    },
    methods:{
      toggleProfile(event){
        this.$refs.op.toggle(event);
      },
      gamePage(){
        this.$router.push("/games");
      },
      homePage(){
        this.$router.push("/");
      }
    },
    mounted(){
      if(localStorage.getItem('darkMode') == 'Dark'){
        this.viewMode = 'Dark'
      }
    },
    watch: {
      viewMode: function(){
        localStorage.setItem('darkMode', this.viewMode);
        const element = document.querySelector('html');
        element.classList.toggle('dark-mode');
      }
    }
  }
</script>

<style scoped>
/* Style the header with a grey background and some padding */
.header {
  display: flex;
  justify-content: space-between; /* Space between left and right sections */
  align-items: center; /* Center align the items vertically */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--p-header);
  z-index: 1000;
}

.header-left .logo {
  padding: 0px;
  cursor: pointer;
  margin: 4px 0px 0px 4px;
  max-height: 48px; /* Adjust this value as needed */
  width: auto; /* Keeps the aspect ratio of the logo */

  user-select: none; /* Prevents text selection */
  -webkit-user-drag: none; /* Prevents dragging in WebKit-based browsers */
  -moz-user-select: none; /* For older Firefox versions */
  -webkit-touch-callout: none; /* Prevents iOS callout actions */
  -ms-user-select: none; /* Prevents selection in Internet Explorer */
}

/* Float the link section to the right */
.header-right {
  display: flex;
}

.header-button {
  border-radius: 0px;
  margin:0px;
  height: 60px;
}
</style>