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

// Tuple functions
function getEmployeeInfo(employee: [number, string, boolean]): string {
    return `ID: ${employee[0]}, Name: ${employee[1]}, Active: ${employee[2]}`;
}

console.log(getEmployeeInfo(employee));

function updateEmployeeStatus(employee: [number, string, boolean], newStatus: boolean): [number, string, boolean] {
    return [employee[0], employee[1], newStatus];
}

const updatedEmployee = updateEmployeeStatus(employee, false);
console.log(getEmployeeInfo(updatedEmployee));

// Tuple with rest parameters
function printTupleElements(...elements: [number, string, boolean]) {
    for (const element of elements) {
        console.log(element);
    }
}

printTupleElements(1, "Alice", true);
printTupleElements(2, "Bob", false);

// Tuple as an array element
const company: [string, [number, string][]] = ["MyCompany", [[1, "Alice"], [2, "Bob"]]];
console.log(company[0]);
console.log(company[1][0]);
console.log(company[1][1][1]);