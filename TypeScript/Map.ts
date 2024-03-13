/**
 * A Map is a built-in object in JavaScript that allows you to store key-value pairs where both the keys and the values can be of any data type. 
 * In other words, it's a collection of elements where each element is a key-value pair.
 */

// Creating a Map
const myMap = new Map<number, string>();

// Adding key-value pairs
myMap.set(1, 'One');
myMap.set(2, 'Two');
myMap.set(3, 'Three');

// Getting values by key
console.log(`Value for key 1: ${myMap.get(1)}`); // Output: One
console.log(`Value for key 2: ${myMap.get(2)}`); // Output: Two

// Checking if a key exists
console.log(`Has key 3: ${myMap.has(3)}`); // Output: true
console.log(`Has key 4: ${myMap.has(4)}`); // Output: false

// Iterating over keys and values
console.log('Iterating over keys and values:');
myMap.forEach((value, key) => {
    console.log(`Key: ${key}, Value: ${value}`);
});

// Deleting a key
myMap.delete(2);

// Size of the Map
console.log(`Size of the Map: ${myMap.size}`); // Output: 2

// Clearing the Map
myMap.clear();

// Size after clearing
console.log(`Size after clearing: ${myMap.size}`); // Output: 0
