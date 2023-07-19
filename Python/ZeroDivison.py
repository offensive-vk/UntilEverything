def divide_numbers(a, b):
    try:
        result = a / b
        return result
    except ZeroDivisionError:
        print("Error: Cannot divide by zero!")
    except TypeError as e:
        print(f"Error: {e}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
    finally:
        print("Exception handling completed.")

# Usage
num1 = int(input("Enter Numerator : "))
num2 = int(input("Enter Denominator : "))

# Handling ZeroDivisionError
print("Result 1:", divide_numbers(num1, num2))

# Handling TypeError
str_num = "5"
print("Result 2:", divide_numbers(num1, str_num))

# Handling unexpected errors
num3 = 4
num4 = 2
print("Result 3:", divide_numbers(num3, num4))
