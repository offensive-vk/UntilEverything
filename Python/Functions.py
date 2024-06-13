def greet(name):
    """This function greets the person passed in as a parameter."""
    print(f"Hello, {name}!")

# Call the function
greet("Alice")

def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # Output: 8

def greet(name="Guest"):
    print(f"Hello, {name}!")

greet()         # Output: Hello, Guest!
greet("Alice")  # Output: Hello, Alice!

def square(x):
    return x ** 2

result = square(4)
print(result)  # Output: 16

# scope
x = 10
def func():
    x = 5
    print(x)  # Output: 5

func()
print(x)  # Output: 10 (global x)

#LAMBDA
square = lambda x: x ** 2
result = square(4)
print(result)  # Output: 16

# recursion
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

result = factorial(5)
print(result)  # Output: 120

# arguments
def describe_person(name, age, city="Unknown"):
    print(f"{name} is {age} years old and lives in {city}.")

describe_person("Alice", 30)                 # Output: Alice is 30 years old and lives in Unknown.
describe_person("Bob", 25, city="New York")  # Output: Bob is 25 years old and lives in New York.


# wrappers 
def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
