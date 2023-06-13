//es6 import语法， from指定模块文件的位置，如果只是一个模块名，那么必须有配置文件说明这个怎么取到这个模块
//nodejs在v13.2开始支持es6语法
//nodejs首先看vue是否为nodejs原生模块
//不是原生模块，则去文件系统中查找，由于vue不是/、./、../开头，所以继续查找
//读取项目目录里node_modules文件夹里的内容，在该文件夹下会发现vue文件夹
/**
 * 接着是引入npm包的规则
 * 1.先看package.json是否定义了main字段，有的话读取main字段下定义的入口。
 * 实际结果就是读取了该字段对应的文件，"main": "dist/vue.runtime.common.js",、
 * 具体见https://blog.csdn.net/u010928799/article/details/106936150/
**/
import Vue from 'vue'

//使用相对路径加载对应内容
//通过vue-loader，webpack可以将.vue文件转换为有效模块
import App from './App.vue'

/**
 * nodejs导入router时，按照既定规则
 * 1.由于./router以./开头，然后还是一个目镜，那么就按照目录的方式加载
 * 2.由于./router/package.json不存在，则查找./router/index.js，发现该文件存在，则导入到系统中
 * 具体见https://www.runoob.com/nodejs/nodejs-module-system.html
**/
import router from './router'
import store from './store'

//不启动生产消息，
Vue.config.productionTip = false

//实例化vue
new Vue({
  router,//通过 router 配置参数注入路由，从而让整个应用都有路由功能
  store, // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  render: h => h(App)
  /**
   * render选项对应字符串模板的代替方案，如果该函数存在，则忽视template或者el选项,
   * 写法演进见https://zhuanlan.zhihu.com/p/78651155
  **/
}).$mount('#app')
/**
 * 如果 Vue 实例在实例化时没有收到 el 选项，则它处于“未挂载”状态，没有关联的 DOM 元素。
 * 可以使用 vm.$mount() 手动地挂载一个未挂载的实例。
**/
