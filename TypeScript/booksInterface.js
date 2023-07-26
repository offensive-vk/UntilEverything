var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.getAllBooks = function () {
        return this.books;
    };
    Library.prototype.findBooksByAuthor = function (author) {
        return this.books.filter(function (book) { return book.author === author; });
    };
    return Library;
}());
// Usage example
var myLibrary = new Library();
var book1 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
};
var book2 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedYear: 1960,
};
var book3 = {
    title: "1984",
    author: "George Orwell",
    publishedYear: 1949,
};
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
var allBooks = myLibrary.getAllBooks();
console.log("All Books:", allBooks);
var booksByAuthor = myLibrary.findBooksByAuthor("Harper Lee");
console.log("Books by Harper Lee:", booksByAuthor);
