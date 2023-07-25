interface Person {
    name: string;
    age: number;
}

function greet(person: Person) {
    console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}

const john = { name: "John Wick", age: 25, occupation: "Engineer" };
greet(john);
