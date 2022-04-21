const SET_RECENTLY_PLAYED_TRACK = 'SET-RECENTLY-PLAYED';
//const UPDATE_NEW_SEARCH_TEXT = 'UPDATE-NEW-SEARCH-TEXT';


const initialState = {

    trackInfoData: [
        {
            id: "spotify:track:6EDO9iiTtwNv6waLwa1UUq",
            trackAlbum: "https://i.scdn.co/image/ab67616d00004851efaecb4b9cbae7c120d14617",
            trackTitle: "POPSTAR (feat. Drake)",
            trackUri: "spotify:track:6EDO9iiTtwNv6waLwa1UUq",
            trackArtist: "DJ Khaled",
        },
        {
            id: "spotify:track:4hrGpb5Rvxef1AclRgWQob",
            trackAlbum: "https://i.scdn.co/image/ab67616d0000485194378b39946803bc4bb27424",
            trackTitle: "Аквадискотека",
            trackUri: "spotify:track:4hrGpb5Rvxef1AclRgWQob",
            trackArtist: "Александр Гудков",
        },
    ]
}

const recentlyPlayedReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RECENTLY_PLAYED_TRACK: {
            return {
                ...state, 
                trackInfoData: [...action.trackInfoData]
            }
        }
        default:
            return state;
    }
}

export const setRecentlyPlyedTrackAC = (trackInfoData) => ({ type: SET_RECENTLY_PLAYED_TRACK, trackInfoData })



export default recentlyPlayedReducer;


