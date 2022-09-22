import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/courses",
    name: "СoursesPage",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/СoursesPage.vue"),
  },
  {
    path: "/materials",
    name: "MaterialsPage",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/MaterialsPage.vue"),
  },
  {
    path: "/services",
    name: "ServicesPage",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/ServicesPage.vue"),
  },
  /*{
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }*/
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
