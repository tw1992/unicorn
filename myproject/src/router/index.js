import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import news from '@/components/news'
import contact from '@/components/contact'
import reply from '@/components/reply'
import announceDetail from '@/components/announceDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index/:lang?',
      name: 'index',
      component: index
    },{
      path: '/news/:lang?',
      name: 'news',
      component: news
    },{
      path: '/contact/:lang?',
      name: 'contact',
      component: contact
    },{
      path: '/reply/:lang?',
      name: 'reply',
      component: reply
    },{
      path: '/announceDetail/:id/:type/:lang?',
      name: 'announceDetail',
      component: announceDetail
    },
    {
      path:'*',
      redirect:'/index/ch'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    console.log(savedPosition);
    return { x: 0, y: 0 }
  }
})
