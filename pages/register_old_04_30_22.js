

// ==============================
// to send the request to pages/api/user/register-mongodb instead of
// pages/api/user/register-mongoose then we need to make the following changes:
// ==============================
// 1 - change the endpoint in the user.state.js file
// 2 - add isAdmin component state
// 3 - add the isAdmin argument to userRegisterActionCreator(); below
// 4 - add the isAdmin argument to userRegisterActionCreator(); in the user.state.js file
// 5 - add the isAdmin argument to POST request in the userRegisterActionCreator(); in the
// user.state.js file


// since we are building a form we will need to use the useState(); hook
import { Fragment, useContext, useEffect, useState } from 'react';
// import in the Link component
import Link from 'next/link';
// import in the getSession(); hook
import { getSession } from 'next-auth/react';
// import in the UserContext
import UserContext from '../context/user/user-context';
// import in the Spinner component
import Spinner from '../components/spinner/spinner';
// import in the ErrorMessage component
import ErrorMessage from '../components/error-message/em-register-component';
// import in the SuccessMessage component
import SuccessMessage from '../components/success-message/sm-register-component';
// import in our stylesheet
import styles from './register.module.scss';


const RegisterPage = () => {

    // ==============================
    // component state
    // ==============================

    // set component level state
    const [ name, setName ]                                     = useState( '' );
    const [ email, setEmail ]                                   = useState( '' );
    const [ password, setPassword ]                             = useState( '' );
    const [ isAdmin, setIsAdmin ]                               = useState( false );
    const [ confirmPassword, setConfirmPassword ]               = useState( '' );
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

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useContext(); hook to initialize the UserContext and then return the part of the
    // state that we want
    const userContext = useContext( UserContext );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { 
        userRegisterLoading,
        userRegisterInfo,
        userRegisterSuccess,
        userRegisterError,
        userRegisterActionCreator,
        userRegisterResetActionCreator
    } = userContext;

    // ==============================
    // useEffect();
    // ==============================

    // if the user successfully registered then we want to show a success message
    useEffect( () => {

        if ( userRegisterSuccess ) {

                // if the user successfully registered then show a success message
                setFrontendSuccessMessage( 'You have successfully registered! Please close this message to be redirected to the home page.' );

        } // end of if

        return () => {
            // clean-up functions
        }

    }, [ userRegisterSuccess ] ); // end of useEffect

    // ==============================
    // handleSubmit function
    // ==============================

    const handleSubmit = async ( e ) => {

        e.preventDefault();

        // ==============================
        // email validation function
        // ==============================

        // this came from
        // " https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript "
        // and was the second answer on the page
        function validateEmail( email ) {

            // the regex
            const regex = /\S+@\S+\.\S+/;

            // test the regex against the email
            const isEmailValid = regex.test( email );

            // return the boolean isEmailValid
            return isEmailValid;

        } // end of validateEmail

        // ==============================
        // password validation function
        // ==============================

        // this came from
        // " https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a "
        function validatePassword( password ) {

            // the regex
            const regex = /^[A-Za-z\d]{6,}$/;

            // test the regex against the password
            const isPasswordValid = regex.test( password );

            // return the boolean isPasswordValid
            return isPasswordValid;

        } // end of validatePassword

        // ==============================
        // frontend validation
        // ==============================

        // everytime we submit the form we need to clear out any prior error or success messages
        setFrontendErrorMessage( '' );
        setFrontendSuccessMessage( '' );

        // before we dispatch the userRegisterActionCreator let's do some front end validation
        if ( name === '' ||  email === '' || password === '' || confirmPassword === '' ) {

            // if the user did not enter the required information in the name, email, password
            // and / or confirm password fields then set a new error message
            setFrontendErrorMessage( 'All fields must be filled out in order to register. Please try again.' );

        } else if ( password !== confirmPassword ) {

            // if the password does not match the confirm password then set the error message
            setFrontendErrorMessage( 'Passwords do not match. Please try again.' );

        } else if ( !validateEmail( email ) ) {

            // if the email is not valid then set the error message
            setFrontendErrorMessage( 'Your email is not valid. Please try again.' );

        } else if ( !validatePassword( password ) ) {

            // if the email is not valid then set the error message
            setFrontendErrorMessage( 'Your password must be at least 6 characters and contain only numbers and letters. Please try again.' );

        } else {

            // ==============================
            // dispatch our action creator
            // ==============================

            // dispatch our action creator
            userRegisterActionCreator( name, email, password, isAdmin );

            // reset the state
            setName( '' );
            setEmail( '' );
            setPassword( '' );
            setConfirmPassword( '' );            
            
        } // end of if / else if / else if / else if / else statement

    } // end of handleSubmit

    // ==============================
    // handleMessageReset function
    // ==============================

    const handleMessageReset = async ( e ) => {

        // dispatch our action creator and reset the state for userRegisterError and
        // userRegisterSuccess
        // ( see the user.state.js and user.reducer.js files for details )
        userRegisterResetActionCreator();

    } // end of handleMessageReset


    return (

        <Fragment>

            {

                userRegisterLoading ? (

                    <Spinner />

                ) : frontendErrorMessage ? (

                    <ErrorMessage
                        setFrontendErrorMessage={ setFrontendErrorMessage }
                        onClose={ handleMessageReset }
                    >
                        { frontendErrorMessage }
                    </ErrorMessage>

                ) : userRegisterError ? (

                    <ErrorMessage
                        setFrontendErrorMessage={ setFrontendErrorMessage }
                        onClose={ handleMessageReset }
                    >
                        { userRegisterError }
                    </ErrorMessage>

                ) : frontendSuccessMessage ? (

                    <SuccessMessage
                        setFrontendSuccessMessage={ setFrontendSuccessMessage }
                        onClose={ handleMessageReset }
                    >
                        { frontendSuccessMessage }
                    </SuccessMessage>

                ) : (

                    <div className={ styles.registerContainer }>

                        <h2 className={ styles.registerContainerH2 }>Register</h2>

                        <form className={ styles.registerContainerForm } noValidate="novalidate" onSubmit={ handleSubmit } >

                            { /* input field - name */ }
                            <div className={ styles.registerContainerFormNameInputContainer }>
                                <input
                                    name="name"
                                    type="text"
                                    id="sign-in-name"
                                    required
                                    value={ name }
                                    onChange={ (e) => setName( e.target.value ) }
                                />                        
                                <label
                                    htmlFor="sign-in-name"
                                    className={

                                        name === '' ? 
                                        styles.registerContainerFormNameInputContainerLabel :
                                        styles.registerContainerFormNameInputContainerLabelShrink

                                    }
                                >
                                    Name
                                </label>
                            </div>
                    

                            { /* input field - email */ }
                            <div className={ styles.registerContainerFormEmailInputContainer }>
                                <input
                                    name="email"
                                    type="email"
                                    id="sign-in-email"
                                    required
                                    value={ email }
                                    onChange={ (e) => setEmail( e.target.value ) }
                                />                        
                                <label
                                    htmlFor="sign-in-email"
                                    className={

                                        email === '' ? 
                                        styles.registerContainerFormEmailInputContainerLabel :
                                        styles.registerContainerFormEmailInputContainerLabelShrink

                                    }
                                >
                                    Email
                                </label>
                            </div>

                            { /* input field - password */ }
                            <div className={ styles.registerContainerFormPasswordInputContainer }>
                                <input
                                    name="password"
                                    type="password"
                                    id="sign-in-password"
                                    required
                                    value={ password }
                                    onChange={ (e) => setPassword( e.target.value ) }
                                />                        
                                <label
                                    htmlFor="sign-in-password"
                                    className={

                                        password === '' ? 
                                        styles.registerContainerFormPasswordInputContainerLabel :
                                        styles.registerContainerFormPasswordInputContainerLabelShrink

                                    }
                                >
                                    Password
                                </label>
                            </div>

                            { /* input field - confirm password */ }
                            <div className={ styles.registerContainerFormConfirmPasswordInputContainer }>
                                <input
                                    name="confirm-password"
                                    type="password"
                                    id="sign-in-confirm-password"
                                    required
                                    value={ confirmPassword }
                                    onChange={ (e) => setConfirmPassword( e.target.value ) }
                                />                        
                                <label
                                    htmlFor="sign-in-confirm-password"
                                    className={

                                        confirmPassword === '' ? 
                                        styles.registerContainerFormConfirmPasswordInputContainerLabel :
                                        styles.registerContainerFormConfirmPasswordInputContainerLabelShrink

                                    }
                                >
                                    Confirm Password
                                </label>
                            </div>

                            { /*  register button  */ }
                            <div className={ styles.registerContainerFormButtonContainer }>
                
                                <button
                                    type="submit"
                                    className={ styles.registerContainerFormButtonContainerButton }
                                >
                                    Register
                                </button>
                    
                            </div>
                
                        </form>

                        { /*  sign in link  */ }
                        <div className={ styles.registerContainerFormSignInContainer }>
                            Already a customer?&nbsp;&nbsp;
                            <Link
                                className={ styles.registerContainerFormSignInContainerLink }
                                href="/signin"
                            >
                                Sign In
                            </Link>
                        </div>

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

    // if the session object is true
    if ( session ) {

        // then redirect the user
        return {

            // typically this is where we would pass in a props key and then set that key
            // equal to an object but we can pass in other keys like " notFound " or
            // " redirect " and in this case we will use redirect
            redirect : {

                destination : '/',
                // set permanent to false since we only want to do a redirect in this
                // particular case 
                permanent   : false

            } // end of redirect

        } // end of reture

    } else if ( !session ) { // if the session object is null

        // then do the following to make the session object available throughout the application
        return {

            props : {
    
                session : session

            } // end of props

        } // end of return

    } // end of if / else if

    // and now we can use destructuring above to pass in the data or session object to the
    // sign in page

} // end of getServerSideProps


export default RegisterPage;


