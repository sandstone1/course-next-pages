

// when we click on the submit button we want to store the user name, email and comment in
// a database and remember we shouldn't talk to a database from the front end of our
// application since that would be highly insecure

// so here we fetching the user input on the front end and then once the user clicks the
// submit button we send a request to the api route and then inside the api route we
// connect to a database and then store the user's name, email and comment in a collection
// called " comments "

// and remember the code inside the api route will not be exposed to the website visitors
// or the front end

// since we are building a form we will need to use the useState(); hook
import { Fragment, useCallback, useEffect, useState } from 'react';
// import in the ErrorMessage component
import ErrorMessageComponent from '../../components/error-message/em-comment-component';
// import in the SuccessMessage component
import SuccessMessageComponent from '../../components/success-message/sm-comment-component';
// import in the SpinnerCircleDark component
import SpinnerCircleDark from '../../components/spinner/spinner-circle-dark';
// import in the Comments icon
import { FaComments } from 'react-icons/fa';
// import in the scss file
import styles from './comment-get-post.module.scss';


export default function CommentGetandPostComponent( { eventId } ) {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed

    // set component level state
    const [ name, setName ]                                     = useState( '' );
    const [ email, setEmail ]                                   = useState( '' );
    const [ comment, setComment ]                               = useState( '' );
    const [ commentList, setCommentList ]                       = useState( [] );
    const [ showComments, setShowComments ]                     = useState( false );
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
    // useCallback();
    // ==============================

    // when I had the code below inside the useEffect(); hook I was getting an error that said:
    // " Warning: Can't perform a React state update on an unmounted component. This is a
    // no-op, but it indicates a memory leak in your application. To fix, cancel all
    // subscriptions and asynchronous tasks in a useEffect cleanup function. "

    // and to fix this error I had to pull the code out of the useEffect(); hook and use the
    // the useCallback(); hook instead

    // from " https://stackoverflow.com/questions/53332321/react-hook-warnings-for-async-function-in-useeffect-useeffect-function-must-ret "
    // "Longer term we'll discourage this pattern because it encourages race conditions.
    // Such as — anything could happen between your call starts and ends, and you could
    // have gotten new props. Instead, we'll recommend Suspense for data fetching which
    // will look more like:

    // const response = MyAPIResource.read();

    // and no effects. But in the meantime you can move the async stuff to a separate function
    // and call it. " and this is what I have done below

    // from prior notes: " the useCallback(); hook caches our handleClickOutside function
    // and it allows us to call the handleClickOutside function inside the useEffect(); hook
    // and do so without running into any issues "
    const fetchCommentData = useCallback( async () => {

        // ==============================
        // fetch API
        // ==============================

        // next we will get all the comments from the database

        // we want to retrieve this information when the page loads

        // STEP 1    
        // no need to set the isLoading state in this case
        // setIsLoading( true );

        // STEP 2
        // create our endpoint
        const endpoint = `/api/comments/${ eventId }`;

        // create our data object

        // create our config object

        // STEP 3
        // make the fetch request and save the result to the const called res
        const res = await fetch(
            endpoint,
            // include the config object
            {
                method : 'GET'
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
            // set the error message
            setFrontendErrorMessage( data.message );

        } else {

            // STEP 5(a)
            // the fetch request above returns a response object and then we can apply the
            // json(); method to the reponse object and this will convert the response
            // object into a JavaScript object that we can use and we will call this JavaScript
            // object " data " and the data object in this case is the response we get back from
            // the api route
            const data = await res.json();

            // STEP 5(b)
            // update the commentList state
            setCommentList( data );

        }

        // ==============================
        // end of fetch API
        // ==============================

    }, [ eventId ] );

    // ==============================
    // useEffect();
    // ==============================

    useEffect( () => {

        if ( showComments ) {
            fetchCommentData();
        }

        // clean up function
        return () => {

        }

    }, [ commentList, showComments, fetchCommentData ] ); // end of useEffect();


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
        if ( name === '' || email === '' || comment === '' ) {

            // if the user did not enter the required information in the name, email or comments
            //field then set a new error message
            setFrontendErrorMessage( 'The name, email and comment fields needs to be filled out. Please try again.' );

            // exit the funtion at this point in the code
            return;
    
        } // end of if

        // ==============================
        // fetch API
        // ==============================

        // next we need to send the name, email and comment key value pairs to the comments
        // api route so that we can save this information in a database

        // we want to send an http request when the form is submitted

        // STEP 1
        // initially, isLoading is set to true
    
        // remember we use the isLoading state primarily when we are communicating with the
        // database from the frontend since there may be a short delay between the time from
        // when the request is made to the time from when the server response is returned
        setIsLoading( true );

        // STEP 2
        // create our endpoint
        const endpoint = `/api/comments/${ eventId }`;

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
                        name    : name,
                        email   : email,
                        comment : comment
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
            setName( '' );
            setEmail( '' );
            setComment( '' );

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
            setName( '' );
            setEmail( '' );
            setComment( '' );

        }

        // ==============================
        // end of fetch API
        // ==============================

    } // end of handleSubmit

    return (

        <Fragment>

            {

                isLoading ? (

                    // we had to add styles to the spinner component that were
                    // specific to this component and therefore we added the div
                    // and class name below
                    <div className={ styles.spinnerContainer }>

                        <SpinnerCircleDark />

                    </div>

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

                    <div className={ styles.commentContainer }>

                        { /*  div 1 - show / hide comments button  */ }
                        <div className={ styles.commentContainerDiv1ButtonContainer }>

                            <button
                                type="submit"
                                className={ styles.commentContainerDiv1ButtonContainerButton }
                                onClick={ () => setShowComments( !showComments ) }
                            >
                                {

                                    !showComments ? (
                                        
                                        <Fragment>
                                            <FaComments style={ { verticalAlign: '-5px', fontSize: '2.15rem' } } />
                                            &nbsp;&nbsp;&nbsp;Show Comments
                                        </Fragment>

                                    ) : (
                                        
                                        <Fragment>
                                            <FaComments style={ { verticalAlign: '-5px', fontSize: '2.15rem' } } />
                                            &nbsp;&nbsp;&nbsp;Hide Comments
                                        </Fragment>

                                    )
                                }
                            </button>
                
                        </div>

                        {

                            // if showComments is false then do not show the comments form or the
                            // user comments
                            !showComments ? null : (

                                /* div 2 - comment form container */
                                <div className={ styles.commentContainerDiv2 }>

                                    { /* div 2 - comment form container - heading */ }
                                    <div className={ styles.commentContainerDiv2Heading }>
                                    
                                        <h2 className={ styles.commentContainerDiv2HeadingH2 }>Add your comment below!</h2>
                                    
                                    </div>

                                    { /* div 2 - comment form container - comment form */ }
                                    <div className={ styles.commentContainerDiv2ContentContainer1 }>

                                        <form className={ styles.commentContainerDiv2ContentContainer1Form } noValidate="novalidate" onSubmit={ handleSubmit } >

                                            { /* input field - name */ }
                                            <div className={ styles.commentContainerDiv2ContentContainer1FormNameInputContainer }>
                                                <input
                                                    name="name"
                                                    type="name"
                                                    id="comment-name"
                                                    required
                                                    value={ name }
                                                    onChange={ (e) => setName( e.target.value ) }
                                                />           
                                                <label
                                                    htmlFor="comment-name"
                                                    className={

                                                        name === '' ? 
                                                        styles.commentContainerDiv2ContentContainer1FormNameInputContainerLabel :
                                                        styles.commentContainerDiv2ContentContainer1FormNameInputContainerLabelShrink
                                                    }
                                                >
                                                    Name
                                                </label>
                                            </div>

                                            { /* input field - email */ }
                                            <div className={ styles.commentContainerDiv2ContentContainer1FormEmailInputContainer }>
                                                <input
                                                    name="email"
                                                    type="email"
                                                    id="comment-email"
                                                    required
                                                    value={ email }
                                                    onChange={ (e) => setEmail( e.target.value ) }
                                                />                        
                                                <label
                                                    htmlFor="comment-email"
                                                    className={

                                                        email === '' ? 
                                                        styles.commentContainerDiv2ContentContainer1FormEmailInputContainerLabel :
                                                        styles.commentContainerDiv2ContentContainer1FormEmailInputContainerLabelShrink
                                                    }
                                                >
                                                    Email address
                                                </label>
                                            </div>

                                            { /* text area field - comment */ }
                                            <div className={ styles.commentContainerDiv2ContentContainer1FormCommentTextAreaContainer }>
                                                <textarea
                                                    name="comment"
                                                    type="textarea"
                                                    id="comment"
                                                    rows="5"
                                                    value={ comment }
                                                    onChange={ (e) => setComment( e.target.value ) }
                                                />
                                                <label
                                                    htmlFor="comment" // htmlFor equals the id value
                                                    className={

                                                        comment === '' ? 
                                                        styles.commentContainerDiv2ContentContainer1FormCommentTextAreaContainerLabel :
                                                        styles.commentContainerDiv2ContentContainer1FormCommentTextAreaContainerLabelShrink

                                                    }
                                                >
                                                    Provide your comment here
                                                </label>
                                            </div>

                                            { /*  submit button  */ }
                                            <div className={ styles.commentContainerDiv2ContentContainer1FormButtonContainer }>

                                                <button
                                                    type="submit"
                                                    className={ styles.commentContainerDiv2ContentContainer1FormButtonContainerButton }
                                                >
                                                    Add your comment
                                                </button>
                                    
                                            </div>

                                        </form>

                                    </div>

                                </div> // end of commentContainerDiv2

                            )

                        }

                        {

                            // if showComments is false then do not show the comments form or the
                            // user comments                        
                            !showComments ? null : (

                                /* div 3 - comment container */
                                <div className={ styles.commentContainerDiv3 }>

                                    { /* div 3 - comment container - heading */ }
                                    <div className={ styles.commentContainerDiv3Heading }>
                                    
                                        { 
                                            commentList.length === 0 ? null : <h2 className={ styles.commentContainerDiv3HeadingH2 }>Previous comments</h2>

                                        }
                                    
                                    </div>

                                    { /* div 3 - comment container - comment list */ }
                                    <div className={ styles.commentContainerDiv3ContentContainer1 }>

                                        <ul>

                                            {                                            
                                                commentList.map( ( comment ) => (

                                                    <li
                                                        key={ comment._id }
                                                    >
                                                        { comment.comment }
                                                        <div>By { comment.name }</div>
                                                    </li>

                                                ) )

                                            }

                                        </ul>

                                    </div>

                                </div> // end of commentContainerDiv3

                            )

                        }

                    </div> // end of commentContainer

                )

            }

        </Fragment>

    );

} // end of commentGetandPostComponent

