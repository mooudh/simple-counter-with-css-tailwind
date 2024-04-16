import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../components/HomePage.vue";
import CssCounter from "../components/Css/CssCounter.vue";
import TailwindCounter from "../components/Tailwind/TailwindCounter.vue";
import TheHeader from "../components/TheHeader.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/css", components: { default: CssCounter, header: TheHeader } },
  {
    path: "/tailwind",
    components: { default: TailwindCounter, header: TheHeader },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
