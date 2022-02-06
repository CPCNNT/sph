// 引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'

export default [
  {
    path: "/detail/:skuid",
    component: Detail,
    meta: { showFooter: true }
  },
  {
    path: "/home",
    component: Home,
    meta: { showFooter: true }
  },
  {
    path: "/search/:keyword?",
    component: Search,
    meta: { showFooter: true },
    name: "search",
    // 路由组件能不能传递 props 数据？
    // 布尔值写法：params
    // props: true,
    // 对象写法
    // props: {a: 1, b: 2}
    // 函数写法：可以将 params 参数、query 参数通过 props 传递给路由组件
    // props: ($route) => {
    //   return { keyword: $route.params.keyword, k: $route.query.k }
    // }
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/register",
    component: Register
  },
  {
    // 重定向，访问根（/）就重定向到首页
    path: "/",
    redirect: "/home"
  },
  {
    path: "/addcartsuccess",
    name: 'addcartsuccess',
    component: AddCartSuccess,
    meta: { showFooter: true }
  },
  {
    path: "/shopcart",
    component: ShopCart,
    meta: { showFooter: true }
  },
  {
    path: "/trade",
    component: Trade,
    meta: { showFooter: true }
  }
]
