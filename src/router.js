import Vue from 'vue'
import Router from 'vue-router'
/*import home from './views/home/home.vue'
import NewWorld from './views/new-world/new-world'
import NewWorldDetail from './views/new-world/detail'*/
// import download from './views/download/download.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/aiNews'
      //redirect: '/home'
    },
    // AI技术news
    {
      path: '/aiNews',
      name: 'aiNews',
      component: () => import('@/views/download/aiNews.vue')
    },
    /*{
      path: '/ai01',
      name: 'ai01',
      component: () => import('@/views/download/no01.vue')
    },
    {
      path: '/ai02',
      name: 'ai02',
      component: () => import('@/views/download/no02.vue')
    },*/
    /*{
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/NewWorld',
      name: 'NewWorld',
      component: NewWorld
    },
    {
      path: '/NewWorld/detail/:id',
      name: 'NewWorldDetail',
      component: NewWorldDetail
    },
    // 经济系统（3-1）——（3-5）
    {
      path: '/economicSystem',
      name: 'economicSystem',
      component: () => import('./views/economicSystem/economicSystem'),
    },
    // 交易中心4-1——4-3
    {
      path: '/tradingCenter',
      name: 'tradingCenter',
      component: () => import('./views/tradingCenter/tradingCenter.vue')
    },
    // 关于我们
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: () => import('./views/aboutUs/aboutUs.vue')
    }*/
  ]
})
