var express = require('express');
var router = express.Router();

var location = require('../models/location');


location.methods(['get', 'put', 'post', 'delete']);
location.register(router, '/location');

module.exports = router;