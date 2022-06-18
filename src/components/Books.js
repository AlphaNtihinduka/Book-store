import React from 'react';
import { useSelector } from 'react-redux';
import AddNewBook from './AddNewBook';
import Book from './Book';

const Books = () => {
  const booksStore = useSelector((state) => state.books);

  const handleSubmit = () => {};

  return (
    <div>
      {booksStore.map((book) => (
        <div key={book.id} className="book-details">
          <Book category={book.category} id={book.id} title={book.title} author={book.author} />
        </div>
      ))}
      ;
      <AddNewBook onSubmit={handleSubmit} />
    </div>
  );
};

export default Books;
