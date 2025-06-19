// OOP's Level 1 Mini Project: Library Management System
// Create a Library class that can hold multiple books
// Each book should have properties like title, author, ISBN, price, and read status
// Implement methods to add books, list all books, change read status, and get book information

const addBookBtn = document.querySelector('#addBook');
const availableBooks = document.querySelector('#available-books');
const bookNameInput = document.querySelector('#bookName');
const bookPriceInput = document.querySelector('#price');
const bookAuthorInput = document.querySelector('#authorName');
const bookIsbnInput = document.querySelector('#isbn');
const bookIsbnBtn = document.querySelector('.details-btn-isbn');
const form = document.querySelector('form');


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
            console.log(book);
        });
    }
}

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

const generateISBN = () => {
    const randomISBN = Math.floor(Math.random() * 10000000000).toString();
    bookIsbnInput.value = randomISBN;
}

bookIsbnBtn.addEventListener('click', () => {
    generateISBN();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const book = new Book(bookNameInput.value, bookAuthorInput.value, bookIsbnInput.value, bookPriceInput.value);
    new Library().addBooks(book);
})

// then class banegi book ki
// book ka naam, author, isbn, price, readStatus
//change readStatus
// information