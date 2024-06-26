# Program to prove python is slow lol (sorry)..

import time
start = time.time()
print("\tProcessing...", start)

n = 1
while n < 1000000000:
    n+=1
    
total = time.time() - start
print("\tSeconds: ", total, "Result : ", n) 