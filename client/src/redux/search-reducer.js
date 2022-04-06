

const initialState = {

    tracks: [{
        albumUrl: "https://i.scdn.co/image/ab67616d000048514dd033f4cf3a0a58059cde69",
        artist: "Earth, Wind & Fire",
        title: "September",
        uri: "spotify:track:2grjqo0Frpf2okIBiifQKs",
    },
    {
        albumUrl: "https://i.scdn.co/image/ab67616d00004851dac51d9a5701fbfb222f2f06",
        artist: "Yeat",
        title: "Luh m (feat. SeptembersRich)",
        uri: "spotify:track:64LINNVdeg25iM6HGcLDZN",
    },
    {
        albumUrl: "https://i.scdn.co/image/ab67616d00004851a673e8371c29c4bf580dc77a",
        artist: "JP Cooper",
        title: "September Song",
        uri: "spotify:track:5zS89QMCg2xifeuF2uyn2e",
    }]
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                //users: [...state.users], эта запись копирует всех users
                users: state.users.map(user => {
                    if (user.id === action.userId)
                        return {...user, followed:true}
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId)
                        return {...user, followed:false}
                    return user;
                })
            }

        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => {type:SET_USERS, users}


export default usersReducer;
