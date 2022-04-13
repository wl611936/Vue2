<template>
  <div>
    <h2>學生：{{name}}</h2>
    <h2>年齡：{{age}}</h2>
  </div>
</template>

<script>
  export default {
    name:'StudentInfo',
    data(){
      return{
        name:'Tony',
        age:18
      }
    }
  }
</script>