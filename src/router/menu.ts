import type { PlusRouteRecordRaw } from 'plus-pro-components'
import { HomeFilled } from '@element-plus/icons-vue'
import DefaultLayout from '../layouts/default.vue'
import type { AsyncComponentLoader } from 'vue'

const pageModules = import.meta.glob<AsyncComponentLoader>('../views/**/*.vue')
const formattedKeyPageModules = Object.fromEntries(
  Object.entries(pageModules).map(([key, value]) => {
    return [key.replace('../views/', ''), value]
  })
)
export const menus: PlusRouteRecordRaw[] = [
  {
    name: 'Home',
    path: '/',
    component: formattedKeyPageModules['HomeView.vue'],
    meta: {
      title: 'Home',
      icon: HomeFilled,
    },
  },
  {
    name: 'About',
    path: '/about',
    component: formattedKeyPageModules['AboutView.vue'],
    meta: {
      title: 'About',
      icon: HomeFilled,
    },
  },
  {
    name: 'UsePage',
    path: '/use-page',
    component: formattedKeyPageModules['UsePage.vue'],
    meta: {
      title: 'UsePage',
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