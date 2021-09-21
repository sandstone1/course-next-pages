

// import in the useRef(); hook
import { useRef } from 'react';
// import in the useRouter(); hook
import { useRouter } from 'next/router';
// import in Font Awesome
import { FaTimesCircle } from 'react-icons/fa';
// import in our stylesheet
import styles from './sm-register-page.module.scss';


// remember to destructure off the children prop in the argument below since we will
// wrap our message with the code below or the SuccessMessage component and the children
// inside the code below represents our success message
const SuccessMessage = ( { children, setFrontendSuccessMessage, onClose } ) => {

    // ==============================
    // useRouter();
    // ==============================

    // initialize router
    const router = useRouter();

    // ==============================
    // create DOM reference
    // ==============================

    // STEP 1

    // use the useRef(); hook to create a reference to a DOM element and let's start by
    // initializing a useRef variable and we will call this variable
    // " successMessageContainerRef "
    const successMessageContainerRef = useRef();

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

        // erase the success message upon clicking the x font icon in the top right corner
        // and remember we have to use " .current " in order to access the referenced element
        // and after we access the referenced element we can then apply the style object
        // or { display : none }
        successMessageContainerRef.current.style.display = 'none';

        // End of STEP 3

        // after closing the success message, redirect the user to the home page
        router.push( '/' );

        // after closing the success message, reset the state
        setFrontendSuccessMessage( '' );

        // after closing the success message, reset the userRegisterSuccess to false and we can
        // do that by calling onClose(); in this component and this will call the onClose
        // function in the register.js file and thereby reset the userRegisterSuccess to false
        onClose();

    } // end of handleClick


    return (

        // ==============================
        // create DOM reference
        // ==============================

        // STEP 2 ( see below )

        // tie the initialized useRef variable from above into a specific DOM element so that we can
        // reference that DOM element in our code

        <div 
            className={ styles.successMessageContainer }
            ref={ successMessageContainerRef }
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

export default SuccessMessage;
