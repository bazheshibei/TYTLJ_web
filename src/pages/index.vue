
<template>
  <div class="indexPageBox">

    <!-- 顶部 -->
    <div class="headerBox">
      <span style="cursor: pointer;" @click="isCollapse = !isCollapse">
        太原铁路局管理系统
      </span>
      <el-dropdown trigger="click" @command="command">
        <span class="userName">
          {{userName}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item :disabled="userName === 'admin'" command="admin">admin</el-dropdown-item>
          <el-dropdown-item :disabled="userName === '应用管理员'" command="应用管理员">应用管理员</el-dropdown-item>
          <el-dropdown-item :disabled="userName === '板块管理员'" command="板块管理员">板块管理员</el-dropdown-item>
          <el-dropdown-item :disabled="userName === '自定义角色'" command="自定义角色">自定义角色</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <!-- 主要内容 -->
    <div class="mainBox">
      <!-- 导航菜单 -->
      <el-menu class="asideBox" v-for="num in toggleNum" :key="num" v-if="num === toggleNum"
        active-text-color="#0486FE"
        router :default-active="defaultActive" :collapse-transition="false" :collapse="isCollapse"
      >
        <el-menu-item v-for="(item, index) in asideList" :key="'aside_' + index" :index="item.path">
          <i class="el-icon-setting"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </el-menu>
      <!-- 内容 -->
      <div class="routeBox">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Rotes from '@/router/routes.js'
export default {
  data() {
    return {
      userName: 'admin', // 当前用户
      isCollapse: false, // 是否折叠导航栏
      defaultActive: '', // 默认选中的导航
      asideList: [], //     导航数组
      toggleNum: 1 //       计数：切换用户时重新渲染导航栏
    }
  },
  created() {
    /* *** 切到第一个路由 *** */
    this.goToFirst()
  },
  methods: {
    /**
     * [切到第一个路由]
     */
    goToFirst(first = false) {
      const { userName = '' } = this
      const asideList = []
      Rotes.forEach(data => {
        if (data.name === '首页') {
          const { children = [] } = data
          children.forEach(obj => {
            const { user = [] } = obj
            user.forEach(text => {
              if (text === userName) {
                asideList.push(obj)
              }
            })
          })
        }
      })
      this.asideList = asideList
      /* ----- 路由跳转 ----- */
      if (asideList.length) {
        /* 加载刷新前的页面 */
        const local = JSON.parse(localStorage.getItem('TYTLJ_route') || '{}')
        if (!first && Object.keys(local).length) {
          const { path, name } = local
          this.$router.replace({ name })
          this.defaultActive = path
        } else {
          /* 切换用户，加载第一个页面 */
          const { path, name } = asideList[0]
          this.$router.push({ name })
          this.defaultActive = path
        }
      }
      /* ----- 重新渲染导航栏 ----- */
      this.toggleNum++
    },
    /**
     * [切换角色]
     * @param {[String]} event 角色名
     */
    command(event) {
      this.userName = event
      this.$store.commit('saveData', { name: 'userName', obj: event })
      /* *** 切到第一个路由 *** */
      this.goToFirst(true)
    }
  }
}
</script>

<style scoped>
.indexPageBox {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/*** 顶部 ***/
.headerBox {
  height: 79px;
  color: #303133;
  font-size: 22px;
  padding: 0 60px;
  background: #ffffff;
  border-bottom: solid 1px #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
}
.userName {
  color: #606266;
  cursor: pointer;
}
.el-icon-arrow-down {
  color: #409EFF;
  font-size: 12px;
}

/*** 主要内容 ***/
.mainBox {
  height: calc(100% - 80px);
  display: flex;
  flex: 1;
  background: #F5F7FA;
}
.asideBox:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.routeBox {
  height: calc(100% - 20px);
  padding: 10px 30px;
  overflow-y: auto;
  background: #ffffff;
  flex: 1;
}
</style>
