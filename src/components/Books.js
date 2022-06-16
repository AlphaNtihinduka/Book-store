import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import AddNewBook from './AddNewBook';
import Book from './Book';

const Books = () => {
  const booksStore = useSelector((state) => state.books);

  const handleSubmit = () => {};

  return (
    <div>
      {booksStore.map((book) => (
        <div key={uuidv4()} className="book-details">
          <Book category={book.category} id={book.id} title={book.title} author={book.author} />
        </div>
      ))}
      ;
      <AddNewBook onSubmit={handleSubmit} />
    </div>
  );
};

export default Books;
