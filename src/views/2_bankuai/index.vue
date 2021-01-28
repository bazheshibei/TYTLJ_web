
<!-- 板块管理 -->

<template>
  <div class="gkBox">

    <el-card class="comCard" v-for="(item, index) in list" :key="'card_' + index">
      <div class="comCardHeader">
        <span class="comCardTitle">{{item.title}}</span>
        <el-button size="mini" type="primary">编辑</el-button>
      </div>
      <div class="comCardContent">
        <p>创建时间：<span class="peopleText">{{item.time}}</span></p>
        <p>板块管理员：<span class="peopleText">{{item.people}}</span>(共{{item.num}}人)</p>
        <p>使用范围：<span class="peopleText">{{item.scope}}</span></p>
      </div>
    </el-card>

    <el-card class="comCard createCard">
      <el-button size="medium" round type="primary">创 建</el-button>
    </el-card>

  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    const local = JSON.parse(localStorage.getItem('TYTLJ_gk') || '[]')
    const list = local.length ? local : [
      { title: '原平工务段', time: '2020-10-10 10:10:10', people: '张三、李四、王五、赵六、张三、李四、王五、赵六、张三、李四', num: 10, scope: '计算中心、办公厅' },
      { title: '原平工务段', time: '2020-10-10 10:10:10', people: '张三、李四、王五、赵六、张三、李四、王五、赵六、张三、李四', num: 10, scope: '计算中心、办公厅' },
      { title: '太原工务段', time: '2020-10-10 10:10:10', people: '张一、李二、王三、赵四、张五、李六、王七、赵八、张九、李十', num: 10, scope: '计算中心、办公厅' }
    ]
    this.list = list
    localStorage.setItem('TYTLJ_gk', JSON.stringify(list))
  }
}
</script>

<style scoped>
.gkBox {
  display: flex;
  flex-wrap: wrap;
}

.comCard {
  width: 380px;
  height: 170px;
  margin: 0 15px 15px 0;
}

/*** 卡片顶部 ***/
.comCardHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.comCardTitle {
  font-weight: bold;
}

/*** 卡片内容 ***/
.comCardContent {
  font-size: 14px;
  margin-top: 20px;
}
.comCardContent > p {
  margin: 10px 0 0;
  display: flex;
}
.peopleText {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  flex: 1;
}

/*** 创建 ***/
.createCard {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
