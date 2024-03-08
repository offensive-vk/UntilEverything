// Function overloading

function greet(): string;
function greet(person: string): string;
function greet(person: string, age: number): string;

// Implementation of the overloaded function
function greet(person?: string, age?: number): string {
    if (person === undefined && age === undefined) {
        return `Hello user!`;
    } else if (age === undefined) {
        return `Hello, ${person}!`;
    } else {
        return `Hello, ${person}! You are ${age} years old.`;
    }
}

// Using the overloaded function
const greeting1 = greet("Lissy"); 
const greeting2 = greet("Roy", 30);
const greeting3 = greet();

console.log(greeting1);
console.log(greeting2); 
console.log(greeting3);