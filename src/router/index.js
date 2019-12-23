import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout/Layout'

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: 'dashboard',
        component: Layout,
        children: [{
            path: 'dashboard',
            component: () => import('@/views/dashboard/index'),
            name: 'dashboard',
            meta: {
                title: '面板',
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
