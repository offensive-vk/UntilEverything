# Simple Array For Loop

fruits = ["apple", "banana", "orange", "grape"]
print("Using for loop with a list:")
for fruit in fruits:
    print(fruit)

message = "Hello, Python!"
print("\nUsing for loop with a string:")
for char in message:
    print(char)

# Specifying a range
# for variable_name in range(start, end):

print("\nUsing for loop with a range:")
for num in range(1, 10):
    print(num)


# Dictionaries
person = {"name": "John Wick", "age": 30, "occupation": "Engineer"}
print("\nUsing for loop with a dictionary:")
for key, value in person.items():
    print(f"{key}: {value}")

# Nesting
print("\nUsing nested for loop:")
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i} * {j} = {i * j}")
