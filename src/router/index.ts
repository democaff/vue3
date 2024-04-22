import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/discover",
    name: "BaseLayout",
    component: () => import("@/views/BaseLayout.vue"),
    children: [
      {
        path: "/discover", // 修正了从 "/discove" 到 "discover"
        name: "discover",
        component: () => import("@/views/discover/index.vue"),
      },
      {
        path: "dj",
        name: "dj",
        component: () => import("@/views/dj/index.vue"),
      },
      {
        path: "music", // 修正了从 "/muisc" 到 "music"
        name: "music",
        component: () => import("@/views/music/index.vue"),
      },
      {
        path: "video",
        name: "Video",
        component: () => import("@/views/video/index.vue"),
      },
      {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: () => import("@/views/NotFound.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
