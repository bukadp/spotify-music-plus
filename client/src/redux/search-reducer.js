const SET_SEARCH_TRACK = 'SET-SEARCH-TRACK';
const UPDATE_NEW_SEARCH_TEXT = 'UPDATE-NEW-SEARCH-TEXT';
// const PLAY_SEARCHED_TRACK = 'PLAY-SEARCHED-TRACK';
// const SHOW_SEARCHED_ARTIST = 'SHOW_SEARCHED_ARTIST';

const initialState = {
    tracks: [],
    newSearchText: "",
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_TRACK: {
            return {newSearchText: ".", 
            tracks: [...action.tracks]}
        }
        case UPDATE_NEW_SEARCH_TEXT:
            return {
                ...state,
                newSearchText: action.newText,
            };
        default:
            return state;
    }
}

export const setSerchTrackAC = () => ({type: SET_SEARCH_TRACK})
export const updateNewSearchTextAC = (text) => ({
    type: UPDATE_NEW_SEARCH_TEXT,
    newText: text,
})


// export const playSearchedTrack = (uri) => ({
//     type: PLAY_SEARCHED_TRACK,
//         trackUri: uri,
//     })
    
// export const showSearchedArtist = (id) => ({
//     type: SHOW_SEARCHED_ARTIST,
//     aristId: id,
// })

export default searchReducer;


