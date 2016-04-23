
var express = require('express')
var app		= express()
var db     	= require('./db')
var bodyParser = require('body-parser')
var mongoose= require('mongoose')
var routes	= require('./routes/index')
app.use(bodyParser.json())
app.use( bodyParser.urlencoded({ extended : true }))

app.get('/api/',routes.index)
app.post('/api/create',routes.create)
app.get('/api/delete/:id',routes.delete)
app.post('/api/update/:id', routes.update)

app.listen(3000, function (){
		console.log('api is on')
})