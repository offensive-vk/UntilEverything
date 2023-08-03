function greet(person) {
    console.log("Hello, ".concat(person.name, "! You are ").concat(person.age, " years old."));
}
var john = { name: "John Wick", age: 25, occupation: "Engineer" };
greet(john);
function registerUser(newUser) {
    console.log("Username : " + newUser.username);
    console.log("Password : " + newUser.password);
    console.log("Email : " + newUser.email);
    console.log("User registered:", newUser);
}
var newUser = {
    username: "john_wick09",
    email: "john@ferrari.com",
    password: "strongP@ssword",
};
registerUser(newUser);
