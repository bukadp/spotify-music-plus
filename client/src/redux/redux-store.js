import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from "redux"
import thunk from 'redux-thunk'

import { listTracks } from "./reducers/listTracks"
import { recentlyTracksReducer } from "./reducers/recentlyTracks"

const rootReducer = combineReducers({
    tracks: listTracks,
    recentlyTracks: recentlyTracksReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;