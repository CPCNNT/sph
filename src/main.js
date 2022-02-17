import Vue from 'vue'
import App from './App.vue'
import { MessageBox } from 'element-ui'
import TypeNav from '@/components/TypeNav'  // 三级联动组件
import Carousel from '@/components/Carousel'  // 轮播图
import Pagination from "@/components/Pagination"  // 分页器
import router from '@/router'  // 引入路由
import store from '@/store'  // 引入仓库
import '@/mock/mockServe'
import * as API from '@/api'  // 统一引入 api 中的所有接口
import VueLazyload from 'vue-lazyload'
import loadingGif from '@/assets/loading.gif'
import '@/plugins/validate'

Vue.use(VueLazyload, {
  // preLoad: 1.3,
  // error: 'dist/error.png',
  loading: loadingGif,
  // attempt: 1
})

Vue.component(TypeNav.name, TypeNav)  // 注册为全局组件
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)

Vue.prototype.$msgbox = MessageBox  // Element UI 注册组件时，还可以挂载在原型上
Vue.prototype.$alert = MessageBox.alert

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this  // 全局事件总线 $bus 配置
    Vue.prototype.$API = API
  },
  router,  // 注册路由
  store  // 注册仓库，组件实例会增加 $store 属性
}).$mount('#app')
