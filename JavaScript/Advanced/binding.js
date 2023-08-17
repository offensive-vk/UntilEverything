function greet(message) {
    console.log(`${message}, ${this.name}!`);
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };
const person3 = { name: "Charlie" };

// Using call() to explicitly bind `this`
greet.call(person1, "Hello"); // Output: Hello, Alice!
greet.call(person2, "Hi");    // Output: Hi, Bob!

// Using apply() to explicitly bind `this`
greet.apply(person1, ["Hey"]); // Output: Hey, Alice!
greet.apply(person3, ["Hola"]); // Output: Hola, Charlie!

