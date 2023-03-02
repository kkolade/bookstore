import React from 'react';

function Books() {
  return (
    <div>
      <>
        <div className="book-list">
          <ul className="list">
            <li className="list-item">
              Vulture is a Patient Bird by James Hardley Chase
            </li>
            <li className="list-item">A Time to Kill by John Grisham</li>
            <li className="list-item">Good Times by Kola Kolade</li>
          </ul>
        </div>

        <form className="add-book-form">
          <div className="form-group">
            <label htmlFor="title">Title: </label>
            <input type="text" name="title" id="title" />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author: </label>
            <input type="text" name="author" id="author" />
          </div>
          <button type="submit">Add Book</button>
        </form>
      </>
    </div>
  );
}

export default Books;
