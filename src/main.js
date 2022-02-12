import Vue from 'vue'
import App from './App.vue'

import TypeNav from '@/components/TypeNav'  // 三级联动组件
Vue.component(TypeNav.name, TypeNav)  // 注册为全局组件

import Carousel from '@/components/Carousel'
Vue.component(Carousel.name, Carousel)

import Pagination from "@/components/Pagination"
Vue.component(Pagination.name, Pagination)

import router from '@/router'  // 引入路由

import store from '@/store'  // 引入仓库

import '@/mock/mockServe'

// 统一引入 api 中的所有接口
import * as API from '@/api'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate() {  // 全局事件总线 $bus 配置
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  router,  // 注册路由
  store  // 注册仓库，组件实例会增加 $store 属性
}).$mount('#app')
