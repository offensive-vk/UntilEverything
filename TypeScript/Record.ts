/* 
Record constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.

*/
// Example 1: Creating a record with specific keys and a common value type
type FruitRecord = Record<'apple' | 'banana' | 'cherry', number>;

const fruitCounts: FruitRecord = {
    apple: 5,
    banana: 10,
    cherry: 3,
};

console.log(fruitCounts);

// Example 2: Using a more complex type for the values
type PersonRecord = Record<'name' | 'age' | 'email', string | number>;

const person: PersonRecord = {
    name: 'Mike',
    age: 30,
    email: 'mike@goofy.aah',
};

console.log(person);

