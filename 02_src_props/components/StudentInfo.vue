<template>
  <div>
    <h1>{{str}}</h1>
    <h2>姓名：{{name}}</h2>
    <h2>性別：{{gender}}</h2>
    <h2>年齡：{{showAge}}</h2>
    <button @click="updateAge">CLICK</button>
  </div>
</template>

<script>
  export default {
    name: 'StudentInfo',
    data(){
      return{
        str: 'Hello Vue !',
        showAge : this.age
      }
    },
    methods:{
      updateAge(){
        this.showAge++
      }
    },

    // 多數情況下常使用簡單接收
    // props:['name', 'gender', 'age']

    //  對資料類型進行限制的接收
    // props:{
    //   name: String,
    //   gender: String,
    //   age: Number
    // }

    //  最完整語法：限制資料類型 + 指定預設值 + 必須傳遞的資料
    props:{
      name:{
        // 資料類型必須是字串
        type: String,

        // name是必傳的
        required: true
      },
      gender:{
        type: String,
        required: true
      },
      age:{
        type: Number,

        // 資料可傳可不傳，若不傳，則顯示預設值0
        default: 0
      }
    }
  }
</script>

<style></style>