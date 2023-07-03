class Shape {
    constructor(color) {
        this.color = color;
    }

    getColor() {
        return this.color;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getColor() {
        return `The color of the circle is ${this.color}.`;
    }
}

const circle = new Circle("Cyan", 5);
console.log(circle.getArea()); // Output: 78.53981633974483
console.log(circle.getColor()); // Output: The color of the circle is Red.
