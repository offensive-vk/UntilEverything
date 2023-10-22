const fruits = ["Apple", "Banana", "Orange", "Apple", "Apple"];

// Get the element at index 0.
const firstFruit = fruits.at(0);
console.log(firstFruit); // "Apple"

// Replace all occurrences of "Apple" with "Pear".
fruits.replaceAll("Apple", "Pear");
console.log(fruits);

const numbers = [1, 2, 3, 4, 5];

// Get the element at index 3.
const thirdNumber = numbers.at(-1);
console.log(thirdNumber); 


/* New Array Functions */
// Example data: an array of arrays
const nestedArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Use Case 1: splice
// Remove elements from the middle of the array
const removedElements = nestedArray[1].splice(1, 1);
console.log("Use Case 1 (splice):", nestedArray);

// Use Case 2: some
// Check if any element in the array is greater than 5
const hasGreaterThan5 = nestedArray.some(subArray => subArray.some(num => num > 5));
console.log("Use Case 2 (some):", hasGreaterThan5);

// Use Case 3: flat
// Flatten the nested arrays into a single array
const flattenedArray = nestedArray.flat();
console.log("Use Case 3 (flat):", flattenedArray);

// Use Case 4: shift
// Remove and return the first element of the flattened array
const firstElement = flattenedArray.shift();
console.log("Use Case 4 (shift):", firstElement);
console.log("Modified Flattened Array:", flattenedArray);

// Use Case 5: values
// Get an iterator of the values in the flattened array
const valuesIterator = flattenedArray.values();
console.log("Use Case 5 (values):");
for (const value of valuesIterator) {
    console.log(value);
}