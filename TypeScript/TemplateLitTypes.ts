// Define a template literal type for creating welcome messages
type WelcomeMessage<Name extends string> = `Hello, ${Name}! Welcome to our website.`;

// Create a function that generates welcome messages
function generateWelcomeMessage<Name extends string>(name: Name): WelcomeMessage<Name> {
    return `Hello, ${name}! Welcome to our website.`;
}

// Usage
const greeting1: WelcomeMessage<"John"> = generateWelcomeMessage("John");
console.log(greeting1);

const greeting2: WelcomeMessage<"Clair"> = generateWelcomeMessage("Clair");
console.log(greeting2); 

// Define a template literal type for creating URLs
type URLPattern = `${string}://www.${string}.${string}`;

// Create a function that constructs URLs
function constructURL(protocol: string, domain: string, extension: string): URLPattern {
    return `${protocol}://www.${domain}.${extension}`;
}

// Usage
const websiteURL: URLPattern = constructURL("https", "example", "com");
console.log(websiteURL); // "https://www.example.com"
export { }