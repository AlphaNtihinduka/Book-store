import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../Redux/Books/books';
import '../CSS/book.css';

const Book = (props) => {
  const {
    id, category, title, author,
  } = props;

  const dispatch = useDispatch();

  const deleteHandler = (e, bookId) => {
    e.preventDefault();
    dispatch(removeBook(bookId));
  };

  return (
    <div className="book-container">
      <div key={id}>
        <p className="topic">{category}</p>
        <p className="title">{title}</p>
        <p className="author">{author}</p>
        <ul className="btn-container">
          <li className="comment-btn">
            <button type="button">Comment |</button>
          </li>
          <li className="remove-btn">
            <button type="button" onClick={(e) => deleteHandler(e, id)}>Remove |</button>
          </li>
          <li className="edit-btn">
            <button type="button">Edit |</button>
          </li>
        </ul>
      </div>

      <div className="right-progress">
        <div className="circular-progress">
          <svg width="200" height="200">
            <g transform="rotate(-90 100 100)">
              <circle r="60" cx="100" cy="100" fill="transparent" stroke="lightgrey" strokeWidth="0.5rem" strokeDasharray="439.8" strokeDashoffset="0" />
              <circle r="60" cx="100" cy="100" fill="transparent" stroke="#0290ff" strokeWidth="0.5rem" strokeDasharray="339.8" strokeDashoffset="66" />
            </g>
          </svg>
          <div>
            <p className="percentage">64%</p>
            <p className="complete">Completed</p>
          </div>
        </div>

        <div className="vertical-line" />
        <div className="right-update">
          <div className="chapter">CURRENT CHAPTER</div>
          <div className="chapter-number">CHAPTER 17</div>
          <div className="progress-btn">Update Progess</div>
        </div>

      </div>

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
