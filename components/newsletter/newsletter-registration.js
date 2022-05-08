

// at the beginning of lecture 152, given all the notes, I created a new file below without
// the notes so we are starting fresh

// when we click on the submit button we want to store the user email in a database somewhere
// and remember we shouldn't talk to a database from the front end of our application since
// that would be highly insecure

// so here we fetching the user input on the front end and then once the user clicks the
// submit button we send a request to the api route and then inside the api route we
// connect to a database and then store the user's email address in a collection called
// " newsletter registration "

// and remember the code inside the api route will not be exposed to the website visitors
// or the front end

// since we are building a form we will need to use the useState(); hook
import { Fragment, useState } from 'react';
// import in the ErrorMessage component
import ErrorMessageNewsletterComponent from '../../components/error-message/em-newsletter-component';
// import in the SuccessMessage component
import SuccessMessageNewsletterComponent from '../../components/success-message/sm-newsletter-component';
// import in the SpinnerBounceDark component
import SpinnerBounceDark from '../../components/spinner/spinner-bounce-dark';
// import in the scss file
import styles from './newsletter-registration.module.scss';


export default function NewsletterRegistrationComponent() {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed

    // set component level state
    const [ email, setEmail ]                                   = useState( '' );
    const [ isLoading, setIsLoading ]                           = useState( false );
    const [ frontendErrorMessage, setFrontendErrorMessage ]     = useState( '' );
    const [ frontendSuccessMessage, setFrontendSuccessMessage ] = useState( '' );

    // console.log the frontErrorMessage
    // console.log( frontendErrorMessage );

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

        // prevent the default browser behavior
        e.preventDefault();

        // ==============================
        // frontend validation
        // ==============================

        // front end validation
        if ( email === '' ) {

            // if the user did not enter the required information in the email field then set
            // a new error message
            setFrontendErrorMessage( 'The email field needs to be filled out in order to sign up for the newsletter. Please try again.' );

            // exit the funtion at this point in the code
            return;
    
        } // end of if

        /*
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
        
        if ( !validateEmail( email ) ) {

            // if the email is not valid then set the error message
            setFrontendErrorMessage( 'Your email is not valid. Please try again.' );

            // exit the funtion at this point in the code
            return;

        } // end of if
        */

        // ==============================
        // fetch API
        // ==============================

        // next we need to send the email key value pair to the newsletter api route so that
        // we can save the user's email address in a database

        // we want to send an http request when the form is submitted

        // STEP 1
        // initially, isLoading is set to true
    
        // remember we use the isLoading state primarily when we are communicating with the
        // database from the frontend since there may be a short delay between the time a
        // user makes a request ( i.e. sign up for the newsletter in this case ) to the time
        // the request has successfully completed
        setIsLoading( true );

        // STEP 2
        // create our endpoint
        const endpoint = `/api/newsletter/newsletter-registration-post`;

        // create our data object

        // create our config object

        // STEP 3
        // make the fetch request and save the result to the const called res
        const res = await fetch(
            endpoint,
            // include the config object
            {
                method : 'POST',
                body   : JSON.stringify(
                    {
                        email : email
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
            setEmail( '' );

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
            setEmail( '' );

        }

        // ==============================
        // end of fetch API
        // ==============================

    } // end of handleSubmit

    return (

        <Fragment>

            {

                isLoading ? (

                    <SpinnerBounceDark />

                ) : frontendErrorMessage ? (

                    <ErrorMessageNewsletterComponent                    
                        resetFrontendErrorMessage={ () => setFrontendErrorMessage( '' ) }
                    >
                        { frontendErrorMessage }
                    </ErrorMessageNewsletterComponent>

                ) : frontendSuccessMessage ? (

                    <SuccessMessageNewsletterComponent                    
                        resetFrontendSuccessMessage={ () => setFrontendSuccessMessage( '' ) }
                    >
                        { frontendSuccessMessage }
                    </SuccessMessageNewsletterComponent>

                ) : (

                    <div className={ styles.newsletterContainer }>

                        { /* div 1 */ }
                        <div className={ styles.newsletterContainerHeading }>
                        
                            <h2 className={ styles.newsletterContainerHeadingH2 }>Register for our newsletter!</h2>

                        </div>

                        { /* div 2 */ }
                        <div className={ styles.newsletterContainerContentContainer1 }>

                            <form className={ styles.newsletterContainerContentContainer1Form } noValidate="novalidate" onSubmit={ handleSubmit } >

                                { /* input field - email */ }
                                <div className={ styles.newsletterContainerContentContainer1FormEmailInputContainer }>
                                    <input
                                        name="email"
                                        type="email"
                                        id="newsletter-registration-email"
                                        required
                                        value={ email }
                                        onChange={ (e) => setEmail( e.target.value ) }
                                    />                        
                                    <label
                                        htmlFor="newsletter-registration-email"
                                        className={

                                            email === '' ? 
                                            styles.newsletterContainerContentContainer1FormEmailInputContainerLabel :
                                            styles.newsletterContainerContentContainer1FormEmailInputContainerLabelShrink
                                        }
                                    >
                                        Please enter your email address
                                    </label>
                                </div>

                                { /*  submit button  */ }
                                <div className={ styles.newsletterContainerContentContainer1FormButtonContainer }>

                                    <button
                                        type="submit"
                                        className={ styles.newsletterContainerContentContainer1FormButtonContainerButton }
                                    >
                                        Register
                                    </button>
                        
                                </div>

                            </form>

                        </div>            

                    </div>

                )

            }

        </Fragment>

    );

} // end of NewsletterListComponent
