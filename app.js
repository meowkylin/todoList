
var express = require('express')
var app		= express()
var db     	= require('./db')
var engine  = require('ejs-locals')
var bodyParser = require('body-parser')
var mongoose= require('mongoose')
var routes	= require('./routes')
// var favicon = require('serve-favicon');
// var static	= require('serve-static')
// app.use(favicon(__dirname+'/public/icon_note.ico'))
// app.use(static(__dirname+'public'))
app.engine('ejs',require('ejs').renderFile)
app.set('view engine','ejs')
app.set('views',__dirname + '/views')
app.use(bodyParser.json())
app.use( bodyParser.urlencoded({ extended : true }))

app.use((req,res,next) => {
	console.log(req.method + ' ' + req.url)
	next()
})

app.get('/api/',routes.index)
app.post('/api/create',routes.create)
app.get('/api/delete/:id',routes.delete)
app.post('/api/update/:id', routes.update)

app.listen(3000, function (){
		console.log('express listening on port 3000')
})