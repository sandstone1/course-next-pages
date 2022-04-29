

// import in the useState hook
import { Fragment, useState } from 'react';
// import in the ErrorMessage component ( we'll use the sign in page error message component
// in this component )
import ErrorMessage from '../../components/error-message/em-signin-page';
// import in the scss file
import styles from './newsletter-registration.module.scss';


export default function NewsletterRegistration() {

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
    // useRef();
    // ==============================

    // ==============================
    // useSession();
    // ==============================

    // ==============================
    // initialize the context
    // ==============================

    // ==============================
    // useEffect hook
    // ==============================

    // ==============================
    // handleSubmit function
    // ==============================

    const handleSubmit = ( e ) => {

        // since we're submitting a form, make sure we prevent the default browser behavior
        e.preventDefault();
    
        // next we need to send the email, name and feedback key value pairs to the feedback api
        // route so that we can save the user's feedback in a database

        // ==============================
        // frontend validation
        // ==============================

        // everytime we submit the form we need to clear out any prior error messages
        setFrontendErrorMessage( '' );

        // front end validation
        if ( email === '' ) {

            // if the user did not enter the required information in the email, name and / or
            // feedback fields then set a new error message
            setFrontendErrorMessage( 'The email field must be filled out in order to save your information to the database. Please try again.' );

            // exit the funtion at this point in the code
            return;
    
        } // end of if

        // ==============================
        // fetch API
        // ==============================





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

                    <div className={ styles.newsletterRegistrationContainer }>

                        <h2 className={ styles.newsletterRegistrationContainerH2 }>Sign up to stay updated!</h2>

                        <form className={ styles.newsletterRegistrationContainerForm } noValidate="novalidate" onSubmit={ handleSubmit } >

                            { /* input field - email */ }
                            <div className={ styles.newsletterRegistrationContainerFormEmailInputContainer }>
                                <input
                                    name="email"
                                    type="email"
                                    id="email"
                                    required
                                    value={ email }
                                    onChange={ (e) => setEmail( e.target.value ) }
                                />
                                <label
                                    htmlFor="email"
                                    className={

                                        email === '' ? 
                                        styles.newsletterRegistrationContainerFormEmailInputContainerLabel :
                                        styles.newsletterRegistrationContainerFormEmailInputContainerLabelShrink
                                    }
                                >
                                    Enter email address
                                </label>
                            </div>

                            { /*  submit button  */ }
                            <div className={ styles.newsletterRegistrationContainerFormButtonContainer }>

                                <button
                                    type="submit"
                                    className={ styles.newsletterRegistrationContainerFormButtonContainerButton }
                                >
                                    Register
                                </button>

                            </div>

                        </form>            

                    </div>

                )

            }

        </Fragment>

    );

}


