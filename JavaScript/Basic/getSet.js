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

const person = new Person("Johnny", 30);

console.log(person.name); // Output: Johnny
person.name = "Jayne";
console.log(person.name); // Output: Jayne

console.log(person.age); // Output: 30
person.age = 35;
console.log(person.age); // Output: 35
