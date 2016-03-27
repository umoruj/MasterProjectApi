var restful = require('node-restful');
var mongoose = restful.mongoose;


var locationSchema = new mongoose.Schema({
	userID: String,
	location: String,
	timestamp: String,
	dataTuple: []

});

module.exports = restful.model('location', locationSchema);