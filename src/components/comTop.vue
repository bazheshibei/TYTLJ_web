
<!-- 页面顶部 -->

<template>
  <div class="comTopBox">

    <div class="slotTitle">
      <slot name="title"></slot>
    </div>

    <div class="slotOther">
      <slot name="other"></slot>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
.comTopBox {
  padding-bottom: 10px;
  border-bottom: solid 1px #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.slotTitle {
  height: 40px;
  font-size: 22px;
  line-height: 40px;
}

.slotOther {
  display: flex;
  align-items: center;
}
</style>
