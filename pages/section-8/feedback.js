

// we want to pre fetch the data for this page and pre render this page and to do that
// let's use getStaticProps

// for the purposes of this lecture, I added another object to the feedback.json file or

/*
    [
        {"id":"2021-11-30T00:48:40.091Z","email":"john@example.com","feedback":"Yes"},
        {"id":"2021-12-002T00:48:40.091Z","email":"sally@example.com","feedback":"Sandy Lots"}
    ]
*/

// and we can test this out by mapping through the fileData array below and this results in:

/*
    Yes
    Sandy Lots
*/

// and this is correct so everything is working as expected

// and if we view the page source we see:

/*
    <ul>
        <li class="feedback_feedbackPageContainerListItem__AFf0E">Yes</li>
        <li class="feedback_feedbackPageContainerListItem__AFf0E">Sandy Lots</li>
    </ul>
*/

// and this is correct so everything is working as expected


// import in the file system node.js module
import fs from 'fs';
// import in the path module
import path from 'path';
// import in the scss file
import styles from './feedback.module.scss';


// 1 -

// now we want to send a request to the [ feedback ].js api route and then fetch the details
// for a single feedback item

// import in the Fragment component and the useState(); hook
import { Fragment, useState } from 'react';

// import in the ErrorMessage component ( we'll use the sign in page error message component
// in this component )
import ErrorMessage from '../../components/error-message/em-signin-page';

// End of 1 -


export default function FeedbackPage( { fileData } ) {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed


    // 1 -

    // set component level state
    const [ frontendErrorMessage, setFrontendErrorMessage ] = useState( '' );

    // End of 1 -


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
    // frontend validation
    // ==============================


    // 1 -

    // ==============================
    // fetchFeedbackItem function
    // ==============================

    // pass in the fileDataItem.id or id as an argument to the fetchFeedbackItem function
    const fetchFeedbackItem = async ( id ) => {

        // ==============================
        // fetch API
        // ==============================

        // we want to send an http request when we click on the button below and then fetch the
        // specific feedback item that is associated with the id

        // STEP 1
        // create our endpoint
        const endpoint = `/api/feedback/${ id }`;

        // create our data object
        // const reqBody = { email : email, feedback : feedback }

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
                method : 'GET'//,
                // body   : JSON.stringify( reqBody ),
                // headers : {
                    // 'Content-Type' : 'application/json'
                // }
            }
        )

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

            // if we click on the first button below, we see the following in the console:

            /*
                selectedFeedbackItem:
                    email: "john@example.com"
                    feedback: "Yes"
                    id: "2021-11-30T00:48:40.091Z"
                    [[Prototype]]: Object
            */

            // and this is correct so everything is working as expected

            // STEP 6
            // reset the component state
            setFrontendErrorMessage( '' );

        }

        // ==============================
        // end of fetch API
        // ==============================

    } // end of fetchFeedbackItem

    // create the show feedback item button below

    // we will use bind to pre configure the fetchFeedbackItem function for future
    // execution and bind allows us to pre configure parameter values for future
    // execution

    // the first argument we pass to bind is a value for the this keyword and the
    // second argument we pass to bind is the fileDataItem id

    // End of 1 -


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

                    <div className={ styles.feedbackPageContainer }>

                        <ul>

                            {
                            
                                fileData.map( ( fileDataItem ) => (
                                    
                                    <li
                                        key={ fileDataItem.id }
                                        className={ styles.feedbackPageContainerListItem }
                                    >
                                        { fileDataItem.feedback }

                                        { /*  show feedback item button  */ }
                                        <div className={ styles.feedbackPageContainerButtonContainer }>

                                            <button
                                                onClick={ () => fetchFeedbackItem( fileDataItem.id ) }
                                                className={ styles.feedbackPageContainerButtonContainerButton }
                                            >
                                                Show feedback item
                                            </button>

                                        </div>

                                    </li>

                                ) )

                            }

                        </ul>
                    
                    </div>

                )

            }

        </Fragment>

    );

}


// ==============================
// getStaticProps
// ==============================

export async function getStaticProps( context ) {

    // in this function we want to fetch some data and we can either use fetch or
    // axios below; however,

    // ==============================
    // Remember the endpoint has to be an external API
    // ==============================

    // we should not use fetch inside getStaticProps or getServerSideProps to talk to our
    // own API; however, we can use fetch inside getStaticProps or getServerSideProps
    // to communicate with external APIs

    // remember internal APIs are part of the project so we need to write the api logic
    // inside getStaticProps or getServerSideProps

    // ==============================
    // Embed api / server side logic inside getStaticProps / getServerSideProps
    // ==============================

    // this logic comes from the api/feedback/feedback_get.js file

    // ==============================
    // API logic starts here
    // ==============================

    /*
    // ==============================
    // Check request type
    // ==============================

    // check for the request type
    if ( req.method !== 'GET' ) {

        // exit the funtion at this point in the code
        return;

    }
    */

    // ==============================
    // Request type correct - proceed forward
    // ==============================

    // to work with the file system we need to import in the fs module and the path module

    // ==============================
    // Create the file path
    // ==============================

    // process.cwd() gives us the current working directory or the project root folder or
    // " /Applications/MAMP/htdocs/stoneburyhomes/misc/max_s/next_pages_project "

    // remember " path.join( process.cwd(), 'data', 'feedback.json' ); " gives us
    // " /Applications/MAMP/htdocs/stoneburyhomes/misc/max_s/next_pages_project/data/feedback.json "
    const filePath = path.join( process.cwd(), 'data', 'feedback.json' );

    // ==============================
    // Retrieve the data strored in the feedback.json file
    // ==============================

    // read the file and retrieve the data that is currently stored in the file and save it to
    // the const " fileData "
    const fileData = fs.readFileSync( filePath );

    // fileData will be in the json format so let's convert the json data into a usable
    // JavaScript object by using the JSON.parse(); method and save the result to the const
    // " data "
    const data = JSON.parse( fileData );

    // ==============================
    // return an object
    // ==============================

    // then do the following to make the fileData array available throughout the application
    return {

        props : {
            fileData : data
        }

    };

    // and now we can use destructuring above to pass in the data or fileData array to the page
    // component

} // end of getStaticProps


