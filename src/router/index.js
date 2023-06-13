/**
 * 和main.js中引入vue一样，此处其实是引入了node_modules中的vue模块和vue-router模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
//使用相对路径加载对应内容
import HomeView from '../views/HomeView.vue'

//安装vue插件的方法，该方法需要再new vue（）之前被调用
Vue.use(VueRouter)


/**
 * 定义路由
 * 1.每个路由应该映射一个组件，
 */
const routes = [
  {
    path: '/',
    name: 'home',//设置该路由的名称
    component: HomeView//设置对应的路由组件
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //路由懒加载的实现，通过webpack的代码分割功能在路由被访问时才加载对应组件
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

/**
 * 创建 router 实例，然后传 `routes` 配置
 */
const router = new VueRouter({
  mode: 'history',//路由的 history 模式
  base: process.env.BASE_URL,//应用的基路径
  routes//路由
})

export default router
