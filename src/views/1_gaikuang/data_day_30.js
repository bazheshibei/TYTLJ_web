
/**
 * [近30日]
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
    data: [ // x轴数据
      '2021-01-12',
      '2021-01-13',
      '2021-01-14',
      '2021-01-15',
      '2021-01-16',
      '2021-01-17',
      '2021-01-18',
      '2021-01-19',
      '2021-01-20',
      '2021-01-21',
      '2021-01-22',
      '2021-01-23',
      '2021-01-24',
      '2021-01-25',
      '2021-01-26',
      '2021-01-27',
      '2021-01-28',
      '2021-01-29',
      '2021-01-30',
      '2021-01-31',
      '2021-02-01',
      '2021-02-02',
      '2021-02-03',
      '2021-02-04',
      '2021-02-05',
      '2021-02-06',
      '2021-02-07',
      '2021-02-08',
      '2021-02-09',
      '2021-02-10'
    ]
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
      data: [10, 0, 5, 8, 22, 17, 2, 11, 21, 17, 2, 15, 18, 19, 10, 2, 6, 9, 21, 1, 9, 0, 23, 7, 9, 2, 21, 15, 17, 0]
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
  '近30日': obj
}
