<template>
  <div>
    <TypeNav/>  <!-- 三级联动全局组件（全局组件在此处无需引入） -->
    <ListContainer/>  <!--轮播图列表-->
    <TodayRecommend/>  <!--今日推荐-->
    <Rank/>  <!-- 商品排行 -->
    <Like/>  <!-- 猜你喜欢 -->
    <Floor v-for="floor in floorList" :key="floor.id" :list="floor"/>  <!-- 楼层 -->
    <Brand/>  <!-- 商标 -->
  </div>
</template>

<script>
  // 引入其余的组件
  import ListContainer from '@/pages/Home/ListContainer'
  import TodayRecommend from '@/pages/Home/TodayRecommend'
  import Rank from '@/pages/Home/Rank'
  import Like from '@/pages/Home/Like'
  import Floor from '@/pages/Home/Floor'
  import Brand from '@/pages/Home/Brand'

  import { mapState } from 'vuex'

  export default {
    name: "Home",
    components: {
      ListContainer,
      TodayRecommend,
      Rank,
      Like,
      Floor,
      Brand
    },
    mounted() {
      this.$store.dispatch('getFloorList')
    },
    computed: {
      ...mapState({ floorList: state => state.home.floorList })
    }
  }
</script>

<style lang="less" scoped></style>
