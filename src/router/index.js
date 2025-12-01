import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Movies from '../pages/Movies.vue'
import Info from '../pages/Info.vue'

// Define routes for the application where each route maps to a component
const routes = [
  {
    path: "/",
    component: Home,
    meta: { title: "Startsida" }
  },
  {
    path: "/movies",
    component: Movies,
    meta: { title: "Filmer" }
  },
  {
    path: "/info",
    component: Info,
    meta: { title: "Information" }
  }
]

// Create and export the router instance 
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Dynamic set the document title based on the route meta title
router.afterEach((to) => {
  document.title = to.meta.title || "Laboration 3 - Vue"
})

export default router
