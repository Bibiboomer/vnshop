import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/components/Home/Nav'
import Login from '@/components/Login'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Nav,
      children: [
        {
          path: '/login',
          name: 'Login',
          component: Login
        }
      ]
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
