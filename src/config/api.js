// 接口

import Axios from '@/config/axios'

/**
 * [服务器地址]
 */
/* 开发环境 */
// const host = '/api/'
/* 生产环境 */
const host = window.location.origin + '/nova/'

/**
 * [接口地址]
 */
const url = {
  '甘特表内控节(排计划)点提报初始化信息': 'itemGanttSummaryShowAction.ndo?action=getInternalControlNodeData',
  '投产前/排产节点提报': 'itemGanttSummarySaveAction.ndo?action=itemCustomNode'
}

const request = function (param) {
  param.path = host + url[param.name]
  Axios(param)
}

export default request
