import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { topic, title, author } = props;
  return (
    <div className="book-container">
      <div>
        <p>{topic}</p>
        <p>{title}</p>
        <p>{author}</p>
        <ul className="btn-container">
          <li className="comment-btn">Comments |</li>
          <li className="remove-btn">Remove |</li>
          <li className="edit-btn">Edit |</li>
        </ul>
      </div>
      <div className="progress">Update Progess</div>
    </div>
  );
};

Book.propTypes = {
  topic: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
