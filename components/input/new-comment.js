

// import in the useState hook
import { Fragment, useState } from 'react';
// import in the ErrorMessage component ( we'll use the sign in page error message component
// in this component )
import ErrorMessage from '../../components/error-message/em-signin-page';
// import in the scss file
import styles from './new-comment.module.scss';


export default function NewComment( { onAddComment } ) {

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
    const [ name, setName ]                                 = useState( '' );
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
    // handleSendComment function
    // ==============================

    const handleSendComment = ( e ) => {

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
        if ( email === '' || name === '' || feedback === '' ) {

            // if the user did not enter the required information in the email, name and / or
            // feedback fields then set a new error message
            setFrontendErrorMessage( 'All fields must be filled out in order to save your information to the database. Please try again.' );

            // exit the funtion at this point in the code
            return;
    
        } // end of if

        // ==============================
        // fetch API
        // ==============================





        // ==============================
        // end of fetch API
        // ==============================

    } // end of handleSendComment


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

                    <div className={ styles.newCommentContainer }>

                        <form className={ styles.newCommentContainerForm } noValidate="novalidate" onSubmit={ handleSendComment } >

                            { /* input field - email */ }
                            <div className={ styles.newCommentContainerFormEmailInputContainer }>
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
                                        styles.newCommentContainerFormEmailInputContainerLabel :
                                        styles.newCommentContainerFormEmailInputContainerLabelShrink
                                    }
                                >
                                    Email address
                                </label>
                            </div>

                            { /* input field - name */ }
                            <div className={ styles.newCommentContainerFormNameInputContainer }>
                                <input
                                    name="name"
                                    type="text"
                                    id="name"
                                    required
                                    value={ name }
                                    onChange={ (e) => setName( e.target.value ) }
                                />
                                <label
                                    htmlFor="name"
                                    className={

                                        name === '' ? 
                                        styles.newCommentContainerFormNameInputContainerLabel :
                                        styles.newCommentContainerFormNameInputContainerLabelShrink
                                    }
                                >
                                    Name
                                </label>
                            </div>

                            { /* input field - feedback */ }
                            <div className={ styles.newCommentContainerFormFeedbackTextAreaContainer }>
                                <textarea
                                    name="feedback"
                                    id="feedback"
                                    rows="5"
                                    value={ feedback }
                                    onChange={ (e) => setFeedback( e.target.value ) }
                                />
                                <label
                                    htmlFor="feedback" // htmlFor equals the id value
                                    className={

                                        feedback === '' ? 
                                        styles.newCommentContainerFormFeedbackTextAreaContainerLabel :
                                        styles.newCommentContainerFormFeedbackTextAreaContainerLabelShrink

                                    }
                                >
                                    Provide your feedback here
                                </label>
                            </div>

                            { /*  submit button  */ }
                            <div className={ styles.newCommentContainerFormButtonContainer }>

                                <button
                                    type="submit"
                                    className={ styles.newCommentContainerFormButtonContainerButton }
                                >
                                    Submit Feedback
                                </button>

                            </div>

                        </form>            

                    </div>

                )

            }

        </Fragment>

    );

}


