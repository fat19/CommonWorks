import {combineReducers} from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  books: BooksReducer
});

const denemeMAster = () => {
        
}

export default rootReducer;