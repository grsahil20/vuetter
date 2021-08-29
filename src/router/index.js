import { createRouter, createWebHistory } from "vue-router";
import Tweets from "../views/Tweets.vue";
import Users from "../views/Users.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Tweets,
  },
  {
    path: "/tweets",
    name: "Tweets",
    component: Tweets,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
