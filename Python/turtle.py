import turtle

# Create a turtle object
t = turtle.Turtle()

# Draw a square
for _ in range(4):
    t.forward(100)
    t.left(90)

# Close the turtle graphics window when clicked
turtle.done()
