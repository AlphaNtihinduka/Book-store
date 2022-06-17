import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { RemoveBook } from '../Redux/Books/books';
import '../CSS/book.css';

const Book = (props) => {
  const {
    id, category, title, author,
  } = props;

  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(RemoveBook(id));
  };

  return (
    <div className="book-container">
      <div key={id}>
        <p className="topic">{category}</p>
        <p className="title">{title}</p>
        <p className="author">{author}</p>
        <ul className="btn-container">
          <li className="comment-btn">
            <button type="button">Comment</button>
          </li>
          <li className="remove-btn">
            <button type="button" onClick={() => deleteHandler()}>Remove</button>
          </li>
          <li className="edit-btn">
            <button type="button">Edit |</button>
          </li>
        </ul>
      </div>
      <div className="progress-btn">Update Progess</div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
