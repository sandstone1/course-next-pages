
/*
// since we are building a form we will need to use the useState(); hook
import { Fragment, useState } from 'react';
// import in the Link component
import Link from 'next/link';
// import in the Spinner component
import Spinner from '../components/spinner/spinner';
// import in the ErrorMessage component
import ErrorMessage from '../components/error-message/em-register-page';

// import in our stylesheet
import styles from './signin.module.scss';


// 1 -

// import in the signIn function
// we can call the signIn function in our SignIn component to make a sign in request to the
// backend
import { signIn } from 'next-auth/client';

// End of 1 -


const SignIn = () => {

    // ==============================
    // component state
    // ==============================

    // set component level state
    const [ email, setEmail ]       = useState( '' );
    const [ password, setPassword ] = useState( '' );

    // ==============================
    // useDispatch(); & useSelector();
    // ==============================

    // ==============================
    // useEffect();
    // ==============================

    // ==============================
    // initialize router
    // ==============================

    // ==============================
    // handleSubmit function
    // ==============================

    const handleSubmit = async ( e ) => {

        e.preventDefault();


        // 1 - continued

        // call the signIn function
        // the first argument will be name of the provider and this is the same provider that
        // is in our next_auth_controller.js file and the second argument will be a
        // configuration object and in this object we can configure how the signin process
        // should work

        // the first key value pair in the second argument is " redirect : false " since
        // we don't want next.js to redirect us if we have an error and instead we will leave
        // the user on the sign in page and show our own custom error message

        // await the result of the signIn function and then save that result to the const
        // " result " and result will contain information about any errors that come
        // from our backend authentication code and if we have no errors then result will
        // still be an object that we can use in our code

        // then we will pass in the data that we want to send to the backend or the credential
        // information and that information will be the entered email and password information
        // from the user
        const result = await signIn( 'credentials', {

            redirect : false,
            email    : email,
            password : password

        } );

        // and this is all we have to do to sign users into the application

        // let's console.log out the result for now
        console.log( result );

        // let's test this out on the sign page and if I enter:

        /*
            email    : johndoe@example.com
            password : 123456
        */

        // I get back the following result object in the console:
        
        /*
            error: "Invalid email and / or password."
            ok: true
            status: 200
            url: null
            [[Prototype]]: Object

        */

        // and this is correct so everything is working as expected

        // and if I enter:

        /*
            email    : john@example.com
            password : 12345
        */

        // I get back the following result object in the console:
        
        /*
            error: "Invalid email and / or password."
            ok: true
            status: 200
            url: null
            [[Prototype]]: Object
        */

        // and this is correct so everything is working as expected

        // and if I enter:

        /*
            email    : john@example.com
            password : 123456
        */

        // I get back the following result object in the console:
        
        /*
            error: null
            ok: true
            status: 200
            url: "http://localhost:3000"
            [[Prototype]]: Object
        */

        // and this is correct so everything is working as expected

        // so now we can create users and then log them in and after we sign them in 
        // we get back a result object and the result object contains a yes or no response
        // and this response comes from the backend

        // what were not seeing yet is the JWT and we could do something like:

        /*
            if ( !result.error ) {
                
                // then we could set global state with the help of the context api and then use
                // this state to change what we see on the page, for example, we could change the
                // navigation options in the header component but the problem with this approach
                // is that whenever we reload the page the global state will be lost because when
                // we reload the page we start a brand new single page application

                // so all the state that was stored in memory from the last visit would be lost
                // and that's not what we want but this is reason why we have JWTs and we can
                // store these tokens in a more permanent storage than just memory and we can
                // use these tokens when making requests to protected routes

                // and in the next lecture we'll learn how next helps us determine whether or not
                // a user is authenticated 

            }

        */

        // End of 1 -

/*
    }


    return (

        <Fragment>

            {

                /* 
                loading ? (

                    <Spinner />

                ) : error ? (

                    <ErrorMessage>{ error }</ErrorMessage>

                ) : ( 
                */

                /*
                    <div className={ styles.signInContainer }>

                        <h2 className={ styles.signInContainerH2 }>Sign In</h2>

                        <form className={ styles.signInContainerForm } noValidate="novalidate" onSubmit={ handleSubmit } >

                            { /* input field - email */ /* }
                            <div className={ styles.signInContainerFormEmailInputContainer }>
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
                                        styles.signInContainerFormEmailInputContainerLabel :
                                        styles.signInContainerFormEmailInputContainerLabelShrink
                                    }
                                >
                                    Email
                                </label>
                            </div>

                            { /* input field - password */ /* }
                            <div className={ styles.signInContainerFormPasswordInputContainer }>
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
                                        styles.signInContainerFormPasswordInputContainerLabel :
                                        styles.signInContainerFormPasswordInputContainerLabelShrink

                                    }
                                >
                                    Password
                                </label>
                            </div>

                            { /*  sign in button  */ /* }
                            <div className={ styles.signInContainerFormButtonContainer }>
                
                                <button
                                    type="submit"
                                    className={ styles.signInContainerFormButtonContainerButton }
                                >
                                    Sign in
                                </button>
                    
                            </div>
                
                        </form>

                        { /*  register link  */ /* }
                        <div className={ styles.signInContainerFormRegisterContainer }>
                            New customer?&nbsp;&nbsp;
                            <Link
                                className={ styles.signInContainerFormRegisterContainerLink }
                                href="/register"
                            >
                                Create a new account
                            </Link>
                        </div>

                    </div>

                /*
                )
                */

            /* }

        </Fragment>

    );

}


export default SignIn;
*/
















// ===============================




















/*
// at the beginning of tutorial 222, given all the notes, I created a new file below without
// the notes so we are starting fresh

// since we are building a form we will need to use the useState(); hook
import { Fragment, useState } from 'react';
// import in the Link component
import Link from 'next/link';
// import in the signIn function
import { signIn } from 'next-auth/client';
// import in the Spinner component
import Spinner from '../components/spinner/spinner';


// 3 -

// import in the ErrorMessage component
import ErrorMessage from '../components/error-message/em-signin-page';

// import in the useRouter(); hook
import { useRouter } from 'next/router';

// End of 3 -


// import in our stylesheet
import styles from './signin.module.scss';


const SignInPage = () => {

    // ==============================
    // component state
    // ==============================

    // set component level state
    const [ email, setEmail ]                               = useState( '' );
    const [ password, setPassword ]                         = useState( '' );
    const [ frontendErrorMessage, setFrontendErrorMessage ] = useState( '' );

    // ==============================
    // useDispatch(); & useSelector();
    // ==============================

    // ==============================
    // useEffect();
    // ==============================

    // ==============================
    // initialize router
    // ==============================

    // initialize router
    const router = useRouter();

    // ==============================
    // handleSubmit function
    // ==============================

    const handleSubmit = async ( e ) => {

        e.preventDefault();

        // ==============================
        // signIn function
        // ==============================

        // configure the signIn function and remember the signIn function will make a sign
        // in request to the backend

        // the first argument will be name of the provider
        
        // the second argument will be a configuration object and in this object we can
        // configure how the signin process should work

        // remember in the configuration object we need to pass in the data that we want
        // to send to the backend and this data will be the credential information that we
        // send to the backend as part of the browser request and that credential
        // information will consist of the entered email and password information from the
        // user

        // the result object will contain information about any errors that come from
        // our backend authentication code and looks like the following:

        /*
            error: "Invalid email and / or password."
            ok: true
            status: 200
            url: null
            [[Prototype]]: Object
        */
        /*
        const result = await signIn( 
            'credentials', // the name of the next auth provider
            {
                redirect : false, // if we have an error then don't redirect the user
                email    : email,
                password : password
            }
        );


        // 3 - continued

        // if there is an error message, set the frontendErrorMessage and then display that
        // message in the content below
        if ( result.error ) {

            setFrontendErrorMessage( result.error );

        } else {

            //  redirect the user
            router.push( '/' );

            // reset the component state
            setEmail( '' );
            setPassword( '' );
            setFrontendErrorMessage( '' );

        } // end of if else

        // End of 3 -


        // so now we can create users and then log them in and after we sign them in 
        // we get back a result object and the result object contains a yes or no response
        // from the backend

        // what were not seeing yet is the JWT and we could do something like:

        /*
            if ( !result.error ) {
                
                // then we could set global state with the help of the context api and then use
                // this state to change what we see on the page, for example, we could change the
                // navigation options in the header component but the problem with this approach
                // is that whenever we reload the page the global state will be lost because when
                // we reload the page we start a brand new single page application

                // so all the state that was stored in memory from the last visit will be lost
                // and that's not what we want
                
                // however, this is reason why we have JWTs because we can store these tokens in
                // a more permanent storage than just memory

            }
        */

    /* }


    return (

        <Fragment>

            {

                /* 
                loading ? (

                    <Spinner />

                ) : */
                
                /*
                frontendErrorMessage ? (

                    <ErrorMessage                    
                        setFrontendErrorMessage={ setFrontendErrorMessage }
                    >
                        { frontendErrorMessage }                    
                    </ErrorMessage>

                ) : ( 

                    <div className={ styles.signInContainer }>

                        <h2 className={ styles.signInContainerH2 }>Sign In</h2>

                        <form className={ styles.signInContainerForm } noValidate="novalidate" onSubmit={ handleSubmit } >

                            { /* input field - email */ /* }
                            <div className={ styles.signInContainerFormEmailInputContainer }>
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
                                        styles.signInContainerFormEmailInputContainerLabel :
                                        styles.signInContainerFormEmailInputContainerLabelShrink
                                    }
                                >
                                    Email
                                </label>
                            </div>

                            { /* input field - password */ /* }
                            <div className={ styles.signInContainerFormPasswordInputContainer }>
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
                                        styles.signInContainerFormPasswordInputContainerLabel :
                                        styles.signInContainerFormPasswordInputContainerLabelShrink

                                    }
                                >
                                    Password
                                </label>
                            </div>

                            { /*  sign in button  */ /* }
                            <div className={ styles.signInContainerFormButtonContainer }>
                
                                <button
                                    type="submit"
                                    className={ styles.signInContainerFormButtonContainerButton }
                                >
                                    Sign in
                                </button>
                    
                            </div>
                
                        </form>

                        { /*  register link  */ /* }
                        <div className={ styles.signInContainerFormRegisterContainer }>
                            New customer?&nbsp;&nbsp;
                            <Link
                                className={ styles.signInContainerFormRegisterContainerLink }
                                href="/register"
                            >
                                Create a new account
                            </Link>
                        </div>

                    </div>

                )

            }

        </Fragment>

    );

}


export default SignInPage;
*/
















// ===============================




















/*
// at the beginning of tutorial 224, given all the notes, I created a new file below without
// the notes so we are starting fresh

// since we are building a form we will need to use the useState(); hook
import { Fragment, useState } from 'react';
// import in the Link component
import Link from 'next/link';
// import in the useRouter(); hook
import { useRouter } from 'next/router';
// import in the signIn function
import { signIn } from 'next-auth/client';
// import in the Spinner component
import Spinner from '../components/spinner/spinner';
// import in the ErrorMessage component
import ErrorMessage from '../components/error-message/em-signin-page';

// import in our stylesheet
import styles from './signin.module.scss';


// 4 -

// import in the getSession hook
import { getSession } from 'next-auth/client';

// also, import in the useEffect hook and set the loading state

// when we implement server side page guards delete the useEffect hook import and comment
// out the loading state below

// End of 4 -


const SignInPage = () => {

    // ==============================
    // component state
    // ==============================

    // set component level state
    const [ email, setEmail ]                               = useState( '' );
    const [ password, setPassword ]                         = useState( '' );
    const [ frontendErrorMessage, setFrontendErrorMessage ] = useState( '' );
    // const [ isLoading, setIsLoading ]                       = useState( true );

    // ==============================
    // initialize router
    // ==============================

    // initialize router
    const router = useRouter();

    // ==============================
    // initialize the context
    // ==============================

    // ==============================
    // useSession();
    // ==============================

    // ==============================
    // useEffect();
    // ==============================


    // 4 -

    /* // - comment out
    // ==============================
    // client side page guard
    // ==============================

    // use the getSession hook to determine whether or not we have an active session and if we
    // have an active session then redirect the user; otherwise, and if we don't have an
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
                if ( sessionData ) {

                    // if we have an active session or the session object is true ( i.e. the user is
                    // logged in and authenticated ) then we want to redirect the user to an
                    // another page ( maybe the home page ) and away from the sign in page
                    router.push( '/' );

                } else if ( !sessionData ) {

                    // if the session object is false ( i.e. the user is not logged in and is not
                    // authenticated ) and the user tries to access the sign in page then we want
                    // to set isLoading to false and show the page content
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

    // go to 5 - below and implement server side page guards since this results in a better
    // user experience

    // End of 4 -


    // ==============================
    // handleSubmit function
    // ==============================

    /*
    const handleSubmit = async ( e ) => {

        e.preventDefault();

        // ==============================
        // signIn function
        // ==============================

        // configure the signIn function and remember the signIn function will make a sign
        // in request to the backend

        // the first argument will be name of the provider
        
        // the second argument will be a configuration object and in this object we can
        // configure how the signin process should work

        // remember in the configuration object we need to pass in the data that we want
        // to send to the backend and this data will be the credential information that we
        // send to the backend as part of the browser request and that credential
        // information will consist of the entered email and password information from the
        // user

        // the result object will contain information about any errors that come from
        // our backend authentication code and looks like the following:

        /*
            error: "Invalid email and / or password."
            ok: true
            status: 200
            url: null
            [[Prototype]]: Object
        */

        /*
        const result = await signIn( 
            'credentials', // the name of the next auth provider
            {
                redirect : false, // if we have an error then don't redirect the user
                email    : email,
                password : password
            }
        );

        // if there is an error message, set the frontendErrorMessage and then display that
        // message in the content below
        if ( result.error ) {

            setFrontendErrorMessage( result.error );

        } else {

            // if the sign in process was successfully then:

            // redirect the user
            router.push( '/' );

            // reset the component state
            setEmail( '' );
            setPassword( '' );
            setFrontendErrorMessage( '' );

        } // end of if else

        // so now we can create users and then log them in and after we sign them in 
        // we get back a result object and the result object contains a yes or no response
        // from the backend

        // what were not seeing yet is the JWT and we could do something like:

        /*
            if ( !result.error ) {
                
                // then we could set global state with the help of the context api and then use
                // this state to change what we see on the page, for example, we could change the
                // navigation options in the header component but the problem with this approach
                // is that whenever we reload the page the global state will be lost because when
                // we reload the page we start a brand new single page application

                // so all the state that was stored in memory from the last visit will be lost
                // and that's not what we want
                
                // however, this is reason why we have JWTs because we can store these tokens in
                // a more permanent storage than just memory

            }
        */

    /* }


    return (

        <Fragment>

            {

                /* 
                isLoading ? (

                    <Spinner />

                ) : 
                */
                /* 
                frontendErrorMessage ? (

                    <ErrorMessage                    
                        setFrontendErrorMessage={ setFrontendErrorMessage }
                    >
                        { frontendErrorMessage }                    
                    </ErrorMessage>

                ) : ( 

                    <div className={ styles.signInContainer }>

                        <h2 className={ styles.signInContainerH2 }>Sign In</h2>

                        <form className={ styles.signInContainerForm } noValidate="novalidate" onSubmit={ handleSubmit } >

                            { /* input field - email */ /* }
                            <div className={ styles.signInContainerFormEmailInputContainer }>
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
                                        styles.signInContainerFormEmailInputContainerLabel :
                                        styles.signInContainerFormEmailInputContainerLabelShrink
                                    }
                                >
                                    Email
                                </label>
                            </div>

                            { /* input field - password */ /* }
                            <div className={ styles.signInContainerFormPasswordInputContainer }>
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
                                        styles.signInContainerFormPasswordInputContainerLabel :
                                        styles.signInContainerFormPasswordInputContainerLabelShrink

                                    }
                                >
                                    Password
                                </label>
                            </div>

                            { /*  sign in button  */ /* }
                            <div className={ styles.signInContainerFormButtonContainer }>
                
                                <button
                                    type="submit"
                                    className={ styles.signInContainerFormButtonContainerButton }
                                >
                                    Sign in
                                </button>
                    
                            </div>
                
                        </form>

                        { /*  register link  */ /* }
                        <div className={ styles.signInContainerFormRegisterContainer }>
                            New customer?&nbsp;&nbsp;
                            <Link
                                className={ styles.signInContainerFormRegisterContainerLink }
                                href="/register"
                            >
                                Create a new account
                            </Link>
                        </div>

                    </div>

                )

            }

        </Fragment>

    );

}


// 5 -

// ==============================
// server side page guard
// ==============================

// we must not forget that next.js blends server side and client side code so we can use server
// side code to determine whether or not a user is authenticated

// with next there are 3 separate functions that we can use to fetch data: (1) getStaticProps
// and getStaticProps allows us to fetch data at build time (2) getServerSideProps and
// getServerSideProps allows us to fetch the data on every request and (3) getStaticPaths and
// getStaticPaths allow us to dynamically generate paths based on the data that were fetching

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
    // the session data or be equal to null
    const session = await getSession( { req : context.req } );

    // if the session object is true
    if ( session ) {

        // then do the following to redirect the user
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
    // profile page

} // end of getServerSideProps

// End of 5 -


export default SignInPage;
*/
















// ===============================




















/*
// at the beginning of tutorial 227, given all the notes, I created a new file below without
// the notes so we are starting fresh

// since we are building a form we will need to use the useState(); hook
import { Fragment, useState } from 'react';
// import in the Link component
import Link from 'next/link';
// import in the useRouter(); hook
import { useRouter } from 'next/router';
// import in the useSession hook and the signIn function
import { useSession, signIn } from 'next-auth/react';
// import in the getSession hook
import { getSession } from 'next-auth/react';
// import in the Spinner component
import Spinner from '../components/spinner/spinner';
// import in the ErrorMessage component
import ErrorMessage from '../components/error-message/em-signin-page';

// import in our stylesheet
import styles from './signin.module.scss';


const SignInPage = () => {

    // ==============================
    // component state
    // ==============================

    // set component level state
    const [ email, setEmail ]                               = useState( '' );
    const [ password, setPassword ]                         = useState( '' );
    const [ frontendErrorMessage, setFrontendErrorMessage ] = useState( '' );
    // const [ isLoading, setIsLoading ]                       = useState( true );

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

    // call the useSession hook and then use status in the code below
    const { status } = useSession();

    // ==============================
    // initialize the context
    // ==============================

    // ==============================
    // useEffect();
    // ==============================

    /* // - comment out
    // ==============================
    // client side page guard
    // ==============================

    // use the getSession hook to determine whether or not we have an active session and if we
    // have an active session then redirect the user; otherwise, and if we don't have an
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
                if ( sessionData ) {

                    // if we have an active session or the session object is true ( i.e. the user is
                    // logged in and authenticated ) then we want to redirect the user to an
                    // another page ( maybe the home page ) and away from the sign in page
                    router.push( '/' );

                } else if ( !sessionData ) {

                    // if the session object is false ( i.e. the user is not logged in and is not
                    // authenticated ) and the user tries to access the sign in page then we want
                    // to set isLoading to false and show the page content
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
    const handleSubmit = async ( e ) => {

        e.preventDefault();

        // ==============================
        // frontend validation
        // ==============================

        // everytime we submit the form we need to clear out any prior error messages
        setFrontendErrorMessage( '' );

        // before we dispatch the userRegisterActionCreator let's do some front end validation
        if ( email === '' || password === '' ) {

            // if the user did not enter the required information in the email and / or
            // password fields then set a new error message
            setFrontendErrorMessage( 'All fields must be filled out in order to sign in. Please try again.' );

            // exit the funtion at this point in the code
            return;
    
        } // end of if

        // ==============================
        // signIn function
        // ==============================

        // configure the signIn function and remember the signIn function will make a sign
        // in request to the backend

        // the first argument will be name of the provider
        
        // the second argument will be a configuration object and in this object we can
        // configure how the signin process should work

        // remember in the configuration object we need to pass in the data that we want
        // to send to the backend and this data will be the credential information that we
        // send to the backend as part of the browser request and that credential
        // information will consist of the entered email and password information from the
        // user

        // the result object will contain information about any errors that come from
        // our backend authentication code and looks like the following:

        /*
            error: "Invalid email and / or password."
            ok: true
            status: 200
            url: null
            [[Prototype]]: Object
        */
        /*
        const result = await signIn( 
            'credentials', // the name of the next auth provider
            {
                redirect : false, // if we have an error then don't redirect the user
                email    : email, // data sent along with the user sign in request
                password : password // data sent along with the user sign in request
            }
        );

        // if there is an error message, set the frontendErrorMessage and then display that
        // message in the content below
        if ( result.error ) {

            setFrontendErrorMessage( result.error );

        } else {

            // if the sign in process was successfully then:

            // redirect the user
            router.push( '/' );

            // reset the component state
            setEmail( '' );
            setPassword( '' );
            setFrontendErrorMessage( '' );

        } // end of if else

        // so now we can create users and then log them in and after we sign them in 
        // we get back a result object and the result object contains a yes or no response
        // from the backend

        // what were not seeing yet is the JWT and we could do something like:

        /*
            if ( !result.error ) {
                
                // then we could set global state with the help of the context api and then use
                // this state to change what we see on the page, for example, we could change the
                // navigation options in the header component but the problem with this approach
                // is that whenever we reload the page the global state will be lost because when
                // we reload the page we start a brand new single page application

                // so all the state that was stored in memory from the last visit will be lost
                // and that's not what we want
                
                // however, this is reason why we have JWTs because we can store these tokens in
                // a more permanent storage than just memory

            }
        */

    /* }


    return (

        <Fragment>

            {

                ( status === "loading" ) ? (

                    <Spinner />

                ) : frontendErrorMessage ? (

                    <ErrorMessage                    
                        setFrontendErrorMessage={ setFrontendErrorMessage }
                    >
                        { frontendErrorMessage }                    
                    </ErrorMessage>

                ) : ( 

                    <div className={ styles.signInContainer }>

                        <h2 className={ styles.signInContainerH2 }>Sign In</h2>

                        <form className={ styles.signInContainerForm } noValidate="novalidate" onSubmit={ handleSubmit } >

                            { /* input field - email */ /* }
                            <div className={ styles.signInContainerFormEmailInputContainer }>
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
                                        styles.signInContainerFormEmailInputContainerLabel :
                                        styles.signInContainerFormEmailInputContainerLabelShrink
                                    }
                                >
                                    Email
                                </label>
                            </div>

                            { /* input field - password */ /* }
                            <div className={ styles.signInContainerFormPasswordInputContainer }>
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
                                        styles.signInContainerFormPasswordInputContainerLabel :
                                        styles.signInContainerFormPasswordInputContainerLabelShrink

                                    }
                                >
                                    Password
                                </label>
                            </div>

                            { /*  sign in button  */ /* }
                            <div className={ styles.signInContainerFormButtonContainer }>
                
                                <button
                                    type="submit"
                                    className={ styles.signInContainerFormButtonContainerButton }
                                >
                                    Sign in
                                </button>
                    
                            </div>
                
                        </form>

                        { /*  register link  */ /* }
                        <div className={ styles.signInContainerFormRegisterContainer }>
                            New customer?&nbsp;&nbsp;
                            <Link
                                className={ styles.signInContainerFormRegisterContainerLink }
                                href="/register"
                            >
                                Create a new account
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
// and getStaticProps allows us to fetch data at build time (2) getServerSideProps and
// getServerSideProps allows us to fetch the data on every request and (3) getStaticPaths and
// getStaticPaths allow us to dynamically generate paths based on the data that were fetching

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
    // the session data or be equal to null
    const session = await getSession( { req : context.req } );

    // if the session object is true
    if ( session ) {

        // then do the following to redirect the user
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


export default SignInPage;
*/
















// ===============================





















// at the beginning of tutorial 233, given all the notes, I created a new file below without
// the notes so we are starting fresh

// since we are building a form we will need to use the useState(); hook
import { Fragment, useState } from 'react';
// import in the Link component
import Link from 'next/link';
// import in the useRouter(); hook
import { useRouter } from 'next/router';
// import in the getSession and useSession hooks and the signIn function
import { getSession, signIn, useSession } from 'next-auth/react';
// import in the Spinner component
import Spinner from '../components/spinner/spinner';
// import in the ErrorMessage component
import ErrorMessage from '../components/error-message/em-signin-page';

// import in our stylesheet
import styles from './signin.module.scss';


const SignInPage = () => {

    // ==============================
    // component state
    // ==============================

    // set component level state
    const [ email, setEmail ]                               = useState( '' );
    const [ password, setPassword ]                         = useState( '' );
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

    // call the useSession hook and then use status in the code below
    const { status } = useSession();

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
        // frontend validation
        // ==============================

        // everytime we submit the form we need to clear out any prior error messages
        setFrontendErrorMessage( '' );

        // before we dispatch the userRegisterActionCreator let's do some front end validation
        if ( email === '' || password === '' ) {

            // if the user did not enter the required information in the email and / or
            // password fields then set a new error message
            setFrontendErrorMessage( 'All fields must be filled out in order to sign in. Please try again.' );

            // exit the funtion at this point in the code
            return;
    
        } // end of if

        // ==============================
        // signIn function
        // ==============================

        // configure the signIn function and remember the signIn function will make a sign
        // in request to the backend

        // the first argument will be name of the provider
        
        // the second argument will be a configuration object and in this object we can
        // configure how the signin process should work

        // remember in the configuration object we need to pass in the data that we want
        // to send to the backend

        // the result object will contain information about any errors that come from
        // our backend authentication code and the result object looks like the following:

        /*
            error: "Invalid email and / or password."
            ok: true
            status: 200
            url: null
            [[Prototype]]: Object
        */
        const result = await signIn( 
            'credentials', // the name of the next auth provider
            {
                redirect : false, // if we have an error then don't redirect the user
                email    : email, // data sent along with the user sign in request
                password : password // data sent along with the user sign in request
            }
        );

        // if there is an error message, set the frontendErrorMessage and then display that
        // message in the content below
        if ( result.error ) {

            setFrontendErrorMessage( result.error );

        } else {

            // if the sign in process was successfully then:

            // redirect the user
            router.push( '/' );

            // reset the component state
            setEmail( '' );
            setPassword( '' );
            setFrontendErrorMessage( '' );

        } // end of if else

        // so now we can create users and then log them in and after we sign them in 
        // we get back a result object and the result object contains a yes or no response
        // from the backend

        /*
            if ( !result.error ) {

                // remember we could set global state with the help of the context api and then use
                // this state to change what we see on the page, for example, we could change the
                // navigation options in the header component but the problem with this approach
                // is that whenever we reload the page the global state will be lost because when
                // we reload the page we start a brand new single page application

                // so all the state that was stored in memory from the last visit will be lost
                // and that's not what we want
                
                // however, this is reason why we have JWTs because we can store these tokens in
                // a more permanent storage than just memory

            }
        */

    }


    return (

        <Fragment>

            {

                ( status === "loading" ) ? (

                    <Spinner />

                ) : frontendErrorMessage ? (

                    <ErrorMessage                    
                        setFrontendErrorMessage={ setFrontendErrorMessage }
                    >
                        { frontendErrorMessage }
                    </ErrorMessage>

                ) : ( 

                    <div className={ styles.signInContainer }>

                        <h2 className={ styles.signInContainerH2 }>Sign In</h2>

                        <form className={ styles.signInContainerForm } noValidate="novalidate" onSubmit={ handleSubmit } >

                            { /* input field - email */ }
                            <div className={ styles.signInContainerFormEmailInputContainer }>
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
                                        styles.signInContainerFormEmailInputContainerLabel :
                                        styles.signInContainerFormEmailInputContainerLabelShrink
                                    }
                                >
                                    Email
                                </label>
                            </div>

                            { /* input field - password */ }
                            <div className={ styles.signInContainerFormPasswordInputContainer }>
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
                                        styles.signInContainerFormPasswordInputContainerLabel :
                                        styles.signInContainerFormPasswordInputContainerLabelShrink

                                    }
                                >
                                    Password
                                </label>
                            </div>

                            { /*  sign in button  */ }
                            <div className={ styles.signInContainerFormButtonContainer }>
                
                                <button
                                    type="submit"
                                    className={ styles.signInContainerFormButtonContainerButton }
                                >
                                    Sign in
                                </button>
                    
                            </div>
                
                        </form>

                        { /*  register link  */ }
                        <div className={ styles.signInContainerFormRegisterContainer }>
                            New customer?&nbsp;&nbsp;
                            <Link
                                className={ styles.signInContainerFormRegisterContainerLink }
                                href="/register"
                            >
                                Create a new account
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


export default SignInPage;



