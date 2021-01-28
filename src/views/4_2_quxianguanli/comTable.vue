
<!-- 曲线管理：表格 -->

<template>
  <div class="">

    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="xianming" label="线名">
      </el-table-column>
      <el-table-column prop="hangbie" label="行别">
      </el-table-column>
      <el-table-column prop="start" label="起始里程">
      </el-table-column>
      <el-table-column prop="end" label="终止里程">
      </el-table-column>
      <el-table-column prop="quxianfangxiang" label="曲线方向">
      </el-table-column>
      <el-table-column prop="quxianbanjing" label="曲线半径">
      </el-table-column>
      <el-table-column prop="zhuanxiangjiao" label="转向角">
      </el-table-column>
      <el-table-column prop="guijujiakuan" label="轨距加宽">
      </el-table-column>
      <el-table-column prop="chaogao" label="超高">
      </el-table-column>
      <el-table-column prop="shunpolv" label="顺坡率">
      </el-table-column>
      <el-table-column prop="quxianchang" label="曲线长">
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">操作</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>详情</el-dropdown-item>
              <el-dropdown-item>编辑</el-dropdown-item>
              <el-dropdown-item>关闭</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination class="comPagination" layout="prev, pager, next, jumper"
      :current-page="currentPage" :page-size="pageSize" :total="total" @current-change="handleCurrentChange"
    >
    </el-pagination>

  </div>
</template>

<script>
import TableData from './data_table.js'
export default {
  props: ['searchData'],
  data() {
    return {
      currentPage: 1, // 当前第几页
      pageSize: 5 //     每页条数
    }
  },
  watch: {
    /**
     * [搜索（总条数发生变化）后，重置当前分页数]
     */
    provingData() {
      this.currentPage = 1
    }
  },
  computed: {
    /**
     * [根据搜索条件筛选后的数据]
     */
    provingData() {
      const { searchData } = this
      /* ----- 筛选：是否有筛选条件 ----- */
      let isProving = false
      for (const x in searchData) {
        const proving = searchData[x]
        if (proving instanceof Array && proving.length) {
          isProving = true
        } else if (typeof proving === 'string' && proving) {
          isProving = true
        }
      }
      /* ----- 筛选：搜索条件 ----- */
      let list = []
      if (isProving) {
        TableData.forEach((item, index) => {
          for (const x in searchData) {
            const proving = searchData[x]
            let status = false
            if (proving instanceof Array && proving.length) { // 条件：多选
              proving.forEach((val) => {
                if (val && item[x].indexOf(val) !== -1) {
                  status = true
                }
              })
            } else if (typeof proving === 'string' && proving) { // 条件：文字
              if (proving && item[x].indexOf(proving) !== -1) {
                status = true
              }
            }
            if (status) { // 匹配到了数据
              list.push(item)
            }
          }
        })
      } else {
        list = TableData
      }
      return list
    },
    /**
     * [总条数]
     */
    total() {
      return this.provingData.length
    },
    /**
     * [表格数据]
     */
    tableData() {
      const { currentPage, pageSize, provingData } = this
      /* ----- 筛选：分页 ----- */
      const arr = []
      const minIndex = pageSize * currentPage - pageSize
      const maxIndex = pageSize * currentPage - 1
      provingData.forEach((item, index) => {
        if (minIndex <= index && index <= maxIndex) {
          arr.push(item)
        }
      })
      return arr
    }
  },
  methods: {
    /**
     * [切换分页]
     * @param {[Int]} val 第几页
     */
    handleCurrentChange(val) {
      this.currentPage = val
    }
  }
}
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}

/*** 分页 ***/
.comPagination {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>
