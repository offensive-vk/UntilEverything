# Initialize a sample string
sample_string = "Hello, World! This is a sample string."

# 1. Length of the string
length = len(sample_string)
print(f"1. Length of the string: {length}")

# 2. Convert to uppercase
uppercase_string = sample_string.upper()
print(f"2. Uppercase: {uppercase_string}")

# 3. Convert to lowercase
lowercase_string = sample_string.lower()
print(f"3. Lowercase: {lowercase_string}")

# 4. Capitalize the first letter
capitalized_string = sample_string.capitalize()
print(f"4. Capitalized: {capitalized_string}")

# 5. Count occurrences of a substring
substring = "is"
count = sample_string.count(substring)
print(f"5. Count of '{substring}' in the string: {count}")

# 6. Find the index of a substring (first occurrence)
substring = "World"
index = sample_string.find(substring)
print(f"6. Index of '{substring}': {index}")

# 7. Replace a substring
old_substring = "sample"
new_substring = "modified"
replaced_string = sample_string.replace(old_substring, new_substring)
print(f"7. Replace '{old_substring}' with '{new_substring}': {replaced_string}")

# 8. Check if the string starts with a prefix
prefix = "Hello"
starts_with = sample_string.startswith(prefix)
print(f"8. Starts with '{prefix}': {starts_with}")

# 9. Check if the string ends with a suffix
suffix = "string."
ends_with = sample_string.endswith(suffix)
print(f"9. Ends with '{suffix}': {ends_with}")

# 10. Split the string into a list of substrings
split_string = sample_string.split()
print(f"10. Split the string into words: {split_string}")

# 11. Join a list of substrings into a string
joined_string = " ".join(split_string)
print(f"11. Join the list into a string: {joined_string}")

# 12. Strip leading and trailing whitespace
whitespace_string = "   This has whitespace.   "
stripped_string = whitespace_string.strip()
print(f"12. Stripped: '{stripped_string}'")

# 13. Check if the string is numeric
numeric_string = "12345"
is_numeric = numeric_string.isnumeric()
print(f"13. Is numeric? {is_numeric}")

# 14. Check if the string is alphabetic
alphabetic_string = "abcdef"
is_alphabetic = alphabetic_string.isalpha()
print(f"14. Is alphabetic? {is_alphabetic}")

# 15. Check if the string is alphanumeric
alphanumeric_string = "abc123"
is_alphanumeric = alphanumeric_string.isalnum()
print(f"15. Is alphanumeric? {is_alphanumeric}")
