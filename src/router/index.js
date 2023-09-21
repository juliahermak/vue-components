// Composables
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import WidgetWeather from "@/views/WidgetWeather.vue";
import CulinaryRecipes from "@/views/CulinaryRecipes.vue";
import Card from "@/components/Card.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/widget",
    component: WidgetWeather,
  },
  {
    path: "/recipes",
    component: CulinaryRecipes,
  },
  {
    path: "/card",
    component: Card,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
