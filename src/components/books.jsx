import React, { useState } from 'react';
import Book from './Book';
import Form from './Form';

function Books() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Vulture is a Patient Bird',
      author: 'James Hardley Chase',
    },
    {
      id: 2,
      title: 'A Time to Kill',
      author: 'John Grisham',
    },
    {
      id: 3,
      title: 'Good Times',
      author: 'Kola Kolade',
    },
  ]);
  return (
    <div>
      <h3>Books</h3>
      <>
        <div className="book-list">
          <ul className="list">
            <Book books={books} setBooks={setBooks} />
          </ul>
        </div>
        <h3>Add New Book</h3>
        <Form />
      </>
    </div>
  );
}

export default Books;
