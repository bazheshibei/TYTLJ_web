
<!-- 概况 -->

<template>
  <div class="gkBox">

    <el-card class="comCard" v-for="(item, index) in list" :key="'card_' + index">
      <div class="comCardHeader">
        <span class="comCardTitle">{{item.title}}</span>
        <el-button size="mini" type="primary">编辑</el-button>
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

    <!--为echarts准备一个具备大小的容器dom-->
    <div id="myChart" :style="{width: '1000px', height: '500px'}"></div>

  </div>
</template>

<script>
// 引入基本模板
const echarts = require('echarts/lib/echarts')
// 引入组件
require('echarts/lib/chart/bar')
require('echarts/lib/chart/line')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  data() {
    return {
      list: []
    }
  },
  // 调用
  mounted() {
    this.drawLine()
  },
  created() {
    const list = [
      { title: '网络协议', people: '张三、李四、王五、赵六、张三、李四、王五、赵六、张三、李四', num: 10, scope: '计算中心、办公厅' },
      { title: '总上报数量', total: 12345 },
      { title: '现有病害数', total: 12345 }
    ]
    this.list = list
    localStorage.setItem('TYTLJ_gk', JSON.stringify(list))
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: '',
          subtext: ''
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['最高', '最低']
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: { readOnly: false },
            magicType: { type: ['line', 'bar'] },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['2019-02-25', '2019-03-04', '2019-03-18', '2019-03-26', '2019-04-16', '2019-04-26', '2019-05-04']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value}'
          }
        },
        series: [
          {
            name: '最高',
            type: 'line',
            data: [11, 11, 15, 13, 12, 13, 10],
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            markLine: {
              data: [
                { type: 'average', name: '平均值' }
              ]
            }
          },
          {
            name: '最低',
            type: 'line',
            data: [1, -2, 2, 5, 3, 2, 0],
            markPoint: {
              data: [
                { name: '周最低', value: 2, xAxis: 1, yAxis: 1.5 }
              ]
            },
            markLine: {
              data: [
                { type: 'average', name: '平均值' },
                [{
                  symbol: 'none',
                  x: '90%',
                  yAxis: 'max'
                }, {
                  symbol: 'circle',
                  label: {
                    normal: {
                      position: 'start',
                      formatter: '最大值'
                    }
                  },
                  type: 'max',
                  name: '最高点'
                }]
              ]
            }
          }
        ]
      })
    }
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
</style>
