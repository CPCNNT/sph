// 引入一级路由组件
const Home = () => import('@/pages/Home') 
const Search = () => import('@/pages/Search')
const Login = () => import('@/pages/Login')
const Register = () => import('@/pages/Register')
const Detail = () => import('@/pages/Detail')
const AddCartSuccess = () => import('@/pages/AddCartSuccess')
const ShopCart = () => import('@/pages/ShopCart')
const Trade = () => import('@/pages/Trade')
const Pay = () => import('@/pages/Pay')
const PaySuccess = () => import('@/pages/PaySuccess')
const Center = () => import('@/pages/Center')
// 引入二级路由组件
const MyOrder = () => import('@/pages/Center/myOrder')
const GroupOrder = () => import('@/pages/Center/groupOrder')

/* 当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。
如果我们能把不同路由对应的组件分割成不同的代码块，
然后当路由被访问的时候才加载对应组件，这样就更加高效了。 */

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
    meta: { showFooter: true },
    beforeEnter: (to, from, next) => {  // 独享路由守卫
      if (from.path === '/shopcart') {
        next();
      } else {
        next(false);
      }
    }
  },
  {
    path: "/pay",
    component: Pay,
    meta: { showFooter: true },
    beforeEnter: (to, from, next) => {  // 独享路由守卫
      if (from.path === '/trade') {
        next();
      } else {
        next(false);
      }
    }
  },
  {
    path: "/paysuccess",
    component: PaySuccess,
    meta: { showFooter: true }
  },
  {
    path: "/center",
    component: Center,
    meta: { showFooter: true },
    // 二级路由组件
    children: [
      {
        path: 'myorder',
        component: MyOrder
      },
      {
        path: 'grouporder',
        component: GroupOrder
      },
      {
        path: '/center',
        redirect: '/center/myorder'
      }
    ]
  }
]
