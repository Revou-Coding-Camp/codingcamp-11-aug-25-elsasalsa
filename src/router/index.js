import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/HomeSection.vue'
import Profile from '../pages/ProfileSection.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/profile', name: 'Profile', component: Profile }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
