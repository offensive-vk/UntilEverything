// keyof operator is used to form a union of keys stored in any interface or object and any other key-value pairs.
interface Person {
    name: string;
    age: number;
    location: string;
}

type PersonKeys = keyof Person;

// PersonKeys is a union of string literals: "name" | "age" | "location"
const key: PersonKeys = "age"; // Valid
// const invalidKey: PersonKeys = "gender"; // Error: "gender" is not a valid key
console.log(key);

function getProperty(obj: Person, key: PersonKeys): string | number {
    return obj[key];
}

const person: Person = {
    name: "Manish",
    age: 10,
    location: "Wakanda",
};

const personName = getProperty(person, "name"); // Valid
// const personGender = getProperty(person, "gender"); // Error: "gender" is not a valid key
console.log(personName);