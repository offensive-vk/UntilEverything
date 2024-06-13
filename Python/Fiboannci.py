def fibonacci(n):
    sequence = [0, 1]
    for i in range(2, n):
        sequence.append(sequence[i-1] + sequence[i-2])
    return sequence

user_input = int(input("Enter a number: "))
fib_sequence = fibonacci(user_input)
print(fib_sequence)
