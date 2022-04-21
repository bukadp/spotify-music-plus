import React from 'react';
//import RecentlyPlayedConteiner from './RecentlyPlayedConteiner';
import { useState, useEffect } from "react";

function TrackSearchResult(props) {
  const [keys, setKeys] = useState('');


  useEffect(() => {
    localStorage.setItem(keys, []);
  }, [keys]);


  // useEffect(()=>{for (let i = 0; i < localStorage.length; i++) {
  //   let keyLS = localStorage.key(i)
  //   //console.log(keyLS)
  //   ;}})



  const handlePlay = () => {
    //console.log(props)
    //props.chooseTrack(props.track);
    props.setUri(props.uri);
    //props.setRecentlyPlyedTrack();

  }

  const addToPlayList = () => {
    let trackInfoList = localStorage.getItem("playListTracks")
      ? JSON.parse(localStorage.getItem("playListTracks"))
      : []


    let trackInfo = {
      trackAlbum: props.track.albumUrl,
      trackTitle: props.track.title,
      trackUri: props.track.uri,
      trackArtist: props.track.artist,
    }


    trackInfoList.map(x => x.trackUri).find(x => x === trackInfo.trackUri) ? alert(`This track already in your track list, ${trackInfo.trackTitle}`) : trackInfoList.push(trackInfo)

    localStorage.setItem("playListTracks", JSON.stringify(trackInfoList));


  }



  // const getFavoriteListNameKeys = () => {
  //   for (let i = 0; i < localStorage.length; i++) {
  //     let keyLS = localStorage.key(i);
  //     console.log(keyLS)
  //   }
  // }


  //---------------------------------------------redux start
  // const onFavoriteListNameChange = (e) => {
  //   const searchText = e.target.value;
  //   props.onFavoriteListNameChange(searchText);
  // };


  // const setFavoriteListName = (e) => {
  //   e.preventDefault();
  //   const searchText = props.favoritelistPage.favoriteListName

  //   console.log(props.favoritelistPage.favoriteListName)
  //   localStorage.setItem(searchText, []);
  // }
//---------------------------------------------redux end
  return (
    <div
      style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
      onClick={handlePlay}
      className="search__history-track"
    >
      <img
        alt=""
        src={props.track.albumUrl}
        style={{ height: '64px', width: '64px' }}
      />
      <div className="ml-3" style={{ marginLeft: '10px', color: '#fff' }}>
        <div>{props.track.title}</div>
        <div className="text-muted">{props.track.artist}</div>
      </div>
      <button className="playLists__addNew" onClick={addToPlayList}>Add to playlist</button>
      <form className="search__form">
        <input
          type="text"
          className="search__form-input"
          placeholder="Namelist..."
          value={keys}
          onChange={(e) => setKeys(e.target.value)}

          //value={props.favoritelistPage.favoriteListName}
          //onChange={onFavoriteListNameChange}
          //onClick={setFavoriteListName}
        />
        <button type={'submit'}  hidden>
          Search
        </button>
      </form>


    </div>
  );
}

export default TrackSearchResult;
