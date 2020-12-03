import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home_m',
    name: 'Home_m',
    component: () => import('../views/Home_m.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/about_m',
    name: 'About_m',
    component: () => import('../views/About_m.vue')
  },
  {
    path: '/estate',
    name: 'Estate',
    // route level code-splitting
    // this generates a separate chunk (estate.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "estate" */ '../views/Estate.vue')
  },
  {
    path: '/estate_m',
    name: 'Estate_m',
    component: () => import('../views/Estate_m.vue')
  },
  {
    path: '/partner',
    name: 'Partner',
    // route level code-splitting
    // this generates a separate chunk (partner.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "partner" */ '../views/Partner.vue')
  },
  {
    path: '/partner_m',
    name: 'Partner_m',
    component: () => import('../views/Partner_m.vue')
  },
  {
    path: '/news',
    name: 'News',
    // route level code-splitting
    // this generates a separate chunk (news.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "news" */ '../views/News.vue')
  },
  {
    path: '/news_m',
    name: 'News_m',
    component: () => import('../views/News_m.vue')
  },
  {
    path: '/join',
    name: 'Join',
    // route level code-splitting
    // this generates a separate chunk (join.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "join" */ '../views/Join.vue')
  },
  {
    path: '/join_m',
    name: 'Join_m',
    component: () => import('../views/Join_m.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (contact.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/contact_m',
    name: 'Contact_m',
    component: () => import('../views/Contact_m.vue')
  },
]

const router = new VueRouter({
  routes,
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }), //路由跳转后页面回到顶部
})

export default router
