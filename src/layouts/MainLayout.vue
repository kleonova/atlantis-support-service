<template>
  <div class="main-layout">
    <nav>
      1
    </nav>
    <main role="main" class="conteiner">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "MainLayout"
};
</script>

<style scoped>
.main-layout {
  min-height: 75rem;
  padding-top: 4.5rem;
}
</style>
