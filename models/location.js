var restful = require('node-restful');
var mongoose = restful.mongoose;


var locationSchema = new mongoose.Schema({
	userID: String,
	location: String,
	timestamp: String,
	distance1: Number,
	distance2: Number,
	distance3: Number,
	distanec4: Number

});

module.exports = restful.model('location', locationSchema);