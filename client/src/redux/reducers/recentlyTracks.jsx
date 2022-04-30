const defaultName = {
  recentlyTracks: [],
};

export const recentlyTracksReducer = (state = defaultName, action) => {
  switch (action.type) {
    case 'addToRecentlyTracks':
      return {
        recentlyTracks: [...state.recentlyTracks, action.playload],
      };
    default:
      return state;
  }
};
