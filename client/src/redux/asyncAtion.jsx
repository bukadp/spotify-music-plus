import axios from 'axios';
import showSearchedTracks from '../redux/actions';

export function getData(props, nameTrack) {
  return (dispatch) => {
    axios
      .get('https://api.spotify.com/v1/search', {
        headers: {
          Authorization: `Bearer ${props.accessToken}`,
        },
        params: {
          q: nameTrack,
          type: 'track',
        },
      })
      .then((response) => {
        dispatch(showSearchedTracks(response.data.tracks.items));
      });
  };
}
