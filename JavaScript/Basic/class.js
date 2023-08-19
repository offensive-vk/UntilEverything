class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}
class Shape{
    shape = new Rectangle(null, null);
    constructor(shape){
        this.shape = shape;
    }
}
const rect1 = new Rectangle(500, 1000);
console.log(rect1.calculateArea());

const rect2 = new Rectangle(3174, 7521);
console.log(rect2.calculateArea());
