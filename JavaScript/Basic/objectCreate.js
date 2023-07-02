const person = {
    name: "John Wick",
    age: 25,
    profession: "Engineer",
};

console.log(person.name);
console.log(person.age);
console.log(person.profession);

//display by another method

for (let key in person) {
    console.log(key + ": " + person[key]);
}
// to add a property in Object :
person.salary = 95000;
console.log(person);

//to delete a property in Object:
delete person.age;
console.log(person);
