import { combineReducers, createStore } from "redux";
import {LocationReducer} from './reducers/LocationReducer';

const rootReudcer = combineReducers({
    LocationReducer,
});


export const store = createStore(rootReudcer);