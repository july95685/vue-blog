const express = require('express')
const model = require('../db/db.js')
const router = express.Router()
const moment = require('moment')
// const createToken = require('../middleware/createToken')
// const checkToken = require('../middleware/checkToken')
const sha1 = require('sha1')

const Register = (req,res) => {
	console.log(req.body);
	let userRegister = new model.User({
		email:req.body.name,
		password: req.body.password,
		recheck: req.body.recheck,
		// token:createToken(this.email)
	})
	console.log(userRegister);
	userRegister.save(err => {
		if(err) console.log(err)
		console.log('register success')
		res.json({
			success: true
		})
	})
}

const Findarticle = (req,res) => {
	model.Article.find({email:req.body.email},(err,doc)=>{
		if(err) console.log(err);
		if(doc){
			console.log('articlr doc');
			console.log(doc);
			res.send(doc);
		}
	})
}

module.exports = (router) => {
	router.post('/register', Register),
	router.post('/Findarticle',Findarticle)
}