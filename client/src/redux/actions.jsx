const showSearchedTracks = (tracks) => {
  return { type: 'showSearchedTracks', playload: tracks };
};

export const addToRecentlyTracks = (track) => {
  return { type: 'addToRecentlyTracks', playload: track };
};

export default showSearchedTracks;
