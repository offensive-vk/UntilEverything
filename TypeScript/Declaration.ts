// Declare a global variable
declare var myGlobalVariable: string;

// Declare a function from an external JavaScript library
declare function myExternalFunction(arg1: number, arg2: string): boolean;

// Declare an interface for an external object
declare interface MyExternalObject {
    name: string;
    age: number;
    greet(): void;
}

// Use the declared global variable
myGlobalVariable = "Hello, world!";
console.log(myGlobalVariable); // Output: Hello, world!

// Use the declared function from an external library
const result = myExternalFunction(10, "Hello");
console.log(result);

// Use the declared interface for an external object
const myObject: MyExternalObject = {
    name: "John",
    age: 25,
    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    },
};

myObject.greet(); 