import Home from './home';
import Search from './search';
import Library from './library';
import Navigation from './nav';
import FullPlayer from './fullPlayer';
import SignIn from './signIn';
import SignUp from './signUp';
import MiniPlayer from './miniPlayer';
import LikedTracks from './likedTracks';
import PlayLists from './playlists';
import { useState } from 'react';

function Main() {
  const [tab, setTab] = useState('home');
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [player, setPlayer] = useState(false);
  const [playList, setPlayList] = useState('');

  function changeTab(e) {
    const parent = e.target.parentElement.parentElement;
    for (let item of parent.children) {
      item.classList.value = 'nav__item';
    }
    e.target.parentElement.classList.add('active');
    setTab(e.target.parentElement.id);
    setPlayList('');
  }

  function closeSigns(e) {
    e.target.remove();
    setSignIn(false);
    setSignUp(false);
  }

  function closeSignIn() {
    setSignIn(!signIn);
  }

  function showSignIn() {
    setSignIn(!signIn);
  }

  function closeSignUp() {
    setSignUp(!signUp);
  }

  function showSignUp() {
    setSignUp(!signUp);
    setSignIn(!signIn);
  }

  function togglePlayer() {
    setPlayer(!player);
  }

  function togglePlaysLists() {
    setPlayList('');
    setTab('library');
  }

  function showPlayList(e) {
    console.log(e.target.id);
    setPlayList(e.target.id);
    setTab('');
  }

  return (
    <div className="wrapper">
      {tab === 'home' && <Home showSign={showSignIn} />}
      {tab === 'search' && <Search showSign={showSignIn} />}
      {tab === 'library' && (
        <Library showSign={showSignIn} showPlayList={showPlayList} />
      )}
      {signIn && (
        <SignIn
          closeSigns={closeSigns}
          closeSign={closeSignIn}
          showSignUp={showSignUp}
        />
      )}
      {signUp && <SignUp loseSigns={closeSigns} closeSign={closeSignUp} />}
      {player && <FullPlayer togglePlayer={togglePlayer} />}
      <MiniPlayer togglePlayer={togglePlayer} />
      {playList === 'likedTrack' && (
        <LikedTracks togglePlaysLists={togglePlaysLists} />
      )}
      {playList === 'playList' && (
        <PlayLists togglePlaysLists={togglePlaysLists} />
      )}
      <Navigation changeTab={changeTab} />
    </div>
  );
}

export default Main;
