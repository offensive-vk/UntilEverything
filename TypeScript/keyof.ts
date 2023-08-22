interface Person {
    name: string;
    age: number;
    location: string;
}

type PersonKeys = keyof Person;

// PersonKeys is a union of string literals: "name" | "age" | "location"
const key: PersonKeys = "name"; // Valid
// const invalidKey: PersonKeys = "gender"; // Error: "gender" is not a valid key

function getProperty(obj: Person, key: PersonKeys) {
    return obj[key];
}

const person: Person = {
    name: "Alice",
    age: 30,
    location: "Wonderland",
};

const personName = getProperty(person, "name"); // Valid
// const personGender = getProperty(person, "gender"); // Error: "gender" is not a valid key
