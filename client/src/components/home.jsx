function Home(props) {
  return (
    <div className="home">
      <div className="header">
        <div className="header-title">Home</div>
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
      <div className="home__main">
        <div className="home__main-played">
          <div className="home__main-title">Recently Played</div>
          <div className="home__main-listTracks">
            <div className="home__main-track">Track</div>
            <div className="home__main-track">Track</div>
            <div className="home__main-track">Track</div>
            <div className="home__main-track">Track</div>
          </div>
        </div>
        <div className="home__main-liked">
          <div className="home__main-title">Liked Tracks</div>
          <div className="home__main-listTracks">
            <div className="home__main-track">Track</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
