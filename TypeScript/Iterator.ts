const numbers = [1, 2, 3, 4, 5];

// Create an iterator from the array
const iterator = numbers[Symbol.iterator]();

// Iterate over the array using the iterator
console.log("Using iterator in TypeScript:");
let result = iterator.next();
while (!result.done) {
    console.log(result.value);
    result = iterator.next();
}

export { };