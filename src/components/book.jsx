import React from 'react';

function Book({ books, setBooks }) {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          {book.title} by {book.author}
          <button type="submit">Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default Book;
