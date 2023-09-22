function uppercase(target: any, propertyKey: string) {
    let value = target[propertyKey];

    const getter = function () {
        return value;
    };

    const setter = function (newVal: string) {
        value = newVal.toUpperCase();
    };

    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
    });
}

class Person {
    @uppercase
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const person = new Person("John Doe");
console.log(person.name); // Output: JOHN DOE

person.name = "Jane Smith";
console.log(person.name); // Output: JANE SMITH
