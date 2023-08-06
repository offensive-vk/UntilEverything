// Optional Parameters
function greet(name: string, greeting?: string) {
    if (greeting) {
        console.log(`${greeting}, ${name}!`);
    } else {
        console.log(`Hello, ${name}!`);
    }
}

greet("John");
greet("Jane", "Hi");

// Default Parameter Values
function multiply(a: number, b: number = 1) {
    return a * b;
}

console.log(multiply(5));
console.log(multiply(5, 2)); 
