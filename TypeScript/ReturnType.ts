/* 
The ReturnType<Type> utility type in TypeScript is used to extract the return type of a function or constructor type.
*/

// Define a sample function
function add(a: number, b: number): number {
    return a + b;
}

// Extract return type using ReturnType<>
type AddResult = ReturnType<typeof add>;

// Define a function that takes the return type and logs it
function logReturnType(result: AddResult): void {
    console.log(`Return type: ${typeof result}`);
}

// Call the logReturnType function with the return type
const _: AddResult = add(50, 10);
logReturnType(_);
