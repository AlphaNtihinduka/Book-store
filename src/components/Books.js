import React from 'react';
import AddNewBook from './AddNewBook';
import Book from './Book';

const Books = () => {
  const booksStore = [
    {
      id: 1,
      topic: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: 2,
      topic: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      id: 3,
      topic: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
    },
  ];

  const handleSubmit = () => {};

  return (
    <div>
      {booksStore.map((book) => (
        <div key={book.id} className="book-details">
          <Book topic={book.topic} title={book.title} author={book.author} />
        </div>
      ))}
      ;
      <AddNewBook onSubmit={handleSubmit} />
    </div>

  );
};

export default Books;
