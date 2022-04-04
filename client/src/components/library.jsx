function Library(props) {
  return (
    <div className="library">
      {' '}
      <div className="header">
        <div className="header-title">Library</div>
        <div className="header-user" onClick={props.showSign}>
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
              d="M8 9C8 7.93914 8.42143 6.92172 9.17157 6.17157C9.92172 5.42143 10.9391 5 12 5C13.0609 5 14.0783 5.42143 14.8284 6.17157C15.5786 6.92172 16 7.93914 16 9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13C10.9391 13 9.92172 12.5786 9.17157 11.8284C8.42143 11.0783 8 10.0609 8 9ZM15.824 13.623C16.7755 12.8359 17.461 11.7743 17.7868 10.5832C18.1127 9.39204 18.0631 8.12938 17.6448 6.96748C17.2265 5.80559 16.4599 4.80107 15.4495 4.091C14.4392 3.38092 13.2344 2.99989 11.9995 2.99989C10.7646 2.99989 9.55978 3.38092 8.54946 4.091C7.53913 4.80107 6.77251 5.80559 6.35421 6.96748C5.9359 8.12938 5.8863 9.39204 6.21217 10.5832C6.53803 11.7743 7.22349 12.8359 8.175 13.623C4.986 14.746 3 17.247 3 20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21C4.26522 21 4.51957 20.8946 4.70711 20.7071C4.89464 20.5196 5 20.2652 5 20C5 17.73 7.355 15 12 15C16.645 15 19 17.73 19 20C19 20.2652 19.1054 20.5196 19.2929 20.7071C19.4804 20.8946 19.7348 21 20 21C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20C21 17.247 19.016 14.746 15.824 13.623Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="library__playlists">
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
