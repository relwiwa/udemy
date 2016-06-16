// require greet.js, .js gets added automatically
var mod_export = require('./greet');

// create new instance and call public function
var x = new mod_export();
x.public();

// call public function of exported instance
//mod_export.public();