/* 
    Exclude constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers.
    The Exclude<Type, ExcludedUnion> utility type in TypeScript is used to create a new type by excluding types from another type. 
    It removes types from Type that are assignable to ExcludedUnion.
*/
// Example 1: Exclude specific types from a union type
type Numbers = 1 | 2 | 3 | 4 | 5;
type EvenNumbers = Exclude<Numbers, 1 | 3 | 5>; // Exclude odd numbers

const even: EvenNumbers = 2;
// const odd: EvenNumbers = 1; // Error: '1' is not assignable to 'EvenNumbers'

console.log(even);

// Example 2: Exclude primitive types from a type
type NonPrimitiveTypes = Exclude<string | number | boolean | null | undefined, string | number>;

const nonPrimitives: NonPrimitiveTypes = true;
// const primitive: NonPrimitiveTypes = 'hello'; // Error: 'string' is not assignable to 'NonPrimitiveTypes'

console.log(nonPrimitives);

// Example 3: Exclude undefined and null from a type
type NotNullOrUndefined<T> = Exclude<T, null | undefined>;

const notNullOrUndefinedValue: NotNullOrUndefined<string | null | undefined> = 'Hello, TypeScript';
// const nullValue: NotNullOrUndefined<string | null | undefined> = null; // Error: 'null' is not assignable to 'NotNullOrUndefined'
// const undefinedValue: NotNullOrUndefined<string | null | undefined> = undefined; // Error: 'undefined' is not assignable to 'NotNullOrUndefined'

console.log(notNullOrUndefinedValue);

// Example 4: Exclude specific object types from a union of object types
interface Dog {
    type: 'dog';
    bark(): void;
}

interface Cat {
    type: 'cat';
    meow(): void;
}

type Animal = Dog | Cat;
type OnlyCat = Exclude<Animal, Dog>;

const cat: OnlyCat = {
    type: 'cat',
    meow: () => console.log('Meow!'),
};

// const dog: OnlyCat = { type: 'dog', bark: () => console.log('Woof!') }; // Error: 'Dog' is not assignable to 'OnlyCat'

console.log(cat);
