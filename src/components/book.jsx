/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React from 'react';

function Book({ books }) {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          {book.title}
          <span> by </span>
          {book.author}
          <button type="submit">Remove</button>
        </li>
      ))}
    </ul>
  );
}
Book.propTypes = { books: PropTypes.array.isRequired };

export default Book;
