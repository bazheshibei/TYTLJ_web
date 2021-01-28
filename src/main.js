
import Vue from 'vue'
import App from './App'
import Router from '@/router/index' //           路由
import Store from '@/store' //                   状态管理器
import ElementUI from 'element-ui' //            饿了么
import 'element-ui/lib/theme-chalk/index.css' // 饿了么样式
import promise from 'es6-promise' //             IE11 兼容 promise 问题
promise.polyfill() //                            IE11 兼容 promise 问题

Vue.use(ElementUI)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  store: Store,
  router: Router,
  components: { App },
  template: '<App/>'
})
