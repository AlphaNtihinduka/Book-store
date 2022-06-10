import React from 'react';
import PropTypes from 'prop-types';
import '../CSS/addNewBook.css';

const AddNewBook = ({ handleSubmit }) => (
  <div className="Add-container">
    <h2 className="addBook-heading">Add New Book</h2>
    <form onSubmit={handleSubmit} className="form">
      <input type="text" placeholder="Book Title" className="inputs" />
      <input type="text" placeholder="Book Author" className="inputs" />
      <select name="category" className="inputs">
        <option value="" defaultValue>Category</option>
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Economy">Economy</option>
      </select>
      <button type="submit" className="add-btn">Add Book</button>
    </form>
  </div>
);

AddNewBook.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default AddNewBook;
