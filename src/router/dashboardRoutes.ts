import { RouteRecordRaw } from "vue-router";

export const dashboardRoutes: RouteRecordRaw[] = [
  {
    name: "learning-management",
    path: "/learning-management",
    component: () => import("../pages/dashboard/LearningManagement.vue"),
    meta: {
      title: "Learning Dashboard - Uein Admin & Client Dashboard Template",
    },
  },
];
