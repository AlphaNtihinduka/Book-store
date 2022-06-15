import { createStore, combineReducers } from 'react-redux';
import * as booksReducer from './Books/books';
import * as categoriesReducer from './Categories/categories';

const rootreducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = createStore(rootreducer);

export default store;
