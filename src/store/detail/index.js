import { reqGetGoodsDetail, reqAddOrUpdateCart } from "@/api"
import { getUUID } from '@/utils/uuid_token'

const state = {
  goodsDetail: {},
  uuid_token: getUUID()
}

const mutations = {
  GETGOODSDETAIL(state, goodsDetail) {
    state.goodsDetail = goodsDetail
  }
}

const actions = {
  async getGoodsDetail({ commit }, skuId) {
    let result = await reqGetGoodsDetail(skuId)
    if (result.code === 200) {
      commit('GETGOODSDETAIL', result.data)
    }
  },
  async addOrUpdateCart({commit}, {skuId, skuNum}) {
    let result = await reqAddOrUpdateCart(skuId, skuNum)
    if (result.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('Adding to or updating cart failed!'))
    }
  }
}

const getters = {
  categoryView(state) {
    return state.goodsDetail.categoryView || {}
  },
  skuInfo(state) {
    return state.goodsDetail.skuInfo || {}
  },
  spuSaleAttrList(state) {
    return state.goodsDetail.spuSaleAttrList || []
  },
  price(state) {
    return state.goodsDetail.price || 0
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
