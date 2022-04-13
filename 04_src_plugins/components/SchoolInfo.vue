<template>
  <div>
    <h2>校名：{{name | mySlice}}</h2>
    <h2>校址：{{address}}</h2>
    <button @click="test">CLICK</button>
  </div>
</template>

<script>
  export default {
    name: 'SchoolInfo',
    data(){
      return{
        name: '臺灣大學-NTU',
        address: '台北市大安區羅斯福路'
      }
    },
    methods:{
      test(){
        this.hello()
      }
    }
  }
</script>

<style></style>