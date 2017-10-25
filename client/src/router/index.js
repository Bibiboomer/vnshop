import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Goodslist from '@/components/Goodslist'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      // component: HelloWorld      
      component: Goodslist,
    }
  ]
})
