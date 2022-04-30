function HomePageTracksResult(props) {
  function handlePlay() {
    props.setUri(props.track.uri);
  }

  return (
    <div
      class="recently__history-track"
      style={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        minWidth: '115px',
      }}
      onClick={handlePlay}
    >
      <div className="recently__history-track__inner">
        <div className="recently__history-track__img">
          <img
            src={props.track.album.images[0].url}
            alt="imgTrack"
            style={{ width: '100%' }}
          />
        </div>
        <div
          className="recently__history-track__nameTrack"
          style={{ color: '#fff', textAlign: 'center' }}
        >
          {props.track.name}
        </div>
      </div>
    </div>
  );
}

export default HomePageTracksResult;
