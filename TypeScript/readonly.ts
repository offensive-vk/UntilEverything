interface Person {
    readonly name: string;
    age: number;
}

const john: Person = { name: "John", age: 55 };
//john.name = "Johnny"; // Error: Cannot assign to 'name' because it is a read-only property

console.log(john.name);
console.log(john.age);

const Man: Person = {name: "Manish", age: 55};