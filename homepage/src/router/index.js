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
      path: '/products/phosphate',
      name: 'Phosphate',
      component: () => import('../views/products/Phosphate.vue')
    },
  ]
})

export default router