<template>
  <nav class="yellow">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Atlantida</a>

      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="#">profile</a></li>
        <li><a href="#">notification</a></li>
        <li><a href="#">mail</a></li>
        <li>
          <a href="#" @click.prevent="$emit('click')"
            ><i class="material-icons">dehaze</i></a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {}
};
</script>

<style lang="scss" scoped>
.brand-logo {
  font-family: "Montserrat", sans-serif;
  font-weight: bold;

  padding-left: 1rem;
}
</style>
