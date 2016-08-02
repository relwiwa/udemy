var express = require('express');
var app  = express();

var apicontroller = require('./controllers/apicontroller');
var htmlcontroller = require('./controllers/htmlcontroller');

/*  use port on production server via environmental variable;
    on local machine use port 3000 */
var port = process.env.PORT || 3000;

/*  use ejs as template engine
    express uses views directory per default */
app.set('view engine', 'ejs');

// middleware for static files
app.use('/assets', express.static(__dirname + '/public'));

// create custom middleware
app.use('/', function(req, res, next) {
  console.log('Request Url: ' + req.url);
  next();
});

htmlcontroller(app);
apicontroller(app);

// express creates server via listen function
app.listen(port);