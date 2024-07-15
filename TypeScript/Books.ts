interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

class Library {
    private books: Book[];

    constructor() {
        this.books = [];
    }

    addBook(book: Book) {
        this.books.push(book);
    }

    getAllBooks(): Book[] {
        return this.books;
    }

    findBooksByAuthor(author: string): Book[] {
        return this.books.filter((book) => book.author === author);
    }
}

// Usage example
const myLibrary = new Library();
const book1: Book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
};

const book2: Book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedYear: 1960,
};

const book3: Book = {
    title: "1984",
    author: "George Orwell",
    publishedYear: 1949,
};

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

const allBooks = myLibrary.getAllBooks();
console.log("All Books:", allBooks);

const booksByAuthor = myLibrary.findBooksByAuthor("Harper Lee");
console.log("Books by Harper Lee:", booksByAuthor);