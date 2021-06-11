import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import {LocationReducer} from './reducers/LocationReducer';
import {FormGetSticketReducer} from './reducers/FormGetSticketReducer'

const rootReducer = combineReducers({
    LocationReducer,
    FormGetSticketReducer,
});


export const store = createStore(rootReducer,applyMiddleware(thunk));