'use strict';

class Person {

  /*  methods and properties within the constructor function
      are not on the prototype, but on every instance individually */
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  /*  methods and properties outside the constructor function
      are added to the prototype */
  greet() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
  }

}

var john = new Person('John', 'Doe');
john.greet();