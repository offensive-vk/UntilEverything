// A utility function that can validate the input value against a constraint
function isType<T extends { [key: string]: any }>(input: any, constructor: new (...args: any[]) => T): input is T {
    return input instanceof constructor;
}

// Now, let's use these functions to validate type parameters in our generic function
function PerformAction<T extends { [key: string]: any }>(input: any, constructor: new (...args: any[]) => T): T {
    if (isType<T>(input, constructor)) {
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
        console.log(`New Animal named ${this.name} of ${this.breed} breed has been spawned.`);
    }
}

const myDog = new Dog('Max', 'Ancient');

// This will pass validation and return the dog instance
const validDog = PerformAction<Dog>(myDog, Dog);

// This will throw an error because a Cat is not a Dog
// const invalidDog = PerformAction<Dog>({ name: 'Fluffy', breed: 'Cat' }, Dog);

export { };