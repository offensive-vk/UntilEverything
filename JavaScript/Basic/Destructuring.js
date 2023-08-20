// Define an array
const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// Destructuring assignment
const [firstFruit, secondFruit, ...restFruits] = fruits;

// Display the destructured values
console.log(`First Fruit: ${firstFruit}`);
console.log(`Second Fruit: ${secondFruit}`);
console.log(`Rest of the Fruits: ${restFruits.join(', ')}`);

// Swap variables using destructuring
let a = 50;
let b = 10;
console.log(`Before swapping: a = ${a}, b = ${b}`);
[a, b] = [b, a];
console.log(`After swapping: a = ${a}, b = ${b}`);
