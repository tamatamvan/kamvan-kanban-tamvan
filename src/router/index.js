import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/components/Auth'
import Board from '@/components/Board'
import TeamList from '@/components/TeamList'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    },
    {
      path: '/team-list',
      name: 'TeamList',
      component: TeamList
    }
  ]
})
