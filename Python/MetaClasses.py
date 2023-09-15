class Meta(type):
    def __new__(cls, name, bases, attrs):
        # Modify the class attributes or behavior here
        attrs['version'] = 1.0
        return super().__new__(cls, name, bases, attrs)

class MyClass(metaclass=Meta):
    def show_version(self):
        print(f"Class version: {self.version}")

obj = MyClass()
obj.show_version()
