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

<style lang="scss">
@import "~materialize-css/sass/materialize.scss";
/*@import "~bootstrap/dist/css/bootstrap.min.css";*/

@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed&subset=cyrillic");
</style>
