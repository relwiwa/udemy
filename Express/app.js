var express = require('express');
var app  = express();

/*  use port on production server via environmental variable;
    on local machine use port 3000 */
var port = process.env.PORT || 3000;

// response to a GET request for '/'
app.get('/', function(req, res) {
  res.send('<html><head></head><body><h1>Hello World</h1></body></html>');
});

app.get('/api', function(req, res) {
  // respond with json data; express converts to json
  res.json({
    firstname: "John",
    lastname: "Doe"
  });
});

// express creates server via listen function
app.listen(port);