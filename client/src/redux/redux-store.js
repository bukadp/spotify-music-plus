import {combineReducers, createStore} from "redux";
import searchReducer from "./search-reducer"

let reducers = combineReducers({
    searchPage: searchReducer,

});

let store = createStore(reducers);

export default store