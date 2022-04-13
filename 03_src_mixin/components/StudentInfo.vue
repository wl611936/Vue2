<template>
  <div>
    <h2 @click="showName">姓名：{{name}}</h2>
    <h2>性別：{{gender}}</h2>
  </div>
</template>

<script>
  // import {mixin} from '../mixin'
  export default {
    name: 'StudentInfo',
    data(){
      return{
        name: 'Ryan',
        gender: 'male'
      }
    },
    // mixins:[mixin]
  }
</script>

<style></style>