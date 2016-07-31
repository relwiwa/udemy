'use strict';

var Greetr = require('./inherits4a');

var greetr1 = new Greetr();

greetr1.on('greet', function(data) {
  console.log("Someone greeted someone: " + data);
});

greetr1.greet("Someone");