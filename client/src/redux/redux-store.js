import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from "redux"
import thunk from 'redux-thunk'

import { listTracks } from "./reducers/listTracks"
import { recentlyTracksReducer } from "./reducers/recentlyTracks"
import { likedTracks } from './reducers/likedTracks'

const rootReducer = combineReducers({
    tracks: listTracks,
    recentlyTracks: recentlyTracksReducer,
    likedTracks: likedTracks,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;