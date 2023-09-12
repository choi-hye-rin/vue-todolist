import Vue from "vue";
import axios from "axios";

import VueRouter from "vue-router";

import VueCompositionApi from "@vue/composition-api";
import { PiniaVuePlugin } from "pinia";
import pinia from "./store";

import routes from "./routes";

import App from "./App.vue";

Vue.use(VueCompositionApi);
Vue.use(PiniaVuePlugin);

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  router,
  pinia,
  render: (h) => h(App),
}).$mount("#app");
