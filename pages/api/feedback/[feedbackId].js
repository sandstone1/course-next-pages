

// the function below will handle incoming requests sent to 
// " localhost:3016/api/feedback/[feedbackId] " and inside the function we can execute
// server side code and any code we write inside this function will never end up in
// any client side code bundle 

// import in the file system node.js module
import fs from 'fs';
// import in the path module
import path from 'path';


// req = HTTP incoming message, res = HTTP server response
export default async function handler( req, res ) {

    // in this function we want to accept an incoming request and in this case we do not want
    // to verify that the request is coming from an authenticated user
    
    // next, we want to retrieve the item associated with the dynamic route parameter and we
    // will retrieve that item from the data/feedback.json file and then return some json data
    // to the browser as part of the server response

    // ==============================
    // Check request type
    // ==============================

    // check for the request type
    if ( req.method !== 'GET' ) {

        // exit the funtion at this point in the code
        return;

    }

    // remember we could check for a delete request and then delete that piece of data from
    // the database, for example

    // check for the request type
    if ( req.method === 'DELETE' ) {

        // delete item from database

        // exit the funtion at this point in the code
        return;

    }

    // ==============================
    // Request type correct - proceed forward
    // ==============================

    // and to work with the file system we will need to import in the fs module and the
    // path module

    // ==============================
    // Retrieve the dynamic route parameter
    // ==============================

    // use req to get access to the dynamic path segment and remember req.body gives us access
    // to the submitted data and req.method gives us access to the type of request and
    // req.query gives us access to query parameters

    // retrieve the dynamic route parameter
    const feedbackId = req.query.feedbackId;

    // now we can use this dynamic route parameter or feedbackId to retrieve a specific
    // feedback item and we will use the find() method to do so but first we need to retrieve
    // all the data in the feedback.json file

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

    // read the file and this gives us the const " fileData " or the data that is currently
    // stored in that file

    // remember the data stored in the feedback.json file is
    // " [{"id":"2021-11-30T00:48:40.091Z","email":"john@example.com","feedback":"Yes"}] "
    const fileData = fs.readFileSync( filePath );

    // fileData will be json data so let's convert the json data into a usable JavaScript
    // object by using the JSON.parse(); method and save the result to the const " data "
    const data = JSON.parse( fileData );

    // ==============================
    // Retrieve a specific piece of data
    // ==============================

    // use the find() method to retrieve a specific piece of data and then save this piece of
    // data to the const selectedFeedbackItem
    const selectedFeedbackItem = data.find( ( dataItem ) => (

        dataItem.id === feedbackId

    ) );

    // ==============================
    // Send back a response
    // ==============================

    // " The HTTP 200 OK success status response code indicates that the request has
    // succeeded. "
    res.status( 200 );

    // and then send back to the browser as part of the server response an object
    // and use the json data transfer format and remember the object below will be
    // transformed into json automatically
    res.json( { selectedFeedbackItem : selectedFeedbackItem } );

    // exit the funtion at this point in the code
    return;

} // end of handler

// now let's go to the pages/section-8/feedback.js 1 - file


