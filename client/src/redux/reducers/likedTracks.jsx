const defaultName = {
  likedTracks: [],
};

export const likedTracks = (state = defaultName, action) => {
  switch (action.type) {
    case 'addFavoriteTrack':
      return {
        likedTracks: [...state.likedTracks, action.playload],
      };
    default:
      return state;
  }
};
