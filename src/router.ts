import { createRouter, createWebHistory } from "vue-router";
import home from "./pages/home.vue";
import details from "./pages/details.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: home,
    },
    {
      path: "/:name",
      name: "Details",
      component: details,
    },
  ]
})