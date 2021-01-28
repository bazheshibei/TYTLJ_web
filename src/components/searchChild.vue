
<!-- 搜索:单个选项 -->

<template>
  <div class="comSearchChild" :style="hiddenLabel ? { margin: '20px 10px 0 0' } : { margin: '20px 40px 0 0' }">

    <div class="comSearchLabel" :style="hiddenLabel ? {} : { width: '60px', marginRight: '20px' }">
      <slot name="label"></slot>
    </div>

    <div class="comSearchValue">
      <slot name="value"></slot>
    </div>

  </div>
</template>

<script>
export default {
  props: ['hiddenLabel'],
  data() {
    return {}
  }
}
</script>

<style scoped>
.comSearchChild {
  display: flex;
  align-items: center;
}
.comSearchLabel {
  color: #606266;
  font-size: 14px;
  text-align: right;
}
.comSearchValue {
  display: flex;
  align-items: center;
}
</style>
