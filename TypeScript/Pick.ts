/* 
Pick constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.
*/
interface Person {
    name: string;
    age: number;
    address: string;
    email: string;
}

// Example 1: Select specific properties from an interface
type BasicInfo = Pick<Person, 'name' | 'age'>;
const basicInfo: BasicInfo = {
    name: 'Alicia',
    age: 30,
};
console.log(basicInfo);

// Example 2: Create a read-only version of an interface
type ReadOnlyPerson = Readonly<Person>;
const readOnly: ReadOnlyPerson = {
    name: 'Ray',
    age: 25,
    address: '123 Main St',
    email: 'bob@example.com',
};
// readOnlyPerson.age = 26; // Error: Cannot assign to 'age' because it is a read-only property
console.log(readOnly);

// Example 3: Use Pick with predefined types
type HTMLProps = Pick<React.HTMLProps<HTMLDivElement>, 'className' | 'style'>;
const htmlProps: HTMLProps = {
    className: 'container',
    style: { color: 'blue' },
};
console.log(htmlProps);

// Example 4: Select no properties (empty type)
type Empty = Pick<Person, never>;
const empty: Empty = {}; // Allowed because it has no properties
console.log(empty);

// Example 5: Select all properties using keyof and Pick
type AllProperties = Pick<Person, keyof Person>;
const allProps: AllProperties = {
    name: 'Charlie',
    age: 35,
    address: '456 Elm St',
    email: 'charlie@example.com',
};
console.log(allProps);