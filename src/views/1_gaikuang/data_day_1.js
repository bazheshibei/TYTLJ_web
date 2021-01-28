
/**
 * [本日]
 */

const obj = {
  title: {
    text: '',
    subtext: ''
  },
  tooltip: {
    trigger: 'axis' // 鼠标放到折线图上展示的数据展示样式： axis   item   none三个值
  },
  legend: {
    data: ['访问量'] // 折线名称
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
    data: ['0时', '1时', '2时', '3时', '4时', '5时', '6时', '7时', '8时', '9时', '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时', '21时', '22时', '23时'] // x轴数据
    // name: '日期', // x轴名称
    // nameTextStyle: { fontSize: 18 } // // x轴名称样式
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value}'
    }
    // name: '', // y轴名称
    // nameTextStyle: { fontSize: 18 } // // y轴名称样式
  },
  series: [
    {
      name: '访问量',
      type: 'line',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 0, 5, 8, 22, 17, 2, 4, 20, 13, 19, 7, 1]
      // markPoint: {
      //   data: [
      //     { type: 'max', name: '最大值' },
      //     { type: 'min', name: '最小值' }
      //   ]
      // },
      // markLine: {
      //   data: [
      //     { type: 'average', name: '平均值' }
      //   ]
      // }
    }
  ]
}

export default {
  '本日': obj
}
