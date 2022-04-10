import React from 'react';

function TrackSearchResult(props) {
  function handlePlay() {
    //props.chooseTrack(props.track);
    props.setUri(props.uri);
  }


  function addToPlayList() {
    let trackInfo = {
      trackAlbum: props.track.albumUrl,
      trackTitle: props.track.title,
      TrackUri: props.track.uri,
      trackArtist: props.track.artist,
    }

   // localStorage.setItem("playListTracks", trackInfo);

    localStorage.setItem("playListTracks", JSON.stringify(trackInfo));
    let trackInfo_ = JSON.parse(localStorage.getItem ("playListTracks"));

    console.log(typeof trackInfo); // объект
    console.log(trackInfo); // Объект {x: 12, y: 56}
    console.log(trackInfo_);
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
        <button className="playLists__addNew" onClick={addToPlayList}
          srcAlbum={props.track.albumUrl}
          trackTitle={props.track.title}
          uriTrack={props.track.uri}
        >Add to playlist</button>
      </div>
    </div>
  );
}

export default TrackSearchResult;
