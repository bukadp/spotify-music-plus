function AddTrackToPlaylist(props) {
  return (
    <div className="addTrackToPlaylist">
      <div className="addTrackToPlaylist__inner">
        <div className="addTrackToPlaylist__top">
          <div className="addTrackToPlaylist__top-title">Playlists</div>
          <div
            className="addTrackToPlaylist__top-button"
            onClick={props.savePlaylist}
          >
            Save
          </div>
        </div>
        <div className="addTrackToPlaylist__list">
          {
            // localStorage...
          }
        </div>
      </div>
    </div>
  );
}

export default AddTrackToPlaylist;
