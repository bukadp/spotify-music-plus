
import {
  NavLink
} from "react-router-dom";

function Library(props) {
  return (
    <div className="library">
      {' '}
      <div className="header">
        <div className="header-title">Library</div>
      </div>
      <div className="library__playlists">

        <NavLink to="/likedtracks">
          <div
            className="library__playlists-item"
            id="likedTrack"
            onClick={props.showPlayList}
          >
            <p id="likedTrack">Liked tracks</p>
            <button>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="likedTrack"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.91086 3.57768C7.06713 3.42144 7.27906 3.33368 7.50003 3.33368C7.721 3.33368 7.93292 3.42144 8.08919 3.57768L13.9225 9.4113C14.0788 9.56758 14.1665 9.77951 14.1665 10.0005C14.1665 10.2215 14.0788 10.4334 13.9225 10.5897L8.08919 16.4233C7.93202 16.5751 7.72152 16.6591 7.50302 16.6572C7.28453 16.6553 7.07552 16.5677 6.92101 16.4132C6.7665 16.2586 6.67886 16.0496 6.67696 15.8311C6.67507 15.6126 6.75906 15.4021 6.91086 15.2449L12.155 10.0005L6.91086 4.75607C6.75463 4.59979 6.66687 4.38785 6.66687 4.16687C6.66687 3.94589 6.75463 3.73396 6.91086 3.57768Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </NavLink>

        <NavLink to="/myplaylists">
          <div
            className="library__playlists-item"
            id="playList"
            onClick={props.showPlayList}
          >
            <p id="playList">Playlists</p>
            <button>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="playList"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.91086 3.57768C7.06713 3.42144 7.27906 3.33368 7.50003 3.33368C7.721 3.33368 7.93292 3.42144 8.08919 3.57768L13.9225 9.4113C14.0788 9.56758 14.1665 9.77951 14.1665 10.0005C14.1665 10.2215 14.0788 10.4334 13.9225 10.5897L8.08919 16.4233C7.93202 16.5751 7.72152 16.6591 7.50302 16.6572C7.28453 16.6553 7.07552 16.5677 6.92101 16.4132C6.7665 16.2586 6.67886 16.0496 6.67696 15.8311C6.67507 15.6126 6.75906 15.4021 6.91086 15.2449L12.155 10.0005L6.91086 4.75607C6.75463 4.59979 6.66687 4.38785 6.66687 4.16687C6.66687 3.94589 6.75463 3.73396 6.91086 3.57768Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </NavLink>

      </div>
      <div className="library__listeningHistory">
        <div className="library__listeningHistory-title">Listening history</div>
        <div className="library__listeningHistory-list">
          <div className="listTracks__track">
            <div className="listTracks__track-img">Track</div>
            <div className="listTracks__track-info">
              <p className="listTracks__track-name">name</p>
              <p className="listTracks__track-player">player</p>
              <p className="listTracks__track-duration">time duration</p>
            </div>
          </div>
          <div className="listTracks__track">
            <div className="listTracks__track-img">Track</div>
            <div className="listTracks__track-info">
              <p className="listTracks__track-name">name</p>
              <p className="listTracks__track-player">player</p>
              <p className="listTracks__track-duration">time duration</p>
            </div>
          </div>
          <div className="listTracks__track">
            <div className="listTracks__track-img">Track</div>
            <div className="listTracks__track-info">
              <p className="listTracks__track-name">name</p>
              <p className="listTracks__track-player">player</p>
              <p className="listTracks__track-duration">time duration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Library;
