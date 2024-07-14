import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/dashboard",
    component: () => import("../layout/dashboard/Dashboard.vue"),
    children: [
      {
        path: "",
        component: () => import("../views/dashboard/Accounts.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes, // Make sure routes are correctly defined as an array of objects
});

export default router;
