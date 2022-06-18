import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../Redux/Books/books';
import '../CSS/addNewBook.css';

const AddNewBook = () => {
  const dispatch = useDispatch();
  const emptyBook = {
    title: '',
    author: '',
    category: '',
  };

  const [book, changeBook] = useState(emptyBook);

  const handleTitle = (e) => {
    changeBook({
      ...book,
      title: e.target.value,
    });
  };

  const handleAuthor = (e) => {
    changeBook({
      ...book,
      author: e.target.value,
    });
  };

  const handleCategory = (e) => {
    changeBook({
      ...book,
      category: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, author, category } = book;
    dispatch(addBook({
      id: uuidv4(),
      title,
      author,
      category,
    },
    changeBook(emptyBook)));
  };

  return (
    <div className="Add-container">
      <h2 className="addBook-heading">Add New Book</h2>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" placeholder="Book Title" className="inputs" onChange={handleTitle} value={book.title} />
        <input type="text" placeholder="Book Author" className="inputs" onChange={handleAuthor} value={book.author} />
        <select name="category" className="inputs" onChange={handleCategory}>
          <option value="" defaultValue>Category</option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button type="submit" className="add-btn">Add Book</button>
      </form>
    </div>
  );
};

export default AddNewBook;
