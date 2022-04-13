<template>
  <div>
    <h2>姓名：{{name}}</h2>
    <h2>性別：{{gender}}</h2>
    <!-- <input type="text" v-fbind:value="name"> -->
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

<style></style>