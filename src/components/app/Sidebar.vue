<template>
  <ul class="sidenav app-sidenav" :class="classWidthSidebar">
    <router-link
      v-for="link in links"
      :key="link.url"
      tag="li"
      :to="link.url"
      :exact="link.exact"
    >
      <a :class="{ boxed: !value }">
        <span v-if="value">{{ link.title }}</span>
        <i class="material-icons center" v-if="!value">
          {{ link.image }}
        </i>
      </a>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: "Sidebar",
  props: ["value"],
  data: () => ({
    links: [
      { title: "HOME", url: "/", image: "home", exact: true },
      { title: "Личный кабинет", url: "/private-office", image: "account_box" },
      { title: "Счета", url: "/private-bills", image: "attach_money" }
      /*{
        title: "service-office",
        url: "/service-office",
        image: "business_center"
      }*/
    ]
  }),
  computed: {
    classWidthSidebar() {
      return this.value ? "open" : "close";
    }
  }
};
</script>

<style lang="scss" scoped>
$whidesidebar: 50px;
$wopensidebar: 200px;

.app-sidenav {
  padding-top: 84px;
}

.app-sidenav {
  padding-top: 0;
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
  width: $wopensidebar;
}

.app-sidenav.close {
  -webkit-transform: translateX(0);
  transform: translateX(0);
  width: $whidesidebar;
}

.boxed {
  padding: 0;
  margin: 0 auto;
}

.router-link-active {
  background-color: #cccccc;
  a {
    span {
      font-weight: bold;
    }
  }
}
</style>
