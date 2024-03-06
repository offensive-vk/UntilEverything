// Create a namespace called 'Shapes'
namespace Shapes {
    // Define a class inside the namespace
    export class Circle {
        constructor(public radius: number) { }

        area(): number {
            return Math.PI * this.radius ** 2;
        }
    }

    // Define another class inside the namespace
    export class Rectangle {
        constructor(public width: number, public height: number) { }

        area(): number {
            return this.width * this.height;
        }
    }
}

// Create instances of classes from the namespace
const circle = new Shapes.Circle(5);
const rectangle = new Shapes.Rectangle(4, 6);

// Calculate and display the areas
console.log(`Circle Area: ${circle.area()}`);
console.log(`Rectangle Area: ${rectangle.area()}`);
