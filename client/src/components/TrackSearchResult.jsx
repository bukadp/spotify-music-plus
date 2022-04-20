import React from 'react';
import { useDispatch } from 'react-redux';
import addToRecentlyTracks from '../redux/actions';

function TrackSearchResult(props) {
  const dispatch = useDispatch();

  function handlePlay() {
    props.setUri(props.track.uri);
    dispatch(addToRecentlyTracks([props.track]));
  }

  return (
    <div
      style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
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
            // eslint-disable-next-line no-unused-expressions
            return <span style={{ marginRight: '5px' }}>{item.name}</span>;
          })}
        </div>
      </div>
    </div>
  );
}

export default TrackSearchResult;
