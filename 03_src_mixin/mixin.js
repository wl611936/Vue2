export const mixin = {
  methods:{
    showName(){
      alert(this.name)
    }
  }
}
export const mixin2 = {
  data(){
    return{
      x: 0,
      y: 1
    }
  },
  mounted(){
    console.log('mixin')
  }
}