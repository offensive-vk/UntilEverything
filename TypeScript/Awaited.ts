/**
 * This type is meant to model operations like await in async functions, or the .then() method on Promises - 
 * specifically, the way that they recursively unwrap Promises.
 * 
*/
type Awaited<T> = T extends Promise<infer R> ? R : T;

// Test cases
type A = Awaited<Promise<string>>;
// type A = string

type B = Awaited<Promise<Promise<number>>>;
// type B = number

type C = Awaited<boolean | Promise<number>>;
// type C = number | boolean

// Using the types
const aValue: A = "Hello, World!"; // Valid assignment
const bValue: B = 42; // Invalid assignment
const cValue: C = true; // Valid assignment

console.log(aValue);
console.log(bValue);
console.log(cValue);
export { }