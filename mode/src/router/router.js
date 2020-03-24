import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/index'

Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    {
      name: 'index',
      path: '/',
      component: index
    }
  ]
})



export default router
