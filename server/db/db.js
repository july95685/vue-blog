const mongoose = require('mongoose')

var db = mongoose.createConnection('mongodb://localhost/blog')
mongoose.Promise = global.Promise
db.on('error',console.error.bind(console,'Connect error'))
db.once('open',function(){
	console.log('Mongodb started successfully')
})

var userSchema = mongoose.Schema({
	email:{
		type:'String',
		required:true
	},
	password: {
		type:'String',
		required:true
	},
	token: String,
	create_time: Date
})

var model = {
	User:db.model('julycome',userSchema)
}

module.exports = model