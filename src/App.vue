<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import EmptyLayout from "@/layouts/EmptyLayout.vue";
import MainLayout from "@/layouts/MainLayout.vue";

export default {
  components: {
    EmptyLayout,
    MainLayout
  },
  computed: {
    layout() {
      //console.log(this.$route.meta);
      return (this.$route.meta.layout || "empty") + "-layout";
    }
  }
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.min.css";

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body,
html {
  height: 100%;
  font-family: "Roboto", sans-serif;
}

#app {
  height: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: Roboto, sans-serif;
  text-shadow: rgba(0, 0, 0, 0.15) 0 0 1px;
}
</style>
