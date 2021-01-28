
<!-- 车站管理 -->

<template>
  <div class="">

    <com-top>
      <template slot="title">车站管理</template>
      <template v-if="userName === 'admin' || userName === '板块管理员'" slot="other">
        <el-button type="primary">添 加</el-button>
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
