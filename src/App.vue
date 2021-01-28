<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
window.onunload = function () {
  localStorage.removeItem('TYTLJ_route') // 关闭页面时，删除路由记录
}
export default {
  name: 'App',
  created() {
    // console.log(222)
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased; /* 抗锯齿 */
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
