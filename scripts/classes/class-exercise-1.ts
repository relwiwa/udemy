// Exercise 1 - How was your TypeScript Class?
class Vehicle {
    private name: string;
    private _acceleration: number;

    constructor(name: string) {
        this.name = name;
        this._acceleration = 0;
    }

    get acceleration(): number {
        return this._acceleration;
    }

    public honk(): void {
        console.log("Toooooooooot!");
    };

    public accelerate(speed: number): void {
        this._acceleration = this.acceleration + speed;
    }
}

var vehicle = new Vehicle("BMW");
vehicle.honk();
console.log(vehicle.acceleration);
vehicle.accelerate(10);
console.log(vehicle.acceleration);
