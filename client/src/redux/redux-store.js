import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const initialState = {
    tracks: [],
}

export const SHOW_SEARCHED_TRACKS = 'showSearchedTracks';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SEARCHED_TRACKS:
            return {
                tracks: action.tracks,
            }
        default:
            return state
    }
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;