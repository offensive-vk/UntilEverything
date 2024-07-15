// Enum defining different shapes
enum Shape {
    Circle,
    Square,
    Triangle
}

// Function that takes a Shape enum parameter and returns a string representation of the shape
function getShapeName(shape: Shape): string {
    switch (shape) {
        case Shape.Circle:
            return "Circle";
        case Shape.Square:
            return "Square";
        case Shape.Triangle:
            return "Triangle";
        default:
            throw new Error("Invalid shape");
    }
}

// Using the Shape enum
const shape1: Shape = Shape.Circle;
console.log("Shape 1:", getShapeName(shape1)); // Output: Shape 1: Circle

const shape2: Shape = Shape.Square;
console.log("Shape 2:", getShapeName(shape2)); // Output: Shape 2: Square

const shape3: Shape = Shape.Triangle;
console.log("Shape 3:", getShapeName(shape3)); // Output: Shape 3: Triangle

// Enums can also have string values
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

// Function that takes a Direction enum parameter and returns a string representation of the direction
function getDirectionName(direction: Direction): Direction | string {
    return direction;
}

// Using the Direction enum
const direction1: Direction = Direction.Up;
console.log("Direction 1:", getDirectionName(direction1)); // Output: Direction 1: UP

const direction2: Direction = Direction.Right;
console.log("Direction 2:", getDirectionName(direction2)); // Output: Direction 2: RIGHT