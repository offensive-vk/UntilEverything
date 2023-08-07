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
// Simple error catching 
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
try {
    var result = divide(10, 0);
    console.log("Result:", result);
}
catch (error) {
    console.error("Caught an error:", error.message);
}
// with classes
var CustomError = /** @class */ (function (_super) {
    __extends(CustomError, _super);
    function CustomError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "CustomError";
        return _this;
    }
    return CustomError;
}(Error));
function doSomething() {
    throw new CustomError("Something went wrong!");
}
try {
    doSomething();
}
catch (error) {
    if (error instanceof CustomError) {
        console.error("Caught a CustomError:", error.message);
    }
    else {
        console.error("Caught an unknown error:", error.message);
    }
}
// Multiple errors with try and catch.
function processNumbers(a, b) {
    try {
        var result = divide(a, b);
        console.log("Result:", result);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Caught a general error:", error.message);
        }
        else {
            console.error("Caught an unknown error:", error);
        }
    }
}
try {
    processNumbers(10, 0);
    processNumbers(20, 5);
}
catch (error) {
    console.error("Caught an error outside the function:", error);
}
