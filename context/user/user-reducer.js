
// import in the constants
import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_RESET,
    USER_UPDATE_PASSWORD_REQUEST,
    USER_UPDATE_PASSWORD_SUCCESS,
    USER_UPDATE_PASSWORD_FAIL,
    USER_UPDATE_PASSWORD_RESET
} from './user-constants';


// ==============================
// Reducer 1
// ==============================

// create a reducer for the registration page
// remember a reducer is just a function and the reducer takes in 2 arguments, the state and
// the action and then we want to use a switch statement to evaluate the action type and then
// within the return{}; we are updating the state
export const userRegisterReducer = ( state, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_REGISTER_REQUEST :
            return {
                ...state,
                userRegisterLoading : true
            };

        // in this case, we will send the data in the payload
        case USER_REGISTER_SUCCESS :
            return {
                ...state,
                userRegisterLoading : false,
                userRegisterInfo    : action.payload,
                userRegisterSuccess : true
            };

        // in this case, we will send the error in the payload
        case USER_REGISTER_FAIL :
            return {
                ...state,
                userRegisterLoading : false,
                userRegisterError   : action.payload
            };

        // in this case, we will we will reset the state for userRegisterError
        case USER_REGISTER_RESET :
            return {
                ...state,
                userRegisterLoading : false,
                userRegisterSuccess : false,
                userRegisterError   : null
            };

        default :
            return state;

    } // end of switch

} // end of reducer



// ===================================
// ===================================
// ===================================



// ==============================
// Reducer 2
// ==============================

// create a reducer to change passwords on the profile page
// remember a reducer is just a function and the reducer takes in 2 arguments, the state and
// the action and then we want to use a switch statement to evaluate the action type and then
// within the return{}; we are updating the state
export const userUpdatePasswordReducer = ( state, action ) => {

    switch ( action.type ) {

         // in this case, we will set loading to true
        case USER_UPDATE_PASSWORD_REQUEST :
            return {
                ...state,
                userUpdatePasswordLoading : true
            };

        // in this case, we will send the data in the payload
        case USER_UPDATE_PASSWORD_SUCCESS :
            return {
                ...state,
                userUpdatePasswordLoading : false,
                userUpdatePasswordSuccess : action.payload
            };

        // in this case, we will send the error in the payload
        case USER_UPDATE_PASSWORD_FAIL :
            return {
                ...state,
                userUpdatePasswordLoading : false,
                userUpdatePasswordError   : action.payload
            };

        // in this case, we will reset the state for for userUpdatePasswordSuccess and
        // userUpdatePasswordError
        case USER_UPDATE_PASSWORD_RESET :
            return {
                ...state,
                userUpdatePasswordLoading : false,
                userUpdatePasswordSuccess : false,
                userUpdatePasswordError   : null
            };

        default :
            return state;

    } // end of switch

} // end of reducer

