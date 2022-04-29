

// import in the useRef(); hook
import { useRef } from 'react';
// import in the useRouter hook to get access to the route parameter
import { useRouter } from 'next/router';
// import in Font Awesome
import { FaTimesCircle } from 'react-icons/fa';
// import in our stylesheet
import styles from './em-user-list-page.module.scss';


// remember to destructure off the children prop in the argument below since we will
// wrap our message with the code below or the ErrorMessage component and the children
// inside the code below represents our error message
const ErrorMessage = ( { children } ) => {

    // ==============================
    // useRouter();
    // ==============================

    // get the router object and router.query.routeParameterName gives us access to the
    // route parameter value and then use that route parameter value to reach out to a
    // database and fetch a piece of data
    const router = useRouter();

    // ==============================
    // create DOM reference
    // ==============================

    // STEP 1

    // use the useRef(); hook to create a reference to a DOM element and let's start by
    // initializing a useRef variable and we will call this variable
    // " errorMessageContainerRef "
    const errorMessageContainerRef = useRef();

    // End of STEP 1

    // ==============================
    // handleClick function
    // ==============================

    const handleClick = ( e ) => {

        // ==============================
        // create DOM reference
        // ==============================

        // STEP 3

        // reference the specified DOM element below

        // erase the error message upon clicking the x font icon in the top right corner
        // and remember we have to use " .current " in order to access the referenced element
        // and after we access the referenced element we can then apply the style object
        // or { display : none }
        errorMessageContainerRef.current.style.display = 'none';

        // End of STEP 3

        // after closing the error message, push the user back to the home page
        router.push( '/' );

    } // end of handleClick


    return (

        // ==============================
        // create DOM reference
        // ==============================

        // STEP 2 ( see below )

        // tie the initialized useRef variable from above into a specific DOM element so that we can
        // reference that DOM element in our code

        <div 
            className={ styles.errorMessageContainer }
            ref={ errorMessageContainerRef }
        >

            <h3>{ children }</h3>

            <span
                onClick={ handleClick }
            >
                <FaTimesCircle />
            </span>

        </div>

    );

}

export default ErrorMessage;

