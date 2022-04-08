//import React from 'react'
import {setSerchTrackAC, updateNewSearchTextAC} from "../redux/search-reducer";
import search from "./search";
//import SearchRequest from "./SearchRequest";
import {connect} from "react-redux";



const mapStateToProps = (state) => {
    return {
        searchPage: state.searchPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (searchText) => {
            dispatch(updateNewSearchTextAC(searchText));
        },
        searchArtists: () => {
            dispatch(setSerchTrackAC());
        }
    }
}

 const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(search);



export default SearchContainer