// Function with no parameters
function greet() {
    console.log("Hello!");
}

// Function with one parameter
function sayHello(name: string) {
    console.log(`Hello, ${name}!`);
}

// Function with multiple parameters
function addNumbers(num1: number, num2: number) {
    const sum = num1 + num2;
    console.log(`The sum of ${num1} and ${num2} is ${sum}`);
}

// Function with default parameter
function greetWithDefault(name: string = "Guest") {
    console.log(`Hello, ${name}!`);
}

// Function with optional parameter
function greetWithOptional(name?: string) {
    if (name) {
        console.log(`Hello, ${name}!`);
    } else {
        console.log("Hello, Guest!");
    }
}

// Function with rest parameters
function sumAllNumbers(...numbers: number[]) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    console.log(`The sum of all numbers is ${sum}`);
}

// Function with return value
function multiply(a: number, b: number): number {
    return a * b;
}

// Arrow functions
async (params: unknown) => {
    return `${params} Hello. From Arrow Function.`;
}

const greeter = () => console.log(`Hello `);

// Calling the functions
greet();
sayHello("Lissy");
addNumbers(5, 3);
greetWithDefault();
greetWithDefault("Roy");
greetWithOptional();
greetWithOptional("Clair");
sumAllNumbers(1, 2, 3, 4, 5);
const result = multiply(2, 3);
console.log(`Multiplication result: ${result}`);
export { }