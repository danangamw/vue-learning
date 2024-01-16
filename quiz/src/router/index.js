import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/HomeView.vue";
import QuizView from "../pages/QuizView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/quiz/:id",
      name: "quiz",
      component: QuizView,
    },
  ],
});

export default router;
