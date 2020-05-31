<template>
  <nav class="yellow">
    <div class="nav-wrapper">
      <router-link class="brand-logo left " tag="a" to="/">
        <i class="material-icons">account_balance</i>
        <span v-if="value">
          ЖКХ Атлантида
        </span>
      </router-link>

      <ul class="left" :class="widthSidebar">
        <li>
          <a href="#" @click.prevent="changeSidebar">
            <i class="material-icons" v-if="!value">dehaze</i>
            <i class="material-icons" v-if="value">arrow_back</i>
          </a>
        </li>
      </ul>

      <ul id="nav-mobile" class="right">
        <li>
          <a
            class="dropdown-trigger"
            href="#"
            data-target="dropdown"
            ref="dropdown"
          >
            <i class="material-icons">person</i>
          </a>

          <!-- Dropdown Structure -->
          <ul id="dropdown" class="dropdown-content">
            <li>
              <router-link tag="a" to="/profile">
                <i class="material-icons">person</i>Профиль
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" @click.prevent="logout">
                <i class="material-icons">view_module</i>Выйти
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#"><i class="material-icons">notifications</i></a>
        </li>
        <li>
          <a href="#"><i class="material-icons">email</i></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import M from "materialize-css";

export default {
  name: "Navbar",
  props: ["value"],
  data: () => ({
    stateSidebar: true
  }),
  methods: {
    changeSidebar() {
      this.stateSidebar = !this.stateSidebar;
      this.$emit("click");
    },
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/login?message=logout");
    }
  },
  computed: {
    widthSidebar() {
      return this.value ? "opened-sidebar" : "hided-sidebar";
    }
  },
  mounted() {
    this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: false,
      coverTrigger: false
    });
  },
  beforeDestroy() {
    if (this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy();
    }
  }
};
</script>

<style lang="scss" scoped>
$whidesidebar: 50px;
$wopensidebar: 200px;

.brand-logo {
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 1.2rem;
  padding-left: 1rem;
}

.hided-sidebar {
  padding-left: $whidesidebar;
}

.opened-sidebar {
  padding-left: $wopensidebar;
}

.dropdown-content {
  li > a {
    font-size: 0.8rem;
    color: grey;
  }
}
</style>
