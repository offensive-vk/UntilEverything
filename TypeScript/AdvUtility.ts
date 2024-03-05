// We create a utility function that can validate the input value against a constraint
function isType<T extends { [key: string]: any }>(input: any, constructor: new (...args: any[]) => T): input is T {
    return input instanceof constructor;
}

// Now, let's use these functions to validate type parameters in our generic function
function performAction<T extends { [key: string]: any }>(input: any, constructor: new (...args: any[]) => T): T {
    if (isType<T>(input, constructor)) {
        // If the input value satisfies the constraint, we perform the action and return the result
        return input;
    } else {
        throw new Error('Input does not satisfy the type constraint');
    }
}

// Example usage
class Animal {
    constructor(public name: string) { }
}

class Dog extends Animal {
    constructor(name: string, public breed: string) {
        super(name);
    }
}

const myDog = new Dog('Max', 'Labrador');

// This will pass validation and return the dog instance
const validDog = performAction<Dog>(myDog, Dog);

// This will throw an error because a Cat is not a Dog
const invalidDog = performAction<Dog>({ name: 'Fluffy', breed: 'Cat' }, Dog);