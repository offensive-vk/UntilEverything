function greet(person) {
    console.log("Hello, ".concat(person.name, "! You are ").concat(person.age, " years old."));
}
var john = { name: "John Wick", age: 25, occupation: "Engineer" };
greet(john);
