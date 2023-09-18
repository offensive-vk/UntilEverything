
// Use Case 1: Combining Two or More Object Types
// Define two object types
type Person = {
    name: string;
    age: number;
};

type Address = {
    street: string;
    city: string;
};

// Create an intersection type
type PersonWithAddress = Person & Address;

// Usage
const personWithAddress: PersonWithAddress = {
    name: "Alice",
    age: 30,
    street: "123 Main St",
    city: "Exampleville",
};

console.log(personWithAddress.name);    // "Alice"
console.log(personWithAddress.street);  // "123 Main St"
