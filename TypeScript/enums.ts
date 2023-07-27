/* 
Enumerations, often referred to as enums, are a feature in TypeScript that allows you to define a set of named constants. Enums make it easier to work with a group of related values and improve code readability by giving meaningful names to these constants.
*/

// Numeric enums assign increasing numeric values to each member starting from 0 
enum Direction {
    North, // 0
    East,  // 1
    South, // 2
    West,  // 3
}

let myDirection: Direction = Direction.East;
console.log(myDirection); // Output: 1

// String enums allow you to assign string values to enum members.
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE",
  }
  
  let myColor: Color = Color.Green;
  console.log(myColor); // Output: "GREEN"  