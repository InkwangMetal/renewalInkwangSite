import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/main',
      component: () => import('../App.vue')
    },
    {
      path: '/main',
      name: 'HomePage',
      component: () => import('../views/home/HomePage.vue')
    },
    {
      path: '/company/greeting',
      name: 'GreetingPage',
      component: () => import('../views/company/GreetingPage.vue')
    },
    {
      path: '/company/location',
      name: 'LocationPage',
      component: () => import('../views/company/LocationPage.vue')
    },
    {
      path: '/products/phosphate',
      name: 'PhosphatePage',
      component: () => import('../views/products/PhosphatePage.vue')
    },
     {
      path: '/products/alkali',
      name: 'AlkaliPage',
      component: () => import('../views/products/AlkaliPage.vue')
    },
  ]
})

export default router