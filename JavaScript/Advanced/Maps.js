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
console.log(`Value for 'key2': ${myMap.get('key2')}`);

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
