<template>
   <div class="login">
      <div>
        <input type="text" placeholder="请输入你的账号" v-model="name">
      </div>
      <div>
        <input type="password" placeholder="请输入你的密码" 
        v-model="password">
      </div>
      <div>
        <input type="password" placeholder="请再次输入你的密码" 
        v-model="remark">
      </div>
      <div class="info" v-show="showInfo">
        <span>{{info}}</span>
      </div>
      <button @click="register(name,password)">注册</button>
      <button @click="test()">test</button>
   </div>
</template>

<script>
import api from '../axios'
export default{
  data(){
    return {
      name:'',
      password:'',
      showInfo:false,
      remark:'',
      info:""
    }
  },
  methods:{
    register (name,password){
      console.log(name,password);
      var opt = {
        name:name,
        password:password
      }
      if(this.remark === password){
        this.showInfo = false;
        api.userRegister(opt).then(({data}) => {
            console.log(data);
            if(data.success){
              alert('success');
            }else{
              this.showInfo = true;
              this.info = data.info;
            }
        }).catch((err) => {
            console.log(err);
            this.showInfo = true;
            this.info = data.info;
        })
      }else{
        this.showInfo = true;
        this.info = "两次密码输入不一致"
      }
      
      
    },
    test(){
      this.$store.dispatch("testDispatch");
    }
  }
}

</script>