import Vue from 'vue'
import Router from 'vue-router'
import Match from '@/components/Match'
import Training from '@/components/Training'
import Referentials from '@/components/Referentials'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Match',
      component: Match
    },
    {
      path: '/match',
      name: 'Match',
      component: Match
    },
    {
      path: '/training',
      name: 'Training',
      component: Training
    },
    {
      path: '/referentials',
      name: 'Referentials',
      component: Referentials
    }
  ]
})
