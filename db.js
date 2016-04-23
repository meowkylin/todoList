var mongoose = require('mongoose')
var db = mongoose.connect('mongodb://localhost/newOne')
var oneMsgSchema = mongoose.Schema({
	content:String,
	deadline:Date
})
var oneMsgModel = mongoose.model('oneMsgModel',oneMsgSchema)
