import { combineReducers } from 'redux';
import BooksReducer from './books';

const rootReducer = combineReducers({
    books: BooksReducer
});

export default rootReducer;
