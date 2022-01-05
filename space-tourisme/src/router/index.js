import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/destination',
    name: 'Destination',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Destination.vue')
  },
  {
    path: '/crew',
    name: 'Crew',
    component: () => import(/* webpackChunkName: "about" */ '../views/Crew.vue')
  },
  {
    path: '/technology',
    name: 'Technology',
    component: () => import(/* webpackChunkName: "about" */ '../views/Technology.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
