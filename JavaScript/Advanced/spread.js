// Spread with Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2];
console.log("Combined Array:", combinedArray);

const clonedArray = [...array1];
console.log("Cloned Array:", clonedArray);

// Spread with Objects
const object1 = { name: "John", age: 25 };
const object2 = { city: "New York", country: "Russia" };

const combinedObject = { ...object1, ...object2 };
console.log("Combined Object:", combinedObject);

const clonedObject = { ...object1 };
console.log("Cloned Object:", clonedObject);

// Spread with Function Arguments
function sum(a, b, c) {
    return a + b + c;
}

const numbers = [1, 2, 3];
const result = sum(...numbers);
console.log("Sum:", result);

// Spread in Function Calls
const parts = ["head", "shoulders"];
const lyrics = ["knees", "toes"];

const bodyParts = ["eyes", ...parts, ...lyrics, "and", "toes"];
console.log("Body Parts:", bodyParts);

// Spread in Function Parameters
function displayInfo(firstName, lastName, age) {
    console.log(`Name: ${firstName} ${lastName}, Age: ${age}`);
}

const person = ["John", "Wick", 30];
displayInfo(...person);

// Spread for Copying Arrays and Objects
const originalArray = [10, 20, 30];
const copiedArray = [...originalArray];

const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };

console.log("Copied Array:", copiedArray);
console.log("Copied Object:", copiedObject);
