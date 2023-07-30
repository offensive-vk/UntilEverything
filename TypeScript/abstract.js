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
// This abstract class implements the Animal interface and defines a method called eat().
var AbstractAnimal = /** @class */ (function () {
    function AbstractAnimal(name) {
        this.name = name;
    }
    AbstractAnimal.prototype.speak = function () {
    };
    ;
    return AbstractAnimal;
}());
// This class extends the AbstractAnimal class and implements the eat() method.
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.eat = function () {
        return "".concat(this.name, " is eating!");
    };
    Dog.prototype.speak = function () {
        // console.log(`${this.name} is speaking !`);
        return "".concat(this.name, " is speaking !");
    };
    return Dog;
}(AbstractAnimal));
// This function creates an instance of the Dog class and calls the speak() and eat() methods.
function main() {
    var dog = new Dog("Raccoon");
    console.log(dog.speak());
    console.log(dog.eat());
}
main();
// This is the output of the program.
// Woof!
// Spot is eating!
