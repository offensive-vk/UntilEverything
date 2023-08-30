// Spread with Arrays
const array1: number[] = [1, 2, 3];
const array2: number[] = [4, 5, 6];

const combinedArray: number[] = [...array1, ...array2];
console.log("Combined Array:", combinedArray);

const clonedArray: number[] = [...array1];
console.log("Cloned Array:", clonedArray);

// Spread with Objects
const object1: { name: string; age: number } = { name: "Alex", age: 25 };
const object2: { city: string; country: string } = { city: "New York", country: "USA" };

const combinedObject = { ...object1, ...object2 };
console.log("Combined Object:", combinedObject);

const clonedObject = { ...object1 };
console.log("Cloned Object:", clonedObject);

// Spread with Function Arguments
function sum(a: number, b: number, c: number):number {
    return a + b + c;
}

const Some: Array<number> = [10, 20, 30];
console.log("Sum:", sum(Some[0], Some[1], Some[2]));

// Spread in Function Calls
const parts: string[] = ["head", "shoulders"];
const lyrics: string[] = ["knees", "toes"];

const bodyParts: string[] = ["eyes", ...parts, ...lyrics, "and", "toes"];
console.log("Body Parts:", bodyParts);

// Spread in Function Parameters
function displayInfo(firstName: string, lastName: string, age: number): void {
    console.log(`Name: ${firstName} ${lastName}, Age: ${age}`);
}

const person: [string, string, number] = ["John", "Wick", 30];
displayInfo(...person);

// Spread for Copying Arrays and Objects
const originalArray: number[] = [10, 20, 30];
const copiedArray: number[] = [...originalArray];

const originalObject: { a: number; b: number } = { a: 1, b: 2 };
const copiedObject: { a: number; b: number } = { ...originalObject };

console.log("Copied Array:", copiedArray);
console.log("Copied Object:", copiedObject);
