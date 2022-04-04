import React from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'

function Player(props) {

    if (!props.accessToken) return null
    return (
        <div>
            <SpotifyPlayer
                token={props.accessToken}
                showSaveIcon
                //uris={props.trackUri ? [props.trackUri] : []}
                uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']}
            />
        </div>
    )
}

export default Player