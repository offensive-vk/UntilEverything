function createPerson(name, age, id) {
    return {
        name: name,
        age: age,
        id: id,
        greet: function() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    };
}

const person1 = createPerson("Ryan", 25, 101);
const person2 = createPerson("Manish", 30, 102);

person1.greet();
person2.greet(); 
person1.greet();