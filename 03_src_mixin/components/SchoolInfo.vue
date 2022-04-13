<template>
  <div>
    <h2 @click="showName">校名：{{name}}</h2>
    <h2>校址：{{address}}</h2>
  </div>
</template>

<script>
  // import {mixin, mixin2} from '../mixin'
  export default {
    name: 'SchoolInfo',
    data(){
      return{
        name: 'NTU',
        address: '台北市大安區羅斯福路'
      }
    },
    // mixins:[mixin, mixin2]
  }
</script>

<style></style>