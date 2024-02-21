function greet(message) {
    console.log(`${message}, ${this.name}!`);
}

const person1 = { name: "Ali" };
const person2 = { name: "Python" };
const person3 = { name: "Char" };

// Using call() to explicitly bind `this`
greet.call(person1, "Hello"); 
greet.call(person2, "Hi");   

// Using apply() to explicitly bind `this`
greet.apply(person1, ["Hey"]); 
greet.apply(person3, ["Hola"]);

// Using bind() to create a new function with bound `this`
const greetPerson2 = greet.bind(person2, "Greetings");
const greetPerson3 = greet.bind(person3, "Salutations");

greetPerson2();
greetPerson3(); 