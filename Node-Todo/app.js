'use strict';

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
//var setupController = require('./controllers/setupController.js');
var apiController = require('./controllers/apiController.js');
var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString());
//setupController(app);
apiController(app);

app.listen(port, function(err, res) {
  if (err) {
    console.log('Error happened during server startup:', err);
  }
  else {
    console.log('Server started successfully');
  }
});