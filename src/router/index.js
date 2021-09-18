import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Attendance from '../views/Attendance.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/attendance',
    name: 'Attendance',
    component: Attendance
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
