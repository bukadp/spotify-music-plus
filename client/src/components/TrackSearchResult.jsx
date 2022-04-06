import React from 'react';

function TrackSearchResult(props) {
  function handlePlay() {
    props.chooseTrack(props.track);
    props.setUri(props.uri);
  }

  return (
    <div
      style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
      onClick={handlePlay}
      className="search__history-track"
    >
      <img
        alt=""
        src={props.track.albumUrl}
        style={{ height: '64px', width: '64px' }}
      />
      <div className="ml-3" style={{ marginLeft: '10px', color: '#fff' }}>
        <div>{props.track.title}</div>
        <div className="text-muted">{props.track.artist}</div>
      </div>
    </div>
  );
}

export default TrackSearchResult;
