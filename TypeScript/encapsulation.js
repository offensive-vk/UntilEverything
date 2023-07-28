var Car = /** @class */ (function () {
    function Car(make, model) {
        this.make = make;
        this.model = model;
    }
    Car.prototype.getMake = function () {
        return this.make;
    };
    Car.prototype.getModel = function () {
        return this.model;
    };
    Car.prototype.startEngine = function () {
        console.log("Starting the engine of ".concat(this.make, " ").concat(this.model, "."));
    };
    Car.prototype.drive = function () {
        console.log("".concat(this.make, " ").concat(this.model, " is being driven."));
    };
    return Car;
}());
var myCar = new Car("Toyota", "Camry");
console.log("Make: ".concat(myCar.getMake()));
console.log("Model: ".concat(myCar.getModel()));
myCar.startEngine();
myCar.drive(); // Error: Property 'drive' is private and only accessible within class 'Car'.
