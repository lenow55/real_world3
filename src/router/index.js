import { createRouter, createWebHashHistory } from "vue-router";
import EventList from "../views/EventList.vue";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  {
    path: "/about",
    name: "about",
    component: function () {
      return import("../views/AboutView.vue");
    },
  },
  {
    path: "/event/5928101",
    name: "EventDetails",
    component: function () {
      return import("../views/EventDetails.vue");
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
