import SHOW_SEARCHED_TRACKS from './redux-store';

export default function showSearchedTracks(tracks) {
  return { type: SHOW_SEARCHED_TRACKS, tracks };
}
