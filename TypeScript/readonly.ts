// With Interfaces
interface Person {
    readonly name: string;
    age: number;
}

const john: Person = { name: "John", age: 55 };
//john.name = "Johnny"; // Error: Cannot assign to 'name' because it is a read-only property

console.log(john.name);
console.log(john.age);

const Man: Person = { name: "Manish", age: 55 };

// With Class
class Circle {
    readonly PI = 3.14159;
    readonly radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getArea(): number {
        return this.PI * this.radius * this.radius;
    }
}

const circle = new Circle(5);
console.log(circle.getArea()); 

circle.PI = 3.14; // Error: Cannot assign to 'PI' because it is a read-only property
circle.radius = 10; // Error: Cannot assign to 'radius' because it is a read-only property

// With Array
const numbers: ReadonlyArray<number> = [11, 22, 33, 44, 55];
console.table(numbers);
numbers.push(6); // Error: Property 'push' does not exist on type 'readonly number[]'
numbers[0] = 10; // Error
export { }