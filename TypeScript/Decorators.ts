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

const _person = new Person("John Doe");
console.log(_person.name); 

person.name = "Jane Smith";
console.log(_person.name);
export { }