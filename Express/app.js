var express = require('express');
var bodyParser = require('body-parser');
var app  = express();

/*  use port on production server via environmental variable;
    on local machine use port 3000 */
var port = process.env.PORT || 3000;

// use bodyParser to provide POST form and json data
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
var jsonParser = bodyParser.json();

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

/*  respond to a GET request for '/'
    now using render so that template engine ejs is used */
app.get('/', function(req, res) {
  res.render('index');
});

/*  respond to a GET request that contains a parameter
    parameter is set in the url pattern via :id
    parameter can be accessed via req.params.id;
    now parameter gets handed to template engine */
app.get('/person/:id', function(req, res) {
  res.render('person', {
    ID: req.params.id,
    QSTR: req.query.srch
  });
});

/*  respond to POST request sending form data;
    middleware urlencodedParser is run before the actual callback
    function and provides the POST form data via req.body */
app.post('/person', urlencodedParser, function(req, res) {
  res.send('Thank you!');
  console.log(req.body.firstname, req.body.lastname);
});

/*  respond to POST request sending json data;
    middleware jsonParser is run before the actual callback
    function and provides the POST json data via req.body */
app.post('/person/json', jsonParser, function(req, res) {
  res.send('Thank you for the JSON data!');
  console.log(req.body.firstname, req.body.lastname);
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