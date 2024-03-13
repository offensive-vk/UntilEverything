// Use Case 1: Combining Two or More Object Types
// Define two object types
type Person = {
    name: string;
    age: number;
};

type Address = {
    street: string;
    city: string;
};

// Create an intersection type
type PersonWithAddress = Person & Address;

// Usage
const personWithAddress: PersonWithAddress = {
    name: "Ryan",
    age: 30,
    street: "123 Main St",
    city: "Example",
};

console.log(personWithAddress.name);
console.log(personWithAddress.street);


// Use Case 2: Combining Function Signatures
type Loggable = {
    log(message: string): void;
};

type Sendable = {
    send(data: string): void;
};

// Create an intersection type
type LoggerAndSender = Loggable & Sendable;

// Usage
const loggerAndSender: LoggerAndSender = {
    log(message: "Log message"),
    send(data: "Send data")
};


// Use Case 3: Extending Existing Types
type Car = {
    brand: string;
    model: string;
};

type ElectricCar = Car & {
    electricMotor: boolean;
};

const electricCar: ElectricCar = {
    brand: "Tesla",
    model: "Model S",
    electricMotor: true,
};

export { }