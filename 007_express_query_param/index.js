const express = require('express');
const app = express();

const port = 3000;

const books = [
    { id: 1, title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", year: 1997 },
    { id: 2, title: "Memoirs of a Geisha", author: "Arthur Golden", year: 1997 },
    { id: 3, title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
    { id: 4, title: "1984", author: "George Orwell", year: 1949 },
    { id: 5, title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    { id: 6, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 7, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { id: 8, title: "Moby Dick", author: "Herman Melville", year: 1851 },
    { id: 9, title: "War and Peace", author: "Leo Tolstoy", year: 1869 },
    { id: 10, title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 }
];



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})