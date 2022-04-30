const addToRecentlyTracks = (track) => {
  return { type: 'addToRecentlyTracks', playload: track };
};

export default addToRecentlyTracks;
