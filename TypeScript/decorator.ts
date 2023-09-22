/* 
Decorators are a feature of TypeScript that allow you to modify the behavior of a class, property, method, or parameter. They are a way to add additional functionality to existing code, and they can be used for a wide range of tasks, including logging, performance optimization, and validation.

*/
function sayHi(target: Function){
    setTimeout(() => console.log(`Hi ${target.name} is used.`), 1500);
}
// Decorator function
function logClass(target: Function) {
    console.log(`Class ${target.name} is instantiated.`);
}

// Applying the decorator to a class
@logClass
class ExampleClass { }

// Creating an instance of the decorated class
const Example = new ExampleClass();
