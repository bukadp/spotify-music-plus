import React from 'react';


function TrackSearchResult(props) {
  
    function handlePlay() {
        props.chooseTrack(props.track)
      }

    return (
        <div
          style={{ cursor: "pointer" }}
          onClick={handlePlay}
        >
          <img alt='' src={props.track.albumUrl} style={{ height: "64px", width: "64px" }} />
          <div className="ml-3">
            <div>{props.track.title}</div>
            <div className="text-muted">{props.track.artist}</div>
          </div>
        </div>
      )
}

export default TrackSearchResult
