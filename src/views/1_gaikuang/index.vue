
<!-- 概况 -->

<template>
  <div class="gkBox">

    <el-card class="comCard" v-for="(item, index) in list" :key="'card_' + index">
      <div class="comCardHeader">
        <span class="comCardTitle">{{item.title}}</span>
        <el-button v-if="!index" size="mini" type="primary">编辑</el-button>
      </div>
      <div v-if="item.people" class="comCardContent">
        <p>&nbsp;</p>
        <p>板块管理员：<span class="peopleText">{{item.people}}</span>(共{{item.num}}人)</p>
        <p>使用范围：<span class="peopleText">{{item.scope}}</span></p>
      </div>
      <div v-else class="comCardContent comCardContent2">
        <p class="totalText">
          <span class="bigText">{{item.total}}</span>
          &nbsp;&nbsp;条
        </p>
      </div>
    </el-card>

    <el-card class="comCard otherCard" v-for="(item, index) in paramList" :key="'paramList_' + index">
      <div class="comCardHeader">
        <span class="comCardTitle">{{index}}</span>
        <el-radio-group v-model="item.time" size="medium" @change="change(item.id, $event)">
          <el-radio-button label="本日"></el-radio-button>
          <el-radio-button label="近7日"></el-radio-button>
          <el-radio-button label="近30日"></el-radio-button>
          <el-radio-button label="本月"></el-radio-button>
        </el-radio-group>
      </div>
      <div class="comCardContent">
        <div :id="item.id" :style="{width: '116%', height: '300px', marginLeft: '-8%'}"></div>
      </div>
    </el-card>

  </div>
</template>

<script>
import Data from './data.js' // 图表数据
const echarts = require('echarts/lib/echarts') // 引入基本模板
require('echarts/lib/chart/bar')
require('echarts/lib/chart/line') //              折线图组件
require('echarts/lib/component/tooltip')//        tooltip 组件
require('echarts/lib/component/title') //         title 组件
require('echarts/lib/component/legend') //        legend 组件
export default {
  data() {
    return {
      list: [],
      paramList: {
        '访问量统计': { id: 'cart_1', time: '本日' },
        '病害源': { id: 'cart_2', time: '本日' },
        '病害部位': { id: 'cart_3', time: '本日' },
        '病害类型': { id: 'cart_4', time: '本日' }
      }
    }
  },
  created() {
    const list = [
      { title: '网络协议', people: '张三、李四、王五、赵六、张三、李四、王五、赵六、张三、李四', num: 10, scope: '计算中心、办公厅' },
      { title: '总上报数量', total: 12345 },
      { title: '现有病害数', total: 12345 }
    ]
    this.list = list
    localStorage.setItem('TYTLJ_gk', JSON.stringify(list))

    // const { nowDate } = this._otherMonth()
    // console.log(this._allDay(nowDate))
  },
  mounted() {
    const { paramList } = this
    for (const x in paramList) {
      const { id, time } = paramList[x]
      /** 生成图表 **/
      this.drawLine(id, time)
    }
  },
  methods: {
    /**
     * [生成图表]
     * @param {[String]} id   div 的ID
     * @param {[String]} time 本日、近7日、近30日、本月
     */
    drawLine(id, time) {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById(id))
      // 绘制图表
      myChart.setOption(Data[time])
    },
    /**
     * [切换时间]
     * @param {[String]} id    div 的ID
     * @param {[String]} event 本日、近7日、近30日、本月
     */
    change(id, event) {
      /** 生成图表 **/
      this.drawLine(id, event)
    }
    // /**
    //  * [返回：当月全部日期]
    //  * @param  {[String]} time 当前日期
    //  * @return {[Array]}  arr  日期数组 { day: 几号, week: 星期几 }
    //  */
    // _allDay(time) {
    //   const { afterDate } = this._otherMonth(time)
    //   const oneDay = 1000 * 60 * 60 * 24
    //   const maxNum = new Date(afterDate).getTime() - oneDay // 下个月第一天的毫秒数 - 一天
    //   const maxDay = new Date(maxNum).getDate() //             本月最后一天
    //   const arr = []
    //   for (let i = 1; i <= maxDay; i++) {
    //     const dayText = `${time}-${i < 10 ? '0' + i : i}` // 本次循环日期
    //     const weekArr = ['日', '一', '二', '三', '四', '五', '六']
    //     const week = weekArr[new Date(dayText).getDay()] //  星期几
    //     const num = new Date(dayText).getTime() //           毫秒数
    //     arr.push({ day: i, dayText, week, num })
    //   }
    //   return arr
    // },
    // /**
    //  * [返回：前后两个月]
    //  * @param  {[String]} time 当前日期
    //  * @return {[String]} beforeDate 上个月：2020-08
    //  * @return {[String]} nowDate    本  月：2020-09
    //  * @return {[String]} afterDate  下个月：2020-10
    //  */
    // _otherMonth(time = '') {
    //   /* 本地时间：年、月 */
    //   const d = new Date()
    //   const yearLocal = d.getFullYear()
    //   const monthLocal = d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1
    //   /* 提取：当前时间：年、月 */
    //   const [year, month] = time ? time.split('-') : ['', '']
    //   const yearNow = isNaN(parseInt(year)) ? parseInt(yearLocal) : parseInt(year) //         年：当前
    //   const monthNow = isNaN(parseInt(month) - 1) ? parseInt(monthLocal) : parseInt(month) // 月：当前（没有-1）
    //   /* 上个月 */
    //   const yearBefore = monthNow === 1 ? yearNow - 1 : yearNow
    //   const monthBefore = monthNow === 1 ? 12 : monthNow - 1
    //   /* 下个月 */
    //   const yearAfter = monthNow === 12 ? yearNow + 1 : yearNow
    //   const monthAfter = monthNow === 12 ? 1 : monthNow + 1
    //   /* 返回 */
    //   return {
    //     beforeDate: `${yearBefore}-${monthBefore < 10 ? '0' + monthBefore : monthBefore}`,
    //     nowDate: `${yearNow}-${monthNow < 10 ? '0' + monthNow : monthNow}`,
    //     afterDate: `${yearAfter}-${monthAfter < 10 ? '0' + monthAfter : monthAfter}`
    //   }
    // }
    //
  }
}
</script>

<style scoped>
.gkBox {
  display: flex;
  flex-wrap: wrap;
}

.comCard {
  width: 380px;
  height: 170px;
  margin: 0 15px 15px 0;
}

/*** 卡片顶部 ***/
.comCardHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.comCardTitle {
  font-weight: bold;
}

/*** 卡片内容 ***/
.comCardContent {
  font-size: 14px;
  margin-top: 20px;
}
.comCardContent > p {
  margin: 10px 0 0;
  display: flex;
}
.peopleText {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  flex: 1;
}

/*** 统计数 ***/
.comCardContent2 {
  display: flex;
  align-items: center;
}
.totalText {
  width: 100%;
  font-size: 12px;
  align-items: flex-end;
  justify-content: center;
}
.bigText {
  font-size: 30px;
}

.otherCard {
  width: 100%;
  height: 360px;
}
</style>
