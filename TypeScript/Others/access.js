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
var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function () {
        console.log("Hello, " + this.getName());
    };
    Greeter.prototype.getAge = function () {
        console.log("Age: " + this.getAge);
    };
    Greeter.prototype.getName = function () {
        return "hi";
    };
    return Greeter;
}());
var g = new Greeter();
g.greet();
//g.getAge(); // Private 
var SpecialGreeter = /** @class */ (function (_super) {
    __extends(SpecialGreeter, _super);
    function SpecialGreeter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpecialGreeter.prototype.howdy = function () {
        // OK to access protected member here
        console.log("Howdy, " + this.getName());
    };
    return SpecialGreeter;
}(Greeter));
var s = new SpecialGreeter();
s.greet(); // OK
s.howdy();
//s.getName(); // error