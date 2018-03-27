import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import DashboardPage from '@/components/pages/DashboardPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardPage
    },
  ]
})
