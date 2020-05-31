<template>
  <div class="layout-full">
    <router-view />
  </div>
</template>

<script>
import messages from "@/utils/message";
export default {
  name: "EmptyLayout",
  computed: {
    error() {
      return this.$store.getters.error;
    }
  },
  watch: {
    error(fbError) {
      console.log(fbError.code);
      alert(messages[fbError.code] || "Что-то пошло не так");
    }
  }
};
</script>

<style lang="scss" scoped>
.layout-full {
  height: 100%;
  background-color: #1240ab;
}
</style>
