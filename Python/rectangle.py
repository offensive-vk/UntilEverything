class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def area(self):
        return self.length * self.width

    def perimeter(self):
        return 2 * (self.length + self.width)


# Create rectangle objects and calculate area and perimeter
rectangle1 = Rectangle(5, 10)
print("Rectangle 1 Area:", rectangle1.area())
print("Rectangle 1 Perimeter:", rectangle1.perimeter())

rectangle2 = Rectangle(8, 15)
print("Rectangle 2 Area:", rectangle2.area())
print("Rectangle 2 Perimeter:", rectangle2.perimeter())
