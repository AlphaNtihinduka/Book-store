import * as actions from '../actionsTypes';
import fetchApi, { addApiData, deleteApiData } from '../../API/apiData';

const reducer = ((books = [], action = {}) => {
  switch (action.type) {
    case actions.BOOK_GOT:
      return [
        action.apiData,
      ];
    case actions.BOOK_ADDED:
      return [
        ...books,
        action.book,
      ];

    case actions.BOOK_REMOVED:
      return [
        ...books.filter((book) => book.id !== action.id),
      ];
    default:
      return books;
  }
});

// Action creators
export const fetchBook = () => async (dispatch) => {
  const res = await fetchApi();
  // eslint-disable-next-line array-callback-return
  const apiData = Object.keys(res).map((key) => {
    const book = res[key][0];
    book.id = key;
    return book;
  });
  dispatch({
    type: actions.BOOK_GOT,
    apiData,
  });
};

export const addBook = (payload) => async (dispatch) => {
  const book = {
    ...payload,
    item_id: payload.id,
  };
  await addApiData(book);
  dispatch({
    type: actions.BOOK_ADDED,
    book,
  });
};

export const RemoveBook = (id) => async (dispatch) => {
  await deleteApiData(id);
  dispatch({
    type: actions.BOOK_REMOVED, id,
  });
};

// export const addBook = (book) => ({
//   type: actions.BOOK_ADDED, book,
// });

// export const RemoveBook = (id) => ({
//   type: actions.BOOK_REMOVED, id,
// });

export default reducer;
