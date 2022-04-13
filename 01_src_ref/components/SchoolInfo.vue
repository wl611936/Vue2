<template>
  <div class="SchoolInfo">
    <h2>校名：{{name}}</h2>
    <h2>校址：{{address}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'SchoolInfo',
    data(){
      return{
        name: 'NTU',
        address: '台北市大安區羅斯福路'
      }
    }
  }
</script>

<style>
  .SchoolInfo{
    background-color: #f60;
  }
</style>