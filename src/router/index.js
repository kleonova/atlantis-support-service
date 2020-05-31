import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { layout: "main" },
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    meta: { layout: "empty" },
    component: () => import("../views/Login.vue") // lazyload
  },
  {
    path: "/register",
    name: "Register",
    meta: { layout: "empty" },
    component: () => import("../views/Register.vue") // lazyload
  },
  {
    path: "/private-office",
    name: "PrivateOffice",
    meta: { layout: "main" },
    component: () => import("../views/PrivateOffice.vue")
  },
  {
    path: "/private-bills",
    name: "PrivateBills",
    meta: { layout: "main" },
    component: () => import("../views/PrivateBills.vue")
  },
  {
    path: "/service-office",
    name: "ServiceOffice",
    meta: { layout: "main" },
    component: () => import("../views/ServiceOffice.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
