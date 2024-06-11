import tkinter as tk

def display_message():
    message = "Hello, Tkinter!"
    label.config(text=message)

root = tk.Tk()
root.title("Tkinter Example")

label = tk.Label(root, text="Click the button to display a message.")
label.pack()

button = tk.Button(root, text="Click Me", command=display_message)
button.pack()

root.mainloop()