
import Tool from './tool.js'
import { MessageBox } from 'element-ui'

/**
 * 本地开发代码
 * @ [调用本地数据]
 * @ [不请求接口]
 */
const Dev = {}

/**
 * [请求：页面初始化数据]
 * @page 第一页
 */
Dev.A_getItemNodeTemple = function (state, commit, pageStatus) {
  const res = JSON.parse(localStorage.getItem('排计划'))
  console.log('xxxxx ----- ', res)
  //
  const { itemMapList, nodeMapList, itemids } = res
  /* 提取节点数据 */
  itemMapList.map(function (item, index) {
    item.nodeTemplateMapList.forEach(function (val) {
      item[val.node_id] = Object.assign({}, val, { first_plant_enddate: '' })
    })
    item.index = index
  })
  /* 初始化时，记录表格节点列 */
  if (pageStatus === '初始化') {
    state.nodeMapList = nodeMapList
    state.itemids = itemids
  }
  if (pageStatus === '创建') {
    /* 创建时，保留原始项目数据 */
    const { projectList } = state
    const tableObj = {}
    const tableArr = []
    projectList.forEach(function (item) {
      tableObj[item.item_id] = item
      tableArr.push(item)
    })
    itemMapList.forEach(function (item) {
      if (!tableObj[item.item_id]) {
        tableArr.push(item)
      }
    })
    state.projectList = tableArr
  } else {
    /* 初始化时，直接赋值 */
    state.projectList = itemMapList
  }
  /* 创建时，刷新表格 */
  if (pageStatus === '创建') {
    commit('createdNewTable') // 创建新表格
  }
}

/**
 * [请求：甘特表内控节(排计划)点提报初始化信息]
 */
Dev.A_itemCustomNode = function (state) {
  const { projectList, nodeMapList } = state
  const { datalist, itemids, errorObj } = Tool.returnDatalist(projectList, nodeMapList)
  if (Object.keys(errorObj).length) {
    /* ----- 报错 ----- */
    const textArr = []
    for (const x in errorObj) {
      const item = errorObj[x]
      textArr.push(`<p>${x}：${item.join('、')}</p>`)
    }
    MessageBox.alert(`${textArr.join('')}`, '请完善后再提交', {
      dangerouslyUseHTMLString: true,
      confirmButtonText: '确定'
    })
  } else {
    /* ----- 发起请求 ----- */
    console.log('投产前/排产节点提报 ----- itemids', itemids)
    console.log('投产前/排产节点提报 ----- datalist', datalist)
  }
}

export default Dev
