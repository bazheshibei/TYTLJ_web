
import Index from '@/pages/index'
import Gaikuang from '@/views/1_gaikuang/index' //                     概况
import BanKuai from '@/views/2_bankuai/index' //                       板块管理
import SheBeiJianChaShuJu from '@/views/3_shebeijianchashuju/index' // 设备检查数据
import XianGuanLi from '@/views/4_xianguanli/index' //                 线管理
import ZhengXianPoDuGuanLi from '@/views/4_1_zhengxianpoduguanli' //   正线坡度管理
import QuXianGuanLi from '@/views/4_2_quxianguanli' //                 曲线管理
import CheZhanGuanLi from '@/views/5_chezhanguanli/index' //           车站管理
import CheJianGuanLi from '@/views/6_chejianguanli/index' //           车间管理
import ChaDaoGuanLi from '@/views/7_chadaoguanli/index' //             岔道管理
import GuDaoGuanLi from '@/views/8_gudaoguanli/index' //               股道管理
import ZiDianGuanLi from '@/views/9_zidianguanli/index' //             字典管理
import JueSeGuanLi from '@/views/10_jueseguanli/index' //              角色管理

/**
 * 记录当前路由信息
 * @页面刷新时  加载当前路由
 * @关闭页面时  删除记录
 * @重新打开时  加载第一个路由
 */
const beforeEnter = function (to, from, next) {
  const { name, path } = to
  localStorage.setItem('TYTLJ_route', JSON.stringify({ name, path }))
  next()
}

const routes = [
  {
    path: '/index',
    component: Index,
    name: '首页',
    children: [
      { path: '/gk', component: Gaikuang, name: '概况', beforeEnter, user: ['admin', '板块管理员'] },
      { path: '/bkgl', component: BanKuai, name: '板块管理', beforeEnter, user: ['admin', '应用管理员'] },
      { path: '/sbjcsj', component: SheBeiJianChaShuJu, name: '设备检查数据', beforeEnter, user: ['admin', '应用管理员', '板块管理员', '自定义角色'] },
      { path: '/xgl', component: XianGuanLi, name: '线管理', beforeEnter, user: ['admin', '板块管理员'] },
      { path: '/zx', component: ZhengXianPoDuGuanLi, name: '正线坡度管理', beforeEnter, user: [] },
      { path: '/qx', component: QuXianGuanLi, name: '曲线管理', beforeEnter, user: [] },
      { path: '/czgl', component: CheZhanGuanLi, name: '车站管理', beforeEnter, user: ['admin', '板块管理员'] },
      { path: '/cjgl', component: CheJianGuanLi, name: '车间管理', beforeEnter, user: ['admin', '板块管理员'] },
      { path: '/cdgl', component: ChaDaoGuanLi, name: '岔道管理', beforeEnter, user: ['admin', '板块管理员'] },
      { path: '/gdgl', component: GuDaoGuanLi, name: '股道管理', beforeEnter, user: ['admin', '板块管理员'] },
      { path: '/zdgl', component: ZiDianGuanLi, name: '字典管理', beforeEnter, user: ['admin', '板块管理员'] },
      { path: '/jsgl', component: JueSeGuanLi, name: '角色管理', beforeEnter, user: ['admin', '板块管理员'] }
    ]
  },
  {
    path: '/',
    component: Index,
    name: ''
  }
  // { path: '*', redirect: { path: '/404' } }
]

export default routes
