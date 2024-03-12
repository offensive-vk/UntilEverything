import turtle

# Create a turtle object
t = turtle.Turtle()

# Draw a square
for _ in range(4):
    t.forward(100)
    t.left(90)

# Close the turtle graphics window when clicked
turtle.done()

import turtle
import random

# Setup
screen = turtle.Turtle()
screen.bgcolor("black")
turtle.speed(0)
turtle.pensize(2)

# List of colors
colors = ["red", "orange", "yellow", "green", "blue", "purple"]

# Draw a colorful spiral pattern
for _ in range(36):  # Repeat 36 times for a full circle
    for _ in range(6):  # Draw 6 colorful lines
        turtle.color(random.choice(colors))
        turtle.forward(100)
        turtle.left(60)
    turtle.right(10)  # Rotate the turtle for the next iteration

# Hide the turtle and display the pattern
turtle.hideturtle()
turtle.done()
