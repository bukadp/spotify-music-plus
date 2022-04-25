import Home from './home';
import Library from './library';
import Navigation from './nav';
import LikedTracks from './likedTracks';
import PlayLists from './playlists';
import useAuth from '../useAuth';
import Player from './Player';
import Search from './search';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useState } from 'react';

function Main({ code }) {
  const [tab, setTab] = useState('home');
  const [uri, setUri] = useState('');
  const [togglePlaylist, setTogglePlaylist] = useState(false);

  const accessToken = useAuth(code);

  function changeTab(e) {
    const tab = e.target.id;
    setTogglePlaylist(false);
    setTab(tab);
  }

  return (
    <Router>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/search"
            element={<Search accessToken={accessToken} setUri={setUri} />}
          />
          <Route path="/library" element={<Library />} />
          <Route
            path="/myplaylists"
            element={
              <PlayLists
                togglePlaylist={togglePlaylist}
                setTogglePlaylist={setTogglePlaylist}
              />
            }
          />
          <Route path="/likedtracks" element={<LikedTracks />} />
        </Routes>
        <Player accessToken={accessToken} uri={uri} />
        <Navigation changeTab={changeTab} currentTab={tab} />
      </div>
    </Router>
  );
}

export default Main;
