# Book Library Management System

The Book Library Management System is a web application designed to help manage a library's book inventory, track the borrowing and returning of books, and manage user accounts.

## Features

- **Book Management:**
  - Add new books with details such as title, author, ISBN, etc.
  - Update book information.
  - Remove books from the library.

- **User Management:**
  - Register new users.
  - Manage user accounts and permissions.

- **Checkout and Return:**
  - Allow users to check out books.
  - Track return dates and manage overdue fines.

## Technologies Used

- **Backend:**
  - Node.js
  - Express.js
  - MySQL

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Mor-shedi/Book-Library.git
   cd Book-Library

## Requests

 ### Books CRUD Operations
1. GET =>   get all books =>   http://localhost:3000/api/books
2. PUT =>  update book => http://localhost:3000/api/books/?
3. GET  => search for book  => http://localhost:3000/api/books/search?keyword=?
4. POST => create book  => http://localhost:3000/api/books
5. DELETE => delete book  => http://localhost:3000/api/books/?

### Borrower CRUD Operations
1. GET  => get all borrowers  => http://localhost:3000/api/borrower
2. POST  => create borrower  => http://localhost:3000/api/borrower
3. PUT  => update borrower  => http://localhost:3000/api/borrower/?
4. DELETE => delete borrower  => http://localhost:3000/api/borrower/?

### Borrower Process
1. POST  => checkout  => http://localhost:3000/api/borrow_history/checkout
2. GET  =>  get all checkouts  => http://localhost:3000/api/borrow_history/checkout
3. POST  => return book => http://localhost:3000/api/borrow_history/return
4. GET  => borrower history  => http://localhost:3000/api/borrow_history/books/?
