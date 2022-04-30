import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../redux/asyncAtion';
import { useState } from 'react';

import TrackSearchResult from './TrackSearchResult';
import AddTrackToPlaylist from './addTrackToPlaylist';

function Search(props) {
  const [toggleCom_addTrackToPlaylist, setToggleCom_addTrackToPlaylist] =
    useState(false);

  const storedTracks = useSelector((state) => state.tracks.tracks);
  const dispatch = useDispatch();

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
        {storedTracks.map((track) => (
          <TrackSearchResult
            track={track}
            setUri={props.setUri}
            setToggleCom_addTrackToPlaylist={setToggleCom_addTrackToPlaylist}
          />
        ))}
      </div>
      {toggleCom_addTrackToPlaylist && (
        <AddTrackToPlaylist 
        savePlaylist={savePlaylist} 
        
        />

      )}
    </div>
  );
}

export default Search;
