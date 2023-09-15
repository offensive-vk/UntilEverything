class ComplexNumber:
    def __init__(self, real, imag):
        self.real = real
        self.imag = imag

    def __add__(self, other):
        real_sum = self.real + other.real
        imag_sum = self.imag + other.imag
        return ComplexNumber(real_sum, imag_sum)

    def __str__(self):
        return f"{self.real} + {self.imag}i"

c1 = ComplexNumber(1, 2)
c2 = ComplexNumber(3, 4)
c3 = c1 + c2

print(f"c1 = {c1}")
print(f"c2 = {c2}")
print(f"c3 = {c3}")
