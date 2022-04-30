import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../redux/asyncAtion';
import TrackSearchResult from './TrackSearchResult';

function Search(props) {
  const storedTracks = useSelector((state) => state.tracks.tracks);
  const dispatch = useDispatch();

  function handlerSearchArtist(event) {
    if (event.key === 'Enter') {
      dispatch(getData(props, event.target.value));
    }
  }

  return (
    <div className="search">
      <div className="header">
        <div className="header-title">Search</div>
      </div>
      <input
        type="text"
        className="search__form-input"
        placeholder="Song..."
        onKeyDown={handlerSearchArtist}
      />
      <div className="search__history">
        {storedTracks.map((track) => (
          <TrackSearchResult
            track={track}
            setUri={props.setUri}
          />
        ))}
      </div>
    </div>
  );
}

export default Search;
