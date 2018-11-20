function logged(constructorFn: Function) {
  console.log(constructorFn);
}

/*  When attaching a decorator function to a class,
    the class's constructor function gets passed to the
    decorator function */
@logged
class Person {
  constructor() {
    console.log("Hi!");
  }
}

// Factory

function logging(value: boolean) {
  return value ? logged : null;
}

@logging(true)
class Car {

}

// Advanced

function printable(constructorFn: Function) {
  constructorFn.prototype.print = function() {
    console.log(this);
  }
}

@logging(true)
@printable
class Plant {
  name = "Green Planet";
}

const plant = new Plant();

(<any>plant).print();

