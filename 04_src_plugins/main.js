// 引入Vue
import Vue from 'vue'

// 引入App
import App from './App.vue'

// 引入外掛
import plugins from './plugins'

// 關閉vue預設的生產提示
Vue.config.productionTip = false

//啟動外掛
Vue.use(plugins, 1, 2, 3)

// 創建Vue實例
new Vue({
  el: '#app',
  render: h => h(App)
})