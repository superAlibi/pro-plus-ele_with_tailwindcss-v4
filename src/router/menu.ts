import type { PlusRouteRecordRaw } from 'plus-pro-components'
import { HomeFilled } from '@element-plus/icons-vue'
import DefaultLayout from '../layouts/default.vue'
import type { AsyncComponentLoader } from 'vue'

const pageModules = import.meta.glob<AsyncComponentLoader>('../views/**/*.vue')
const formatedKeyPageModules = Object.fromEntries(
  Object.entries(pageModules).map(([key, value]) => {
    return [key.replace('../views/', ''), value]
  })
)
export const menus: PlusRouteRecordRaw[] = [
  {
    name: 'Home',
    path: '/',
    component: formatedKeyPageModules['HomeView.vue'],
    meta: {
      title: 'Home',
      icon: HomeFilled,
    },
  },
  {
    name: 'About',
    path: '/about',
    component: formatedKeyPageModules['AboutView.vue'],
    meta: {
      title: 'About',
      icon: HomeFilled,
    },
  },

]
export const routes: PlusRouteRecordRaw[] = [
  {
    name: 'layout',
    path: '/',
    component: DefaultLayout,
    children: menus
  }
]