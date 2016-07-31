'use strict';

var EventEmitter = require('events');

class Greetr extends EventEmitter {

  constructor() {
    // Call constructor function of super constructor EventEmitter
    super();
    this.greeting = 'Hello';
  }

  greet(data) {
    console.log(this.greeting + ": " + data);
    this.emit('greet', data);
  }

}

var greetr1 = new Greetr();

greetr1.on('greet', function(data) {
  console.log("Someone greeted someone: " + data);
});

greetr1.greet("Someone");