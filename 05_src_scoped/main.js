// 引入Vue
import Vue from 'vue'

// 引入App
import App from './App.vue'

// 關閉vue預設的生產提示
Vue.config.productionTip = false

// 創建Vue實例
new Vue({
  el: '#app',
  render: h => h(App)
})