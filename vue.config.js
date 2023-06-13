//该文件和package.json同级时，会被@vue/cli-service自动加载
//node.js中require是引入模块
//{ defineConfig } 是对象的解构赋值写法，相当于从右边的对象中取出了defineConfig方法
/**这里require会尝试去以下路径寻找模块
1./home/user/@vue/cli-service、
2./home/node_modules/@vue/cli-service、
3./node_modules/@vue/cli-service
**/
const { defineConfig } = require('@vue/cli-service')

//node.js中module.exports是导出接口
//基于@vue/cli-service提供的defineConfig函数进行实例化
module.exports = defineConfig({
  publicPath: '/',//部署应用包时的基本 URL，默认是/
  outputDir: 'dist',//运行 vue-cli-service build 时生成的生产环境构建文件的目录。默认是dist
  assetsDir: '',//相对于outputDir，静态资源放置的目录，默认是''
  indexPath: 'index.html',//相对于outputDir，生成的index.html存放在哪里
  filenameHashing: true,//静态资源名称带哈希值，默认是true
  lintOnSave:'default',//设置为default，则lint错误在开发时直接显示在浏览器中
  runtimeCompiler:false,//是否使用包含运行时编译器的 Vue 构建版本，默认为false
  transpileDependencies: true,//babel-loader 是否忽略所有 node_modules 中的文件，默认是false
  productionSourceMap: true//是否需要生产环境的 source map，默认是正确
  //其他配置见bue-cli的配置参考 https://cli.vuejs.org/zh/config/?#vue-config-js
})
