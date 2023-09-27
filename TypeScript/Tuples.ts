// Defining a tuple
let employee: [number, string, boolean] = [1, "John Doe", true];

// Accessing tuple elements
console.log("Employee ID:", employee[0]); // Output: Employee ID: 1
console.log("Employee Name:", employee[1]); // Output: Employee Name: John Doe
console.log("Is Employee Active?", employee[2]); // Output: Is Employee Active? true

// Destructuring a tuple
const [id, name, isActive] = employee;
console.log("Destructured Employee ID:", id); // Output: Destructured Employee ID: 1
console.log("Destructured Employee Name:", name); // Output: Destructured Employee Name: John Doe
console.log("Destructured Is Employee Active?", isActive); // Output: Destructured Is Employee Active? true

