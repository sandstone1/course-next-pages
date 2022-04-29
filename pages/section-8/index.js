
/*
// remember the url path for this file is " http://localhost:3016/section-8 "

// when we click on the submit button we want to have the user feedback is stored in a
// database somewhere and remember we shouldn't talk to a database from the front end of
// our application since that would be highly insecure

// so here we fetching the user input on the front end and then once the user clicks the
// submit button we send a request to the api route and then inside the api route we
// connect to a database

// and remember the code inside the api route will not be exposed to the website visitors
// or the front end

// since we are building a form we will need to use the useState(); hook
import { Fragment, useState } from 'react';
// import in the ErrorMessage component ( we'll use the sign in page error message component
// in this component )
import ErrorMessage from '../../components/error-message/em-signin-page';
// import in the scss file
import styles from './index-hero-image-screen-v2.module.scss';


export default function HomePage( ) {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed

    // set component level state
    const [ email, setEmail ]                               = useState( '' );
    const [ feedback, setFeedback ]                         = useState( '' );
    const [ frontendErrorMessage, setFrontendErrorMessage ] = useState( '' );

    // ==============================
    // destructure props
    // ==============================

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

        // console.log( email, feedback );
        // console.log(); show the correct email and feedback

        // we could add some error handling here in the case where the user did not fill in the
        // email input field and / or the text area box but I will not do this here since it's
        // not the focus of this section

        // next we need to send the email and feedback key value pairs to the feedback api route
        // so that we can save the user's feedback in a database

        // ==============================
        // frontend validation
        // ==============================

        // everytime we submit the form we need to clear out any prior error messages
        setFrontendErrorMessage( '' );

        // front end validation
        if ( email === '' || feedback === '' ) {

            // if the user did not enter the required information in the email and / or
            // feedback fields then set a new error message
            setFrontendErrorMessage( 'All fields must be filled out in order to save your feedback to the database. Please try again.' );

            // exit the funtion at this point in the code
            return;
    
        } // end of if

        // ==============================
        // fetch API
        // ==============================


        // 1 -

        // we want to send an http request when the form is submitted 

        // STEP 1
        // create our endpoint
        const endpoint = `/api/feedback/feedback`;

        // create our data object
        const reqBody = { email : email, feedback : feedback }

        // create our config object
        // remember that as presently configured below, the config object will not work inside
        // the fetch request below
        /*
        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        };
        */

/*
        // STEP 2
        // make the fetch request and save the result to the const called res
        const res = await fetch(
            endpoint,
            {
                method : 'POST',
                body   : JSON.stringify( reqBody ),
                headers : {
                    'Content-Type' : 'application/json'
                }
            }
        );

        // STEP 3
        // first, check to see if there is a request error
        if ( !res.ok ) {

            // set the error message
            setFrontendErrorMessage( `Something went wrong. Please close this message to go back to the home page.` );

        } else {

            // STEP 4
            // the fetch request above returns a response object and then we can apply the
            // json(); method to the reponse object and this will convert the response
            // object into a JavaScript object that we can use and we will call this JavaScript
            // object " data " and the data object in this case is the response we get back from
            // the api route
            const data = await res.json();

            // STEP 5
            // console.log data for the moment
            console.log( data );

            // STEP 6
            // reset the component state
            setEmail( '' );
            setFeedback( '' );
            setFrontendErrorMessage( '' );

        }

        // ==============================
        // end of fetch API
        // ==============================

        // now let's test this out and if I enter john@example.com for the email and " Yes " for
        // the feedback and then press the " Submit Feedback " button then I see the following in
        // the browser console:

        /*
            feedback:
                email: "john@example.com"
                feedback: "Yes"
                id: "2021-11-30T00:48:40.091Z"
                [[Prototype]]: Object
            message: "Success!"
        */

        // and this is correct so everything is working as expected

        // and if I look inside the data/feedback.json file I see the following:

        /*
            [{"id":"2021-11-30T00:48:40.091Z","email":"john@example.com","feedback":"Yes"}]
        */

        // and this is correct so everything is working as expected

        // so now we can work with submitted data in our next.js application and we don't have
        // to build out a separate api but we can instead easily add api routes that our
        // website might need and to do so as part of our next.js project

        // End of 1 -

/*
    } // end of handleSubmit

    return (

        <Fragment>

            {

                frontendErrorMessage ? (

                    <ErrorMessage                    
                        setFrontendErrorMessage={ setFrontendErrorMessage }
                    >
                        { frontendErrorMessage }
                    </ErrorMessage>

                ) : (

                    <div className={ styles.homePageContainer }>

                        { /* div 1 */ /* }
                        <div className={ styles.homePageContainerImageContainer }>
                        
                            <h2 className={ styles.homePageContainerImageContainerH2 }>Home Page</h2>
                        
                        </div>

                        { /* div 2 */ /* }
                        <div className={ styles.homePageContainerContentContainer1 }>

                            <form className={ styles.homePageContainerContentContainer1Form } noValidate="novalidate" onSubmit={ handleSubmit } >

                                { /* input field - email */ /* }
                                <div className={ styles.homePageContainerContentContainer1FormEmailInputContainer }>
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
                                            styles.homePageContainerContentContainer1FormEmailInputContainerLabel :
                                            styles.homePageContainerContentContainer1FormEmailInputContainerLabelShrink
                                        }
                                    >
                                        Email address
                                    </label>
                                </div>

                                { /* input field - feedback */ /* }
                                <div className={ styles.homePageContainerContentContainer1FormFeedbackTextAreaContainer }>
                                    <textarea
                                        name="feedback"
                                        type="textarea"
                                        id="feedback"
                                        rows="5"
                                        value={ feedback }
                                        onChange={ (e) => setFeedback( e.target.value ) }
                                    />
                                    <label
                                        htmlFor="feedback" // htmlFor equals the id value
                                        className={

                                            feedback === '' ? 
                                            styles.homePageContainerContentContainer1FormFeedbackTextAreaContainerLabel :
                                            styles.homePageContainerContentContainer1FormFeedbackTextAreaContainerLabelShrink

                                        }
                                    >
                                        Provide your feedback here
                                    </label>
                                </div>

                                { /*  submit button  */ /* }
                                <div className={ styles.homePageContainerContentContainer1FormButtonContainer }>

                                    <button
                                        type="submit"
                                        className={ styles.homePageContainerContentContainer1FormButtonContainerButton }
                                    >
                                        Submit Feedback
                                    </button>
                        
                                </div>

                            </form>

                        </div>            

                        <style jsx global>
                            {`
                                // remember "We (i.e. next.js) bundle styled-jsx to provide support for isolated scoped CSS."
                                body > div > div > main {

                                    height : 1240px; !important; // this is #3

                                }
                                body > div > div > header > nav {

                                    z-index : 1; // lay the header nav elements on top of the hero image element

                                }
                                body > div > div > footer {

                                    z-index    : 0; // we did not have to change the z-index for the footer since the
                                    // footer element appears later in the code
                                    background : sienna;

                                }
                                body > div > div > footer > h2,
                                body > div > div > footer > div > span {

                                    color : rgba( 255, 255, 255, 1 ) !important; // change the footer text color to white
                        
                                }
                                body > div > div > footer > div > a {

                                    color           : rgba( 255, 255, 255, 1 ) !important; // change the footer text color to white
                                    text-decoration : underline;  // underline " About " 
                        
                                }
                                @media all and ( max-width : 1280px ) {

                                    body > div > div > main {

                                        height : 2290px; !important; // this is #3
                
                                    }

                                    body > div > div > header > nav > div:nth-child( 1 ) {

                                        margin : 1.5rem 0 1.0rem 0 !important; // provide spacing between logo and nav elements on
                                        // small screen sizes
                                
                                    }

                                }
                                @media all and ( max-width : 920px ) {

                                    body > div > div > main {

                                        height : 2190px; !important; // this is #3
                
                                    }

                                }
                                @media all and ( max-width : 768px ) {

                                    body > div > div > main {

                                        height : 1940px; !important; // this is #3
                
                                    }

                                }
                                @media all and ( max-width : 620px ) {

                                    body > div > div > main {

                                        height : 1740px; !important; // this is #3
                
                                    }

                                }
                                @media all and ( max-width : 480px ) {

                                    body > div > div > main {

                                        height : 1440px; !important; // this is #3
                
                                    }

                                }
                            `}
                        </style>

                    </div>

                )

            }

        </Fragment>

    );

}
*/ 

















// ===============================





















// at the beginning of lecture 144, given all the notes, I created a new file below without
// the notes so we are starting fresh


// 2 -

// in order to get information or make a GET request to the feedback.json file we need to
// change 3 items:

// remember the feedback.json file contains:
// " [{"id":"2021-11-30T00:48:40.091Z","email":"john@example.com","feedback":"Yes"}] "

// 1 - we need to change the endpoint from
// " const endpoint = `/api/feedback/feedback`; " to
// " const endpoint = `/api/feedback/feedback_get`; "
// 2 - we need to change the http request method from " method : 'POST', " to
// " method : 'GET', "
// 3 - we need to comment out the body key value pair or
// " // body : JSON.stringify( reqBody ), " and the headers or
// " headers : { 'Content-Type' : 'application/json' } "
// and for the purposes of this lecture we can leave everything else the same and when we
// test this out we get the following data object in the console:

/*
    fileData: Array(1)
        0:
            email: "john@example.com"
            feedback: "Yes"
            id: "2021-11-30T00:48:40.091Z"
        [[Prototype]]: Object
        length: 1
    [[Prototype]]: Array(0)
*/

// and this is correct so everything is working as expected

// End of 2 -


// remember the url path for this file is " http://localhost:3016/section-8 "

// when we click on the submit button we want to have the user feedback is stored in a
// database somewhere and remember we shouldn't talk to a database from the front end of
// our application since that would be highly insecure

// so here we fetching the user input on the front end and then once the user clicks the
// submit button we send a request to the api route and then inside the api route we
// connect to a database

// and remember the code inside the api route will not be exposed to the website visitors
// or the front end


// since we are building a form we will need to use the useState(); hook
import { Fragment, useEffect, useState } from 'react';
// import in the ErrorMessage component ( we'll use the sign in page error message component
// in this component )
import ErrorMessage from '../../components/error-message/em-signin-page';
// import in the scss file
import styles from './index-hero-image-screen-v2.module.scss';


export default function HomePage( ) {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed

    // set component level state
    const [ email, setEmail ]                               = useState( '' );
    const [ feedback, setFeedback ]                         = useState( '' );
    const [ frontendErrorMessage, setFrontendErrorMessage ] = useState( '' );

    // ==============================
    // destructure props
    // ==============================

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

    useEffect( () => {

        // get the header element and use this element in styled jsx below
        const header = document.getElementsByTagName( 'Header' );

        // get the main element and use this element in styled jsx below
        const main = document.getElementsByTagName( 'Main' );

        // get the nav element and use this element in styled jsx below
        const nav = document.getElementsByTagName( 'Nav' );

        // get the footer element and use this element in styled jsx below
        const footer = document.getElementsByTagName( 'Footer' );

    }, [] ); // end of useEffect();

    // ==============================
    // handleSubmit function
    // ==============================

    const handleSubmit = async ( e ) => {

        e.preventDefault();

        // console.log( email, feedback );
        // console.log(); show the correct email and feedback

        // we could add some error handling here in the case where the user did not fill in the
        // email input field and / or the text area box but I will not do this here since it's
        // not the focus of this section

        // next we need to send the email and feedback key value pairs to the feedback api route
        // so that we can save the user's feedback in a database

        // ==============================
        // frontend validation
        // ==============================

        // everytime we submit the form we need to clear out any prior error messages
        setFrontendErrorMessage( '' );

        // front end validation
        if ( email === '' || feedback === '' ) {

            // if the user did not enter the required information in the email and / or
            // feedback fields then set a new error message
            setFrontendErrorMessage( 'All fields must be filled out in order to save your feedback to the database. Please try again.' );

            // exit the funtion at this point in the code
            return;
    
        } // end of if

        // ==============================
        // fetch API
        // ==============================

        // we want to send an http request when the form is submitted 

        // STEP 1
        // create our endpoint
        const endpoint = `/api/feedback/feedback_get`;

        // create our data object
        const reqBody = { email : email, feedback : feedback }

        // create our config object
        // remember that as presently configured below, the config object will not work inside
        // the fetch request below
        /*
        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        };
        */

        // STEP 2
        // make the fetch request and save the result to the const called res
        const res = await fetch(
            endpoint,
            {
                method : 'GET',
                // body   : JSON.stringify( reqBody ),
                // headers : {
                    // 'Content-Type' : 'application/json'
                // }
            }
        );

        // STEP 3
        // first, check to see if there is a request error
        if ( !res.ok ) {

            // set the error message
            setFrontendErrorMessage( `Something went wrong. Please close this message to go back to the home page.` );

        } else {

            // STEP 4
            // the fetch request above returns a response object and then we can apply the
            // json(); method to the reponse object and this will convert the response
            // object into a JavaScript object that we can use and we will call this JavaScript
            // object " data " and the data object in this case is the response we get back from
            // the api route
            const data = await res.json();

            // STEP 5
            // console.log data for the moment
            console.log( data );

            // STEP 6
            // reset the component state
            setEmail( '' );
            setFeedback( '' );
            setFrontendErrorMessage( '' );

        }

        // ==============================
        // end of fetch API
        // ==============================

    } // end of handleSubmit


    return (

        <Fragment>

            {

                frontendErrorMessage ? (

                    <ErrorMessage                    
                        setFrontendErrorMessage={ setFrontendErrorMessage }
                    >
                        { frontendErrorMessage }
                    </ErrorMessage>

                ) : (

                    <div className={ styles.homePageContainer }>

                        { /* div 1 */ }
                        <div className={ styles.homePageContainerImageContainer }>
                        
                            <h2 className={ styles.homePageContainerImageContainerH2 }>Home Page</h2>
                        
                        </div>

                        { /* div 2 */ }
                        <div className={ styles.homePageContainerContentContainer1 }>

                            <form className={ styles.homePageContainerContentContainer1Form } noValidate="novalidate" onSubmit={ handleSubmit } >

                                { /* input field - email */ }
                                <div className={ styles.homePageContainerContentContainer1FormEmailInputContainer }>
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
                                            styles.homePageContainerContentContainer1FormEmailInputContainerLabel :
                                            styles.homePageContainerContentContainer1FormEmailInputContainerLabelShrink
                                        }
                                    >
                                        Email address
                                    </label>
                                </div>

                                { /* input field - feedback */ }
                                <div className={ styles.homePageContainerContentContainer1FormFeedbackTextAreaContainer }>
                                    <textarea
                                        name="feedback"
                                        type="textarea"
                                        id="feedback"
                                        rows="5"
                                        value={ feedback }
                                        onChange={ (e) => setFeedback( e.target.value ) }
                                    />
                                    <label
                                        htmlFor="feedback" // htmlFor equals the id value
                                        className={

                                            feedback === '' ? 
                                            styles.homePageContainerContentContainer1FormFeedbackTextAreaContainerLabel :
                                            styles.homePageContainerContentContainer1FormFeedbackTextAreaContainerLabelShrink

                                        }
                                    >
                                        Provide your feedback here
                                    </label>
                                </div>

                                { /*  submit button  */ }
                                <div className={ styles.homePageContainerContentContainer1FormButtonContainer }>

                                    <button
                                        type="submit"
                                        className={ styles.homePageContainerContentContainer1FormButtonContainerButton }
                                    >
                                        Submit Feedback
                                    </button>
                        
                                </div>

                            </form>

                        </div>            

                        <style jsx global>
                            {`
                                // remember "We (i.e. next.js) bundle styled-jsx to provide support for isolated scoped CSS."
                                main {

                                    height : 1240px; // this is #3

                                }
                                nav {

                                    z-index : 1; // lay the header nav elements on top of the hero image element

                                }
                                footer {

                                    z-index    : 0; // we did not have to change the z-index for the footer since the
                                    // footer element appears later in the code
                                    background : sienna;

                                }
                                footer > h2,
                                footer > div > span {

                                    color : rgba( 255, 255, 255, 1 ) !important; // change the footer text color to white
                        
                                }
                                footer > div > a {

                                    color           : rgba( 255, 255, 255, 1 ) !important; // change the footer text color to white
                                    text-decoration : underline;  // underline " About " 
                        
                                }
                                @media all and ( max-width : 1280px ) {

                                    body > div > div > main {

                                        height : 2290px; !important; // this is #3
                
                                    }

                                    body > div > div > header > nav > div:nth-child( 1 ) {

                                        margin : 1.5rem 0 1.0rem 0 !important; // provide spacing between logo and nav elements on
                                        // small screen sizes
                                
                                    }

                                }
                                @media all and ( max-width : 920px ) {

                                    body > div > div > main {

                                        height : 2190px; !important; // this is #3
                
                                    }

                                }
                                @media all and ( max-width : 768px ) {

                                    body > div > div > main {

                                        height : 1940px; !important; // this is #3
                
                                    }

                                }
                                @media all and ( max-width : 620px ) {

                                    body > div > div > main {

                                        height : 1740px; !important; // this is #3
                
                                    }

                                }
                                @media all and ( max-width : 480px ) {

                                    body > div > div > main {

                                        height : 1440px; !important; // this is #3
                
                                    }

                                }
                            `}
                        </style>

                    </div>

                )

            }

        </Fragment>

    );

}






