class Person:
    age = 0
    number = 0
    def show(Person):
        return "Age:", Person.age, "Number: ", Person.number
    
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.show();
    
    def introduce(self):
        return f"Hello, my name is {self.name}, and I am {self.age} years old."

person1 = Person("John", 30)
person2 = Person("Bob", 25)
person1.name = "SSP"
person1.number = "001"

print(person1.introduce())
print(person2.introduce())


