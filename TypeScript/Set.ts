/**
 * A Set is another built-in object in JavaScript, introduced in ECMAScript 6 (ES6), that allows you to store unique values of any type, whether primitive values or object references. Unlike arrays, Set objects do not allow duplicate values, and the order of elements is based on the order of insertion.
 */
// Creating a Set
const mySet = new Set<number>();

// Adding values
mySet.add(1);
mySet.add(2);
mySet.add(3);

// Checking if a value exists
console.log(`Has value 2: ${mySet.has(2)}`); // Output: true
console.log(`Has value 4: ${mySet.has(4)}`); // Output: false

// Iterating over values
console.log('Iterating over values:');
mySet.forEach(value => {
    console.log(`Value: ${value}`);
});

// Size of the Set
console.log(`Size of the Set: ${mySet.size}`); // Output: 3

// Deleting a value
mySet.delete(2);

// Size after deleting
console.log(`Size after deleting: ${mySet.size}`); // Output: 2

// Clearing the Set
mySet.clear();

// Size after clearing
console.log(`Size after clearing: ${mySet.size}`); // Output: 0
