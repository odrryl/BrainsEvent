import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Home.vue'
import Who from '../components/Who.vue'
import What from '../components/What.vue'
import Where from '../components/Where.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/where', component: Where },
  { path: '/what', component: What },
  { path: '/who', component: Who },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
