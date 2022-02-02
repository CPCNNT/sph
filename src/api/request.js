// 对于 axios 进行二次封装

import axios from "axios"
import nprogress from 'nprogress'  // 引入进度条
// start：进度条开始，done：进度条结束
import "nprogress/nprogress.css"  // 引入进度条样式

// 1. 利用 axios 对象的方法 create，去创建一个 axios 实例
// 2. request 就是 axios，只不过稍微配置一下
const requests = axios.create({
  // 配置对象
  baseURL: "/api",  // 基础路径，发请求时，路径当中会出现 api
  timeout: 5000
})

// 请求拦截器：再发请求之前，请求拦截器可以监测到，可以在请求发出之前执行一些任务
requests.interceptors.request.use(config => {
  // config：配置对象，对象里的 headers 属性很重要
  nprogress.start()  // 进度条开始
  return config
})

// 响应拦截器
requests.interceptors.response.use(res => {
  // 成功的回调函数：服务器响应数据回传后，拦截器可以监测到并执行一些任务
  nprogress.done()  // 进度条结束
  return res.data
}, error => {
  // 服务器响应失败的回调函数
  return Promise.reject(new Error('Failed'))
})

export default requests  // 对外暴露
