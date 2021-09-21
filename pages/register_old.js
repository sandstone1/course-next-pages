
// since we are building a form we will need to use the useState(); hook
import { Fragment, useRef, useState } from 'react';
// import in the Link component
import Link from 'next/link';


// 1 -

// import in the useRouter(); hook
import { useRouter } from 'next/router';
// import in axios
import axios from 'axios';
// import in the variable " API_URL " and add this variable to the fetch call below
import { API_URL } from '../config/index';

// End of 1 -


// import in the Spinner component
import Spinner from '../components/spinner/spinner';
// import in the ErrorMessage component
import ErrorMessage from '../components/error-message/em-register-page';

// import in our stylesheet
import styles from './register.module.scss';


const Register = () => {

    // ==============================
    // component state
    // ==============================

    // set component level state
    const [ name, setName ]                       = useState( '' );
    const [ email, setEmail ]                     = useState( '' );
    const [ password, setPassword ]               = useState( '' );
    const [ confirmPassword, setConfirmPassword ] = useState( '' );
    const [ loading, setLoading ]                 = useState( false );
    const [ errorMessage, setErrorMessage ]       = useState( '' );

    // ==============================
    // useDispatch(); & useSelector();
    // ==============================

    // ==============================
    // useEffect();
    // ==============================

    // ==============================
    // initialize router
    // ==============================


    // 1 - continued

    // initialize router
    const router = useRouter();

    // ==============================
    // handleSubmit function
    // ==============================

    const handleSubmit = async ( e ) => {

        e.preventDefault();

        // ==============================
        // frontend validation
        // ==============================

        // everytime we submit the form we need to clear out any prior error messages
        setErrorMessage( '' );

        // before we dispatch the userRegisterActionCreator let's do some front end validation
        if ( name === '' ||  email === '' || password === '' || confirmPassword === '' ) {

            // if the user did not enter the required information in the name, email, password
            // and / or confirm password fields then set a new error message
            setErrorMessage( 'All fields must be filled out in order to register. Please try again.' );

            // stop the function execution at this point
            return;

        } else if ( password !== confirmPassword ) {

            // if the password does not match the confirm password then set the error message
            setErrorMessage( 'Passwords do not match. Please try again.' );

            // stop the function execution at this point
            return;

        } // end of if else statement

        // ==============================
        // old redux code
        // ==============================

        // dispatch our action creator
        // dispatch( userregisterActionCreator( name, email, password ) );

        // ==============================
        // make a POST request to our endpoint
        // ==============================

        // ==============================
        // POST request using the fetch api
        // ==============================

        /*
        // create the endpoint
        const endpoint = `${ API_URL }/api/auth/register`;

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

        // Step 1
        // create the endpoint
        const endpoint = `${ API_URL }/api/auth/register`;

        // Step 2
        // create the config object
        const config = {
            // create the headers
            headers : {
                'Content-Type' : 'application/json'
            }
        };

        try {

            // below we are making a POST request ( using axios ) to the above endpoint
            // and axios returns the response object and we can then destructure the data
            // object off of the response object and the data object in this case is the
            // user object or the following user information ( this comes from the
            // api/auth/register.js file ):

            /*
                _id     : user._id,
                name    : user.name,
                email   : user.email,
                isAdmin : user.isAdmin,
            */

            // and the second argument in the request will be the email and password key
            // value pairs and remember we are sending the email and password key value
            // pairs to the api route or /api/auth/register.js file as part of the browser
            // request

            // and the third argument in the request will be our config object
            // make the POST request to the following endpoint

            // Step 3
            // send the request
            const { data } = await axios.post(
                endpoint,
                {
                    name     : name,
                    email    : email,
                    password : password
                },
                config
            );

            // console log out the data object
            console.log( data );

            // and useRouter gives us access to a method that we can use to redirect the user
            // and after the user successfully registers we then want to redirect the user to
            // the home page 
            router.push( '/' );

            // reset the state
            setName( '' );
            setEmail( '' );
            setPassword( '' );
            setConfirmPassword( '' );

        }

        // Step 4
        // if there is a request error then handle the error
        catch ( err ) {

            // if we get a 400 status response
            if ( err.response.status === 400 ) {

                setErrorMessage( err.response.data.message );

            } 

            // if we get a 500 status response
            else if ( err.response.status === 500 ) {

                setErrorMessage( 'There is a problem with the server. Please try again.' );

            } 

            // if we get some other kind of error
            else {

                // set the error message
                setErrorMessage( 'Something went wrong' );

                // erase the error message after 5 seconds
                setTimeout( () => {

                    setErrorMessage( null );

                }, 5000 );

            }

        } // end of try catch

        // Step 5
        // reset the state
        setName( '' );
        setEmail( '' );
        setPassword( '' );
        setConfirmPassword( '' );

    } // end of handleSubmit

    // End of 1 -


    return (

        <Fragment>

            {
                
                loading ? (

                    <Spinner />

                ) : errorMessage ? (

                    <ErrorMessage
                        setErrorMessage={ setErrorMessage }
                    >
                        { errorMessage }
                    </ErrorMessage>

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


export default Register;


















// ===============================





















// at the beginning of tutorial 219, given all the notes, I created a new file below without
// the notes so we are starting fresh
