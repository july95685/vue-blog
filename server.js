const express = require('express')
const path = require('path')
const logger = require('morgan')
const bodyParser = require('body-parser')
const routes = require('./server/router/user.js')
const resolve = file => path.resolve(__dirname, file)

const app = express()

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', routes)

app.use(function (req, res, next) {
	var err = new Error('This page not found');
	err.status = 404;
	next(err)
})

app.listen(3000, function () {
	console.log(`Server running in port 3000`)
})