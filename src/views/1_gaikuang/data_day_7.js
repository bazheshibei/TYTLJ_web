
/**
 * [近7日]
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
    data: ['2021-01-12', '2021-01-13', '2021-01-14', '2021-01-15', '2021-01-16', '2021-01-17', '2021-01-18'] // x轴数据
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
      data: [10, 0, 5, 8, 22, 17, 2]
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
  '近7日': obj
}
