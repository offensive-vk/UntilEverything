/***
 * @description Person interface for testing
 * @interface Person
 * @returns {name, age} string
 */

interface Person {
    name: string;
    age: number;
}

function greet(person: Person) {
    console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}

const john = { name: "John Wick", age: 25, occupation: "Engineer" };
greet(john);

// Some Advanced
interface User {
    username: string;
    email: string;
    password: string;
}

function registerUser(newUser: User): void {
    console.log("Username : "+newUser.username);
    console.log("Password : "+newUser.password);
    console.log("Email : "+newUser.email);
    
    // Returns the whole object of the user.
    console.log("User registered:", newUser);
}

const newUser: User = {
    username: "john_wick09",
    email: "john@ferrari.com",
    password: "strongP@ssword",
};

registerUser(newUser);
export { }