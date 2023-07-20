# Single Inheritance
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

# Multiple Inheritance
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

parrot = Parrot()
parrot.speak()  # Output: Animal speaks

# Multilevel Inheritance
# Grandparent class
class Animal:
    def speak(self):
        print("Animal speaks")

# Parent class
class Dog(Animal):
    def bark(self):
        print("Dog barks")

# Derived class inheriting from Parent class
class Bulldog(Dog):
    def guard(self):
        print("Bulldog guards")


bulldog = Bulldog()
bulldog.speak()  # Output: Animal speaks
bulldog.bark()   # Output: Dog barks
bulldog.guard()  # Output: Bulldog guards
