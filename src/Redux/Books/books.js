import * as actions from '../actionsTypes';

const reducer = ((books = [], action = {}) => {
  switch (action.type) {
    case actions.BOOK_ADDED:
      return [
        ...books,
        action.book,
      ];

    case actions.BOOK_REMOVED:
      return [
        books.map((book) => book.id !== action.id),
      ];
    default:
      return books;
  }
});

// Action creators
export const addBook = (book) => ({
  type: actions.BOOK_ADDED, book,
});

export const RemoveBook = (id) => ({
  type: actions.BOOK_REMOVED, id,
});

export default reducer;
