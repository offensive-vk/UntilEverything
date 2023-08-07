// Optional Parameters
function greet(name, greeting) {
    if (greeting) {
        console.log("".concat(greeting, ", ").concat(name, "!"));
    }
    else {
        console.log("Hello, ".concat(name, "!"));
    }
}
greet("John");
greet("Jane", "Hi");
// Default Parameter Values
function multiply(a, b) {
    if (b === void 0) { b = 1; }
    return a * b;
}
console.log(multiply(5));
console.log(multiply(5, 2));
// Optional Parameters with Default Values
function _greet(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    console.log("".concat(greeting, ", ").concat(name, "!"));
}
_greet("John");
_greet("Jane", "Hi");
