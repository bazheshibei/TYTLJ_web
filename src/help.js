
/* -------------------- 入口 -------------------- */
/* -------------------- 入口 -------------------- */
/* -------------------- 入口 -------------------- */

/**
 * [入口【标准】]
 * 位置 => @/main.js
 */
// import Vue from 'vue' //         【必填】
// import App from './App' //       【必填】
// import router from './router' // 【必填】
// import Vuex from 'vuex'
// import axios from 'axios'
// // 公共css
// import './assets/css/common.css'
// import './assets/css/public.css'
//
// /* 启用router */
// Vue.use(router) //               【必填】
// /* 启用Vuex */
// Vue.use(Vuex)
// /* 启用网络请求插件 */
// Vue.prototype.$axios = axios
//
// /* eslint-disable no-new */
// new Vue({ //                      【必填】 页面入口
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

/**
 * [入口【自定义】]
 * 位置    => @/main.js
 * @/     => /src/
 * Router => 加载配置好的 路由文件
 * Store  => 加载配置好的 Vuex
 * axios  => 融合到@/config/api.js中，在Store中引入api.js并发起网络请求
 */
// import Vue from 'vue'
// import App from './App'
// import Router from '@/router/index' //           路由
// import Store from '@/store' //                   状态管理器
// import ElementUI from 'element-ui' //            饿了么
// import 'element-ui/lib/theme-chalk/index.css' // 饿了么样式
// import promise from 'es6-promise' //             IE11 兼容 promise 问题
// promise.polyfill() //                            IE11 兼容 promise 问题
//
// Vue.use(ElementUI)
//
// // eslint-disable-next-line no-new
// new Vue({
//   el: '#app',
//   store: Store,
//   router: Router,
//   components: { App },
//   template: '<App/>'
// })

/* -------------------- 路由 -------------------- */
/* -------------------- 路由 -------------------- */
/* -------------------- 路由 -------------------- */

/**
 * [路由]
 * 位置                            => @/router/index.js
 * 跳转写法                         => this.$router.push({ name: '概况' })
 * 跳转写法                         => this.$router.push({ path: 'gk' })
 * 跳转写法                         => this.$router.push('index')
 * 替换掉当前的 history 记录         => this.$router.replace({ name: '概况' })
 * 在 history 记录中向前或者后退多少步 => this.$router.go(-1)
 * 文档地址                         => https://router.vuejs.org/zh/installation.html
 */
// import Vue from 'vue'
// import Router from 'vue-router'
// /* 加载组件 */
// import Index from '@/pages/index' //               页面框架：有顶部跟左侧导航栏，留出中间区域加载子路由
// import Gaikuang from '@/views/1_gaikuang/index' // 子路由1：概况
// import BanKuai from '@/views/2_bankuai/index' //   子路由2：板块管理
// import Other from '@/views/other/index'
// /* 启用router */
// Vue.use(Router)
// /* 配置路由 */
// const router = new Router({ routes: [
//   {
//     path: '/index', // 页面框架路由：                                     http://localhost:8081/#/index
//     component: Index,
//     name: '首页',
//     children: [
//       { path: '/gk', component: Gaikuang, name: '概况' }, // 子路由1：   http://localhost:8081/#/gk
//       { path: '/bkgl', component: BanKuai, name: '板块管理' } // 子路由2：http://localhost:8081/#/bkgl
//       // 如果 path 写成 'bkgl'，对应的路由变成：                            http://localhost:8081/#/index/bkgl
//     ]
//   },
//   { path: '/other', component: Other, name: '其他一级页面' },
//   {
//     path: '/',
//     component: Index,
//     name: ''
//   },
//   { path: '*', redirect: { path: '/404' } }
// ] })
// export default router

/* -------------------- axios -------------------- */
/* -------------------- axios -------------------- */
/* -------------------- axios -------------------- */

/**
 * [发起网络请求【自定义】]
 * 位置                 => @/config/axios.js
 * import Qs from 'qs' => 用 POST 请求 Java 接口时必须，可根据实际情况进行相关的删减
 * 文档地址             => https://www.kancloud.cn/yunye/axios/234845/
 * 基本完善，可直接用
 */

/* -------------------- 接口 -------------------- */
/* -------------------- 接口 -------------------- */
/* -------------------- 接口 -------------------- */

/**
 * [接口【自定义】]
 * 位置     => @/config/api.js
 * host    => 服务器地址
 * url     => { '接口名字，Api() 方法中 name 属性对应的值': '接口地址' }
 * request => ① 根据 name 寻找接口完整地址。② 将参数传递给 axios 发起请求
 */
// 用法：
// (在 xxx.vue 中)
//
// /* 加载接口配置文件 */
// import Api from '@/config/api'
// /* 在方法中调用 */
// Api({
//   name: '接口1', //           【必填】接口名字：            对应 @/config/api.js 中 url 的索引
//   path2: '', //              【可选】其他参数：            在接口地址后面拼接的固定参数
//   obj: {}, //                【可选】请求参数：            根据 post 或 get 会做相应处理
//   suc: function (res) {}, // 【可选】请求成功后的回调
//   err: function (res) {}, // 【可选】请求失败后的回调
//   method: '', //             【可选】请求方式：            默认post
//   loading: '' //             【可选】全屏加载动画显示的文字：有的话调用 element-ui 的加载效果，空值的话不调用
// })

/* -------------------- Vuex -------------------- */
/* -------------------- Vuex -------------------- */
/* -------------------- Vuex -------------------- */

/**
 * [状态管理器]
 * 位置      => @/store/index.js
 * 解决的问题 => 嵌套多级组件时，父组件们写太多的事件监听不好维护，可将数据存在 Vuex，在任意组件通过 computed 均可获取实时数据
 * 存在的问题 => 浏览器刷新后数据会重置
 * 应用场景   => 中大型、有多级嵌套组件的项目
 * 文档地址   => https://vuex.vuejs.org/zh/
 */

/* -------------------- App.vue -------------------- */
/* -------------------- App.vue -------------------- */
/* -------------------- App.vue -------------------- */

/**
 * [App.vue]
 * 位置                           => @/App.vue
 * template                      => 任何 vue 文件 template 中的内容，只能被一个标签包裹（div、或组件的标签） 【template 下有多个直接子标签时会报错】
 * id                            => 对应 main.js 中的 ID
 * keep-alive                    => 当前页面滚动到某个位置，路由跳转，再返回此页面，还保留在之前滚动到的位置
 * router-view                   => 加载一级路由【一级路由对应的组件中写此标签，加载该路由的子路由】
 * script：export default {}     => 组件相关的配置（数据、生命周期、计算属性、监听等），可为空，按需要写就行
 * script：export default {} 之外 => 可独立定义辅助变量或执行某些方法
 * style                         => 开始标签建议写成 <style scoped>                                    【此为当前组件的局部样式，有需要的话也可再写一套公共样式 <style></style>】
 * 建议修改 element-ui 样式的方法   => html：<el-input class="xxxPageInput"></input>                   【添加一个特殊的 class，在全局样式中修改】
 * 建议修改 element-ui 样式的方法   => <style> .xxxPageInput { width: 120px !important; } </style>     【某些时候，不加 important 的话，本地样式变了，打包后样式不会生效】
 */

/* -------------------- 组件嵌套 -------------------- */
/* -------------------- 组件嵌套 -------------------- */
/* -------------------- 组件嵌套 -------------------- */

/**
 * [父组件：aaa.vue]
 */
// <template>
//   <com-aaa :fatherData="aaaData" @childEvent="aaaEvent">
//     <template slot="title">只有一个插槽的话，直接在 com-aaa 标签中间写就行，不用 template </template>
//     <template slot="other">多个插槽的话，slot="other" 对应子组件中插槽的 name </template>
//     <template slot="asd">一般不用插槽</template>
//   </com-aaa>
// </template>
// <script>
// import ComAaa from '@/component/bbb.vue' // 引入组件【子组件名小驼峰写法随便定，在template中拆成 - 连接】【子组件的路径也可用相对路径 './bbb.vue'】
// exoprt default {
//   components: { ComAaa }, // 应用子组件 ComAaa
//   data() {
//     return {
//       aaaData: 'xxx' // 传入子组件的变量
//     }
//   },
//   methods: {
//     aaaEvent(res) {} // 监听子组件事件的方法
//   }
// }
// // 注释【:fatherData="aaaData"】   => 传入子组件的变量名 fatherData【名字随便定】，传入子组件的值 aaaData【父组件 data() { return {} } 中的变量】
// // 注释【 @childEvent="aaaEvent"】 => 监听子组件的 childEvent 事件【名字在子组件随便定】，父组件用 aaaEvent 事件来监听
// </script>

/**
 * [子组件：bbb.vue]
 */
// <template>
//   <div>
//     <div class="slotTitle" @click="asd">
//       <span>绑定点击事件 'asd'</span>
//       <slot name="title"></slot>
//     </div>
//     <div class="slotOther">
//       <slot name="other"></slot>
//     </div>
//     <div class="slotAsd">
//       <slot name="other"></slot>
//     </div>
//   </div>
// </template>
// <script>
// export default {
//   props: ['fatherData'], // 接收父组件传入的数据 fatherData 【想要修改的时候，通过 $emit 在父组件内改】
//   methods: {
//     asd() {
//       this.$emit('childEvent', { text: 'bbb' }) // 触发父组件的 childEvent 事件，并传递参数
//     }
//   }
// }
// </script>
