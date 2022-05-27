<template>
  <div>
    <Header></Header>  <!-- 使用 -->
    <router-view></router-view>  <!-- 路由组件出口/展示 -->
    <Footer v-show="$route.meta.showFooter"></Footer>  <!-- 在 Home、Search 显示，Login、Register 隐藏 -->
  </div>
</template>

<script>  
  import Header from './components/Header/index.vue'  // 引入
  import Footer from './components/Footer/index.vue'

  export default {
    name: '',
    components: {
      Header,  // 注册
      Footer,
    },
    mounted() {
      // 组件挂载完毕，可以向服务器发送请求
      // 通知 Vuex 发送请求，获取数据，存储于仓库中
      // 此处在整个应用的生命周期中只执行一次，减少向服务器发送请求的次数
      this.$store.dispatch("getCategoryList")
    },
  }
</script>
