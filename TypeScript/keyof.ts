// keyof operator is used to form a union of keys stored in any interface or object and any other key-value pairs.
interface Person {
    name: string;
    age: number;
    location: string;
    isHuman: boolean;
}

type PersonKeys = keyof Person;

// PersonKeys is a union of string literals: "name" | "age" | "location" | "isHuman"
const key: PersonKeys = "age"; // Valid
// const invalidKey: PersonKeys = "gender"; // Error: "gender" is not a valid key
console.log(key);

function getProperty(obj: Person, key: PersonKeys): string | number | boolean {
    return obj[key];
}
/**
 * @type Human
 */
const person: Person = {
    name: "Manish",
    age: 10,
    location: "Wakanda",
    isHuman: true
};
/**
 * @type Alien
 */
const alien: readonly Person = {
    name: "Alien",
    age: Infinity,
    location: "Mars",
    isHuman: false,
};

const personName = getProperty(person, "age"); // Valid
const isHuman = getProperty(alien, "isHuman");

// const personGender = getProperty(person, "gender"); // Error: "gender" is not a valid key
console.log(personName);
console.log(isHuman);

export { }