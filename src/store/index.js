// 组装模块并导出 store

import Vue from 'vue'
import Vuex from 'vuex'
// import Dev from './dev.js' //   本地开发代码
// import Prod from './prod.js' // 生产环境代码
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {},

  state: {
    userName: 'admin'
  },

  mutations: {
    /**
     * [保存数据]
     * @param {[String]} name 属性名
     * @param {[Object]} obj  属性值
     */
    saveData(state, params) {
      const { name, obj } = params
      state[name] = obj
    }
    /**
     * [创建新表格]
     */
    // createdNewTable(state) {
    //   state.tableArr.push(new Date().getTime())
    // }
  },

  getters: {
    /**
     * [所有项目名称]
     */
    // itenames(state) {
    //   const { projectList } = state
    //   const strArr = []
    //   projectList.forEach(function (item) {
    //     strArr.push(item.item_name)
    //   })
    //   return strArr.join(',')
    // }
  },

  actions: {
    /**
     * [请求：页面初始化数据]
     * @page 第一页
     */
    // A_getItemNodeTemple({ state, commit, getters }, { status: pageStatus = '初始化' }) {
    //   state.codeObj[state.nowCodeType].A_getItemNodeTemple(state, commit, pageStatus)
    // },
    /**
     * [请求：投产前/排产节点提报]
     */
    // A_itemCustomNode({ state }) {
    //   state.codeObj[state.nowCodeType].A_itemCustomNode(state)
    // }
  }
})

export default store
