<template>
  <ul class="sidenav app-sidenav collection" :class="{ open: value }">
    <router-link
      v-for="link in links"
      :key="link.url"
      tag="li"
      :to="link.url"
      :exact="link.exact"
    >
      <a class="collection-item">{{ link.title }}</a>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: "Sidebar",
  props: ["value"],
  data: () => ({
    links: [
      { title: "HOME", url: "/", exact: true },
      { title: "Личный кабинет", url: "/private-office" },
      { title: "Счета", url: "/private-bills" },
      { title: "service-office", url: "/service-office" },
      { title: "login", url: "/login" },
      { title: "register", url: "/register" }
    ]
  })
};
</script>

<style lang="scss" scoped>
.app-sidenav {
  padding-top: 84px;
}
</style>

<style lang="scss" scoped>
.app-sidenav {
  padding-top: 5px;
  top: 65px;
  width: 200px;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
  bottom: 0 !important;
  height: auto !important;
}

.app-sidenav.open {
  -webkit-transform: translateX(0);
  transform: translateX(0);
}
</style>
