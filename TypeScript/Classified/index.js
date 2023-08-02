var log = console.log;
var table = console.table;
var FourWheeler = /** @class */ (function () {
    function FourWheeler(tyres, doors, color, brand, seats, name) {
        this.tyres = tyres;
        this.doors = doors;
        this.color = color;
        this.brand = brand;
        this.seats = seats;
        this.name = name;
        this.getDetails();
    }
    FourWheeler.prototype.start = function () {
        log("".concat(this.name, " is starting up."));
    };
    FourWheeler.prototype.stop = function () {
        log("".concat(this.name, " is stopping."));
    };
    FourWheeler.prototype.speed = function () {
        log("Current Speed : ".concat(Math.floor(Math.random() * 900) + 100, "km/h"));
    };
    FourWheeler.prototype.getDetails = function () {
        log("Number of Doors : ".concat(this.doors));
        log("Number of Seats : ".concat(this.seats));
        log("Number of Tyres : ".concat(this.tyres));
        log("Brand Name : ".concat(this.brand));
        log("Vehicle Color : ".concat(this.color));
    };
    return FourWheeler;
}());
// With Constructor
// We'll use our traditional constructor approach
var Supra = new FourWheeler(4, 2, "Skyblue", "Toyota", 2, "Supra");
Supra.start();
Supra.speed();
Supra.stop();
// Without constructor
// 1. We can also initialize the members of the class by manually assigning values;
// var Audi = new FourWheeler();
// Audi.brand = "Audi RS6";
// Audi.color = "Black";
// log(`Brand Name : ${Audi.brand}`);
// log(`Color Name : ${Audi.color}`);
// End so on one by one ......................
function displayObj(value) {
    log("\n=============================\n");
    log("".concat(value, " is an object of ").concat(FourWheeler, " class."));
    value.start();
    value.speed();
    value.stop();
    log("\n=============================\n");
}
displayObj(Supra);
