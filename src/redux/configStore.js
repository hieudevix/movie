import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import {LocationReducer} from './reducers/LocationReducer';
import {FormGetSticketReducer} from './reducers/FormGetSticketReducer';
import {ListMovieReducer} from './reducers/ListMovieReducer';
import {ListCinemasReducer} from './reducers/ListCinemasReducer';
import {UserReducer} from './reducers/UserReducer';
import {BookingSticketsReducer} from './reducers/BookingSticketsReducer';
import {MovieSheduleReducer} from './reducers/MovieSheduleReducer';

const rootReducer = combineReducers({
    LocationReducer,
    FormGetSticketReducer,
    ListMovieReducer,
    ListCinemasReducer,
    UserReducer,
    BookingSticketsReducer,
    MovieSheduleReducer
});


export const store = createStore(rootReducer,applyMiddleware(thunk));