const numbers = [1, 2, 3, 4, 5];

// Using reduce to calculate the sum of numbers in the array
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log("Original Array:", numbers);
console.log("Sum of Numbers:", sum);
