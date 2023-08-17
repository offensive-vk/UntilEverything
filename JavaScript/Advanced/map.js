const numbers = [1, 2, 3, 4, 5];
// Using map to double each number in the array
const doubledNumbers = numbers.map(num => num * 2);

console.log("Original Array:", numbers);
console.log("Doubled Array:", doubledNumbers);

// Another
const few = ["Manish", "Rupesh"];
const names = [...few, "Sourabh", "Himanshu"];

const res = names.map(val => val += "</>");
console.log("Mapped Data: " + res);