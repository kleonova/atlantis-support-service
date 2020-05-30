<template>
  <div class="layout-full">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "EmptyLayout"
};
</script>

<style lang="scss" scoped>
.layout-full {
  height: 100%;
  background-color: #1240ab;
}
</style>
