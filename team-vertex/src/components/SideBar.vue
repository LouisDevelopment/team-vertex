<template>
  <aside id="sidebar" :style="{'width':sidebarWidth + 'px'}"
         @mouseover="OpenMenu" @mouseleave="CloseMenu">
    <div class="header" style="display:block">
      <div class="logo">
        <img aria-label="voror logo" src="../assets/logo.png" style="width:3rem; color: white">
      </div>
      <div aria-label="title" class="title" style="display:flex; padding-top:3px">
        <h2>Record Viewer</h2>
        <ToggleButton aria-label="pin-sidebar" class="pinButton" v-model="pinned" role="checkbox"
                      aria-checked="{{pinned}}" onLabel="" offLabel="" onIcon="fa-solid fa-thumbtack" offIcon="fa-solid fa-thumbtack"/>
      </div>
    </div>
    <div class="content">
      <ul >
        <li role="button" v-for="item in items" :key="item.label" @click="item.command">
          <div style="width:60px">
            <i :class="item.icon"></i>
          </div>
          <div style="width:200px; margin: 0 0 0 6px">
            <p>{{item.label}}</p>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: "SideBar",
  props: {
    viewMode: "Light"
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.updateSize(); // Set initial offset based on the initial screen width
  },
  methods: {
    handleResize(){
      this.updateSize();
    },
    updateSize(){
      if(window.innerWidth <= 768) {
        this.minWidth = 0;
        this.sidebarWidth = 0;
      } else {
        this.minWidth = 60;
        this.sidebarWidth = 60;
      }
    },
    OpenMenu() {
        this.sidebarWidth = this.expandedWidth;
        this.isExpanded=true;
    },
    CloseMenu(){
      if(!this.pinned) {
        if(window.innerWidth <= 768) {
          this.sidebarWidth = 0;
        } else {
          this.sidebarWidth = this.minWidth;
        }
        this.isExpanded = false;
      }
    },
    pinSidebar(){
      this.OpenMenu();
      this.$emit("pinned");
    }
  },
  watch: {
    pinned: function(){
      this.pinSidebar();
    },
  },
  data() {
    return {
      expandedWidth: 260,
      minWidth: 60,
      sidebarWidth: 60,
      currentNHSNumber: null,
      isExpanded: false,
      pinned: false,
      pinOptions:[{value: true, icon: 'fa-solid fa-thumbtack'}],
      items: [
        {
          label: 'Patient demographics',
          icon: 'fa-solid fa-home-alt',
          command: () => {
            this.$router.push("/");
          }
        },
        {
          label: 'Care record summary',
          icon: 'fa-solid fa-notes-medical',
          command: () => {
              this.$emit('summary');
              console.log("summary pressed");
          }
        },
        {
          label: 'Conditions',
          icon: 'fa-solid fa-diagnoses',
          command: () => {

            this.$emit("conditions");
            this.$router.push("/condition-view");
          }
        },
        {
          label: 'Medication',
          icon: 'fa-solid fa-pills',
          command: () => {
            this.$emit('medication');
            this.$router.push("/medication-view");
          }
        },
        {
          label: 'Allergies',
          icon: 'fa-solid fa-allergies',
          command: () => {
            this.$emit('allergies');
            this.$router.push("/allergy-view");
            // this.$toast.add({
            //   severity: 'warn',
            //   summary: 'Not Implemented',
            //   detail: 'The feature you are trying to access has not yet been implemented'
            // });
          }
        },
        {
          label: 'Warnings/flags',
          icon: 'fa-solid fa-exclamation-triangle',
          command: () => {
            this.$emit('warnings');
            this.$router.push("/warning-and-flag-view");
          }
        },
        {
          label: 'Appointments',
          icon: 'fa-solid fa-calendar-alt',
          command: () => {
            this.$emit('appointments');
            this.$router.push("/appointment-view");
          }
        },
        {
          label: 'Encounters',
          icon: 'fa-solid fa-user-doctor',
          command: () => {
            this.$emit('encounters');
            this.$router.push("/encounter-view");
          }
        },
        {
          label: 'Observations',
          icon: 'fa-solid fa-heart-pulse',
          command: () => {
            this.$emit('observations');
            this.$router.push("/observation-view");
          }
        },
        {
          label: 'Diagnostic orders',
          icon: 'fa-solid fa-microscope',
          command: () => {
            this.$emit("diagnosticOrders");
            this.$router.push("/diagnostic-order-view");
          }
        },
        {
          label: 'Diagnostic reports',
          icon: 'fa-solid fa-x-ray',
          command: () => {
            this.$emit("diagnosticReports");
            this.$router.push("/diagnostic-report-view");
          }
        },
        {
          label: 'Procedure requests',
          icon: 'fa-solid fa-house-medical-flag',
          command: () => {
            this.$emit("procedureRequests");
            this.$router.push("/procedure-request-view");
          }
        },
        {
          label: 'Procedures',
          icon: 'fa-solid fa-procedures',
          command: () => {
            this.$emit("procedures");
            this.$router.push("/procedure-view");
          }
        },
        {
          label: 'Referral requests',
          icon: 'fa-solid fa-hospital-user',
          command: () => {
            this.$emit("referralRequests");
            this.$router.push("/referral-request-view");
          }
        },
        {
          label: 'Family history',
          icon: 'fa-solid fa-user-friends',
          command: () => {
            this.$emit("familyHistory");
            this.$router.push("/family-history-view");
          }
        },
        {
          label: 'Immunisations',
          icon: 'fa-solid fa-syringe',
          command: () => {
            this.$emit("immunisations");
            this.$router.push("/immunisation-view");
          }
        }
      ]
    }
  }
}
</script>

<style scoped>
#sidebar{
  position:fixed;
  height:103vh;
  overflow:hidden;
  background-color:#5a7999;
  overflow-y: auto; /* Enable vertical scrollbar if needed */
  white-space: nowrap;
  transition: all .15s ease;
  color: white;
  z-index:1000;
}
.header{
  background-color:#04466B;
  margin:5px 0 0 0;
  padding: 0 0 0 0;
  height:10vh;
  color: white;
}
.fa-thumbtack{
  padding: 0px;
  margin:0px;
  height:0px;
  width:0px;
}
.logo{
  width:60px;
  margin:0px;
  padding: 12px 0 0 0;
}
.title{
  font-size:13px;
  margin: 7px 0 0 0;
  text-align: left;
}

.content{
  background-color:#5a7999;
}

i{
  font-size:2.5rem;
}

li{
  list-style-type: none;
  display:flex;
  padding: 1.166vh 0 1.166vh 0;
  margin:0;
  cursor: pointer;
}

li:hover{
 background-color: #4a6989;
}

li i{
  margin: 0 20px 0 20px;
  padding: 0;
  font-size:1.2rem;
}
li p{
  padding:0;
  margin:3px 0 0 0;
  white-space: nowrap;
  text-align:left;
}
ul{
  padding:0;
  margin:0;
}

.pinButton{
  width: 32px; height: 32px; margin: 10px 0 0 16px;
  display:block;
}

@media (max-width:768px){
  .pinButton{
    display: none;
  }
}
</style>
