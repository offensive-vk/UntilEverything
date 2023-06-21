import random

random_number = random.randint(1, 100)
attempts = 0

while True:
    user_guess = int(input("Guess the number (between 1 and 100): "))
    attempts += 1

    if user_guess < random_number:
        print("Too low! Try again.")
    elif user_guess > random_number:
        print("Too high! Try again.")
    else:
        print("Congratulations! You guessed it in", attempts, "attempts.")
        break
