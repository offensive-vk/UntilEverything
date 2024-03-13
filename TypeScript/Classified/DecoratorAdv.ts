// Decorator function with parameters

function logClass(logMessage: string) {
    return function (target: Function) {
        console.log(`Class ${target.name} is instantiated. Log message: ${logMessage}`);
    }
}

// Applying the decorator to a class with a parameter
@logClass("This is a log message")
class ExampleClass { }

// Creating an instance of the decorated class
const example = new ExampleClass();

// Another example
// Decorator function with parameters
function simpleDecorator(logToConsole: boolean) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function () {
            if (logToConsole) {
                console.log(`Calling method ${key} of ${target.constructor.name}`);
            }
            originalMethod.apply(this, arguments);
        };
    };
}

// Class using the decorator with a parameter
class ExampleClass2 {
    @simpleDecorator(true)
    greet() {
        console.log('Hello, world!');
    }
}

// Creating an instance of the decorated class
const exampleInstance = new ExampleClass2();
exampleInstance.greet(); // This will log method call

// Creating an instance of the decorated class with logging disabled
const exampleInstanceWithoutLogging = new ExampleClass2();
exampleInstanceWithoutLogging.greet(); // This won't log method call
