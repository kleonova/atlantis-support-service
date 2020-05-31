<template>
  <div class="app-main-layout">
    <Navbar @click="isSidebarOpen = !isSidebarOpen" v-model="widthSidebar" />

    <Sidebar v-model="widthSidebar" />

    <main class="app-content" :class="{ full: !widthSidebar }">
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <div class="fixed-action-btn">
      <a class="btn-floating btn-large blue" href="#">
        <i class="large material-icons">add</i>
      </a>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/app/Navbar.vue";
import Sidebar from "@/components/app/Sidebar.vue";

export default {
  name: "MainLayout",
  components: { Navbar, Sidebar },
  data: () => ({
    isSidebarOpen: true,
    windowWidth: 0
  }),
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    }
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    widthSidebar() {
      let isDesc = this.windowWidth > 768 ? true : false;
      return this.isSidebarOpen && isDesc;
    }
  },
  watch: {
    windowWidth: function() {
      if (this.windowWidth === 768) {
        console.log("The window width is 768px");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$whidesidebar: 50px;
$wopensidebar: 200px;

.app-main-layout {
  position: relative;
  min-height: 100vh;
}

.app-content {
  position: relative;
  padding-left: $wopensidebar + 10px;
}

.full {
  padding-left: $whidesidebar + 10px;
}
</style>
