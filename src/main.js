/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import 'babel-polyfill' // 兼容旧浏览器
import router from './router'
import { i18n } from './i18n/config'
import fetch from './api/api.js'
import axios from 'axios'
import 'animate.css' // 动画
import 'swiper/dist/css/swiper.min.css'
import vueLoading from 'vue-loading-template'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
if (process.BROWSER_BUILD) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/ssr')
  Vue.use(VueAwesomeSwiper)
}

Vue.use(vueLoading)
import VueRouter from 'vue-router';
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
//axios.defaults.withCredentials = true // 存cookie
axios.defaults.baseURL = 'http://newsmanager.ai-news.biz/'
Vue.prototype.$https = axios
Vue.prototype.$fetch = fetch
//Vue.prototype.$api = process.env.VUE_APP_BASE_PATH // 接口地址

// 引入nprogress
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // 这个样式必须引入

// 时间戳转换
Vue.prototype.$changeDate = function (time, str = '/', type = 1) {
    function ifTime(value) { // 判断时间是否是个位数
        if (value < 10) {
            return '0' + value
        }
        return value
    }

    if (time) {
        let newTime = new Date(time)
        let day = newTime.getDate()
        let month = newTime.getMonth() + 1
        let year = newTime.getFullYear()
        let hours = newTime.getHours()
        let min = newTime.getMinutes()
        let sec = newTime.getSeconds()
        switch (type) {
            case 1:
                return year + str + ifTime(month) + str + ifTime(day) + ' ' + ifTime(hours) + ':' + ifTime(min)
            case 2:
                return year + str + ifTime(month) + str + ifTime(day) + ' 00:00:00'
            case 3:
                return year + str + ifTime(month) + str + ifTime(day) + ' 23:59:59'
            case 4:
                return year + str + ifTime(month) + str + ifTime(day)
            case 5:
                return year + str + ifTime(month) + str + ifTime(day)
            case 6:
                return ifTime(hours) + ':' + ifTime(min)
            case 7:
                return ifTime(hours) + ':' + ifTime(min) + ':' + ifTime(sec)
        }
    }
}

Vue.filter('f4', function (value) { // 保留4位小数点,不四舍五入
    if (!isNaN(value) && value !== null) {
        let f = Math.floor(value * 10000) / 10000
        let s = f.toString()
        let rs = s.indexOf('.')
        if (rs < 0) {
            rs = s.length
            s += '.'
        }
        while (s.length <= rs + 4) {
            s += '0'
        }
        return s
    } else {
        return '0.0000'
    }
})

new Vue({
    i18n,
    router,
    render: h => h(App)
}).$mount('#app')

/*router.afterEach(() => {
    document.body.scrollTop = 0
})*/
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

// 进度条
NProgress.configure({
  showSpinner: false,
  minimum: 0.6,
  easing: 'ease',
  speed: 200
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
  NProgress.done()
})
