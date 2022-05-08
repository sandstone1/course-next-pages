

// when we click on the submit button we want to update the user's password in the
// database and remember we shouldn't talk to a database from the front end of our
// application since that would be highly insecure

// so here we fetching the user input on the front end and then once the user clicks the
// submit button we send a request to the api route and then inside the api route we
// connect to a database and then update the user's inside a collection called " users "

// and remember the code inside the api route will not be exposed to the website visitors
// or the front end


// since we are building a form we will need to use the useState(); hook
import { Fragment, useState } from 'react';
// import in the Link component
import Link from 'next/link';
// import in the getSession(); hook
import { getSession } from 'next-auth/react';
// import in the Spinner component
import Spinner from '../components/spinner/spinner-v2';
// import in the ErrorMessage component
import ErrorMessageComponent from '../components/error-message/em-profile-component';
// import in the SuccessMessage component
import SuccessMessageComponent from '../components/success-message/sm-profile-component';
// import in our stylesheet
import styles from './profile.module.scss';


export default function ProfilePage() {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed

    // set component level state
    const [ currentPassword, setCurrentPassword ]               = useState( '' );
    const [ newPassword, setNewPassword ]                       = useState( '' );
    const [ isLoading, setIsLoading ]                           = useState( false );
    const [ frontendErrorMessage, setFrontendErrorMessage ]     = useState( '' );
    const [ frontendSuccessMessage, setFrontendSuccessMessage ] = useState( '' );

    // ==============================
    // useRef();
    // ==============================

    // ==============================
    // useRouter();
    // ==============================

    // ==============================
    // useSession();
    // ==============================

    // ==============================
    // initialize the context
    // ==============================

    // ==============================
    // useEffect();
    // ==============================

    // ==============================
    // handleSubmit function
    // ==============================

    const handleSubmit = async ( e ) => {

        e.preventDefault();

        // ==============================
        // fetch API
        // ==============================

        // next we need to send the current password and the new password key value
        // pairs to the change-password-put api route so that we can update the user's
        // password information in the database

        // we want to send an http request when the form is submitted

        // STEP 1
        // initially, isLoading is set to true
    
        // remember we use the isLoading state primarily when we are communicating with the
        // database from the frontend since there may be a short delay between the time from
        // when the request is made to the time from when the server response is returned
        setIsLoading( true );

        // STEP 2
        // create our endpoint
        const endpoint = `/api/user/change-password-put`;

        // create our data object

        // create our config object

        // STEP 3
        // make the fetch request and save the result to the const called res
        const res = await fetch(
            endpoint,
            // include the config object
            {
                method : 'PUT',
                body   : JSON.stringify(
                    {
                        currentPassword : currentPassword,
                        newPassword     : newPassword
                    }
                ),
                headers : {
                    'Content-Type' : 'application/json'
                }
            }
        );

        // STEP 4(a)
        // first, check to see if there is a request error
        if ( !res.ok ) {

            // STEP 4(b)
            // the fetch request above returns a response object and then we can apply the
            // json(); method to the reponse object and this will convert the response
            // object into a JavaScript object that we can use and we will call this JavaScript
            // object " data " and the data object in this case is the response we get back from
            // the api route
            const data = await res.json();

            // STEP 4(c)
            // once we get the data, set isLoading to false
            setIsLoading( false );

            // STEP 4(d)
            // set the error message
            setFrontendErrorMessage( data.message );

            // STEP 4(e)
            // reset the component state
            setCurrentPassword( '' );
            setNewPassword( '' );

        } else {

            // STEP 5(a)
            // the fetch request above returns a response object and then we can apply the
            // json(); method to the reponse object and this will convert the response
            // object into a JavaScript object that we can use and we will call this JavaScript
            // object " data " and the data object in this case is the response we get back from
            // the api route
            const data = await res.json();

            // STEP 5(b)
            // once we get the data, set isLoading to false
            setIsLoading( false );

            // STEP 5(c)
            // console.log data for the moment
            console.log( data );

            // STEP 5(d)
            // set the success message
            setFrontendSuccessMessage( data.message );

            // STEP 5(e)
            // reset the component state
            setCurrentPassword( '' );
            setNewPassword( '' );

        }

        // ==============================
        // end of fetch API
        // ==============================

    } // end of handleSubmit


    return (

        <Fragment>

            {

                isLoading ? (

                    <Spinner />

                ) : frontendErrorMessage ? (

                    <ErrorMessageComponent                    
                        resetFrontendErrorMessage={ () => setFrontendErrorMessage( '' ) }
                    >
                        { frontendErrorMessage }
                    </ErrorMessageComponent>

                ) : frontendSuccessMessage ? (

                    <SuccessMessageComponent                    
                        resetFrontendSuccessMessage={ () => setFrontendSuccessMessage( '' ) }
                    >
                        { frontendSuccessMessage }
                    </SuccessMessageComponent>

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

} // end of ProfilePage() {}


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

    // if I console.log " session " or " console.log(session); " then the result in the
    // server terminal is:
    /*
        {
            user: { name: 'John Doe', email: 'john@example.com' },
            expires: '2022-05-31T01:33:47.161Z'
        }
    */

    // and this is correct so everything is working as expected
    // console.log(session);

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


