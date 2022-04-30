function AddTrackToPlaylist(props) {

const addToPlayList = () => {
  let trackInfoList = localStorage.getItem("playListTracks")
    ? JSON.parse(localStorage.getItem("playListTracks"))
    : []

  let trackInfo = {
    trackAlbum: props.track.albumUrl,
    trackTitle: props.track.title,
    trackUri: props.track.uri,
    trackArtist: props.track.artist,
  }

  trackInfoList.map(x => x.trackUri).find(x => x === trackInfo.trackUri) ? alert(`This track already in your track list, ${trackInfo.trackTitle}`) : trackInfoList.push(trackInfo)

  localStorage.setItem("playListTracks", JSON.stringify(trackInfoList));
}

  return (
    <div className="addTrackToPlaylist">
      <div className="addTrackToPlaylist__inner">
        <div className="addTrackToPlaylist__top">
          <div className="addTrackToPlaylist__top-title">Playlists</div>
          <div
            className="addTrackToPlaylist__top-button"
            onClick={addToPlayList}
          >
            Save
          </div>
        </div>
        <div className="addTrackToPlaylist__list">
        </div>
      </div>
    </div>
  );
}

export default AddTrackToPlaylist;
