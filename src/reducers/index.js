import { combineReducers } from 'redux';
import BooksReducer from './books';
import ActiveBook from './activeBook';
import auth from './auth';

const reducers = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook,
    auth
});

export default reducers;
