/* eslint-disable-next-line padded-blocks */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Users from '../pages/Users.vue'
import AddUsers from '../pages/AddUsers.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/add-users',
    name: 'Add Users',
    component: AddUsers
  }
]

const router = new createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
