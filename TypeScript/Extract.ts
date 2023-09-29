/* 
Extract constructs a type by extracting from Type all union members that are assignable to Union.
The Extract<Type, ExtractedUnion> utility type in TypeScript is used to create a new type by extracting types from another type that are assignable to ExtractedUnion. 
*/
// Example 1: Extract specific types from a union type
type Numbers = 1 | 2 | 3 | 4 | 5;
type OddNumbers = Extract<Numbers, 1 | 3 | 5>; // Extract odd numbers

const odd: OddNumbers = 1;
// const even: OddNumbers = 2; // Error: '2' is not assignable to 'OddNumbers'

console.log(odd);

// Example 2: Extract specific object types from a union of object types
interface Dog {
    type: 'dog';
    bark(): void;
}

interface Cat {
    type: 'cat';
    meow(): void;
}

type Animal = Dog | Cat;
type OnlyDog = Extract<Animal, Dog>;

const dog: OnlyDog = {
    type: 'dog',
    bark: () => console.log('Woof!'),
};
// const cat: OnlyDog = { type: 'cat', meow: () => console.log('Meow!') }; // Error: 'Cat' is not assignable to 'OnlyDog'

console.log(dog);

// Example 3: Extract specific string literals from a union of string literals
type Colors = 'red' | 'green' | 'blue';
type PrimaryColor = Extract<Colors, 'red' | 'blue'>; // Extract primary colors

const primaryColor: PrimaryColor = 'red';
// const secondaryColor: PrimaryColor = 'green'; // Error: 'green' is not assignable to 'PrimaryColor'

console.log(primaryColor);
