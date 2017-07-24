import axios from 'axios'


export default {
	registerUser(formData){
		console.log(formData);
		var url = "http://localhost:8080/api/register";
		return axios.get( url , {
			params: {
				name: formData.name,
				password: formData.password
			}
		})
	}
}