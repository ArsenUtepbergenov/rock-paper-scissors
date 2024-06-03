import { createRouter, createWebHistory } from 'vue-router'
import Step1 from '../views/Step1.vue'
import Step2 from '../views/Step2.vue'

const routes = [
  {
    path: '/',
    alias: ['/step1'],
    name: 'Step1',
    component: Step1,
    meta: {},
  },
  {
    component: Step2,
    path: '/step2',
    name: 'Step2',
    beforeEnter: (to, from) => {
      if (from.name !== 'Step1') {
        router.push({ name: 'Step1' })
      }
    },
    meta: {},
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
