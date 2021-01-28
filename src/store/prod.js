
import Api from '@/config/api'
import Tool from './tool.js'
import { Loading, MessageBox } from 'element-ui'

/**
 * 生产环境代码
 */
const Prod = {}

/**
 * [请求：页面初始化数据]
 * @page 第一页
 */
Prod.A_getItemNodeTemple = function (state, commit, pageStatus) {
  const { pageType, itemids } = state
  let itemIds = itemids
  if (pageStatus === '创建') {
    const { itemids = '' } = JSON.parse(localStorage.getItem('choiceGanttSummaryItemData')) || {}
    itemIds = itemids
    if (!itemids) {
      return false
    }
  }
  /* ----- 发起请求 ----- */
  const name = '甘特表内控节(排计划)点提报初始化信息'
  const obj = { itemIds, type: pageType }
  const loading = '数据初始化中...'
  const suc = function (res) {
    const { data, msg, status } = res
    if (String(status) === '0') {
      // eslint-disable-next-line
      MessageBox({ title: '数据异常', message: msg, type: 'warning', closeOnClickModal: false, closeOnPressEscape: false, callback() { dg.close() } })
    } else {
      // localStorage.setItem('排计划', JSON.stringify(res))
      const { itemMapList, nodeMapList, itemids } = data
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
  }
  Api({ name, obj, loading, suc })
}

/**
 * [请求：甘特表内控节(排计划)点提报初始化信息]
 */
Prod.A_itemCustomNode = function (state) {
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
    const name = '投产前/排产节点提报'
    const obj = { type: 1, itemids, audit_type: 0, datalist }
    const suc = function (res) {
      const { msg, status } = res
      if (String(status) === '0') {
        MessageBox({ title: '数据异常', message: msg, type: 'warning', closeOnClickModal: false, closeOnPressEscape: false })
      } else {
        Loading.service({ text: '生成成功', spinner: 'el-icon-circle-check' })
        setTimeout(() => {
          // eslint-disable-next-line
          dg.close()
        }, 1000)
      }
    }
    Api({ name, obj, suc, loading: '生成中...' })
  }
}

export default Prod
