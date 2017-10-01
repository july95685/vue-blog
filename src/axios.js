import axios from 'axios'
import router from './router/index'


axios.default.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/json'

const instance = axios.create();
instance.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.request.use = instance.interceptors.request.use
instance.interceptors.request.use(config => {
	console.log('config');
	console.log(sessionStorage.getItem('token'));
	console.log(config);
	if(sessionStorage.getItem('token')){
		config.headers.Authorization = `token ${sessionStorage.getItem('token')}`
			.replace(/(^\")|(\"$)/g, '')
	}	
	return config
}, err => {
	return Promise.reject(err)
})
instance.interceptors.response.use(response => {
	return response
}, err => {
	return Promise.reject(err)
})

export default {
	// 用户注册
	userRegister(data) {
		console.log(data);
		return instance.post('http://localhost:3000/api/register', data)
	},
	userLogin(data) {
		console.log(data);
		return instance.post('http://localhost:3000/api/login', data)
	},
	updateUser(data){
		return instance.post('http://localhost:3000/api/updateUser', data)
	},
	getAllUser(){
		console.log('getAllUser');
		return instance.get('http://localhost:3000/api/allUser')
	}
}
