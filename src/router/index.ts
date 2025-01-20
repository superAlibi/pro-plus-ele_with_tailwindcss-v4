import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { routes } from './menu'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes as RouteRecordRaw[],
})

export default router
