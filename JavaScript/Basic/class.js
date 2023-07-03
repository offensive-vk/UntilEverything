class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}

const rectangle1 = new Rectangle(5, 10);
console.log(rectangle1.calculateArea()); // Output: 50

const rectangle2 = new Rectangle(3, 7);
console.log(rectangle2.calculateArea()); // Output: 21
