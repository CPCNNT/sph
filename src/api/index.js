// 统一管理 API

import requests from './request'
import mockRequests from './mockRequest'

// 三级联动接口
// GET 无参数 /api/product/getBaseCategoryList
export const reqGetCategoryList = () => {
  // 发请求。axios 发请求返回的对象是 Promise
  return requests({ url: '/product/getBaseCategoryList', method: 'get' })
}

// 获取 banner （Home 首页轮播图接口）
export const reqGetBannerList = () => mockRequests.get('/banner')

// 获取 floor 数据
export const reqGetFloorList = () => mockRequests.get('/floor')

// 获取搜索模块数据，地址：/api/list，请求方式：post，需要带参数（至少是一个空对象）
export const reqGetSearchInfo = params => requests({ url: '/list', method: 'post', data: params })

// 获取产品信息详情的借口 URL: /api/item/{ skuId } 请求方式：get
export const reqGetGoodsDetail = skuId => requests({ url: `/item/${skuId}`, method: 'get' })

// 将产品添加到购物车中，或者更新产品的个数
export const reqAddOrUpdateCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })
