
/*
// since we are building a form we will need to use the useState(); hook
import { Fragment, useEffect, useState } from 'react';
// import in the Link component
import Link from 'next/link';
// import in the Spinner component
import Spinner from '../components/spinner/spinner';
// import in the ErrorMessage component
import ErrorMessage from '../components/error-message/em-profile-page';

// import in our stylesheet
import styles from './profile.module.scss';


// 1 -

// import in the getSession hook
import { getSession } from 'next-auth/client';

// End of 1 -


const ProfilePage = () => {

    // ==============================
    // component state
    // ==============================

    // set component level state
    const [ currentPassword, setCurrentPassword ] = useState( '' );
    const [ newPassword, setNewPassword ]         = useState( '' );
    const [ isLoading, setIsLoading ]             = useState( true );

    // ==============================
    // initialize router
    // ==============================

    // ==============================
    // initialize the context
    // ==============================


    // 1 - continued

    // ==============================
    // client side page guard
    // ==============================

    // use the getSession hook to determine whether or not we have an active session and if we
    // do then change isLoading to false and then show the page content; otherwise, if we don't
    // have an active session then redirect the user, either away from the profile page assuming
    // the user is on the profile page when the user logs out ( this doesn't apply since we
    // already do this when a user logs out ) or prevent the user from accessing the profile
    // page

    // so the code below will protect this page from being accessed by unauthorized users
    // or in other words if a user is not logged in and tries to access this page then as
    // soon as the user hits this page they will be redirected to the home page

    // the only way that a user can access the profile page is by being logged in and
    // authenticated

    // ==============================
    // useEffect();
    // ==============================
    useEffect( () => {

        // remember in order to be able to use async await with the useEffect hook we have to
        // add a function ( see below )

        // define our function
        const getSessionData = async () => {

            try {

                // ==============================
                // getSession();
                // ==============================

                // call the getSession hook and getSession sends a request to the backend and
                // gets the latest session data
                const sessionData = await getSession();

                // then evaluate sessionData and sessionData represents our session object and this
                // object will either be an object that contains the session data and be truthy or
                // the session object will be equal to null and be falsy

                // falsy values in JavaScript include:
                /*
                    false
                    0
                    -0
                    an empty string
                    null - the absence of any value
                    undefined - the primative value
                    NaN - not a number
                */
                /*
                if ( !sessionData ) {

                    // if the session object is false ( i.e. the user is not logged in and is not
                    // authenticated ) and the user tries to access the profile page then we want
                    // to redirect the user to an unprotected page ( maybe the home page ) and
                    // away from the profile page
                    window.location.href = '/';

                } else if ( sessionData ) {

                    // if we have an active session or the session object is true ( i.e. the user is
                    // logged in and authenticated ) then we want to set isLoading to false and show
                    // the page content
                    setIsLoading( false );

                } // end of if / else if

            } catch ( error ) {

                console.error( error );

            } // end of try catch
        
        }; // end of getSessionData

        // call the getSessionData function
        getSessionData();

        // the useEffect hook will run when the component mounts

    }, [] ); // end of useEffect

    // we can test this out by signing out and then going to the following url
    // " http://localhost:3014/profile " and as soon as we hit the profile page we are
    // redirected to the home page and this is correct so everything is working as
    // expected

    // End of 1 -


    // ==============================
    // handleSubmit function
    // ==============================

    const handleSubmit = ( e ) => {

        e.preventDefault();

        // dispatch our action creator
        // dispatch( userSignInActionCreator( email, password ) );

    }

    return (

        <Fragment>

            {

                isLoading ? (

                    <Spinner />

                ) /* : error ? (

                    <ErrorMessage>{ error }</ErrorMessage>

                ) */ /* : (

                    <div className={ styles.profileContainer }>

                        <h2 className={ styles.profileContainerH2 }>User Profile</h2>

                        <form className={ styles.profileContainerForm } noValidate="novalidate" onSubmit={ handleSubmit } >

                            { /* input field - current password */ /* }
                            <div className={ styles.profileContainerFormPasswordInputContainer }>
                                <input
                                    name="password"
                                    type="password"
                                    id="current-password"
                                    required
                                    value={ currentPassword }
                                    onChange={ (e) => setCurrentPassword( e.target.value ) }
                                />                        
                                <label
                                    htmlFor="current-password"
                                    className={

                                        currentPassword === '' ? 
                                        styles.profileContainerFormPasswordInputContainerLabel :
                                        styles.profileContainerFormPasswordInputContainerLabelShrink

                                    }
                                >
                                    Current Password
                                </label>
                            </div>

                            { /* input field - new password */ /* }
                            <div className={ styles.profileContainerFormPasswordInputContainer }>
                                <input
                                    name="password"
                                    type="password"
                                    id="new-password"
                                    required
                                    value={ newPassword }
                                    onChange={ (e) => setNewPassword( e.target.value ) }
                                />                        
                                <label
                                    htmlFor="new-password"
                                    className={

                                        newPassword === '' ? 
                                        styles.profileContainerFormPasswordInputContainerLabel :
                                        styles.profileContainerFormPasswordInputContainerLabelShrink

                                    }
                                >
                                    New Password
                                </label>
                            </div>

                            { /*  sign in button  */ /* }
                            <div className={ styles.profileContainerFormButtonContainer }>
                
                                <button
                                    type="submit"
                                    className={ styles.profileContainerFormButtonContainerButton }
                                >
                                    Change Password
                                </button>
                    
                            </div>
                
                        </form>

                    </div>

                )

            }

        </Fragment>

    );

}


export default ProfilePage;
*/

















// ===============================




















/*
// at the beginning of tutorial 225, given all the notes, I created a new file below without
// the notes so we are starting fresh

// since we are building a form we will need to use the useState(); hook
import { Fragment, useState } from 'react';
// import in the Link component
import Link from 'next/link';
// import in the getSession hook
import { getSession } from 'next-auth/client';
// import in the Spinner component
import Spinner from '../components/spinner/spinner';
// import in the ErrorMessage component
import ErrorMessage from '../components/error-message/em-profile-page';

// import in our stylesheet
import styles from './profile.module.scss';


const ProfilePage = () => {

    // ==============================
    // component state
    // ==============================

    // set component level state
    const [ currentPassword, setCurrentPassword ] = useState( '' );
    const [ newPassword, setNewPassword ]         = useState( '' );
    const [ isLoading, setIsLoading ]             = useState( false );

    // ==============================
    // initialize router
    // ==============================

    // ==============================
    // initialize the context
    // ==============================

    /* // - comment out
    // ==============================
    // client side page guard
    // ==============================

    // use the getSession hook to determine whether or not we have an active session and if we
    // don't have an active session then redirect the user; otherwise, and if we do have an
    // active session then change isLoading to false and then show the page content

    // so the code below will protect this page from being accessed by unauthorized users

    // ==============================
    // useEffect();
    // ==============================
    useEffect( () => {

        // remember in order to be able to use async await with the useEffect hook we have to
        // add a function ( see below )

        // define our function
        const getSessionData = async () => {

            try {

                // ==============================
                // getSession();
                // ==============================

                // call the getSession hook and save the result to the const " sessionData " and
                // remember getSession sends a request to the backend and gets the latest
                // session data
                const sessionData = await getSession();

                // sessionData represents our session object and this object will either contain
                // the session data and be truthy or will be equal to null and be falsy

                // falsy values in JavaScript include:
                /*
                    false
                    0
                    -0
                    an empty string
                    null - the absence of any value
                    undefined - the primative value
                    NaN - not a number
                */

                /* // - comment out
                if ( !sessionData ) {

                    // if the session object is false ( i.e. the user is not logged in and is not
                    // authenticated ) and the user tries to access the profile page then we want
                    // to redirect the user to an unprotected page ( maybe the home page ) and
                    // away from the profile page
                    window.location.href = '/';

                } else if ( sessionData ) {

                    // if we have an active session or the session object is true ( i.e. the user is
                    // logged in and authenticated ) then we want to set isLoading to false and show
                    // the page content
                    setIsLoading( false );

                } // end of if / else if

            } catch ( error ) {

                console.error( error );

            } // end of try catch
        
        }; // end of getSessionData

        // call the getSessionData function
        getSessionData();

        // the useEffect hook will run when the component mounts

    }, [] ); // end of useEffect
    */ // - comment out

    // ==============================
    // handleSubmit function
    // ==============================

    /*
    const handleSubmit = ( e ) => {

        e.preventDefault();

        // dispatch our action creator
        // dispatch( userSignInActionCreator( email, password ) );

    }

    return (

        <Fragment>

            {

                isLoading ? (

                    <Spinner />

                ) /* : error ? (

                    <ErrorMessage>{ error }</ErrorMessage>

                ) */ /* : (

                    <div className={ styles.profileContainer }>

                        <h2 className={ styles.profileContainerH2 }>User Profile</h2>

                        <form className={ styles.profileContainerForm } noValidate="novalidate" onSubmit={ handleSubmit } >

                            { /* input field - current password */ /* }
                            <div className={ styles.profileContainerFormPasswordInputContainer }>
                                <input
                                    name="password"
                                    type="password"
                                    id="current-password"
                                    required
                                    value={ currentPassword }
                                    onChange={ (e) => setCurrentPassword( e.target.value ) }
                                />                        
                                <label
                                    htmlFor="current-password"
                                    className={

                                        currentPassword === '' ? 
                                        styles.profileContainerFormPasswordInputContainerLabel :
                                        styles.profileContainerFormPasswordInputContainerLabelShrink

                                    }
                                >
                                    Current Password
                                </label>
                            </div>

                            { /* input field - new password */ /* }
                            <div className={ styles.profileContainerFormPasswordInputContainer }>
                                <input
                                    name="password"
                                    type="password"
                                    id="new-password"
                                    required
                                    value={ newPassword }
                                    onChange={ (e) => setNewPassword( e.target.value ) }
                                />                        
                                <label
                                    htmlFor="new-password"
                                    className={

                                        newPassword === '' ? 
                                        styles.profileContainerFormPasswordInputContainerLabel :
                                        styles.profileContainerFormPasswordInputContainerLabelShrink

                                    }
                                >
                                    New Password
                                </label>
                            </div>

                            { /*  sign in button  */ /* }
                            <div className={ styles.profileContainerFormButtonContainer }>
                
                                <button
                                    type="submit"
                                    className={ styles.profileContainerFormButtonContainerButton }
                                >
                                    Change Password
                                </button>
                    
                            </div>
                
                        </form>

                    </div>

                )

            }

        </Fragment>

    );

}


// 2 -

// ==============================
// server side page guard
// ==============================

// we must not forget that next.js blends server side and client side code so we can use server
// side code to determine whether or not a user is authenticated

// with next there are 3 separate functions that we can use to fetch data: (1) getStaticProps
// and getStaticProps allows us to fetch data at build time (2) getServerSideProps and
// getServerSideProps allows us to fetch the data on every request and (3) getStaticPaths and
// getStaticPaths allow us to dynamically generate paths based on the data that were fetching

// and the function we want to use is getServerSideProps since we want to track every request
// and pass in the context object as an argument and the context object will give us access to
// the incoming request
export async function getServerSideProps( context ) {

    // we can use the getSession hook on the server side as well as the client side and we
    // can pass in a configuration object or {} and then get access to the user request by
    // doing " context.req "
    
    // the getSession hook will return a session object and that object will either contain
    // the session data or be equal to null
    const session = await getSession( { req : context.req } );

    // if the session object is null
    if ( !session ) {

        // then do the following to redirect the user
        return {

            // typically this is where we would pass in a props key and then set that key
            // equal to an object but we can pass in other keys like " notFound " or
            // " redirect " and in this case we will use redirect
            redirect : {

                destination : '/signin',
                // set permanent to false since we only want to do a redirect in this
                // particular case 
                permanent   : false

            } // end of redirect

        } // end of reture

    } else if ( session ) {

        // if the session object is true

        // then do the following to make the session object available throughout the application
        return {

            props : {
    
                session : session

            } // end of props

        } // end of return

    } // end of if / else if

    // and now we can use destructuring above to pass in the data or session object to the
    // profile page

} // end of getServerSideProps

// now let's comment out the client side page guard code above

// now we can test this out and let's log out and then try to access the profile page and
// when we do this we are immediately redirect to the signin page and this is correct so
// everything is working as expected

// the difference here is that we no longer see the profile page for a split second and
// therefore using server side page guards results in a much better user experience than
// using client side page guards

// End of 2 -


export default ProfilePage;
*/


















// ===============================




















/*
// at the beginning of tutorial 225, given all the notes, I created a new file below without
// the notes so we are starting fresh

// ==============================
// to send the request to pages/api/user/change-password-mongodb instead of
// pages/api/user/change-password-mongoose then we need to make the following changes:
// ==============================
// 1 - change the endpoint in the user.state.js file


// since we are building a form we will need to use the useState(); hook
import { Fragment, useContext, useState } from 'react';
// import in the Link component
import Link from 'next/link';
// import in the useRouter(); hook
import { useRouter } from 'next/router';
// import in the getSession(); hook and the useSession(); hook
import { getSession, useSession } from 'next-auth/react';
// import in the UserContext
import UserContext from '../context/user/user-context';
// import in the Spinner component
import Spinner from '../components/spinner/spinner';
// import in the ErrorMessage component
import ErrorMessage from '../components/error-message/em-profile-page';
// import in the SuccessMessage component
import SuccessMessage from '../components/success-message/sm-profile-page';

// import in our stylesheet
import styles from './profile.module.scss';


const ProfilePage = () => {

    // ==============================
    // component state
    // ==============================

    // set component level state
    const [ currentPassword, setCurrentPassword ]           = useState( '' );
    const [ newPassword, setNewPassword ]                   = useState( '' );
    const [ frontendErrorMessage, setFrontendErrorMessage ] = useState( '' );

    // ==============================
    // useRef();
    // ==============================

    // ==============================
    // initialize router
    // ==============================

    // initialize router
    const router = useRouter();

    // ==============================
    // useSession();
    // ==============================

    /* // - comment out
    // ==============================
    // client side page guard
    // ==============================

    // use the getSession hook to determine whether or not we have an active session and if we
    // don't have an active session then redirect the user; otherwise, and if we do have an
    // active session then change isLoading to false and then show the page content

    // so the code below will protect this page from being accessed by unauthorized users

    // ==============================
    // useEffect();
    // ==============================
    useEffect( () => {

        // remember in order to be able to use async await with the useEffect hook we have to
        // add a function ( see below )

        // define our function
        const getSessionData = async () => {

            try {

                // ==============================
                // getSession();
                // ==============================

                // call the getSession hook and save the result to the const " sessionData " and
                // remember getSession sends a request to the backend and gets the latest
                // session data
                const sessionData = await getSession();

                // sessionData represents our session object and this object will either contain
                // the session data and be truthy or will be equal to null and be falsy

                // falsy values in JavaScript include:
                /*
                    false
                    0
                    -0
                    an empty string
                    null - the absence of any value
                    undefined - the primative value
                    NaN - not a number
                */

                /* // - comment out
                if ( !sessionData ) {

                    // if the session object is false ( i.e. the user is not logged in and is not
                    // authenticated ) and the user tries to access the profile page then we want
                    // to redirect the user to an unprotected page ( maybe the home page ) and
                    // away from the profile page
                    window.location.href = '/';

                } else if ( sessionData ) {

                    // if we have an active session or the session object is true ( i.e. the user is
                    // logged in and authenticated ) then we want to set isLoading to false and show
                    // the page content
                    setIsLoading( false );

                } // end of if / else if

            } catch ( error ) {

                console.error( error );

            } // end of try catch
        
        }; // end of getSessionData

        // call the getSessionData function
        getSessionData();

        // the useEffect hook will run when the component mounts

    }, [] ); // end of useEffect

    // ==============================
    // client side page guard - next auth version 4
    // ==============================

    // call the useSession hook and then redirect the user if the user tries to access this
    // page and the user is unauthenticated
    const { data : session, status } = useSession(

        { // configuration object

            required : true,

            onUnauthenticated() { // The user is not authenticated, handle it here
            
                // push the user to the sign in page
                router.push( '/signin' )

            }

        }

    ) // end of useSession
    */ // - comment out

    // ==============================
    // initialize the context
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useContext(); hook to initialize the UserContext and then return the part of the
    // state that we want
    /*
    const userContext = useContext( UserContext );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const {
        userUpdatePasswordLoading,
        userUpdatePasswordSuccess,
        userUpdatePasswordError,
        userUpdatePasswordActionCreator,
        userUpdatePasswordResetActionCreator
    } = userContext;

    // ==============================
    // useEffect();
    // ==============================

    // ==============================
    // handleSubmit function
    // ==============================

    const handleSubmit = ( e ) => {

        e.preventDefault();

        // ==============================
        // frontend validation
        // ==============================

        // everytime we submit the form we need to clear out any prior error messages
        setFrontendErrorMessage( '' );

        // before we dispatch the userUpdatePasswordActionCreator let's do some front end
        // validation
        if ( currentPassword === '' ||  newPassword === '' ) {

            // if the user did not enter the required information then set a new error message
            setFrontendErrorMessage( 'All fields must be filled out in order to change passwords. Please try again.' );

        } else if ( currentPassword === newPassword ) {

            // if the passwords match then set the error message
            setFrontendErrorMessage( 'The current password matches the new password. Please try again.' );

        } else {

            // dispatch our action creator
            userUpdatePasswordActionCreator( currentPassword, newPassword );

            // reset the state
            setCurrentPassword( '' );
            setNewPassword( '' );

        } // end of if / else if / else statement

    } // end of handleSubmit


    // ==============================
    // handleMessageReset function
    // ==============================

    const handleMessageReset = async ( e ) => {

        // dispatch our action creator and reset the state for userUpdatePasswordError
        // and userUpdatePasswordSuccess
        // ( see the user.state.js and user.reducer.js files for details )
        userUpdatePasswordResetActionCreator();

    } // end of handleMessageReset


    return (

        <Fragment>

            {

                userUpdatePasswordLoading ? (

                    <Spinner />

                ) : frontendErrorMessage ? (

                    <ErrorMessage
                        setFrontendErrorMessage={ setFrontendErrorMessage }
                        onClose={ handleMessageReset }
                    >
                        { frontendErrorMessage }
                    </ErrorMessage>

                ) : userUpdatePasswordError ? (

                    <ErrorMessage
                        setFrontendErrorMessage={ setFrontendErrorMessage }
                        onClose={ handleMessageReset }
                    >
                        { userUpdatePasswordError }
                    </ErrorMessage>

                ) : userUpdatePasswordSuccess ? (

                    <SuccessMessage
                        onClose={ handleMessageReset }
                    >
                        { userUpdatePasswordSuccess }
                    </SuccessMessage>

                ) : (

                    <div className={ styles.profileContainer }>

                        <h2 className={ styles.profileContainerH2 }>User Profile</h2>

                        <form className={ styles.profileContainerForm } noValidate="novalidate" onSubmit={ handleSubmit } >

                            { /* input field - current password */ /* }
                            <div className={ styles.profileContainerFormPasswordInputContainer }>
                                <input
                                    name="password"
                                    type="password"
                                    id="current-password"
                                    required
                                    value={ currentPassword }
                                    onChange={ (e) => setCurrentPassword( e.target.value ) }
                                />                        
                                <label
                                    htmlFor="current-password"
                                    className={

                                        currentPassword === '' ? 
                                        styles.profileContainerFormPasswordInputContainerLabel :
                                        styles.profileContainerFormPasswordInputContainerLabelShrink

                                    }
                                >
                                    Current Password
                                </label>
                            </div>

                            { /* input field - new password */ /* }
                            <div className={ styles.profileContainerFormPasswordInputContainer }>
                                <input
                                    name="password"
                                    type="password"
                                    id="new-password"
                                    required
                                    value={ newPassword }
                                    onChange={ (e) => setNewPassword( e.target.value ) }
                                />                        
                                <label
                                    htmlFor="new-password"
                                    className={

                                        newPassword === '' ? 
                                        styles.profileContainerFormPasswordInputContainerLabel :
                                        styles.profileContainerFormPasswordInputContainerLabelShrink

                                    }
                                >
                                    New Password
                                </label>
                            </div>

                            { /*  sign in button  */ /* }
                            <div className={ styles.profileContainerFormButtonContainer }>
                
                                <button
                                    type="submit"
                                    className={ styles.profileContainerFormButtonContainerButton }
                                >
                                    Change Password
                                </button>
                    
                            </div>
                
                        </form>

                    </div>

                )

            }

        </Fragment>

    );

}


// ==============================
// server side page guard
// ==============================

// we must not forget that next.js blends server side and client side code so we can use server
// side code to determine whether or not a user is authenticated

// with next there are 3 separate functions that we can use to fetch data: (1) getStaticProps
// and getStaticProps allows us to fetch data at build time (2) getServerSideProps and
// getServerSideProps allows us to fetch the data on every request and (3) getStaticPaths and
// getStaticPaths allow us to dynamically generate paths based on the data that were fetching

// remember using server side page guards results in a much better user experience than using
// client side page guards

// and the function we want to use is getServerSideProps since we want to track every request
// and pass in the context object as an argument and the context object will give us access to
// the incoming request
export async function getServerSideProps( context ) {

    // we can use the getSession hook on the server side as well as the client side and we
    // can pass in a configuration object or {} and then get access to the user request by
    // doing " context.req "
    
    // the getSession hook will return a session object and that object will either contain
    // the session data or be equal to null
    const session = await getSession( { req : context.req } );

    // if the session object is null
    if ( !session ) {

        // then do the following to redirect the user
        return {

            // typically this is where we would pass in a props key and then set that key
            // equal to an object but we can pass in other keys like " notFound " or
            // " redirect " and in this case we will use redirect
            redirect : {

                destination : '/signin',
                // set permanent to false since we only want to do a redirect in this
                // particular case 
                permanent   : false

            } // end of redirect

        } // end of reture

    } else if ( session ) { // if the session object is true

        // then do the following to make the session object available throughout the application
        return {

            props : {
    
                session : session

            } // end of props

        } // end of return

    } // end of if / else if

    // and now we can use destructuring above to pass in the data or session object to the
    // profile page

} // end of getServerSideProps


export default ProfilePage;
*/



















// ===============================





















// at the beginning of tutorial 225, given all the notes, I created a new file below without
// the notes so we are starting fresh

// ==============================
// to send the request to pages/api/user/change-password-mongodb instead of
// pages/api/user/change-password-mongoose then we need to make the following changes:
// ==============================
// 1 - change the endpoint in the user.state.js file


// since we are building a form we will need to use the useState(); hook
import { Fragment, useContext, useState } from 'react';
// import in the Link component
import Link from 'next/link';
// import in the useRouter(); hook
import { useRouter } from 'next/router';
// import in the getSession(); hook and the useSession(); hook
import { getSession, useSession } from 'next-auth/react';
// import in the UserContext
import UserContext from '../context/user/user-context';
// import in the Spinner component
import Spinner from '../components/spinner/spinner';
// import in the ErrorMessage component
import ErrorMessage from '../components/error-message/em-profile-page';
// import in the SuccessMessage component
import SuccessMessage from '../components/success-message/sm-profile-page';

// import in our stylesheet
import styles from './profile.module.scss';


const ProfilePage = () => {

    // ==============================
    // component state
    // ==============================

    // set component level state
    const [ currentPassword, setCurrentPassword ]           = useState( '' );
    const [ newPassword, setNewPassword ]                   = useState( '' );
    const [ frontendErrorMessage, setFrontendErrorMessage ] = useState( '' );

    // ==============================
    // useRef();
    // ==============================

    // ==============================
    // useRouter();
    // ==============================

    // initialize router
    const router = useRouter();

    // ==============================
    // useSession();
    // ==============================

    // ==============================
    // initialize the context
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useContext(); hook to initialize the UserContext and then return the part of the
    // state that we want
    const userContext = useContext( UserContext );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const {
        userUpdatePasswordLoading,
        userUpdatePasswordSuccess,
        userUpdatePasswordError,
        userUpdatePasswordActionCreator,
        userUpdatePasswordResetActionCreator
    } = userContext;

    // ==============================
    // useEffect();
    // ==============================

    // ==============================
    // handleSubmit function
    // ==============================

    const handleSubmit = ( e ) => {

        e.preventDefault();

        // ==============================
        // frontend validation
        // ==============================

        // everytime we submit the form we need to clear out any prior error messages
        setFrontendErrorMessage( '' );

        // before we dispatch the userUpdatePasswordActionCreator let's do some front end
        // validation
        if ( currentPassword === '' ||  newPassword === '' ) {

            // if the user did not enter the required information then set a new error message
            setFrontendErrorMessage( 'All fields must be filled out in order to change passwords. Please try again.' );

        } else if ( currentPassword === newPassword ) {

            // if the passwords match then set the error message
            setFrontendErrorMessage( 'The current password matches the new password. Please try again.' );

        } else {

            // dispatch our action creator
            userUpdatePasswordActionCreator( currentPassword, newPassword );

            // reset the state
            setCurrentPassword( '' );
            setNewPassword( '' );

        } // end of if / else if / else statement

    } // end of handleSubmit

    // ==============================
    // handleMessageReset function
    // ==============================

    const handleMessageReset = async ( e ) => {

        // dispatch our action creator and reset the state for userUpdatePasswordError
        // and userUpdatePasswordSuccess
        // ( see the user.state.js and user.reducer.js files for details )
        userUpdatePasswordResetActionCreator();

    } // end of handleMessageReset


    return (

        <Fragment>

            {

                userUpdatePasswordLoading ? (

                    <Spinner />

                ) : frontendErrorMessage ? (

                    <ErrorMessage
                        setFrontendErrorMessage={ setFrontendErrorMessage }
                        onClose={ handleMessageReset }
                    >
                        { frontendErrorMessage }
                    </ErrorMessage>

                ) : userUpdatePasswordError ? (

                    <ErrorMessage
                        setFrontendErrorMessage={ setFrontendErrorMessage }
                        onClose={ handleMessageReset }
                    >
                        { userUpdatePasswordError }
                    </ErrorMessage>

                ) : userUpdatePasswordSuccess ? (

                    <SuccessMessage
                        onClose={ handleMessageReset }
                    >
                        { userUpdatePasswordSuccess }
                    </SuccessMessage>

                ) : (

                    <div className={ styles.profileContainer }>

                        <h2 className={ styles.profileContainerH2 }>User Profile</h2>

                        <form className={ styles.profileContainerForm } noValidate="novalidate" onSubmit={ handleSubmit } >

                            { /* input field - current password */ }
                            <div className={ styles.profileContainerFormPasswordInputContainer }>
                                <input
                                    name="password"
                                    type="password"
                                    id="current-password"
                                    required
                                    value={ currentPassword }
                                    onChange={ (e) => setCurrentPassword( e.target.value ) }
                                />                        
                                <label
                                    htmlFor="current-password"
                                    className={

                                        currentPassword === '' ? 
                                        styles.profileContainerFormPasswordInputContainerLabel :
                                        styles.profileContainerFormPasswordInputContainerLabelShrink

                                    }
                                >
                                    Current Password
                                </label>
                            </div>

                            { /* input field - new password */ }
                            <div className={ styles.profileContainerFormPasswordInputContainer }>
                                <input
                                    name="password"
                                    type="password"
                                    id="new-password"
                                    required
                                    value={ newPassword }
                                    onChange={ (e) => setNewPassword( e.target.value ) }
                                />                        
                                <label
                                    htmlFor="new-password"
                                    className={

                                        newPassword === '' ? 
                                        styles.profileContainerFormPasswordInputContainerLabel :
                                        styles.profileContainerFormPasswordInputContainerLabelShrink

                                    }
                                >
                                    New Password
                                </label>
                            </div>

                            { /*  sign in button  */ }
                            <div className={ styles.profileContainerFormButtonContainer }>
                
                                <button
                                    type="submit"
                                    className={ styles.profileContainerFormButtonContainerButton }
                                >
                                    Change Password
                                </button>
                    
                            </div>
                
                        </form>

                    </div>

                )

            }

        </Fragment>

    );

}

// ==============================
// server side page guard
// ==============================

// we must not forget that next.js blends server side and client side code so we can use server
// side code to determine whether or not a user is authenticated

// with next there are 3 separate functions that we can use to fetch data: (1) getStaticProps
// and this function allows us to fetch data at build time (2) getServerSideProps and
// getServerSideProps allows us to fetch the data on every request and (3) getStaticPaths and
// this function allows us to dynamically generate paths based on the data that were fetching

// remember using server side page guards results in a better user experience than using
// client side page guards

// and the function we want to use is getServerSideProps since we want to track every request
// and pass in the context object as an argument and the context object will give us access to
// the incoming request
export async function getServerSideProps( context ) {

    // we can use the getSession hook on the server side as well as the client side and we
    // can pass in a configuration object or {} and then get access to the user request by
    // doing " context.req "
    
    // ==============================
    // getSession();
    // ==============================

    // the getSession hook will return a session object and that object will either contain
    // the session data, be null or be undefined
    const session = await getSession( { req : context.req } );

    // if the session object is null or undefined
    if ( !session ) {

        // then do the following to redirect the user
        return {

            // typically this is where we would pass in a props key and then set that key
            // equal to an object but we can pass in other keys like " notFound " or
            // " redirect " and in this case we will use redirect
            redirect : {

                destination : '/signin',
                // set permanent to false since we only want to do a redirect in this
                // particular case 
                permanent   : false

            } // end of redirect

        } // end of reture

    } else if ( session ) { // if the session object is true

        // then do the following to make the session object available throughout the application
        return {

            props : {
    
                session : session

            } // end of props

        } // end of return

    } // end of if / else if

    // and now we can use destructuring above to pass in the data or session object to the
    // profile page

} // end of getServerSideProps


export default ProfilePage;

