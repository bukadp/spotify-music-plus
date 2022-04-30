import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import addToRecentlyTracks from '../redux/act';
import More from './more';
import AddTrackToPlaylist from './addTrackToPlaylist';

function TrackSearchResult(props) {
  const store = useSelector((state) => state.recentlyTracks.recentlyTracks);
  const dispatch = useDispatch();
  const [toggleMore, setToggleMore] = useState(false);
  const [toggleCom_addTrackToPlaylist, setToggleCom_addTrackToPlaylist] =
    useState(false);

  function savePlaylist() {
    setToggleCom_addTrackToPlaylist(false);
  }

  function handlePlay() {
    props.setUri(props.track.uri);
    const isCheckedTrack = store.includes(props.track);
    if (isCheckedTrack) {
      return;
    }
    dispatch(addToRecentlyTracks(props.track));
  }

  return (
    <div>
      <div
        style={{
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
        }}
        onClick={handlePlay}
        className="search__history-track"
      >
        <img
          alt=""
          src={props.track.album.images[0].url}
          style={{ height: '64px', width: '64px' }}
        />
        <div className="ml-3" style={{ marginLeft: '10px', color: '#fff' }}>
          <div>{props.track.name}</div>
          <div
            className="text-muted"
            style={{
              maxWidth: '46vw',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              padding: '5px',
              textOverflow: 'ellipsis',
            }}
          >
            {props.track.artists.map((item) => {
              return <span style={{ marginRight: '5px' }}>{item.name}</span>;
            })}
          </div>
        </div>
        <button
          className="search__history-moreButton"
          style={{ position: 'absolute', top: '0', right: '10px' }}
          onClick={() => {
            setToggleMore(!toggleMore);
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.75 5C13.75 5.46413 13.5656 5.90925 13.2374 6.23744C12.9092 6.56563 12.4641 6.75 12 6.75C11.5359 6.75 11.0908 6.56563 10.7626 6.23744C10.4344 5.90925 10.25 5.46413 10.25 5C10.25 4.53587 10.4344 4.09075 10.7626 3.76256C11.0908 3.43437 11.5359 3.25 12 3.25C12.4641 3.25 12.9092 3.43437 13.2374 3.76256C13.5656 4.09075 13.75 4.53587 13.75 5V5ZM13.75 19C13.75 19.4641 13.5656 19.9092 13.2374 20.2374C12.9092 20.5656 12.4641 20.75 12 20.75C11.5359 20.75 11.0908 20.5656 10.7626 20.2374C10.4344 19.9092 10.25 19.4641 10.25 19C10.25 18.5359 10.4344 18.0908 10.7626 17.7626C11.0908 17.4344 11.5359 17.25 12 17.25C12.4641 17.25 12.9092 17.4344 13.2374 17.7626C13.5656 18.0908 13.75 18.5359 13.75 19ZM12 13.75C12.4641 13.75 12.9092 13.5656 13.2374 13.2374C13.5656 12.9092 13.75 12.4641 13.75 12C13.75 11.5359 13.5656 11.0908 13.2374 10.7626C12.9092 10.4344 12.4641 10.25 12 10.25C11.5359 10.25 11.0908 10.4344 10.7626 10.7626C10.4344 11.0908 10.25 11.5359 10.25 12C10.25 12.4641 10.4344 12.9092 10.7626 13.2374C11.0908 13.5656 11.5359 13.75 12 13.75V13.75Z"
              fill="#7F7F7F"
            />
          </svg>
        </button>
        {toggleMore && (
          <More
            setToggleCom_addTrackToPlaylist={setToggleCom_addTrackToPlaylist}
            trackInfo={props.track}
            key={props.track.id}
          />
        )}
        {toggleCom_addTrackToPlaylist && (
          <AddTrackToPlaylist
            savePlaylist={savePlaylist}
            trackInfo={props.track}
            key={props.track.id} />
        )}
      </div>
    </div>
  );
}

export default TrackSearchResult;
