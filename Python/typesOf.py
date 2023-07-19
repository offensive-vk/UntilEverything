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

