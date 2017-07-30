<template>
  <div
    v-loading.body="loading"
    :data="articleData"
    style="width: 100%">
    <div>
      <div>{{articleData.title}}</div>
      <div>{{articleData.content}}</div>
    </div>
  </div>
</template>

<script>
import api from './../api/index'
  export default {
    data() {
      return {
        articleData: {

        },
        loading: false
      };
    },
    mounted(){
        console.log('mounted');
        let id = this.$route.query.id;
        this.get_User(id);
    },
    methods:{
      get_User(id){
        let opt = {
          id:this.$route.query.id,
          email:"qq"
        }
        console.log(id);
        api.findarticle(opt).then(({data}) =>{
          console.log(data);

        })
      }

    }
  };
</script>

<style scoped>
  body {
    margin: 0;
  }
</style>