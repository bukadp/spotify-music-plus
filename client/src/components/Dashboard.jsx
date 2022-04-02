import React from 'react';
import useAuth from '../useAuth';
import Player from './Player';

function Dashboard({ code }) {
    const accessToken = useAuth(code)
    console.log(accessToken)
    return (
        <div>
            <Player accessToken={accessToken}/>
        </div>
    )
}

export default Dashboard
