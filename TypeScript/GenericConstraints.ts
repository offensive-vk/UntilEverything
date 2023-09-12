// 1. Type Constraint: You can constrain a generic type to a specific type or a set of types. For example, you can create a function that only accepts numbers as its generic type:
function add<T extends number>(a: T, b: T): T {
    return a + b;
}

const result = add(1, 2); // Valid
const textResult = add("Hello", "World"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// 2. Interface Constraint: You can constrain a type parameter to a type that implements a particular interface. This ensures that the type passed as an argument has specific properties or methods:
interface Printable {
    print(): void;
}
function printItem<T extends Printable>(item: T) {
    item.print();
}

const obj = {
    print() {
        console.log("Printing...");
    },
};
printItem(obj); // Valid

// 3. Keyof Constraint: You can use keyof to constrain a type parameter to a specific set of keys of another type:
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const person = { name: "John", age: 30 };

const name = getProperty(person, "name"); // Valid
const gender = getProperty(person, "gender"); // Error: Argument of type '"gender"' is not assignable to parameter of type '"name" | "age"'.


/* Detailed Program */
// Define the Lengthwise interface
interface Lengthwise {
    length: number;
}

// Create the loggingIdentity function with a generic constraint
function loggingIdentity<T extends Lengthwise>(arg: T): T {
    // Now we know it has a .length property, so no more error
    console.log(`Length: ${arg.length}`);
    return arg;
}

// Example 1: Using an object that has a length property
const objectWithLength = { length: 10, value: 3 };
const result1 = loggingIdentity(objectWithLength);
console.log(result1);

// Example 2: Using an array
const array = [1, 2, 3, 4, 5];
const result2 = loggingIdentity(array);
console.log(result2);

// Example 3: Attempting to use a number, which will result in a compile-time error
// Uncomment the following line to see the error
// loggingIdentity(3);

// Example 4: Creating a custom class that implements Lengthwise
class CustomArray<T> implements Lengthwise {
    constructor(public elements: T[]) { }

    get length() {
        return this.elements.length;
    }
}

const customArray = new CustomArray([1, 2, 3, 4, 5]);
const result3 = loggingIdentity(customArray);
console.log(result3);
