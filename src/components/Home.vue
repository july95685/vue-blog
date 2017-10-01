<template>
  <div>
	  Home
	  <div>
	  	<button @click="layout()">登出</button>
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
      info:''
    }
  },
  methods:{
   	layout(){
   		this.$router.push('/login');
   		sessionStorage.removeItem('token');
   		sessionStorage.removeItem('username');
   	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
