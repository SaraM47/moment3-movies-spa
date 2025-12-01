import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Movies from '../pages/Movies.vue'
import Info from '../pages/Info.vue'

// Define routes for the application where each route maps to a component
const routes = [
  { path: '/', component: Home },
  { path: '/movies', component: Movies },
  { path: '/info', component: Info }
]

// Create and export the router instance 
export default createRouter({
  history: createWebHistory(),
  routes
})
