import Vue from 'vue'
import App from './App.vue'
import './assets/fonts/iconfont.css' // 引入字体图标css文件
import 'bootstrap/dist/css/bootstrap.css'

// 全局指令-聚焦
Vue.directive('focus', {
  inserted(el) {
    el.focus()
  },
})

new Vue({
  el: '#app',
  render: (h) => h(App),
}).$mount()
