import App from "../views/TodoPage.vue";
import OtherPage from "../views/OtherPage.vue";
import FormPage from "../views/FormPage.vue";

const routes = [
  { path: "/", component: App },
  { path: "/page2", component: OtherPage },
  { path: "/formpage", component: FormPage },
];

export default routes;
