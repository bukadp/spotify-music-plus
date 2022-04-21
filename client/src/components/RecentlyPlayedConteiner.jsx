import React from 'react'
import {
  setRecentlyPlyedTrackAC
} from '../redux/recentlyPlayed-reducer';
import TrackSearchResult from './TrackSearchResult';
import { connect } from 'react-redux';
import Home from './home'

class HomeContainer extends React.Component {
  /*    constructor(props) {  //constructor you may not write when you do nothing with constructor
          super(props);
      }*/

  componentDidMount() {
    //this.props.setRecentlyPlyedTrack(this.props.recentlyPlayedPage);
  }

  render() {

    return < Home
      id={this.props.id}
      trackAlbum={this.props.trackAlbum}
      trackTitle={this.props.trackTitle}
      trackUri={this.props.trackUri}
      trackArtist={this.props.trackArtist}
    />
  }
}

const mapStateToProps = (state) => {
  return {
    recentlyPlayedPage: state.recentlyPlayedPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setRecentlyPlyedTrack: (trackInfoData) => {
      dispatch(setRecentlyPlyedTrackAC(trackInfoData));
    }
  };
};

export const RecentlyPlayedConteinerHome = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
export const RecentlyPlayedConteiner = connect(mapStateToProps, mapDispatchToProps)(TrackSearchResult);

export default HomeContainer;
