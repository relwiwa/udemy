var util = require('util');

function Person() {
  this.firstname = 'John';
  this.lastname = 'Doe';
}

Person.prototype.greet = function() {
  console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function Policeman() {
  /* Call Person constructor function to also get properties 
     of Person that are not in the prototype chain.
     call(this) ensures that this points to the new Policeman
     object */
  Person.call(this);
  this.badgenumber = '1234';
}

util.inherits(Policeman, Person);

var officer = new Policeman();
officer.greet();