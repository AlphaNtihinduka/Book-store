import React from 'react';
import PropTypes from 'prop-types';

const AddNewBook = ({ handleSubmit }) => (
  <div className="Add-container">
    <h2 className="addBook-heading">Add New Book</h2>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Book Title" />
      <input type="text" placeholder="Book Author" />
      <select name="category">
        <option value="" defaultValue>Author</option>
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Economy">Economy</option>
      </select>
      <button type="submit">Add Book</button>
    </form>
  </div>
);

AddNewBook.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default AddNewBook;
