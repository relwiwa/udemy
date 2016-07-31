var EventEmitter = require('events');
var util = require('util');

function Greetr() {
  /*  Make sure, Greetr also gets methods and properties from
      within EventEmitter's constructor function */ 
  EventEmitter.call(this);
  this.greeting = 'Hello';
}

// Greetr inherits prototype of EventEmitter (only methods)
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