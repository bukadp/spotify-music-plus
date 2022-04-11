// import axios from 'axios';
// import { useDispatch } from 'react-redux';

// const searchArtists = async (props, setTrack) => {
//   const { data } = await axios.get('https://api.spotify.com/v1/search', {
//     headers: {
//       Authorization: `Bearer ${props.accessToken}`,
//     },
//     params: {
//       q: props.searchPage.newSearchText,
//       type: 'track',
//     },
//   });
//   setTrack(
//     data.tracks.items.map((track) => {
//       const smallestAlbumImage = track.album.images.reduce(
//         (smallest, image) => {
//           if (image.height < smallest.height) return image;
//           return smallest;
//         },
//         track.album.images[0]
//       );
//       return {
//         artist: track.artists[0].name,
//         title: track.name,
//         uri: track.uri,
//         albumUrl: smallestAlbumImage.url,
//       };
//     })
//   );
// };

// export default searchArtists;
