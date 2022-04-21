const SET_FAVORITE_LIST_NAME = 'SET-FAVORITE-LIST-NAME';
const UPDATE_FAVORITE_LIST_NAME = 'UPDATE-FAVORITE-LIST-NAME';

const initialState = {
    favoriteListName: "",
}

const favoriteListReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_FAVORITE_LIST_NAME:

            return {
                ...state,
               listName: state.favoriteListName,
                favoriteListName: ""
            };

        case UPDATE_FAVORITE_LIST_NAME:
            return {
                ...state,
                favoriteListName: action.newlistName,
            };

        default:
            return state;
    }
}

export const setFavoriteListNameAC = () => ({ type: SET_FAVORITE_LIST_NAME })
export const updateFavoriteListNameAC = (text) => ({
    type: UPDATE_FAVORITE_LIST_NAME,
    newlistName: text,
})


export default favoriteListReducers;