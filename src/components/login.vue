<template lang="html">
  <div class="">
    <el-row>
      <el-col :span="10" :offset="7">
        <el-tabs  @tab-click="handleClick">
          <el-tab-pane label="用户登录" name="first">
            <el-col >
              <el-form :model="dynamicValidateForm" label-width="100px">
                    <el-form-item
                      prop="user"
                      label="用户"
                    >
                      <el-input v-model="dynamicValidateForm.user"></el-input>
                    </el-form-item>
                    <el-form-item
                    prop="password"
                    label="密码"
                    >
                      <el-input type="password" v-model="dynamicValidateForm.password"></el-input>
                    </el-form-item>
                    <el-button type="primary" @click="submitForm('dynamicValidateForm')">登录</el-button>
                    <el-button>重置</el-button>
              </el-form>
            </el-col>
          </el-tab-pane>
      </el-tabs>
    </el-col>
    </el-row>
  </div>
</template>
<script>
import api from './../api/index'
export default {
    name: 'login',
    data() {
        return {
            dynamicValidateForm: {
                user: '',
                password: ''
            }
           
        }
    },
    methods: {
        handleClick(tab, event) {},
      
        
        // 登录
        submitForm(formName) {
            let opt = this.dynamicValidateForm;
            console.log(opt);
            api.login(opt).then(function(data){
              console.log(data);
            })
        }
    }
}
</script>
