/* 
 * Decorators are a feature of TypeScript that allow you to modify the behavior of a class, property, method, or parameter. 
 * They are a way to add additional functionality to existing code.
 * They can be used for a wide range of tasks, including logging, performance optimization, and validation.
*/

// Decorator function
function logClass(target: Function, descriptor?: PropertyDescriptor) {
    console.log(`Class ${target.name} is instantiated.`);
}

// Applying the decorator to a class
@logClass
class ExampleClass { }

// Creating an instance of the decorated class
const Example = new ExampleClass();

// 2. Another example
// Decorator function
function simpleDecorator(target: any, key?: string) {
    console.log(`Decorator applied to ${key} of ${target.constructor.name}`);
}

// Class using the decorator
class ExampleClass2 {
    @simpleDecorator
    greet() {
        console.log('Hello, world!');
    }
}

// Creating an instance of the decorated class
const exampleInstance = new ExampleClass2();
exampleInstance.greet();