import Vue from "vue";
import axios from "axios";

import VueRouter from "vue-router";
import routes from "./routes";

import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
