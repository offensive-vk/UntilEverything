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

