import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "./filters/date.filter";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;
Vue.use(Vuelidate);

Vue.filter("date", dateFilter);

firebase.initializeApp({
  apiKey: "AIzaSyDCXQqmkPEvhTWwWvRrZv_tcZpTXb4UuXY",
  authDomain: "atlantis-support-service.firebaseapp.com",
  databaseURL: "https://atlantis-support-service.firebaseio.com",
  projectId: "atlantis-support-service",
  storageBucket: "atlantis-support-service.appspot.com",
  messagingSenderId: "977496269356",
  appId: "1:977496269356:web:2a6ba3dca7120274136789"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
