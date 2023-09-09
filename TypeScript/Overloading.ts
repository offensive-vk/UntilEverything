// Function overloads
function greet(): string {
    return `Hello user !`;
}
function greet(person: string): string;
function greet(person: string, age: number): string;

// Implementation of the overloaded function
function greet(person: string, age?: number): string {
    if (age === undefined) {
        return `Hello, ${person}!`;
    } else {
        return `Hello, ${person}! You are ${age} years old.`;
    }
}

// Using the overloaded function
const greeting1 = greet("Alice"); 
const greeting2 = greet("Bob", 30);

console.log(greeting1);
console.log(greeting2); 
console.log(greet());