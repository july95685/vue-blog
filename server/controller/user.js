const express = require('express')
const model = require('../db/db.js')
const moment = require('moment')
const createToken = require('../middleware/createToken')
const router = express.Router()

const Register = (req,res) => {
	console.log(req.body);
	let userRegister = new model.User({
		email:req.body.name,
		password: req.body.password,
		token: createToken(req.body.name)
	})
	model.User.findOne({
		email:userRegister.email
	},(err,doc) => {
		console.log(doc);
		if(err){
			console.log(err)
		}
		if(doc){
			console.log("账号已存在");
			res.json({
				info:'账号已存在'
			})
		}else{
			console.log(userRegister);
			userRegister.create_time = moment().format('x');
			userRegister.save(err => {
				if(err) {
					console.log(err)
					res.json({
						info: err.message
					})
				}
				else{
					console.log('register success')
					res.json({
						success: true
					})
				}
			})
		}
	})
}
const Login = (req,res) => {
	console.log(req.body);
	let userLoginInfo = new model.User({
		email:req.body.name,
		password: req.body.password,
	})
	model.User.findOne({
		email:userLoginInfo.email
	},(err,doc) => {
		console.log(doc);
		if(err){
			console.log(err)
		}else{
			if(!doc){
				res.json({
					info:"帐号不存在"
				})
			}else if(doc && userLoginInfo.password === doc.password){
				res.json({
					success:true,
					token:doc.token,
					user:doc.email
				})
			}else if(doc && userLoginInfo.password !== doc.password){
				res.json({
					info:"密码错误"
				})
			}else{
				res.json({
					info:"未知错误"
				})
			}

		}
	})
}
const UpdateUser = (req,res) => {
	console.log(req.body);
	let userNewInfo = {$set:{
		email:req.body.name?req.body.name:req.body.email,
		password: req.body.password
	}}
	let userOldInfo = {
		email:req.body.email
	}
	model.User.update(userOldInfo,userNewInfo,(err,doc)=>{
		if(err){
			console.log(err);
			res.json({
				info:err
			})
		}else if(req.body.password){
			console.log(doc);
			res.json({
				success:true,
				data:doc
			})
		}else{
			res.json({
				info:"密码不能为空"
			})
		}
	})
	
}

const AllUser = (req,res) => {
	model.User.find({},(err,doc)=>{
		if(err) console.log(err);
		if(doc){
			console.log('user doc');
			console.log(doc);
			res.json({
				success:true,
				data:doc
			})
		}
	})
}

module.exports = (router) => {
	router.post('/register', Register),
	router.post('/login', Login),
	router.post('/updateUser', UpdateUser),
	router.get('/allUser', AllUser)
}