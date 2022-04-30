import { millisecondsToMinutes, millisecondsToSeconds } from 'date-fns';

function LibraryPageTracksResult(props) {
  function handlePlay() {
    props.setUri(props.track.uri);
  }

  return (
    <div className="listTracks__track" onClick={handlePlay}>
      <div className="listTracks__track-img">
        <img src={props.track.album.images[0].url} alt="imgTrack" />
      </div>
      <div className="listTracks__track-info">
        <p className="listTracks__track-name">{props.track.name}</p>
        <p className="listTracks__track-player">
          {' '}
          {props.track.artists.map((item) => {
            // eslint-disable-next-line no-unused-expressions
            return <span style={{ marginRight: '5px' }}>{item.name}</span>;
          })}
        </p>
        <p className="listTracks__track-duration">
          {millisecondsToMinutes(props.track.duration_ms) +
            ':' +
            '' +
            (millisecondsToSeconds(props.track.duration_ms) -
              millisecondsToMinutes(props.track.duration_ms) * 60)}
        </p>
      </div>
    </div>
  );
}

export default LibraryPageTracksResult;
