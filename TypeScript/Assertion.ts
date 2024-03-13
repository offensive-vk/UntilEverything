// Using 'as' for Type Assertion
let value: any = "Hello, TypeScript!";
let _length: number = (value as string).length;
console.log("Length:", _length);

// Using 'as any' for Type Assertion
let data: any = 42;
let squared: number = (data as any) * (data as any);
console.log("Squared:", squared);

// Using Type Casting (Alternative to 'as' syntax)
let numValue: any = "123";
let numLength: number = (<string>numValue).length;
console.log("Number Length:", numLength);

// Using Type Assertion for Union Types
type MyType = string | number;
let unionValue: MyType = "Hello, Union!";
let unionLength: number = (unionValue as string).length;
console.log("Union Length:", unionLength);

// Using 'as any' to bypass TypeScript type checking
let someValue: number = 10;
let stringLength: number = (someValue as any).length; // No error, but potentially unsafe
console.log("String Length (unsafe):", stringLength);

// Using 'unknown' type with type assertion
let unknownValue: unknown = "TypeScript";
let unknownLength: number = (unknownValue as string).length;
console.log("Unknown Length:", unknownLength);
