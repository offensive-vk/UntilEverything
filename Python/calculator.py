import tkinter as tk

def on_button_click(value):
    current = entry.get()
    entry.delete(0, tk.END)
    entry.insert(tk.END, current + value)

def clear_entry():
    entry.delete(0, tk.END)

def calculate():
    try:
        result = eval(entry.get())
        entry.delete(0, tk.END)
        entry.insert(tk.END, str(result))
    except Exception as e:
        entry.delete(0, tk.END)
        entry.insert(tk.END, "Error")

root = tk.Tk()
root.title("Simple Calculator")

entry = tk.Entry(root, width=20, font=('Arial', 20))
entry.grid(row=0, column=0, columnspan=4)

buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
]

row_index, col_index = 1, 0
for button_value in buttons:
    tk.Button(root, text=button_value, width=5, font=('Arial', 20),
              command=lambda val=button_value: on_button_click(val)).grid(row=row_index, column=col_index)
    col_index += 1
    if col_index > 3:
        col_index = 0
        row_index += 1

tk.Button(root, text="C", width=5, font=('Arial', 20), command=clear_entry).grid(row=5, column=0)
tk.Button(root, text="=", width=5, font=('Arial', 20), command=calculate).grid(row=5, column=1, columnspan=3)

root.mainloop()
