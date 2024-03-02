import time

def processFile(data: str = "Hello World !")-> None :
    with open("message_for_you.txt", "w") as file:
        print("Running scripts in the background....")
        time.sleep(0.5)
        for i in range(10000000):
            file.write(data + "\n")
    time.sleep(0.5)
    print("Job has been completed. \n\t Good Luck !")

processFile()