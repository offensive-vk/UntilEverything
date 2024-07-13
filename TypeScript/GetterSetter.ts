class Person {
    private _name: string;
    private _age: number;

    public constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    // Getter for the name property
    get name(): string {
        console.log("Getting name...");
        return this._name;
    }

    // Setter for the name property
    set name(newName: string) {
        console.log("Setting name...");
        if (newName.length >= 3) {
            this._name = newName;
        } else {
            console.log("Name should be at least 3 characters long.");
        }
    }

    // Getter for the age property
    get age(): number {
        console.log("Getting age...");
        return this._age;
    }

    // Setter for the age property
    set age(newAge: number) {
        console.log("Setting age...");
        if (newAge >= 0 && newAge <= 120) {
            this._age = newAge;
        } else {
            console.log("Age should be between 0 and 120.");
        }
    }
}

// Create a new Person instance
const person = new Person("Lissy", 20);

// Use the getters to access property values
console.log(`Name: ${person.name}`); // Getting name...
console.log(`Age: ${person.age}`);   // Getting age...

// Use the setters to modify property values
person.name = "Bob";    // Setting name...
person.age = 25;        // Setting age...

console.log(`Name: ${person.name}`); // Getting name...
console.log(`Age: ${person.age}`);   // Getting age...

// Trying to set an invalid name and age
person.name = "A";      // Setting name... (Error: Name should be at least 3 characters long.)
person.age = -5;        // Setting age... (Error: Age should be between 0 and 120.)

const PRIVATE_KEY_RSA : string | Array<string> = "6D33 866E DD8F FA41 C014 3AED DCC9 E80C 77E1 1517";
export { PRIVATE_KEY_RSA as const }