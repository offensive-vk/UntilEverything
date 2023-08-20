// Creating a new WeakMap
const weakMap = new WeakMap();

// Creating some objects
const obj1 = {};
const obj2 = {};

// Adding key-value pairs to the WeakMap
weakMap.set(obj1, 'value1');
weakMap.set(obj2, 'value2');

// Retrieving values from the WeakMap
console.log(`Value for obj1: ${weakMap.get(obj1)}`);
console.log(`Value for obj2: ${weakMap.get(obj2)}`);

// Checking if objects exist in the WeakMap
console.log(`Has obj1: ${weakMap.has(obj1)}`);
console.log(`Has obj3: ${weakMap.has({})}`); // Different object, will return false

// Removing key-value pairs from the WeakMap
weakMap.delete(obj1);
console.log(`Has obj1 after delete: ${weakMap.has(obj1)}`);

// Creating a new WeakSet
const weakSet = new WeakSet();

// Adding objects to the WeakSet
weakSet.add(obj1);
weakSet.add(obj2);

// Checking if objects exist in the WeakSet
console.log(`Has obj1 in WeakSet: ${weakSet.has(obj1)}`);
console.log(`Has obj3 in WeakSet: ${weakSet.has({})}`); // Different object, will return false

// Removing objects from the WeakSet
weakSet.delete(obj1);
console.log(`Has obj1 in WeakSet after delete: ${weakSet.has(obj1)}`);
