import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

export default new Router({
  routes:[
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
      component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
    },
    {
      path: '/contact_m',
      name: 'Contact_m',
      component: () => import('../views/Contact_m.vue')
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})

