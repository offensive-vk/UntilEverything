/*
Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

Methods and properties are:
new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the element (the key/value pair) by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.
*/

// Creating a new Map
const myMap = new Map();

// Adding key-value pairs to the Map
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');

// Checking if a key exists in the Map
console.log(`Has 'key1': ${myMap.has('key1')}`);
console.log(`Has 'key4': ${myMap.has('key4')}`);

// Getting a value using a key
console.log(`Value for 'key1': ${myMap.get('key1')}`);
console.log(`Value for 'key2': ${myMap.get('key2')}`);
console.log(`Value for 'key3': ${myMap.get('key3')}`);

// Getting the size of the Map
console.log(`Size of the Map: ${myMap.size}`);

// Iterating through the Map using forEach
console.log('Iterating through the Map:');
myMap.forEach((value, key) => {
    console.log(`${key} => ${value}`);
});

// Deleting a key-value pair
myMap.delete('key2');
console.log(`Size after deleting 'key2': ${myMap.size}`);

// Clearing the entire Map
myMap.clear();
console.log(`Size after clearing: ${myMap.size}`);

// End 