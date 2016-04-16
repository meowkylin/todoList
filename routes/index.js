//  

var express = require('express')
var mongoose = require('mongoose')
var oneMsgModel = mongoose.model('oneMsgModel',oneMsgModel)

exports.index =  function(req, res){ 
	oneMsgModel.find().exec(function (err, todos){
		if(err) {return next(err)}
		//res.render('index', {todos: todos})
		res.json(todos).end()
	})}

exports.create = (req, res)=> {
	new oneMsgModel({
			content:req.body.content,
			time:Date.now()
		})
		.save()
	//	res.redirect('/')
	res.end('success')
}

exports.delete = (req, res)=> {
	oneMsgModel.findById( req.params.id, function ( err, todo ){
		todo.remove()
	//	res.redirect('/')
		res.end('success')
	})
}


exports.update = (req, res)=> {
	oneMsgModel.findById( req.params.id, function( err, todo){
		todo.content = req.body.content
		todo.date = Date.now()
		todo.save()
	//	res.redirect('/')
		res.end('success')
	})
}