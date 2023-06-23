start = 1
end = 10

print("Even numbers:")
for num in range(start, end + 1):
    if num % 2 == 0:
        print(num)

print("Odd numbers:")
for num in range(start, end + 1):
    if num % 2 != 0:
        print(num)
