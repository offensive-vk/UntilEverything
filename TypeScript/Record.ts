/* 
Record constructs an object type whose property keys are Keys and whose property values are Type. 
This utility can be used to map the properties of a type to another type.

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

// Example 3: Creating a record with dynamically generated keys
function createRecord<T>(keys: string[], defaultValue: T): Record<string, T> {
    const record: Record<string, T> = {};

    keys.forEach((key) => {
        record[key] = defaultValue;
    });

    return record;
}

const dynamicRecord = createRecord(['one', 'two', 'three'], 0);
console.log(dynamicRecord);

// Example 4: Using Record to define a dictionary-like object
type Dictionary<T> = Record<string, T>;

const colors: Dictionary<string> = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF',
};

console.log(colors);