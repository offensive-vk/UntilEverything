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