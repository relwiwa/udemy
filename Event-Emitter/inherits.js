var EventEmitter = require('events');
var util = require('util');

function Greetr() {
  this.greeting = 'Hello';
}

// Greetr inherits prototype of EventEmitter
util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
  // Greetr now has its own properties...
  console.log(this.greeting + ": " + data);
  // ... and those of EventEmitter
  this.emit('greet', data);
}

var greetr1 = new Greetr();

greetr1.on('greet', function(data) {
  console.log("Someone greeted someone: " + data);
});

greetr1.greet("Someone");

function A() {
  this.propertyA = "a";
}

console.log(A.prototype);

function B() {
  this.propertyB = "b";
}

util.inherits(B, A);

var a = new A();
var b = new B();

console.log(b.propertyA);