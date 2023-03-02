import React from 'react';

function Form() {
  return (
    <div>
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
    </div>
  );
}

export default Form;
