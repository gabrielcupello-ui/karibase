import { createRouter, createWebHistory } from 'vue-router'
import { navSections, standalonePages } from '@/config/navigation'

// Lazy-load every view: each docs page becomes its own chunk
const views = import.meta.glob('../views/*.vue')

const toRoute = ({ name, path, view }) => ({
  path,
  name: view,
  component: views[`../views/${view}.vue`]
})

const routes = [
  ...standalonePages.map(toRoute),
  ...navSections.flatMap(section => section.items).map(toRoute)
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return savedPosition || { top: 0 }
  }
})

export default router
