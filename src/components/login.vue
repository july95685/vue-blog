<template>
   <div class="login">
      <div>
        <input type="text" placeholder="请输入你的账号" v-model="name">
      </div>
      <div>
        <input type="password" placeholder="请输入你的密码" 
        v-model="password">
      </div>
      <div class="info" v-show="showInfo">
        <span>{{info}}</span>
      </div>
      <button @click="login(name,password)">登录</button>
   </div>
</template>

<script>
import api from '../axios'
export default {
  data(){
    return {
      name:'',
      password:'',
      showInfo:false,
      info:""
    }
  },
  methods:{
    login(name,password){
      console.log(name,password);
      var opt = {
        name:name,
        password:password
      }
      api.userLogin(opt).then(({data}) => {
        console.log(data);
        console.log(opt);
        if(data.success){
          console.log("登录成功");
          this.showInfo = false;
          this.saveUserName(data.user);
          this.saveToken(data.token);
          this.$router.push('/home');
        }else if(data.info){
          this.info = data.info;
          this.showInfo = true;
        }else{
          alert("未知的错误发生了");
        }
      })
    },
    saveUserName(email){
      console.log(email);
      sessionStorage.setItem('username',email);
    },
    saveToken(token){
      console.log(token);
      sessionStorage.setItem('token',token);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
