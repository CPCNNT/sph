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

// 获取购物车列表数据接口
export const reqGetCartList = () => requests({ url: "/cart/cartList", method: "get" })

// 删除购物车某一商品接口
export const reqDeleteCartItem = skuId => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' })

// 切换商品选中状态接口
export const reqToggleChecked = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' })

// 获取验证码
export const reqGetCode = phone => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' })

// 新用户注册接口
export const reqUserRegister = data => requests({ url: '/user/passport/register', data, method: 'post' })

// 登录接口
export const reqUserLogin = data => requests({ url: '/user/passport/login', data, method: 'post' })

// 获取用户信息接口
export const reqUserInfo = () => requests({ url: '/user/passport/auth/getUserInfo', method: 'get' })

// 退出登录接口
export const reqLogout = () => requests({ url: '/user/passport/logout', method: 'get' })

// 获取用户地址信息
export const reqAddressInfo = () => requests({ url: '/user/userAddress/auth/findUserAddressList', method: 'get' })

// 获取商品清单
export const reqOrderInfo = () => requests({ url: '/order/auth/trade', method: 'get' })

// 提交订单接口
export const reqSubmitOrder = (tradeNo, data) => requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: 'post' })

// 获取支付信息接口
export const reqPayInfo = orderId => requests({ url: `/payment/weixin/createNative/${orderId}`, method: 'get' })
