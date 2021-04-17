import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(
        /* webpackChunkName: "login"*/ "../views/Authentication/Login.vue"
      ),
  },
];

const router = createRouter({
  mode: "hash",
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    to.name !== "Login" &&
    to.name !== "Home" &&
    !localStorage.getItem("user")
  ) {
    next({ name: "Login" });
  } else if (to.name == "Login" && localStorage.getItem("user")) {
    next({ name: "Dashboard" });
  } else {
    next();
  }
});

export default router;
