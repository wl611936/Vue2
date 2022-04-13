export default {
  install(Vue, x, y, z){
    console.log(x, y, z);

    // 全域過濾器
    Vue.filter('mySlice', function(value){
      return value.slice(0,4)
    })

    // 自定義全域指令
    // Vue.directive('fbind',{
    //   bind(element, binding){
    //     element.value = binding.value
    //   },
    //   inserted(element, binding){
    //     element.focus()
    //   },
    //   update(element, binding){
    //     element.value = binding.value
    //   }
    // })

    // 定義混入
    Vue.mixin({
      data(){
        return{
          x: 0,
          y: 1
        }
      }
    })

    // 在Vue原型裡新增一個方法
    Vue.prototype.hello = ()=>{alert('Hello !')}
  }
}