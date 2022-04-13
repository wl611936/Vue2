<template>
  <div class="demo">
    <h2>校名：{{name}}</h2>
    <h2>校址：{{address}}</h2>
    <button @click="showName">CLICK</button>
  </div>
</template>

<script>
  export default {
    name:'SchoolInfo',
    data(){
      return{
        name:'臺灣大學',
        address:'臺北市大安區羅斯福路'
      }
    },
    methods:{
      showName(){
        alert(this.name)
      }
    }
  }
</script>

<style>
  .demo{
    background-color: #369;
  }
</style>