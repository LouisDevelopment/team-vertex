import { createRouter, createWebHistory } from 'vue-router'
import Content from '@/components/Content.vue';
import Game from '@/components/Game.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Content
    },
    {
      path: '/games',
      name: 'games',
      component: Game
    },
  ]
})

export default router
