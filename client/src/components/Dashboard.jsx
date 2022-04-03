import React from 'react';
import useAuth from '../useAuth';
import Player from './Player';
import TrackSearch from './TrackSearch'

function Dashboard({ code }) {
    const accessToken = useAuth(code)

 

    return (
        <div>
            <div>
                <TrackSearch accessToken={accessToken}/>
            </div>
            <div>
                <Player accessToken={accessToken} />
            </div>
        </div>
    )
}

export default Dashboard
//trackUri={playingTrack?.uri}