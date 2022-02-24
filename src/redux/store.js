import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import { authorReducer } from './reducers/authorReducers';
import {  bookRequestReducer } from './reducers/bookRequestReducer';
import { booksReducer } from './reducers/booksReducer';
import { categoryReducer } from './reducers/categoryReducer';
import { editorialReducer } from './reducers/editorialReducers';
import { userReducer } from './reducers/userReducer';




const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const reducers = combineReducers({
booksReducer,
categoryReducer,
authorReducer,
editorialReducer,
userReducer,
bookRequestReducer

})
export const store = createStore(reducers, composeEnhancers(
applyMiddleware(thunk)
))