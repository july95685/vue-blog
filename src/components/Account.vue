<template>
	<div class="account">
		<p class="icon">icon</p>

		<div>
			修改用户名
			<input type="text" placeholder="请输入新的用户名" v-model="username"/>
		</div>
		<div>
			修改密码
			<input type="text" placeholder="请输入你的密码" v-model="password"/>
			<br/>
			<input type="text" placeholder="请再次输入你的密码" v-model="remark"/>
		</div>
		 <div class="info" >
	        <span>{{info}}</span>
	     </div>
		<button @click="save(username,password)"><span>确认修改</span></button>
		<div>
			<button @click="gotoHome()"><span>move to home</span></button>
		</div>

		<div>
			获取用户列表= =
			<div v-for="(user,index) in userList">
				<div>{{user.email}}</div>
			</div>
		</div>
	</div>
</template>
<script>
import api from '../axios'
export default {
  data(){
    return {
      username:'',
      password:'',
      remark:'',
      info:'',
      userList:''
    }
  },
	mounted () {
	    console.log('go');
	    api.getAllUser().then(({data}) => {
	    	console.log(data);
	    	if(data.success){
	    		this.userList = data.data;
	    	}
	    })
	},
  methods:{
   	save(username,password){
   		if(password != this.remark){
   			this.info = "两次密码输入不一致"
   		}else{
	   		var opt = {
		        name:username,
		        password:password,
		        email:sessionStorage.getItem('username')
		      }
		    console.log(opt);
		    api.updateUser(opt).then(({data}) => {
		    	console.log(data);
		    	if(data.success){
		    		this.info = "更改成功";
		    		sessionStorage.setItem('username',username);
		    	}
		    })
   		}
   	},
   	gotoHome(){
   		this.$router.push('/home')
   	}
  }
}
</script>