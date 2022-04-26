const defaultName = {
  tracks: [],
};

export const listTracks = (state = defaultName, action) => {
  switch (action.type) {
    case 'showSearchedTracks':
      return {
        tracks: action.playload,
      };
    default:
      return state;
  }
};
