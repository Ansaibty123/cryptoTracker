import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import BitcoinPrice from '@/components/BitcoinPrice.vue';
import Performance from '@/components/Performance.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    
      {
        path: '/coin/:coinId',
        name : "coin-price",
        component: BitcoinPrice
      },
      
      {
        path: '/coin/:coinId',
        name : "coin-performance",
        component: Performance
      }
      

    
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
