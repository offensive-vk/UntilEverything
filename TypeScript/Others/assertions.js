// Using 'as' for Type Assertion
var value = "Hello, TypeScript!";
var _length = value.length;
console.log("Length:", _length);
// Using 'as any' for Type Assertion
var data = 42;
var squared = data * data;
console.log("Squared:", squared);
// Using Type Casting (Alternative to 'as' syntax)
var numValue = "123";
var numLength = numValue.length;
console.log("Number Length:", numLength);
var unionValue = "Hello, Union!";
var unionLength = unionValue.length;
console.log("Union Length:", unionLength);
// Using 'as any' to bypass TypeScript type checking
var someValue = 10;
var stringLength = someValue.length; // No error, but potentially unsafe
console.log("String Length (unsafe):", stringLength);
// Using 'unknown' type with type assertion
var unknownValue = "TypeScript";
var unknownLength = unknownValue.length;
console.log("Unknown Length:", unknownLength);
