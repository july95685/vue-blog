var userInsert = require('../db/models/add')
module.exports = function (app) {
	// var tours = [
	// 	{id:0,name:"Hood River",price:99.99},
	// 	{id:2,name:"Oregon Coast",price:149.55}
	// ];
	console.log(2)
	// app.get('/api/tours',function(req,res){
	// 	res.json(tours);
	// })
	app.get('/api/register',function(req,res){
		console.log(23);
		userInsert.add(req.query);
		res.json({data:{
			status:"success"
		}});
	})
}