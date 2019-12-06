import Vue from 'vue'
import Router from 'vue-router'
import Match from '@/components/pages/Match'
import Training from '@/components/pages/Training'
import Referentials from '@/components/pages/Referentials'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(VueMaterial)

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
