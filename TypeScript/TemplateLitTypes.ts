

// Define a template literal type for creating welcome messages
type WelcomeMessage<Name extends string> = `Hello, ${Name}! Welcome to our website.`;

// Create a function that generates welcome messages
function generateWelcomeMessage<Name extends string>(name: Name): WelcomeMessage<Name> {
    return `Hello, ${name}! Welcome to our website.`;
}

// Usage
const greeting1: WelcomeMessage<"John"> = generateWelcomeMessage("John");
console.log(greeting1);

const greeting2: WelcomeMessage<"Bob"> = generateWelcomeMessage("Bob");
console.log(greeting2); 