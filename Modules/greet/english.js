// get json-file; node will convert json to javascript object
var greetings = require('./greetings.json');

var greet = function() {
    console.log(greetings.en);
}

module.exports = greet;