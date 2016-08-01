var fs = require('fs');

// synchronous approach for reading a file
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');

console.log(greet);

/*  asynchronous approach for reading a file
    uses error-first callback pattern:
    null if no error, otherwise will contain an object defining the error */
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
  if (err === null) {
    console.log(data);
  }
  else {
    console.log("There was an error reading the file", err);
  }
});

console.log('Done!');