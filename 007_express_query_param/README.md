# Coding Challenge: Handling Query Parameters in an Express App

## Objective
Create a simple Express server that efficiently handles query parameters to filter data based on user input. This server should respond with data that reflects the values specified in the query parameters.

## Tasks

### 1. Set up an Express server
Initialize a new Node.js project and set up an Express server that listens on port 3000.

### 2. Create a data array
Define an array of objects representing books. Each book object should have an `id`, `title`, `author`, and `year` of publication.

### 3. Implement Query Parameter Handling
Create a route `/books` that retrieves books based on optional query parameters:
- `title`: Return books that have titles containing the specified string (case-insensitive).
- `author`: Return books written by the specified author (case-insensitive).
- `year`: Return books published in the specified year.

If no query parameters are provided, return the entire list of books.

### 4. Response
Ensure the server sends a JSON response that includes either the filtered list of books or the entire list based on the input query parameters.

## Example Requests and Responses

- **Request:** `/books?author=Rowling`
- **Response:** `[{ id: 1, title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", year: 1997 }]`

- **Request:** `/books?year=1997`
- **Response:** `[{ id: 1, title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", year: 1997 }, { id: 2, title: "Memoirs of a Geisha", author: "Arthur Golden", year: 1997 }]`

## Requirements
- Use Node.js and Express.
- Ensure your app is robust and handles different types of input gracefully.

## Bonus Challenge
Implement additional query parameters like `sortBy` which can sort the books based on title, author, or year either in ascending or descending order.
