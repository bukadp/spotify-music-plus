//import React from 'react'
import {
  setSerchTrackAC,
  updateNewSearchTextAC,
} from '../redux/search-reducer';
import search from './search';
//import TrackSearchResult from "./TrackSearchResult";
import { connect } from 'react-redux';

import {
  setFavoriteListNameAC,
  updateFavoriteListNameAC,
} from '../redux/favoriteList-reduser'

const mapStateToProps = (state) => {
  return {
    searchPage: state.searchPage,
    favoritelistPage: state.favoritelistPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (searchText) => {
      dispatch(updateNewSearchTextAC(searchText));
    },
    searchArtists: () => {
      dispatch(setSerchTrackAC());
    },
    onFavoriteListNameChange: (nameList) =>{
      dispatch(updateFavoriteListNameAC(nameList));
    },
    setFavoriteListName: () =>{
      dispatch(setFavoriteListNameAC());
    },
  };
};

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(search);


export default SearchContainer;
