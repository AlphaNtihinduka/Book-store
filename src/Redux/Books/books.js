import * as actions from '../actionsTypes';
import { fetchData, addData, deleteData } from '../../data/dataApi';

// Action creators
export const addBook = (payload) => async (dispatch) => {
  const book = {
    ...payload,
    item_id: payload.id,
  };
  await addData(book);
  dispatch({
    type: actions.BOOK_ADDED,
    book,
  });
};

export const getBook = () => async (dispatch) => {
  const res = await fetchData();

  dispatch({
    type: actions.BOOK_GOT,
    res,
  });
};

export const removeBook = (id) => async (dispatch) => {
  await deleteData(id);
  dispatch({
    type: actions.BOOK_REMOVED,
    id,
  });
};

const reducer = ((books = [], action = {}) => {
  switch (action.type) {
    case actions.BOOK_ADDED:
      return [
        ...books,
        action.book,
      ];
    case actions.BOOK_GOT:
      return action.res;
    case actions.BOOK_REMOVED:
      return [
        ...books.filter((book) => book.id !== action.id),
      ];
    default:
      return books;
  }
});

export default reducer;
