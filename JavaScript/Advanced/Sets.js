// Sets is kinda same as Array but its functions are pretty easy to use.
let set = new Set();

let john = { name: "John" };
let peter = { name: "Peter" };
let manish = { name: "Manish" };

// visits, some users come multiple times
set.add(john);
set.add(peter);
set.add(manish);
set.add(john);
set.add(manish);

// set keeps only unique values
console.log(`The Size of Set is : ${set.size}`);
console.log("\t Displaying Data:");
for (let user of set) {
    console.log("\t-> "+user.name);
}

// More
const mySet = new Set();

// Adding elements to the Set
mySet.add(1);
mySet.add('Javascript');
mySet.add(true);

// Checking the size of the Set
console.log('Size of the Set:', mySet.size);

// Checking if an element exists in the Set
console.log('Has "JavaScript"?', mySet.has('Javascript'));
console.log('Has 2?', mySet.has(2));

// Iterating over the Set using forEach
console.log('Iterating over the Set:');
mySet.forEach(item => {
    console.log(item);
});

// Deleting an element from the Set
mySet.delete('Hello');

// Clearing all elements from the Set
mySet.clear();

// Re-populating the Set
mySet.add(5);
mySet.add(10);
mySet.add(15);

// Converting Set to an Array
const setToArray = Array.from(mySet);
console.log('Set converted to Array:', setToArray);

// Creating another Set
const anotherSet = new Set([1, 2, 3]);

// Performing union of two Sets
const unionSet = new Set([...mySet, ...anotherSet]);
console.log('Union of Sets:', unionSet);

// Performing intersection of two Sets
const intersectionSet = new Set([...mySet].filter(item => anotherSet.has(item)));
console.log('Intersection of Sets:', intersectionSet);
