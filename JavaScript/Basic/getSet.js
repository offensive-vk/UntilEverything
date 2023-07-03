class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    get age() {
        return this._age;
    }

    set age(newAge) {
        if (newAge >= 0) {
            this._age = newAge;
        }
    }
}

const person = new Person("John", 30);
console.log(person.name); // Output: John
person.name = "Jane";
console.log(person.name); // Output: Jane

console.log(person.age); // Output: 30
person.age = 35;
console.log(person.age); // Output: 35
