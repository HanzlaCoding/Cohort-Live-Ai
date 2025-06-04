// OOP's Level 1 Mini Project: Library Management System
// Create a Library class that can hold multiple books
// Each book should have properties like title, author, ISBN, price, and read status
// Implement methods to add books, list all books, change read status, and get book information

const addBookBtn = document.querySelector('.btn-add');

console.log(addBookBtn);


class Library {
    constructor() {
        this.books = [];
    }

    addBooks(books) {
        this.books.push([...books])
    }

    listBooks() {
        if (this.books.length === 0) {
            console.log("No books in the library");
            // return ki wja se ye code nhi chalega
            return;
        }
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.name}`);
        });
    }
}

// then class banegi book ki
// book ka naam, author, isbn, price, readStatus
//change readStatus
// information

class Book {
    constructor(name, author, isbn, price, readStatus = false) {
        this.name = name;
        this.author = author;
        this.isbn = isbn;
        this.price = price;
        this.readStatus = readStatus;
    }

    changeReadStatus() {
        this.readStatus = !this.readStatus;
    }

    getInfo() {
        `Title: ${this.name}, Author: ${this.author}, ISBN: ${this.isbn}, Price: $${this.price}, Read Status: ${this.readStatus ? '✅ Read' : '❌ Not Read'}`;
    }
}

const KarachiLib = new Library();

KarachiLib.addBooks([
    new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565", 10.99),
    new Book("To Kill a Mockingbird", "Harper Lee", "9780061120084", 7.99),
]);

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565", 10.99);

// ISBN number
Math.floor(Math.random()*10000000000000)