import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import baicai from '@/components/baicai/baicai'
import mitao from '@/components/mitao/mitao'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/baicai',
      name: 'baicai',
      component: baicai
    },
    {
      path: '/mitao',
      name: 'mitao',
      component: mitao
    }
  ]
})
