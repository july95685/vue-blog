<template>
   <div class="wrapper">
      <div class="login">
        <i class="iconfont icon-icon69"></i>
        <div>
          <input type="text" style="color:black;" placeholder="请输入你的账号" v-model="name">
          <i class="iconfont icon-zhanghu"></i>
        </div>
        <div>
          <input type="password" placeholder="请输入你的密码"  style="color:black;"
          v-model="password">
          <i class="iconfont icon-yuechi"></i>
        </div>
        <span>{{info}}</span>
        <button @click="login(name,password)">登录</button>
        </div>
   </div>
</template>

<script>
import { mapActions } from 'vuex'
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
    ...mapActions(['UserLogin']),
    login(name,password){
      console.log(name,password);
      console.log(this.$store.state);
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
          this.UserLogin(data.token)
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
<style lang="scss" rel="stylesheet/scss" scoped>
.wrapper {
    .login {
        width: 16.125rem;
        height: 20rem;
        margin: 7rem auto 0;
        text-align: center;
        position: relative;
        .icon-icon69 {
            font-size: 3.75rem;
            color: darkturquoise;
        }
        div {
            width: 100%;
            margin: 0 auto;
            position: relative;
            i {
                color: darkturquoise;
                font-size: 1.875rem;
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                transition:  0.5s;
            }
        }
        input {
            width: 12.5rem;
            height: 1.875rem;
            display: block;
            margin-top: 2.5rem;
            margin-bottom: 1.25rem;
            margin-left: 3rem;
            outline: none;
            border: none;
            border-bottom: 0.1875rem solid darkturquoise;
            background: transparent;
            color: #fff;
            font-size: 1rem;
            padding-left: 0.625rem;
            &:focus + i {
                 color: #ffc520;
             }
        }
        button {
            width: 12.5rem;
            padding-left: 0;
            margin-top: 1.25rem;
            position: relative;
            left: 1.25rem;
            text-align: center;
            background: darkturquoise;
        }
    }
}

p {
    color: #ffffff;
    width: 100%;
    height: 1.25rem;
}
@media screen and (max-width: 440px) {
    .login {
        margin-top: 2rem !important;
    }
}
</style>
