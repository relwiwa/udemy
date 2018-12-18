// Exercise 2 - Two objects, based on each other ...
class BaseObject {
  protected width: number;
  protected length: number;  
  
  constructor(width: number = 0, length: number = 0) {
    this.width = width;
    this.length = length;
  }
}

class Rectangle extends BaseObject {
  constructor(width: number = 0, length: number = 0) {
    super(width, length);
  }

  public calcSize(): number {
    return this.width * this.length;
  }
}

var rectangle = new Rectangle(5, 2);
console.log(rectangle.calcSize());
