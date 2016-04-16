var mongoose = require('mongoose')
var db = mongoose.connect('mongodb://localhost/newOne')
var oneMsgSchema = mongoose.Schema({
	content:String,
	time:Date
})
var oneMsgModel = mongoose.model('oneMsgModel',oneMsgSchema)
