<template>
  <div class="app-main-layout">
    <Navbar @click="isSidebarOpen = !isSidebarOpen" />

    <Sidebar v-model="isSidebarOpen" />

    <main class="app-content" :class="{ full: !isSidebarOpen }">
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
    isSidebarOpen: true
  }),
  methods: {}
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
