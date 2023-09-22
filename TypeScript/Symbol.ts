// Define a symbol
const uniqueSymbol = Symbol('mySymbol');

// Create an object with a symbol as a property key
const myObject = {
    [uniqueSymbol]: 'This is a symbol property',
};

// Access the symbol property
console.log(myObject[uniqueSymbol]); // Output: This is a symbol property

// Attempt to access it using a string key
console.log(myObject['mySymbol']); // Output: undefined

// Symbols are unique, even with the same description
const symbol1 = Symbol('mySymbol');
const symbol2 = Symbol('mySymbol');

console.log(symbol1 === symbol2); // Output: false

// Symbols can be used as property keys in class instances
class MyClass {
    constructor(value: string) {
        this[uniqueSymbol] = value;
    }

    getValue() {
        return this[uniqueSymbol];
    }
}

const myInstance = new MyClass('Hello, Symbol!');
console.log(myInstance.getValue()); // Output: Hello, Symbol!

// Symbols can be used in place of method names
const incrementSymbol = Symbol('increment');
const decrementSymbol = Symbol('decrement');

class Counter {
    private count = 0;

    [incrementSymbol]() {
        this.count++;
    }

    [decrementSymbol]() {
        this.count--;
    }

    getCount() {
        return this.count;
    }
}

const counter = new Counter();
counter[incrementSymbol]();
counter[incrementSymbol]();
counter[decrementSymbol]();

console.log(counter.getCount());
