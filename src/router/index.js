import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import MyProjects from '../pages/MyProjects.vue'
import AboutMe from '../pages/AboutMe.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: MyProjects },
  { path: '/about', component: AboutMe },
]

const router = createRouter({
  history: createWebHashHistory(), // pakai # (cocok untuk static hosting)
  routes,
})

export default router
