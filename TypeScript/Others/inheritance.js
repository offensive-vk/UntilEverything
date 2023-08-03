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
// Base class implementing the Animal interface
var BaseAnimal = /** @class */ (function () {
    function BaseAnimal(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    BaseAnimal.prototype.makeSound = function () {
        console.log("".concat(this.name, " says ").concat(this.sound));
    };
    return BaseAnimal;
}());
// Derived class Dog, extending from BaseAnimal
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name, "Woof!") || this;
    }
    return Dog;
}(BaseAnimal));
// Derived class Cat, extending from BaseAnimal
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name, "Meow!") || this;
    }
    return Cat;
}(BaseAnimal));
// Usage example
var dog = new Dog("Buddy");
var cat = new Cat("Whiskers");
dog.makeSound(); // Output: Buddy says Woof!
cat.makeSound(); // Output: Whiskers says Meow!
