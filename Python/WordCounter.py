# Word Frequency Counter using dictionaries

text = input(":: Enter Your String :: ")
word_frequency = {}

# Counting word occurrences
words = text.split()
for word in words:
    word_frequency[word] = word_frequency.get(word, 0) + 1

# Displaying word frequencies
for word, frequency in word_frequency.items():
    print(f"{word}: {frequency} times")
