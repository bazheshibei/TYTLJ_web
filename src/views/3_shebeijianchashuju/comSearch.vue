
<!-- 设备检查数据：查询 -->

<template>
  <div class="comSearchBox">

    <com-search-child>
      <template slot="label">检查人</template>
      <template slot="value">
        <el-input v-model="searchData.jiancharen" clearable placeholder="请输入内容"></el-input>
      </template>
    </com-search-child>

    <com-search-child>
      <template slot="label">病害源</template>
      <template slot="value">
        <el-select v-model="searchData.binghaiyuan" multiple collapse-tags placeholder="请选择">
          <el-option label="XX源" value="XX源"></el-option>
          <el-option label="病害源1" value="病害源1"></el-option>
          <el-option label="病害源2" value="病害源2"></el-option>
          <el-option label="病害源3" value="病害源3"></el-option>
          <el-option label="病害源4" value="病害源4"></el-option>
          <el-option label="病害源5" value="病害源5"></el-option>
        </el-select>
      </template>
    </com-search-child>

    <com-search-child>
      <template slot="label">病害类型</template>
      <template slot="value">
        <el-select v-model="searchData.binghaileixing" multiple collapse-tags placeholder="请选择">
          <el-option label="XX类型" value="XX类型"></el-option>
          <el-option label="病害类型1" value="病害类型1"></el-option>
          <el-option label="病害类型2" value="病害类型2"></el-option>
          <el-option label="病害类型3" value="病害类型3"></el-option>
          <el-option label="病害类型4" value="病害类型4"></el-option>
          <el-option label="病害类型5" value="病害类型5"></el-option>
          <el-option label="病害类型6" value="病害类型6"></el-option>
        </el-select>
      </template>
    </com-search-child>

    <com-search-child>
      <template slot="label">病害部位</template>
      <template slot="value">
        <el-select v-model="searchData.binghaibuwei" multiple collapse-tags placeholder="请选择">
          <el-option label="XX部位" value="XX部位"></el-option>
          <el-option label="病害部位1" value="病害部位1"></el-option>
          <el-option label="病害部位2" value="病害部位2"></el-option>
          <el-option label="病害部位3" value="病害部位3"></el-option>
          <el-option label="病害部位4" value="病害部位4"></el-option>
          <el-option label="病害部位5" value="病害部位5"></el-option>
          <el-option label="病害部位6" value="病害部位6"></el-option>
        </el-select>
      </template>
    </com-search-child>

    <com-search-child>
      <template slot="label">线名</template>
      <template slot="value">
        <el-input v-model="searchData.xianming" clearable placeholder="请输入内容"></el-input>
      </template>
    </com-search-child>

    <com-search-child>
      <template slot="label">车间</template>
      <template slot="value">
        <el-input v-model="searchData.chejian" clearable placeholder="请输入内容"></el-input>
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
        jiancharen: '', //     检查人
        binghaiyuan: [], //    病害源
        binghaileixing: [], // 病害类型
        binghaibuwei: [], //   病害不为
        xianming: '', //       线名
        chejian: '' //         车间
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
