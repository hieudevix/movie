import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import {LocationReducer} from './reducers/LocationReducer';
import {FormGetSticketReducer} from './reducers/FormGetSticketReducer';
import {ListMovieReducer} from './reducers/ListMovieReducer'
import {ListCinemasReducer} from './reducers/ListCinemasReducer'

const rootReducer = combineReducers({
    LocationReducer,
    FormGetSticketReducer,
    ListMovieReducer,
    ListCinemasReducer
});


export const store = createStore(rootReducer,applyMiddleware(thunk));