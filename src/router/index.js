import {
  createRouter,
  createWebHistory
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue"
import ServiceView from "@/views/ServiceView.vue";
import GalerieView from "@/views/GalerieView.vue";
import BlogView from "@/views/BlogView.vue";
import ContactView from "@/views/ContactView.vue";
import ConsultView from "@/views/ConsultView.vue";

const routes = [{
    path: "/",
    name: "Home",
    component: HomeView,
  },

  {
    path: "/a-propos",
    name: "About",
    component: AboutView,
  },

  {
    path: "/service",
    name: "Service",
    component: ServiceView,
  },

  {
    path: "/galerie",
    name: "Galerie",
    component: GalerieView,
  },
  {
    path: "/blog",
    name: "Blog",
    component: BlogView,
  },

  {
    path: "/contact",
    name: "Contact",
    component: ContactView,
  },
  {
    path: "/consult",
    name: "Consult",
    component: ConsultView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;