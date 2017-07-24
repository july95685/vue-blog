"use strict";
var db = require("../db");
var mongoose = require('mongoose');
var classSchema = new mongoose.Schema({
        name:String,
        password:String
    })

console.log('addData');
// var newStudent = {
//     name:'Dva',
//     studentId:'003'
// }

var classModel = db.model('User',classSchema)
var addData = function(data){
    console.log('addData');
    console.log(data);
    var newStudent = {
        name:data.name,
        password:data.password
    }
    var userInsert = new classModel(newStudent);
    userInsert.save(function(err){
        if(err){
            return console.log(err);
        }
        console.log('添加成功');
    })

}
var data = {}
data.add = addData;
module.exports = data;
