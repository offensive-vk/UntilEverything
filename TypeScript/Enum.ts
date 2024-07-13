/* 
 * Enumerations, often referred to as enums, are a feature in TypeScript that allows you to define a set of named constants. 
 * Enums make it easier to work with a group of related values and improve code readability by giving meaningful names to these constants.
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

// You can access enum members by their name or value.
let directionName: string = Direction[2];
console.log(directionName); // Output: "South"

let colorValue: string = Color.Red;
console.log(colorValue); // Output: "RED"

// You can explicitly set values for enum members, including string and numeric values.
enum Size {
    Small = 1,
    Medium = 2,
    Large = 4,
}

let mySize: Size = Size.Large;
console.log(mySize); // Output: 4

// Enums support reverse mapping, allowing you to get the enum member name from its value.
enum Animals {
    Dog = 1,
    Cat = 2,
    Rabbit = 3,
}

let animalName: string = Animals[2];
console.log(animalName); // Output: "Cat"