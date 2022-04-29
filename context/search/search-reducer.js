
// import in the constants
import {
    SEARCH_TERM_RESET
} from './search-constants';


// ==============================
// Reducer 1
// ==============================

// create a reducer for the search box component
// remember a reducer is just a function and the reducer takes in 2 arguments, the state and
// the action and then we want to use a switch statement to evaluate the action type and then
// within the return{}; we are updating the state
export const searchTermReducer = ( state, action ) => {

    switch ( action.type ) {

        // in this case, we will we will reset the state for search term inside the search
        // box component
        case SEARCH_TERM_RESET :
            return {
                ...state,
                errorMessageClose : !state.errorMessageClose
            };

        default :
            return state;

    } // end of switch

} // end of reducer


