<template>
  <div>
    <SchoolInfo/>
    <hr>
    <StudentInfo/>
  </div>
</template>

<script>
  import SchoolInfo from './components/SchoolInfo.vue'
  import StudentInfo from './components/StudentInfo.vue'
  export default {
    name:'App',
    components:{SchoolInfo, StudentInfo}
  }
</script>