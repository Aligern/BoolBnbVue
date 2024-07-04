import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import Details from "./pages/Details.vue";
import NotFound from "./pages/NotFound.vue";
import Filters from "./pages/Filters.vue";
import Results from "./pages/Results.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome, 
    },
    {
      path: "/details",
      name: "details",
      component: Details, 
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound, 
    },
    {
      path: "/filters",
      name: "filters",
      component: Filters, 
    },
    {
      path: "/results",
      name: "results",
      component: Results,
    }
  ],
});

export { router };