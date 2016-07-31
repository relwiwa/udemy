'use strict';

var EventEmitter = require('events');

module.exports = class Greetr extends EventEmitter {

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