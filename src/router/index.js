import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import firebase from "firebase/app";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { layout: "main", auth: true },
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
    path: "/profile",
    name: "Profile",
    meta: { layout: "main", auth: true },
    component: () => import("../views/Profile.vue")
  },
  {
    path: "/private-office",
    name: "PrivateOffice",
    meta: { layout: "main", auth: true },
    component: () => import("../views/PrivateOffice.vue")
  },
  {
    path: "/private-bills",
    name: "PrivateBills",
    meta: { layout: "main", auth: true },
    component: () => import("../views/PrivateBills.vue")
  },
  {
    path: "/service-office",
    name: "ServiceOffice",
    meta: { layout: "main", auth: true },
    component: () => import("../views/ServiceOffice.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requireAuth = to.matched.some(record => record.meta.auth);

  if (requireAuth && !currentUser) {
    next("/login?message=login");
  } else {
    next();
  }
});

export default router;
