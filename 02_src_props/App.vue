<template>
  <div>
    <StudentInfo name="Peter" gender="male" :age="22" />
  </div>
</template>

<script>
  import StudentInfo from './components/StudentInfo.vue'
  export default {
    name:'App',
    components:{StudentInfo}
  }
</script>