import random
import sys
import os
import time
import string
import html


time.sleep(2)
os.system("color A && ipconfig /all")
os.system("cls && echo Hello user")

print("Current Working Directory:", os.getcwd())

# print("Directory created:", os.mkdir('sample')) 
# print("Current Time: ", datetime.datetime.now())
time.time.__init__
sys.stdout.write("Yo yo yo yo")

def generate_random_password(length):
    characters = string.ascii_letters + string.digits + string.punctuation
    password = ''.join(random.choice(characters) for _ in range(length))
    return password

password_length = 10
random_password = generate_random_password(password_length)
print("Random Password:", random_password)

# name = input("Enter Your Name: ")
# age = int(input("Enter Your Age: "))
# res = float(input("What's your result? "))

# for i in range(1, len(name)):
#     print(i*name," \n")

class example:
    try:
        print(random.randint(99,999)/0)
    except ZeroDivisionError:
        print(random.randint(10,99)/1)
    finally:
        print("Sorry vro thak gaya hu")
pass


# def guess(num):
#     number = random.randint(1, 10)
#     guess = int(input("Guess a number between 1 and 10: "))

#     if guess == number:
#         print("Congratulations! You guessed the correct number.")
#     else:
#         print("Sorry, the number was", number)

# guess(444)
# function(guess)
