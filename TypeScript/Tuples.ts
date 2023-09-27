// Defining a tuple
let employee: [number, string, boolean] = [111, "John Wick", true];

// Accessing tuple elements
console.log("Employee ID:", employee[0]); 
console.log("Employee Name:", employee[1]);
console.log("Is Employee Active?", employee[2]);

// Destructuring a tuple
const [_id, _name, isActive] = employee;
console.log("Destructured Employee ID:", _id); 
console.log("Destructured Employee Name:", _name); 
console.log("Destructured Is Employee Active?", isActive); 
