# start = 1
# end = 10

start = int(input("Enter Starting Number :"))
end = int(input("Enter Ending Number :"))

print("\t\t :: Even Numbers ::\n")
for num in range(start, end + 1):
    if num % 2 == 0:
        print("[",num,"]")

print("\t\t :: Odd Numbers ::\n")
for num in range(start, end + 1):
    if num % 2 != 0:
        print("[",num,"]")
