<template>
  <div class="my-tab-bar">
    <!-- 
      点谁谁亮
      --点击事件：点击修改索引；
      --动态class：变色的动态class判定True/False :class="{ current: selIndex === index }
     -->
    <div
      class="tab-item"
      v-for="(obj, index) in arr"
      :key="index"
      @click="btn(index, obj)"
      :class="{ current: selIndex === index }"
    >
      <!-- 图标 -->
      <span class="iconfont" :class="obj.iconText"></span>
      <!-- 文字 -->
      <span>{{ obj.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selIndex: 0,
    }
  },
  methods: {
    btn(index, obj) {
      this.selIndex = index
      // 向app.vue传递要变更的组件名
      this.$emit('changeCom', obj.componentName)
    },
  },
  props: {
    arr: {
      type: Array,
      required: true,
      // 自定义校验规则
      validator(value) {
        // value是接收到的数组
        if (value.length >= 2 && value.length <= 5) {
          return true
        } else {
          console.error('数据源应在2-5之间')
          return false
        }
      },
    },
  },
}
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.current {
  color: #1d7bff;
}
</style>
