# 1. Basic multiplication
result1 = 5 * 3
print("1. Basic Multiplication:", result1)  # Output: 15

# 2. Exponentiation
result2 = 2 ** 3
print("2. Exponentiation:", result2)  # Output: 8

# 3. Creating Lists (List Multiplication)
repeated_list = [1, 2] * 3
print("3. List Multiplication:", repeated_list)  # Output: [1, 2, 1, 2, 1, 2]

# 4. Tuple Unpacking
a, b, *rest = [1, 2, 3, 4, 5]
print("4. Tuple Unpacking:")
print("a:", a)      # Output: 1
print("b:", b)      # Output: 2
print("rest:", rest)  # Output: [3, 4, 5]

# 5. Keyword Arguments
def my_function(**kwargs):
    print("5. Keyword Arguments:", kwargs)

my_function(a=1, b=2, c=3)  # Output: {'a': 1, 'b': 2, 'c': 3}

# 6. Argument Unpacking
def multiply(a, b):
    return a * b

values = [2, 3]
result6 = multiply(*values)
print("6. Argument Unpacking:", result6)  # Output: 6

# 7. String Repetition
repeated_string = "abc" * 2
print("7. String Repetition:", repeated_string)  # Output: "abcabc"

# 8. Additional Usage - Repeating a Character
repeated_char = '*' * 5
print("8. Repeating a Character:", repeated_char)  # Output: "*****"

# 9. Additional Usage - Creating a Pattern
pattern = ('*' * i for i in range(1, 6))
print("9. Creating a Pattern:")
for line in pattern:
    print(line)

# 10. Additional Usage - Creating Lists with Nested Lists
matrix = [[0] * 3 for _ in range(4)]
print("10. Creating Lists with Nested Lists:")
for row in matrix:
    print(row)
