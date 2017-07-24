"use strict";
let mongoose = require("mongoose");	
// let data = require("../settings");
var db = mongoose.createConnection('mongodb://localhost/blog');
db.on('error',console.error.bind(console,'连接错误'))
db.on('open',(callback) => {
	console.log('Mongodb连接成功');
})
mongoose.Promise = global.Promise;
module.exports = db;