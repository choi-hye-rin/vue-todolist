import Vue from "vue";
import axios from "axios";

import VueRouter from "vue-router";

import VueCompositionApi from "@vue/composition-api";
import { createPinia, PiniaVuePlugin } from "pinia";

import routes from "./routes";

import App from "./App.vue";

Vue.use(VueCompositionApi);
Vue.use(PiniaVuePlugin);
const pinia = createPinia();

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
