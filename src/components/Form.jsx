import React from 'react';

function Form() {
  return (
    <div>
      <form className="add-book-form">
        <div className="form-group">
          <label htmlFor="title">
            Title:
            <input type="text" name="title" id="title" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="author">
            Author:
            <input type="text" name="author" id="author" />
          </label>
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default Form;
