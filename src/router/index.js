import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/components/Auth'
import Board from '@/components/Board'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Board',
      component: Board
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    }
  ]
})
