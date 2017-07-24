<template>
  <el-card class="box-card">
   	<el-row type="flex" justify="center">
      <el-col :span="12">
        <el-form
        :model="formRegister"
         label-position="left" 
         label-width="80px" >
          <el-form-item label="账号" prop="name">
            <el-input v-model="formRegister.name" ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="formRegister.password"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPassword">
            <el-input v-model="formRegister.checkPassword"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="addUser">立即注册</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import api from './../api/index'
export default{
	data(){
		return {
			formRegister:{
	          name: '',
	          password: '',
	          checkPassword: ''
	        }
		}
	},
	methods:{
		addUser:function(){
			let user = this.formRegister;
			console.log(user);
			let formData = {
	          name: user.name,
	          password: user.password
	        };
	        api.registerUser(formData).then(function(data){
		      console.log(data);
		    })
		}
	}
}
</script>
