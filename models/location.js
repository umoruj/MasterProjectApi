var restful = require('node-restful');
var mongoose = restful.mongoose;


var locationSchema = new mongoose.Schema({
	userID: String,
	location: String,
	timestamp: String,
	signalStrength1: String,
	signalStrength2: String,
	signalStrength3: String,
	signalStrength4: String

});

module.exports = restful.model('location', locationSchema);