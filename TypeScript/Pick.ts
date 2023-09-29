// Define a sample interface
interface Person {
    name: string;
    age: number;
    address: string;
    email: string;
}

// Example 1: Select specific properties from an interface
type BasicInfo = Pick<Person, 'name' | 'age'>;
const basicInfo: BasicInfo = {
    name: 'Alice',
    age: 30,
};
console.log(basicInfo);

// Example 2: Create a read-only version of an interface
type ReadOnlyPerson = Readonly<Person>;
const readOnlyPerson: ReadOnlyPerson = {
    name: 'Bob',
    age: 25,
    address: '123 Main St',
    email: 'bob@example.com',
};
// readOnlyPerson.age = 26; // Error: Cannot assign to 'age' because it is a read-only property
console.log(readOnlyPerson);
