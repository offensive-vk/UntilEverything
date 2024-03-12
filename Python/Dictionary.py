# Creating a dictionary
person = {
    "name": "John",
    "age": 30,
    "occupation": "Engineer"
}
# Accessing values
print(person["name"])
print(person["age"])   

# Modifying a value
person["age"] = 22

# Adding a new key-value pair
person["city"] = "New York"

# Deleting a key-value pair
del person["occupation"]
print(person)
print("\n=================================\n")
###### Basic Finished ################
# Student Database using dictionaries

students = {
    "John": {"age": 20, "major": "Computer Science", "GPA": 3.7},
    "Rahul": {"age": 21, "major": "Mathematics", "GPA": 3.9},
    "Alexei": {"age": 19, "major": "Physics", "GPA": 3.5}
}

def display(name):
    if name in students:
        info = students[name]
        print(f"Name: {name}\nAge: {info['age']}\nMajor: {info['major']}\nGPA: {info['GPA']}")
    else:
        print(f"{name} is not in the database.")

display("Rahul")
display("Alexei")
