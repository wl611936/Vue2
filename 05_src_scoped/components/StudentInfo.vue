<template>
  <div class="test">
    <h2>姓名：{{name}}</h2>
    <h2>性別：{{gender}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'StudentInfo',
    data(){
      return{
        name: 'Ryan',
        gender: 'male'
      }
    }
  }
</script>

<style scoped>
  .test{
    background-color: #f90;
  }
</style>