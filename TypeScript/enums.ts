/* 
Enumerations, often referred to as enums, are a feature in TypeScript that allows you to define a set of named constants. Enums make it easier to work with a group of related values and improve code readability by giving meaningful names to these constants.
*/

enum Direction {
    North, // 0
    East,  // 1
    South, // 2
    West,  // 3
}

let myDirection: Direction = Direction.East;
console.log(myDirection); // Output: 1