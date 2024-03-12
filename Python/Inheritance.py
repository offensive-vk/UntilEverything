class Animal:
    def __init__(self, name):
        self.name = name

    def make_sound(self):
        return "Some generic sound"

# single level inheritance
class Dog(Animal):
    def make_sound(self):
        return "Woof!"

class Cat(Animal):
    def make_sound(self):
        return "Meow!"

# Creating instances of derived classes
dog = Dog("Buddy")
cat = Cat("Whiskers")

print(dog.name)  # Output: Buddy
print(dog.make_sound())  # Output: Woof!

print(cat.name)  # Output: Whiskers
print(cat.make_sound())  # Output: Meow!
