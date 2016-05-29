var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var http = require('http');

var app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(express.static('./public'));
app.use(express.static('./icons'));

app.use('/api', require('./routes/api'));

var server = http.createServer(app).listen(3000);
var io = require('./io/comm.js')(server);

console.log('Server is running at port ' + server.address().port + ' !');

module.exports = {
  app : app,
  server : server
};