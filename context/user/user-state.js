

// import in react and useReducer from react
import React, { useReducer } from 'react';
// import in UserContext
import UserContext from './user-context';
// import in userRegisterReducer
import { userRegisterReducer } from './user-reducer';
// import in userUpdatePasswordReducer
import { userUpdatePasswordReducer } from './user-reducer';
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
// import in axios
import axios from 'axios';
// import in the variable " API_URL "
import { API_URL } from '../../config/index';


// the UserState component will be our global state for anything that has to do with users
const UserState = ( props ) => {


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
        userRegisterLoading : false,
        userRegisterInfo    : {},
        userRegisterSuccess : false,
        userRegisterError   : null
    };


    // ==============================
    // useReducer hook
    // ==============================
    
    // use the useReducer hook to pull off application state and dispatch
    const [ state_reducer_1, dispatch_reducer_1 ] = useReducer( userRegisterReducer, initial_state_reducer_1 );

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
    // Register User
    // ==============================

    // Action Creator 1

    // here we are creating an action creator for when a user registers and remember to pass in
    // as arguments the name, email and password
    const userRegisterActionCreator = async ( name, email, password, isAdmin ) => {

        try {

            // let's dispatch our action or " USER_REGISTER_REQUEST "
            dispatch_reducer_1( {
                type : USER_REGISTER_REQUEST
            } );

            // ==============================
            // make a POST request to our endpoint
            // ==============================

            // ==============================
            // POST request using the fetch api
            // ==============================

            /*
            // create the endpoint
            const endpoint = `${ API_URL }/api/user/register`;

            const res = await fetch( endpoint, 
                {
                    method  : 'POST',
                    body    : JSON.stringify(
                        {
                            email    : email,
                            password : password
                        }
                    ),
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                }
            );

            const data = await res.json();
            */

            // ==============================
            // POST request using axios
            // ==============================

            // create the endpoint
            const endpoint = `${ API_URL }/api/user/register-mongodb`;

            // create our config object
            // since we are sending data ( i.e. the name, email and password ) we need to indicate
            // in the headers the content type or application/json in our case and let's create a
            // config object to help us do that
            const config = {
                headers : {
                    'Content-Type' : 'application/json'
                }
            };

            // below we are making a POST request ( using axios ) to the above endpoint
            // and axios returns the response object and we can then destructure the data
            // object off of the response object and the data object in this case is the
            // user object or the following user information ( this comes from the
            // api/user/register.js file ):

            /*
                _id     : user._id,
                name    : user.name,
                email   : user.email,
                isAdmin : user.isAdmin,
            */

            // and the second argument in the request is the name, email and password key
            // value pairs and remember we are sending the name, email and password key value
            // pairs to the api route or /api/auth/register.js file as part of the browser
            // request

            // and the third argument in the request will be our config object

            // make the POST request to the following endpoint
            const { data } = await axios.post(
                endpoint,
                {
                    name     : name,
                    email    : email,
                    password : password,
                    isAdmin  : isAdmin
                },
                config
            );

            // let's dispatch our action or " USER_REGISTER_SUCCESS "
            dispatch_reducer_1( {
                type    : USER_REGISTER_SUCCESS,
                payload : data
            } );

            /* // comment out
            // with next auth we probably want the user to register and then sign in separately
            // so we can authenticate the user using next auth during the sign in process

            // and then we want to sign the user in right after they successfully register so let's
            // dispatch the following action or " USER_SIGNIN_SUCCESS "

            // and remember this will cause the nav bar heading to change so that the registered
            // user can see their name in the nav bar and have access the nav bar dropdown menu
            dispatch( {
                type    : USER_SIGNIN_SUCCESS,
                payload : data
            } );
            */ // comment out

            /* // comment out
            // with next auth we do not need local storage since we can pull off the user
            // information ( i.e. name, email, image ) from the session object
            // however, I will comment out the code below for now

            // save the user information in local storage and remember we want the same
            // effect when a user registers as when a user signs in to the application
            localStorage.setItem( 'userInfo', JSON.stringify( data ) );
            */ // comment out

        } catch ( error ) { // remember this part will always be the same

            // let's dispatch our action or " USER_REGISTER_FAIL "
            // and remember we want to get the error message and that way we can get our backend
            // errors and put them in our frontend state

            // from a blog: error.response means " that the request was made and the server
            // responded with a status code that falls out of the range of 2xx "
            dispatch_reducer_1( {
                type    : USER_REGISTER_FAIL,
                payload : error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message
            } );

        } // end of try catch

    } // end of the userRegisterActionCreator



    // ===================================
    // ===================================
    // ===================================



    // ==============================
    // 2
    // ==============================

    // ==============================
    // ACTION CREATORS
    // ==============================

    // ==============================
    // Action creator 2
    // ==============================

    // ==============================
    // Dispatches to Reducer 1
    // ==============================

    // ==============================
    // Reset the state for userRegisterSuccess and userRegisterError
    // ==============================

    // Action Creator 2

    // here we are creating an action creator to reset the state for userRegisterSuccess
    // and userRegisterError
    const userRegisterResetActionCreator = async () => {

        // let's dispatch our action or " USER_REGISTER_RESET "
        dispatch_reducer_1( {
            type : USER_REGISTER_RESET
        } );

    } // end of the userRegisterResetActionCreator



    // ===================================
    // ===================================
    // ===================================



    // ==============================
    // 3
    // ==============================

    // ==============================
    // REDUCERS
    // ==============================

    // ==============================
    // Reducer 2
    // ==============================

    // ==============================
    // Initial state for the reducer
    // ==============================
    const initial_state_reducer_2 = {
        userUpdatePasswordLoading : false,
        userUpdatePasswordSuccess : false,
        userUpdatePasswordError   : null
    };


    // ==============================
    // useReducer hook
    // ==============================

    // use the useReducer hook to pull off application state and dispatch
    const [ state_reducer_2, dispatch_reducer_2 ] = useReducer( userUpdatePasswordReducer, initial_state_reducer_2 );

    // ==============================
    // ACTION CREATORS
    // ==============================

    // ==============================
    // Action creator 3
    // ==============================

    // ==============================
    // Dispatches to Reducer 2
    // ==============================

    // ==============================
    // User Change Password
    // ==============================

    // Action Creator 3

    // here we are creating an action creator for when a user changes their current password
    // and remember to pass in as arguments the currentPassword and the newPassword
    const userUpdatePasswordActionCreator = async ( currentPassword, newPassword ) => {

        try {

            // let's dispatch our action or " USER_UPDATE_PASSWORD_REQUEST "
            dispatch_reducer_2( {
                type : USER_UPDATE_PASSWORD_REQUEST
            } );

            // ==============================
            // make a PUT request to our endpoint
            // ==============================

            // ==============================
            // PUT request using axios
            // ==============================

            // create the endpoint
            const endpoint = `${ API_URL }/api/user/change-password-mongodb`;

            // create our config object
            // since we are sending data ( i.e. the currentPassword and the newPassword ) we need
            // to indicate in the headers the content type or application/json in our case and
            // let's create a config object to help us do that
            const config = {
                headers : {
                    'Content-Type' : 'application/json'
                }
            };

            // below we are making a PUT request ( using axios ) to the above endpoint
            // and axios returns the response object and we can then destructure the data
            // object off of the response object and the data object in this case is the
            // success message or the following user information ( this comes from the
            // api/user/change-password.js file ):

            /*
                res.json( { message : 'You have updated your password! Please close this
                message to be redirected to the home page.' } );
            */

            // and the second argument in the request is the the currentPassword and the
            // newPassword key value pairs and remember we are sending the the currentPassword
            // and the newPassword key value pairs to the api route or
            // /api/user/change-password.js file as part of the browser request

            // and the third argument in the request will be our config object

            // make the PUT request to the following endpoint
            const { data } = await axios.put(
                endpoint,
                {
                    currentPassword : currentPassword,
                    newPassword     : newPassword
                },
                config
            );

            // let's dispatch our action or " USER_UPDATE_PASSWORD_SUCCESS "
            dispatch_reducer_2( {
                type    : USER_UPDATE_PASSWORD_SUCCESS,
                payload : data.message
            } );

        } catch ( error ) { // remember this part will always be the same

            // let's dispatch our action or " USER_UPDATE_PASSWORD_FAIL "
            // and remember we want to get the error message and that way we can get our backend
            // errors and put them in our frontend state

            // from a blog: error.response means " that the request was made and the server
            // responded with a status code that falls out of the range of 2xx "
            dispatch_reducer_2( {
                type    : USER_UPDATE_PASSWORD_FAIL,
                payload : error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message
            } );

        } // end of try catch

    } // end of the userUpdatePasswordActionCreator



    // ===================================
    // ===================================
    // ===================================



    // ==============================
    // 4
    // ==============================

    // ==============================
    // ACTION CREATORS
    // ==============================

    // ==============================
    // Action creator 4
    // ==============================

    // ==============================
    // Dispatches to Reducer 2
    // ==============================

    // ==============================
    // Reset the state for userUpdatePasswordSuccess and userUpdatePasswordError
    // ==============================

    // Action Creator 4

    // here we are creating an action creator to reset the state for userUpdatePasswordSuccess
    // and userUpdatePasswordError
    const userUpdatePasswordResetActionCreator = async () => {

        // let's dispatch our action or " USER_UPDATE_PASSWORD_RESET "
        dispatch_reducer_2( {
            type : USER_UPDATE_PASSWORD_RESET
        } );

    } // end of the userUpdatePasswordResetActionCreator



    // ==============================
    // return the UserContext Provider
    // ==============================

    // now what we need to return here is the provider and we will wrap our entire application
    // with the provider and the provider will take in one prop called " value " and let's pass
    // in anything that we want to make available to the entire app
    return (

        <UserContext.Provider
            value={ {
                // action creator 1 =================================
                userRegisterLoading : state_reducer_1.userRegisterLoading,
                userRegisterInfo    : state_reducer_1.userRegisterInfo,
                userRegisterSuccess : state_reducer_1.userRegisterSuccess,
                userRegisterError   : state_reducer_1.userRegisterError,
                userRegisterActionCreator,
                // action creator 2 =================================
                userRegisterResetActionCreator,
                // action creator 3 =================================
                userUpdatePasswordLoading : state_reducer_2.userUpdatePasswordLoading,
                userUpdatePasswordSuccess : state_reducer_2.userUpdatePasswordSuccess,
                userUpdatePasswordError   : state_reducer_2.userUpdatePasswordError,
                userUpdatePasswordActionCreator,
                // action creator 4 =================================
                userUpdatePasswordResetActionCreator
            } }
        >
            { props.children }
        </UserContext.Provider>

    );

} // end of UserState


export default UserState;

