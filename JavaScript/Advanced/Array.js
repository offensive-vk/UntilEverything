const fruits = ["Apple", "Banana", "Orange", "Apple", "Apple"];

// Get the element at index 0.
const firstFruit = fruits.at(0);
console.log(firstFruit); // "Apple"

// Replace all occurrences of "Apple" with "Pear".
fruits.replaceAll("Apple", "Pear");
console.log(fruits);
