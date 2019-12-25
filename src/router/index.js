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
      icon: 'el-icon-s-home',
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
      icon: 'el-icon-paperclip',
      noCache: true
    }
  }]
},
{
  path: '/table',
  redirect: 'canvas',
  component: Layout,
  children: [{
    path: 'canvas',
    component: () => import('@/views/table/index'),
    name: 'canvas',
    meta: {
      title: '表格',
      icon: 'el-icon-s-tools',
      noCache: true
    }
  }]
}
]

const router = new VueRouter({
  routes
})

export default router
