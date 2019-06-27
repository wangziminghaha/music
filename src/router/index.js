import Vue from 'vue'
import Router from 'vue-router'
import Tingge from '@/router/tinggeshiqu.vue'
import Sousuo from '@/router/sousuo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tingge',
      component: Tingge
    },
    {
      path: '/',
      name: 'Sousuo',
      component: Sousuo
    },
  ]
})
