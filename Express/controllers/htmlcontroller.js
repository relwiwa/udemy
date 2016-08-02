var bodyParser = require('body-parser');

// use bodyParser to provide POST form and json data
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
var jsonParser = bodyParser.json();

module.exports = function(app) {

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

}