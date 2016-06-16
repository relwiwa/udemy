// private property
var greeting = 'Hello world 5';

// public function
function greet() {
    console.log(greeting);
}

// only export/reveal public function
module.exports = {
    greet: greet
}