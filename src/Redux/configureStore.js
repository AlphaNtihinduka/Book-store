import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import booksReducer from './Books/books';
import categoriesReducer from './Categories/categories';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
  middleware: [thunk],
});

export default store;
