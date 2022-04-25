import { useSelector } from 'react-redux';
import TrackSearchResult from './TrackSearchResult';
import { NavLink } from 'react-router-dom';

function Home(props) {
  const store = useSelector((state) => state.recentlyTracks.recentlyTracks);

  return (
    <div className="home">
      <div className="header">
        <div className="header-title">Home</div>
      </div>
      <div className="home__main">
        <div className="home__main-played">
          <div className="home__main-title">Recently Played</div>
          <div className="home__main-listTracks">
            {store.map((track) => (
              <TrackSearchResult track={track} setUri={props.setUri} />
            ))}
          </div>
        </div>
        <div className="home__main-liked">
          <NavLink to="/likedtracks">
            <div className="home__main-title">Liked Tracks</div>
          </NavLink>

          <div className="home__main-listTracks">
            <div className="home__main-track">Track</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
