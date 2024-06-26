class Book:
    def __init__(self, title, author, isbn):
        self.title = title
        self.author = author
        self.isbn = isbn
        self.is_borrowed = False

    def __str__(self):
        return f"'{self.title}' by {self.author} (ISBN: {self.isbn})"


class Member:
    def __init__(self, name, member_id):
        self.name = name
        self.member_id = member_id
        self.borrowed_books = []

    def borrow_book(self, book):
        if not book.is_borrowed:
            book.is_borrowed = True
            self.borrowed_books.append(book)
            print(f"{self.name} borrowed {book}")
        else:
            print(f"{book} is already borrowed.")

    def return_book(self, book):
        if book in self.borrowed_books:
            book.is_borrowed = False
            self.borrowed_books.remove(book)
            print(f"{self.name} returned {book}")
        else:
            print(f"{self.name} does not have {book}.")

    def __str__(self):
        return f"Member: {self.name} (ID: {self.member_id})"


class Library:
    def __init__(self, name):
        self.name = name
        self.books = []
        self.members = []

    def add_book(self, book):
        self.books.append(book)
        print(f"Added {book} to the library.")

    def remove_book(self, book):
        if book in self.books and not book.is_borrowed:
            self.books.remove(book)
            print(f"Removed {book} from the library.")
        else:
            print(f"Cannot remove {book}. It might be borrowed or not in the library.")

    def register_member(self, member):
        self.members.append(member)
        print(f"Registered member: {member}")

    def __str__(self):
        books = "\n".join(str(book) for book in self.books)
        members = "\n".join(str(member) for member in self.members)
        return f"Library: {self.name}\nBooks:\n{books}\nMembers:\n{members}"


# Example usage:
library = Library("City Library")

# Adding books to the library
book1 = Book("1984", "George Orwell", "1234567890")
book2 = Book("To Kill a Mockingbird", "Harper Lee", "0987654321")
library.add_book(book1)
library.add_book(book2)

# Registering members
member1 = Member("Alice", "M001")
member2 = Member("Smith", "M002")
library.register_member(member1)
library.register_member(member2)

print("\nLibrary status:\n")
print(library)

# Members borrowing and returning books
member1.borrow_book(book1)
member1.borrow_book(book2)
member2.borrow_book(book1)  # Should print that the book is already borrowed
member1.return_book(book1)
member2.borrow_book(book1)  # Now Bob can borrow it

print("\nLibrary status after transactions:\n")
print(library)