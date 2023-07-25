interface Person {
    name: string;
    age: number;
}

function greet(person: Person) {
    console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}

const john = { name: "John", age: 25, occupation: "Engineer" };
greet(john); // Output: Hello, John! You are 25 years old.
