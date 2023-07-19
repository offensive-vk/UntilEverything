# Single Inheritance: Program to demonstrate single inheritance

# Base class
class Animal:
    def speak(self):
        print("Animal speaks")

# Derived class
class Dog(Animal):
    def speak(self):
        print("Dog barks")

# Usage
dog = Dog()
dog.speak()  # Output: Dog barks

# Multiple Inheritance: Program to demonstrate multiple inheritance

# Base classes
class Animal:
    def speak(self):
        print("Animal speaks")

class Bird:
    def speak(self):
        print("Bird chirps")

# Derived class with multiple inheritance
class Parrot(Animal, Bird):
    pass

# Usage
parrot = Parrot()
parrot.speak()  # Output: Animal speaks
