import axios from 'axios';

const searchArtists = async (props, setTrack) => {
  const { data } = await axios.get('https://api.spotify.com/v1/search', {
    headers: {
      Authorization: `Bearer ${props.accessToken}`,
    },
    params: {
      q: props.searchPage.newSearchText,
      type: 'track',
    },
  });
  //debugger;
  setTrack(
    data.tracks.items.map((track) => {
      const smallestAlbumImage = track.album.images.reduce(
        (smallest, image) => {
          if (image.height < smallest.height) return image;
          return smallest;
        },
        track.album.images[0]
      );
      //debugger;
      return {
        artist: track.artists[0].name,
        title: track.name,
        uri: track.uri,
        albumUrl: smallestAlbumImage.url,
      };
    })
  );
};

export default searchArtists;
