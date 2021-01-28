
<!-- 设备检查数据：查询 -->

<template>
  <div class="comSearchBox">

    <com-search-child>
      <template slot="label">股道编号</template>
      <template slot="value">
        <el-input v-model="searchData.gudaobianhao" clearable placeholder="请输入内容"></el-input>
      </template>
    </com-search-child>

    <com-search-child>
      <template slot="label">线名</template>
      <template slot="value">
        <el-input v-model="searchData.xianming" clearable placeholder="请输入内容"></el-input>
      </template>
    </com-search-child>

    <com-search-child>
      <template slot="label">车站</template>
      <template slot="value">
        <el-input v-model="searchData.chezhan" clearable placeholder="请输入内容"></el-input>
      </template>
    </com-search-child>

    <com-search-child :hiddenLabel="true">
      <template slot="value">
        <el-button type="primary">导 入</el-button>
      </template>
    </com-search-child>

    <com-search-child :hiddenLabel="true">
      <template slot="value">
        <el-button type="primary">导 出</el-button>
      </template>
    </com-search-child>

    <com-search-child :hiddenLabel="true">
      <template slot="value">
        <el-button type="primary" @click="search">查 询</el-button>
      </template>
    </com-search-child>

  </div>
</template>

<script>
import ComSearchChild from '@/components/searchChild.vue'
export default {
  components: { ComSearchChild },
  data() {
    return {
      searchData: {
        gudaobianhao: '', // 股道编号
        xianming: '', //     线名
        chezhan: '' //       终止里程
      }
    }
  },
  methods: {
    search() {
      const { searchData } = this
      this.$emit('search', { searchData })
    }
  }
}
</script>

<style scoped>
.comSearchBox {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
}
</style>

<style>
/* 表格：选择框居中 */
.el-table-column--selection > .cell {
  display: flex !important;
  justify-content: center !important;
}
/* input、select 固定宽度 */
.el-input--suffix > .el-input__inner {
  width: 178px !important;
}
</style>
