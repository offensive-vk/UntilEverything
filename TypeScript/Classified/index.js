var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var TwoWheeler = /** @class */ (function (_super) {
    __extends(TwoWheeler, _super);
    function TwoWheeler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TwoWheeler;
}(FourWheeler));
