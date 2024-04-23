# Challenge: Build a Simple RESTful API with Express

## Objective
Design and implement a RESTful API using Express.js that manages a collection of books in a library. Your API should be capable of handling basic CRUD (Create, Read, Update, Delete) operations.

## Requirements

### 1. Setup and Initialization
- Initialize a new Node.js project.
- Install Express.js and any other necessary packages (e.g., `body-parser` for handling JSON payloads).

### 2. API Design
Your API should have routes to handle the following actions:
- **GET /books** - Retrieve a list of all books.
- **GET /books/:id** - Retrieve a book by its ID.
- **POST /books** - Add a new book to the collection.
- **PUT /books/:id** - Update an existing book's information.
- **DELETE /books/:id** - Remove a book from the collection.

### 3. Data Structure
Each book should have the following properties:
- `id` (number or string, unique)
- `title` (string)
- `author` (string)
- `yearPublished` (number)

### 4. Middleware
- Use middleware to handle parsing of JSON bodies.
- Optionally, add middleware to log each request to the console.

### 5. Error Handling
- Implement basic error handling for cases like "book not found" or "invalid book data".

### 6. Testing
- Manually test your API using a tool like Postman or write automated tests with a framework like Jest.

## Submission
- Submit the source code for your API.
- Include a README file with instructions on how to set up and run your API, as well as examples of requests and expected responses.

## Bonus Points
- Add authentication to protect the API routes.
- Implement additional features like sorting the books list or filtering by author/year published.
