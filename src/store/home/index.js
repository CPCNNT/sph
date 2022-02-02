// home 模块小仓库

import { reqGetCategoryList, reqGetBannerList, reqGetFloorList } from "@/api"

const state = {
  categoryList: [],
  bannerList: [],
  floorList: []
}

const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  },
  BANNERLIST(state, bannerList) {
    state.bannerList = bannerList
  },
  FLOORLIST(state, floorList) {
    state.floorList = floorList
  }
}

const actions = {
  // 通过 api 里的接口函数调用，向服务器发请求，获取服务器的数据
  async getCategoryList({ commit }) {
    let result = await reqGetCategoryList()
    if (result.code === 200) {
      commit('CATEGORYLIST', result.data)
    }
  },
  // 获取首页轮播图数据
  async getBannerList({ commit }) {
    let result = await reqGetBannerList()
    if (result.code === 200) {
      commit('BANNERLIST', result.data)
    }
  },
  // 获取 floor 数据
  async getFloorList({ commit }) {
    let result = await reqGetFloorList()
    if (result.code === 200) {
      commit('FLOORLIST', result.data)
    }
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
