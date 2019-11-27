//     axios配置
import axios from 'axios'
// axios 配置
// axios.defaults.timeout = 5000 // 响应时间
let lang = ''
if (localStorage.getItem('discoveryLang') === 'EN') {
  lang = 'en'
  axios.defaults.headers = {'discoveryLang': lang}
}
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'newsmanager.ai-news.biz/' // 配置接口地址
//  POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  //   在发送请求之前做某件事
  return config
}, (error) => {
  return Promise.reject(error)
})
//  返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
  // 对响应数据做些事
  return res
}, (error) => {
  return Promise.reject(error)
})

export default{
  axiosPost (url, data) {
    return new Promise((resolve, reject) => {
      axios.post(url, data)
        .then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
    })
  },
  axiosGet (url, data) {
    return new Promise((resolve, reject) => {
      axios.get(url, data)
        .then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
    })
  }
}
