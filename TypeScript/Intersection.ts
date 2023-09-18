
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
    name: "Ryan",
    age: 30,
    street: "123 Main St",
    city: "Example",
};

console.log(personWithAddress.name);
console.log(personWithAddress.street);  
