

// import in react and useReducer from react
import React, { useReducer } from 'react';
// import in SearchContext
import SearchTermContext from './search-context';
// import in searchTermReducer
import { searchTermReducer } from './search-reducer';
import {
    SEARCH_TERM_RESET
} from './search-constants';


// the SearchTermState component will be our global state for anything that has to do with search
const SearchTermState = ( props ) => {

    // ==============================
    // 1
    // ==============================

    // ==============================
    // REDUCERS
    // ==============================

    // ==============================
    // Reducer 1
    // ==============================

    // ==============================
    // Initial state for the reducer
    // ==============================
    const initial_state_reducer_1 = {
        errorMessageClose : false
    };


    // ==============================
    // useReducer hook
    // ==============================

    // use the useReducer hook to pull off application state and dispatch
    const [ state_reducer_1, dispatch_reducer_1 ] = useReducer( searchTermReducer, initial_state_reducer_1 );

    // ==============================
    // ACTION CREATORS
    // ==============================

    // ==============================
    // Action creator 1
    // ==============================

    // ==============================
    // Dispatches to Reducer 1
    // ==============================

    // ==============================
    // Reset the state for search term
    // ==============================

    // Action Creator 1

    // here we are creating an action creator to reset the state for the search term value
    // in the search box component
    const searchTermResetActionCreator = async () => {

        // let's dispatch our action or " SEARCH_TERM_RESET "
        dispatch_reducer_1( {
            type : SEARCH_TERM_RESET
        } );

    } // end of the searchTermResetActionCreator

    // ==============================
    // return the SearchTermContext Provider
    // ==============================

    // now what we need to return here is the provider and we will wrap our entire application
    // with the provider and the provider will take in one prop called " value " and let's pass
    // in anything that we want to make available to the entire app
    return (

        <SearchTermContext.Provider
            value={ {
                // action creator 1 =================================
                errorMessageClose : state_reducer_1.errorMessageClose,
                searchTermResetActionCreator
            } }
        >
            { props.children }
        </SearchTermContext.Provider>

    );

} // end of SearchTermState


export default SearchTermState;

