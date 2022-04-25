/* eslint-disable prettier/prettier */
import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/',
    name: 'Contacts',
    component: () => import('../views/Contacts.vue')
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

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
