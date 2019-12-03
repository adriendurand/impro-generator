import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Match from '@/components/Match'
import Training from '@/components/Training'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
    }
  ]
})
