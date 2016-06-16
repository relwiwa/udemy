// require function directly
var greet1 = require('./greet1');
greet1();

// require whole object and use function
var greet2a = require('./greet2');
greet2a.greet();

// require whole object, but save just the desired method of the object
var greet2b = require('./greet2').greet;
greet2b();

// require newly created object instance
var greet3a = require('./greet3');
greet3a.greet();

// change property of object
greet3a.greeting = "Changed hello world 3";

// this version of greet3 is the cached one from greet3a require
var greet3b = require('./greet3');

// greet3b reflects the changed property from greet3a
greet3b.greet(); // Changed hello world

// require constructor function, create instance, use function
var Greet4 = require('./greet4');
var greet4Instance = new Greet4();
greet4Instance.greet();

// require object with revealed public function/s
var greet5 = require('./greet5');
greet5.greet();