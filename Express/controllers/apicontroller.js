var bodyParser = require('body-parser');

// use bodyParser to provide POST json data
var jsonParser = bodyParser.json();

module.exports = function(app) {

  // respond to a GET request for /api
  app.get('/api/person/:id', function(req, res) {
    // get person with :id from database
    res.json({
      firstname: "John",
      lastname: "Doe"
    });
  });

  // respond to a POST request for /api
  app.post('/api/person', jsonParser, function(req, res) {
    // save to database
  });

  // respond to a DELETE request for /api
  app.delete('/api/person/:id', function(req, res) {
    // delete person with :id from database
  });

}