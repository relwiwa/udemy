// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Persona {
  private _firstName: string = '';
  
  get firstName(): string {
    return this._firstName;
  }

  set firstName (value: string) {
    if (value.length > 3) {
      this._firstName = value;
    }
    else {
        this._firstName = "";
    }
  }
}

var persona = new Persona();
console.log(persona.firstName);
persona.firstName = 'Ma';
console.log(persona.firstName);
persona.firstName = 'Maximilian';
console.log(persona.firstName);
