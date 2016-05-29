// Dependencies 
var express = require('express');
var router = express.Router();

//Routes
var Users = require('../models/users');

Users.methods(['get', 'post', 'put', 'delete']);
Users.register(router, '/users');

//Return router
module.exports = router;