import { applyMiddleware, legacy_createStore as createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer from './Books/books';
import categoriesReducer from './Categories/categories';

const rootreducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = createStore(
  rootreducer,
  applyMiddleware(thunk, logger),
);

export default store;
