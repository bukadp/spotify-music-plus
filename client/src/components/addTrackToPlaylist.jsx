function AddTrackToPlaylist(props) {
console.log(props)
  let keysFromLocalStorage = [];
  const getNamePlaylistFromLocalStorage = () => {

    for (let i = 0; i < localStorage.length; i++) {
      keysFromLocalStorage.push(localStorage.key(i))
    }
  }

const addTrackToPlayList = (playListName, track) => {
  let {trackAlbum, trackArtist, trackTitle, trackUri} = {...track}
  let currentTracks = JSON.parse(localStorage.getItem(playListName))
  currentTracks.push({trackAlbum, trackArtist, trackTitle, trackUri})
  //localStorage.setItem(playListName, currentTracks)
  }


  return (
    <div className="addTrackToPlaylist">
      <div className="addTrackToPlaylist__inner">
        <div className="addTrackToPlaylist__top">
          <div className="addTrackToPlaylist__top-title">Playlists</div>
          <div
            className="addTrackToPlaylist__top-button"
            onClick={props.savePlaylist}
          >
            Save
          </div>
        </div>
        <div className="addTrackToPlaylist__list">

          {/* <span style={{color: 'white'}}>rerreerererererdfwdf sfdsdf sdf sdf sd fsd f sdf sd fsd fsd fsd fsdf
          </span> */}
          {getNamePlaylistFromLocalStorage()}
          {
            keysFromLocalStorage.map(key => {
              return <li style={{ color: 'white', cursor: 'pointer' }}
              onClick={addTrackToPlayList(key, props.track)}
              >{key}</li>
            }

            )
          }
        </div>
      </div>
    </div>
  );
}

export default AddTrackToPlaylist;
