class Kid:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age

    def get_info(self) -> str:
        return f"{self.name} ({self.age} years old)"


class Wife:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age
        self.kids = []

    def add_child(self, name: str, age: int) -> None:
        kid = Kid(name, age)
        self.kids.append(kid)

    def get_kids_info(self) -> str:
        return ", ".join(kid.get_info() for kid in self.kids)

    def get_info(self) -> str:
        return f"{self.name} (Wife, {self.age} years old)"


class Husband:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age
        self.wife = None

    def marry(self, wife: Wife) -> None:
        self.wife = wife

    def get_info(self) -> str:
        if self.wife:
            return f"{self.name} (Husband, {self.age} years old) - Married to {self.wife.get_info()}"
        else:
            return f"{self.name} (Husband, {self.age} years old) - Single"


wife = Wife("Sneha", 27)
husband = Husband("Madhav", 30)

husband.marry(wife)
wife.add_child("John", 5)
wife.add_child("Clair", 3)

print(husband.get_info())
print(f"Children: {wife.get_kids_info()}")
