# Program demonstrates the functionality of polymorphic behavior in Python

from abc import ABC, abstractmethod
import math

# Define the Shape interface using ABC (Abstract Base Class)
class Shape(ABC):
    @abstractmethod
    def calculate_area(self):
        pass

# Define a class Rectangle that implements the Shape interface
class Rectangle(Shape):
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def calculate_area(self):
        return self.length * self.width

# Define a class Circle that implements the Shape interface
class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def calculate_area(self):
        return math.pi * self.radius * self.radius

# Usage:
rectangle = Rectangle(5, 8)
circle = Circle(3)

print("Rectangle Area:", rectangle.calculate_area())
print("Circle Area:", circle.calculate_area())
