/**
 * 和main.js中引入vue一样，此处其实是引入了node_modules中的vue模块和vuex模块
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 *创建一个 store
 */
export default new Vuex.Store({
  state: {//组件间共享的数据
  },
  getters: {//getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算
  },
  mutations: {//更改 Vuex 的 store 中的状态的唯一方法是提交 mutation，mutation 必须是同步函数
  },
  actions: {//Action 提交的是 mutation，而不是直接变更状态。Action 可以包含任意异步操作。
  },
  modules: {
  }/**
   * Vuex 允许我们将 store 分割成模块（module）。
   * 每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割
   */
})
