
<!-- 设备检查数据 -->

<template>
  <div class="">

    <com-top>
      <template slot="title">设备检查数据</template>
      <template v-if="userName === 'admin' || userName === '板块管理员' || userName === '自定义角色'" slot="other">
        <el-button type="primary">导 入</el-button>
        <el-button type="primary">填 报</el-button>
      </template>
    </com-top>

    <com-search @search="search"></com-search>

    <com-table :searchData="searchData"></com-table>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import ComTop from '@/components/comTop.vue'
import ComSearch from './comSearch.vue'
import ComTable from './comTable.vue'
export default {
  components: { ComTop, ComSearch, ComTable },
  data() {
    return {
      searchData: {} // 搜索条件
    }
  },
  computed: {
    ...mapState(['userName'])
  },
  methods: {
    search(data) {
      const { searchData } = data
      this.searchData = Object.assign({}, searchData)
    }
  }
}
</script>

<style scoped>

</style>
