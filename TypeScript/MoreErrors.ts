// Syntax Error
let syntaxError = "missing semicolon"

// Type Error
let typeError: string = 42; // Type 'number' is not assignable to type 'string'.

// Reference Error
console.log(undefinedVariable); // ReferenceError: undefinedVariable is not defined

// Logical Error
function addNumbers(a: number, b: number): number {
  return a - b; // Logical error: subtraction instead of addition
}

// Runtime Error
let array: number[] = [1, 2, 3];
console.log(array[10]); // Runtime error: Index out of bounds

// Assertion Error
let value: any = "hello";
let length: number = value as number; // Assertion error if the value is not a number at runtime
