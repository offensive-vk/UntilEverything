
// All Types of Explicit Typecasting in JS

// Typecasting to String
const number = 42;
const numberAsString = String(number);
console.log("Number as String:", numberAsString, typeof numberAsString);

// Typecasting to Number
const stringNumber = "123";
const stringToNumber = Number(stringNumber);
console.log("String to Number:", stringToNumber, typeof stringToNumber);

// Typecasting to Boolean
const truthyValue = "hello";
const falsyValue = "";
const truthyBoolean = Boolean(truthyValue);
const falsyBoolean = Boolean(falsyValue);
console.log("Truthy Boolean:", truthyBoolean, typeof truthyBoolean);
console.log("Falsy Boolean:", falsyBoolean, typeof falsyBoolean);

// Typecasting to Array
const singleItem = "item";
const arrayFromItem = Array.from(singleItem);
console.log("Array from Item:", arrayFromItem, Array.isArray(arrayFromItem));

// Typecasting to Object
const keyValuePairs = [["key1", "value1"], ["key2", "value2"]];
const objectFromPairs = Object.fromEntries(keyValuePairs);
console.log("Object from Pairs:", objectFromPairs, typeof objectFromPairs);

// Typecasting to Date
const dateString = "2023-08-20";
const dateObject = new Date(dateString);
console.log("Date Object:", dateObject, typeof dateObject);
