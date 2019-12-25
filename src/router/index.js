import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout/Layout'

Vue.use(VueRouter)

const routes = [{
  path: '',
  redirect: 'dashboard',
  component: Layout,
  children: [{
    path: 'dashboard',
    component: () => import('@/views/dashboard/index'),
    name: 'dashboard',
    meta: {
      title: '首页',
      icon: 'dashboard',
      noCache: true
    }
  }]
},
{
  path: '/canvas',
  redirect: 'canvas',
  component: Layout,
  children: [{
    path: 'canvas',
    component: () => import('@/views/canvas/index'),
    name: 'canvas',
    meta: {
      title: 'canvas',
      icon: 'dashboard',
      noCache: true
    }
  }]
}
]

const router = new VueRouter({
  routes
})

export default router
