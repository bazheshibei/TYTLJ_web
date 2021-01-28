
import Demo from './data_demo.js' //       demo 数据
import Day_1 from './data_day_1.js' //     本日
import Day_7 from './data_day_7.js' //     近7日
import Day_30 from './data_day_30.js' //   近30日
import Day_month from './data_month.js' // 本月

const data = Object.assign({}, Demo, Day_1, Day_7, Day_30, Day_month)

export default data
