import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import recovery from '@/components/recovery'
import donelogin from '@/components/donelogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    }, 
    {
      path: '/recovery',
      name: 'recovery',
      component: recovery
    },
    {
      path: '/donelogin',
      name: 'donelogin',
      component: donelogin
    },
  ]
})



