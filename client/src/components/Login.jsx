import React from 'react';

const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const CLIENT_ID = "1a50064e7bf64b30aaba104ea47d44bb"
const REDIRECT_URI = "http://localhost:3000"
const SCOPE = "streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-library-read%20user-library-modify"
const RESPONSE_TYPE = "code"


function Login() {
    return (
        <div>
<a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}>
    Login to Spotify</a>
        </div>
    )
}

export default Login



