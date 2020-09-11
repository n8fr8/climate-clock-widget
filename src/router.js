import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./components/Lifelines.vue'),
    },
    {
      path: '/flatten',
      name: 'flatten',
      component: () => import('./components/Flatten.vue'),
    },
    {
      path: '/transition',
      name: 'transition',
      component: () => import('./components/Transition.vue'),
    },
    {
      path: '/rethink',
      name: 'rethink',
      component: () => import('./components/Rethink.vue'),
    },
    {
      path: '/actintime',
      name: 'actintime',
      component: () => import('./components/ActInTime.vue'),
    },
  ]
})
