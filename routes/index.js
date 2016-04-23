//  

var express = require('express')
var mongoose = require('mongoose')
var oneMsgModel = mongoose.model('oneMsgModel',oneMsgModel)

exports.index =  function(req, res){ 
	oneMsgModel.find().exec(function (err, todos){
		if(err) {return next(err)}
		res.json(todos).end()
	})}

exports.create = (req, res)=> {
	new oneMsgModel({
			content:req.body.content,
			deadline:req.body.deadline
		})
		.save((err,todo)=>{
			if(err) { return next(err)}
			res.json(todo._id)
		})
}

exports.delete = (req, res)=> {
	oneMsgModel.findById( req.params.id, function ( err, todo ){
		todo.remove((err,todo)=>{
			if(err) { return next(err)}
			res.json(todo._id)
		})
	})
}


exports.update = (req, res)=> {
	oneMsgModel.findById( req.params.id, function( err, todo){
		todo.content = req.body.content
		todo.deadline = req.body.deadline
		todo.save((err,todo)=>{
			if(err) { return next(err)}
			res.json(todo._id)
		})
	})
}