<template>
  <div>
    <h1 v-text="msg" ref="h1"></h1>
    <button ref="btn" @click="showDOM">CLICK</button>
    <SchoolInfo ref="sch"/>
  </div>
</template>

<script>
  import SchoolInfo from './components/SchoolInfo.vue'
  export default {
    name:'App',
    data(){
      return{
        msg:'Hello Vue!'
      }
    },
    components:{SchoolInfo},
    methods:{
      showDOM(){
        console.log(this.$refs.h1);
        console.log(this.$refs.btn);
        console.log(this.$refs.sch);
      }
    }
  }
</script>