var express = require('express');
var app  = express();

/*  use port on production server via environmental variable;
    on local machine use port 3000 */
var port = process.env.PORT || 3000;

// middleware for static files
app.use('/assets', express.static(__dirname + '/public'));

// respond to a GET request for '/'
app.get('/', function(req, res) {
  res.send('<html><head><link href="assets/style.css" type="text/css" rel="stylesheet" /></head><body><h1>Hello World</h1></body></html>');
});

/* respond to a GET request that contains a parameter
    parameter is set in the url pattern via :id
    parameter can be accessed via req.params.id */
app.get('/person/:id', function(req, res) {
  res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
});

// respond to a GET request for /api
app.get('/api', function(req, res) {
  // respond with json data; express automatically converts to json
  res.json({
    firstname: "John",
    lastname: "Doe"
  });
});

// express creates server via listen function
app.listen(port);