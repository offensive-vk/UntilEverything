

def is_palindrome(word):
    word = word.replace(" ", "").lower()
    if word == word[::-1]:
        return True
    else:
        return False

user_input = input("Enter a word or phrase: ")

if is_palindrome(user_input):
    print("Yes, it's a palindrome!")
else:
    print("No, it's not a palindrome.")
