import Vue from 'vue'
import Router from 'vue-router'
import Game from '@/components/pages/Game'
import Training from '@/components/pages/Training'
import Referentials from '@/components/pages/Referentials'
import About from '@/components/pages/about'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(VueMaterial)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Game',
      component: Game
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
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
