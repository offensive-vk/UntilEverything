def is_prime(number):
    if number <= 1:
        return False

    for divisor in range(2, number):
        if number % divisor == 0:
            return False

    return True

user_input = int(input("Enter a number: "))

if is_prime(user_input):
    print(user_input, "is a prime number.")
else:
    print(user_input, "is not a prime number.")
