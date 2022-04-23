import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Signup from '../components/SignUp.vue'
import Dashboard from '../components/Dashboard.vue'
import Controls from '../components/Controls.vue'
import FormController from '../components/FormControllers.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: Signup
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/controls',
    name: 'Controls',
    component: Controls
  },
  {
    path: '/formcontrollers',
    name: 'FormController',
    component: FormController
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
