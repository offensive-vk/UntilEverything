/*
  Conditional types in TypeScript allow you to express non-uniform types based on a condition. 
  The infer keyword is typically used in the extends clause of a conditional type to capture and infer a type from another type.
*/

// Basic Usage: Extracting element type from an array
type ExtractElementType<T> = T extends Array<infer U> ? U : never;

const arr: number[] = [1, 2, 3];
type ElementType = ExtractElementType<typeof arr>; // ElementType is inferred as number
console.log('Basic Usage - Element Type:', ElementType);

// Intermediate Usage: Extracting promise type
type ExtractPromiseType<T> = T extends Promise<infer U> ? U : never;

const promise: Promise<string> = Promise.resolve('Hello, TypeScript!');
type PromiseResult = ExtractPromiseType<typeof promise>; // PromiseResult is inferred as string
console.log('Intermediate Usage - Promise Result Type:', PromiseResult);

// Advanced Usage: Mapping over a tuple and transforming each element
type MapTuple<T extends any[]> = { [K in keyof T]: T[K] extends infer U ? U : never };

const tuple: [number, string, boolean] = [42, 'typescript', true];
type MappedTuple = MapTuple<typeof tuple>;
// MappedTuple is inferred as [number, string, boolean]
console.log('Advanced Usage - Mapped Tuple:', MappedTuple);

// Advanced Generic Usage: Creating a utility function with infer
function mergeObjects<T extends object, U extends object>(a: T, b: U): T & U {
  return { ...a, ...b };
}

const mergedObject = mergeObjects({ a: 1 }, { b: 'two' });
// mergedObject is inferred as { a: number, b: string }
console.log('Advanced Generic Usage - Merged Object:', mergedObject);
export {};