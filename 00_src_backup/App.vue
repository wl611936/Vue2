<template>
  <div>
    <img src="./assets/logo.png" alt="Logo">
    <SchoolInfo></SchoolInfo>
    <StudentInfo></StudentInfo>
  </div>
</template>

<script>
  import SchoolInfo from './components/SchoolInfo'
  import StudentInfo from './components/StudentInfo'
  export default {
    name:'App',
    components:{
      SchoolInfo,
      StudentInfo
    }
  }
</script>