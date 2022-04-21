import {combineReducers, createStore} from "redux";
import searchReducer from "./search-reducer"
import favoriteListReducers from './favoriteList-reduser'
import recentlyPlayedReducer from "./recentlyPlayed-reducer";

let reducers = combineReducers({
    searchPage: searchReducer,
    favoritelistPage: favoriteListReducers,
    recentlyPlayedPage: recentlyPlayedReducer,
});

let store = createStore(reducers);

export default store

window.store = store;