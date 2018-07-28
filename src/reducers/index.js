import { combineReducers } from 'redux';
import BooksReducer from './books';
import ActiveBook from './activeBook';

const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook
});

export default rootReducer;
