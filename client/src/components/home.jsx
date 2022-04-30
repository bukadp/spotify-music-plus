import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import HomePageTracksResult from './HomePageTracksResult';
import addToRecentlyTracks from '../redux/act';

function Home(props) {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.recentlyTracks.recentlyTracks);

  console.log(new Set(store));

  useEffect(() => {
    const savedRecentlyTracks = new Set(
      JSON.parse(localStorage.getItem('recentlyTracks'))
    );

    console.log(savedRecentlyTracks);

    savedRecentlyTracks.forEach((track) => {
      dispatch(addToRecentlyTracks(track));
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('recentlyTracks', JSON.stringify(store));
  }, [store]);

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
              <HomePageTracksResult
                track={track}
                key={track.name}
                setUri={props.setUri}
              />
            ))}
          </div>
        </div>
        <div className="home__main-liked">
          <NavLink to="/likedtracks">
            <div className="home__main-title">Liked Tracks</div>
          </NavLink>
          <div className="home__main-listTracks"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
