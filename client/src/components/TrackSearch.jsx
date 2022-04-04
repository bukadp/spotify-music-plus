import React from 'react';
import { useState } from "react";
import axios from 'axios';
import TrackSearchResult from './TrackSearchResult'

function TrackSearch(props) {

    const [searchKey, setSearchKey] = useState("")
    const [tracks, setTrack] = useState([])
    //const [playingTrack, setPlayingTrack] = useState()

     if (!props.accessToken) return null

     function chooseTrack(track) {
       // setPlayingTrack(track)
        setSearchKey("")
      }


    const searchArtists = async (e) => {
        e.preventDefault()
        const { data } = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${props.accessToken}`
            },
            params: {
                q: searchKey,
                type: "track"
            }
        })
        console.log(data.tracks.items)

        setTrack(data.tracks.items.map((track => {
            const smallestAlbumImage = track.album.images.reduce(
                (smallest, image) => {
                    if (image.height < smallest.height) return image
                    return smallest
                },
                track.album.images[0]
            )

            return {
                artist: track.artists[0].name,
                title: track.name,
                uri: track.uri,
                albumUrl: smallestAlbumImage.url,
            }
        })
        ))
    }

    return (
        <div>
            <div>
                <form onSubmit={searchArtists}>
                    <input type="text" onChange={e => setSearchKey(e.target.value)} />
                    <button type={"submit"}>Search</button>
                </form>
            </div>

            <div>
                {tracks.map(track => (
                    <TrackSearchResult
                        track={track}
                        key={track.uri}
                        chooseTrack={chooseTrack}
                    />
                ))}
            </div>
        </div>
    );
}

export default TrackSearch


