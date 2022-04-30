import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../redux/asyncAtion';
import { useState } from 'react';

import TrackSearchResult from './TrackSearchResult';

function Search(props) {
  const store = useSelector((state) => state.tracks.tracks);
  const dispatch = useDispatch();
  const [toggleCom_addTrackToPlaylist, setToggleCom_addTrackToPlaylist] =
    useState(false);

  function handlerSearchArtist(event) {
    if (event.key === 'Enter') {
      dispatch(getData(props, event.target.value));
    }
  }

  function savePlaylist() {
    setToggleCom_addTrackToPlaylist(false);
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
        {store.map((track) => (
          <TrackSearchResult
            track={track}
            setUri={props.setUri}
            toggleCom_addTrackToPlaylist={toggleCom_addTrackToPlaylist}
            setToggleCom_addTrackToPlaylist={setToggleCom_addTrackToPlaylist}
            savePlaylist={savePlaylist}
          />
        ))}
      </div>
    </div>
  );
}

export default Search;
