import { createWebHistory, createRouter } from "vue-router";

// ==============================================================
declare module "vue-router" {
  interface RouteMeta {
    title?: string;
  }
}
// ==============================================================

// ROUTE GROUP FILES
import { dashboardRoutes } from "./dashboardRoutes";
import { decl } from "postcss";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Dashboards",
      redirect: "/learning-management",
      component: () => import("@/layout/DefaultLayout.vue"),
      children: [...dashboardRoutes],
    },
    // {
    //   path: "/:pathMatch(.*)*",
    //   name: "NotFound",
    //   component: () => import("@/pages/NotFound.vue"),
    // },
  ],
});

export default router;
