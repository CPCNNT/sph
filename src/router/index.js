// 配置路由的地方

import Vue from "vue"
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)  // 使用插件

// 先把 vue-router 原型对象的 push 与 replace 保存一份
let originalPush = VueRouter.prototype.push
let originalReplace = VueRouter.prototype.replace

// 重写 push 与 replace
// 第一个参数：跳转目的地
// 第二、三个参数：成功、失败的回调
VueRouter.prototype.push = function (destination, resolve, reject) {
  if (resolve && reject) {
    // call 与 apply 的区别
    // 相同点：都可以调用函数一次，修改函数上下文一次
    // 不同点：call 传参用逗号隔开，apply 用数组形式传参
    originalPush.call(this, destination, resolve, reject)
  } else {
    originalPush.call(this, destination, () => {}, () => {})
  }
}

VueRouter.prototype.replace = function (destination, resolve, reject) {
  if (resolve && reject) {
    originalReplace.call(this, destination, resolve, reject)
  } else {
    originalReplace.call(this, destination, () => {}, () => {})
  }
}

import routes from "./routes"

// 配置路由
let router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }  // y=0，代表滚动条在最上方
  }
})

// 全局前置守卫
router.beforeEach(async (to, from, next) => {
  let token = store.state.user.token
  let name = store.state.user.userInfo.loginName
  if (token) {
    if (to.path === '/login') {
      next('/home')
    } else {
      if (name) {
        next()
      } else {
        try {
          await store.dispatch('getUserInfo')
          next()
        } catch (error) {
          // token 失效了，需重新登陆
          // 清除 token
          await store.dispatch('userLogout')
          next('/login')
        }
      }
    }
  } else {
    next()
  }
})

export default router
