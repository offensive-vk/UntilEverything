/** 
 * Parameters constructs a tuple type from the types used in the parameters of a function type Type.
    OR
 * The Parameters<Type> utility type in TypeScript is used to extract the parameter types of a function or constructor type. 
*/

// Define a sample function
function greet(name: string, age: number): void {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}

// Extract parameter types using Parameters<>
type GreetParams = Parameters<typeof greet>;

// Define a function that takes the parameter types and logs them
function logParameters(params: GreetParams): void {
    const [name, age] = params;
    console.log(`Parameter types: name (${typeof name}), age (${typeof age})`);
}

// Call the logParameters function with the parameter types
const params: GreetParams = ['Lissy', 30];
logParameters(params);

export { }