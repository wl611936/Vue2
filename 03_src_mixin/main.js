// 引入Vue
import Vue from 'vue'

// 引入App
import App from './App.vue'

// 引入mixin
import {mixin, mixin2} from './mixin'

// 關閉vue預設的生產提示
Vue.config.productionTip = false

// 在全域使用混入
Vue.mixin(mixin)
Vue.mixin(mixin2)

// 創建Vue實例
new Vue({
  el: '#app',
  render: h => h(App)
})