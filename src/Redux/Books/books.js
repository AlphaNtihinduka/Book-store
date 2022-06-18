import * as actions from '../actionsTypes';
import { getData, addData, deleteData } from '../../data/dataApi';

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

console.log('getdata', getData());
export const getBook = () => async (dispatch) => {
  const res = await getData();
  console.log('response: ', res);
  // eslint-disable-next-line array-callback-return

  dispatch({
    type: actions.BOOK_GOT,
    res,
  });
};

export const removeBook = (id) => async (dispatch) => {
  await deleteData(id);
  console.log('id  redux', id);
  dispatch({
    type: actions.BOOK_REMOVED,
    id,
  });
};

console.log('remove function', removeBook());

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
