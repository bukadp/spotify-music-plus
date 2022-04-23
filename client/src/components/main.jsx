import Home from './home';
import Library from './library';
import Navigation from './nav';
import LikedTracks from './likedTracks';
import PlayLists from './playlists';
import useAuth from '../useAuth';
import Player from './Player';
import Search from './search';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import { useState } from 'react';

function Main({ code }) {
  const [tab, setTab] = useState('home');
  const [playList, setPlayList] = useState('');
  const [uri, setUri] = useState('');
  const [togglePlaylist, setTogglePlaylist] = useState(false);

  const accessToken = useAuth(code);

  function changeTab(e) {
    const tab = e.target.id;
    setTogglePlaylist(false);
    setPlayList('');
    setTab(tab);
  }

  function togglePlaysLists() {
    setPlayList('');
    setTab('library');
  }

  function showPlayList(e) {
    setPlayList(e.target.id);
    setTab('');
  }

  return (
    <Router>
      <div className="wrapper">

        {/* {tab === 'home' && <Home />}
         {tab === 'search' && <Search accessToken={accessToken} setUri={setUri} />}
         {tab === 'library' && <Library showPlayList={showPlayList} />} */}

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/search" element={<Search accessToken={accessToken} setUri={setUri} />}/>
          <Route path="/library" element={<Library showPlayList={showPlayList} />}/>
          <Route path="/myplaylists" element={<PlayLists
            togglePlaysLists={togglePlaysLists}
            togglePlaylist={togglePlaylist}
            setTogglePlaylist={setTogglePlaylist}
          />}/>

<Route path="/likedtracks" element={<LikedTracks togglePlaysLists={togglePlaysLists} />}/>

          </Routes>

        <Player accessToken={accessToken} uri={uri} />

        {/* {playList === 'likedTrack' && (
          <LikedTracks togglePlaysLists={togglePlaysLists} />
        )} */}
        {/* {playList === 'playList' && (
          <PlayLists
            togglePlaysLists={togglePlaysLists}
            togglePlaylist={togglePlaylist}
            setTogglePlaylist={setTogglePlaylist}
          />
        )} */}
        <Navigation changeTab={changeTab} />
      </div>


      </Router>
  );
}

export default Main;
