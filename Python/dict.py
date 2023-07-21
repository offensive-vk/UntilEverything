# Creating a dictionary
person = {
    "name": "John",
    "age": 30,
    "occupation": "Engineer"
}

# Accessing values
print(person["name"])  # Output: John
print(person["age"])   # Output: 30

# Modifying a value
person["age"] = 31

# Adding a new key-value pair
person["city"] = "New York"

# Deleting a key-value pair
del person["occupation"]

print(person)
