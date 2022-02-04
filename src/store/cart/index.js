import { reqGetCartList, reqDeleteCartItem, reqToggleChecked } from "@/api"

const state = {
  cartList: []
}

const mutations = {
  GETCARTLIST(state, cartList) {
    state.cartList = cartList
  }
}

const actions = {
  async getCartList({commit}) {
    let result = await reqGetCartList()
    if (result.code === 200) {
      commit('GETCARTLIST', result.data)
    }
  },
  async deleteCartItem({commit}, skuId) {
    let result = await reqDeleteCartItem(skuId)
    if (result.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('Deletion failed!'))
    }
  },
  async toggleChecked({commit}, {skuId, isChecked}) {
    let result = await reqToggleChecked(skuId, isChecked)
    if (result.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('Toggling isChecked failed!'))
    }
  },
  deleteAllChecked({dispatch, state}) {
    let promiseAll = []
    state.cartList[0].cartInfoList.forEach(item => {
      if (item.isChecked === 1) {
        let result = dispatch('deleteCartItem', item.skuId)
        promiseAll.push(result)
      }
    })
    return Promise.all(promiseAll)
  },
  updateAllChecked({dispatch, state}, checked) {
    let promiseAll = []
    if (checked) {
      state.cartList[0].cartInfoList.forEach(item => {
        if (item.isChecked === 0) {
          let result = dispatch('toggleChecked', { skuId: item.skuId, isChecked: "1" })
          promiseAll.push(result)
        }
      })
    } else {
      state.cartList[0].cartInfoList.forEach(item => {
        let result = dispatch('toggleChecked', { skuId: item.skuId, isChecked: "0" })
        promiseAll.push(result)
      })
    }
    return Promise.all(promiseAll)
  }
}

const getters = {
  cartList(state) {
    return state.cartList[0] || {}
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
