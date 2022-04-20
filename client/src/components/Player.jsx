import React from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import { useEffect, useState } from 'react';

function Player(props) {
  const [play, setPlay] = useState(false);

  // useEffect(() => setPlay(true), [props.uri]);

  if (!props.accessToken) return null;

  return (
    <div>
      <SpotifyPlayer
        token={props.accessToken}
        showSaveIcon
        uris={[props.uri]}
        // autoPlay={true}
        // // callback={(state) => {
        // //   if (!state.isPlaying) setPlay(false);
        // // }}
        // play={play}
      />
    </div>
  );
}

export default Player;
