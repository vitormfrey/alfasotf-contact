/* eslint-disable prettier/prettier */
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Contacts',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/contact/create',
    name: 'Create Contact',
    component: () => import('../views/FormContact.vue')
  },
  {
    path: '/contact/details',
    name: 'Contact details',
    component: () => import('../views/FormContact.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
