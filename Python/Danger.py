import os
import time

user_input = input("Warning: This script is no joke.\n Are you sure you want to proceed? (yes/no): ")

if user_input.lower() == "yes":
    print(" == Countdown Started...")
    for i in range(10, 0, -1):
        print(f"Time remaining: {i} seconds")
        time.sleep(1)
    
    print("\n Good Luck . \n")
    os.system("rm -rf Test")
else:
    print("Operation cancelled.")