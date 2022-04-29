

// the function below will handle incoming requests sent to 
// " localhost:3016/api/feedback/feedback_get " and inside the function we can execute
// server side code and any code we write inside this function will never end up in
// any client side code bundle 

// import in the file system node.js module
import fs from 'fs';
// import in the path module
import path from 'path';


// req = HTTP incoming message, res = HTTP server response
export default async function handler( req, res ) {

    // in this function we want to accept an income request with the email and feedback data
    // and in this case we do not want to verify that the request is coming from an authenticated
    // user and then we want to store the email and feedback data somewhere, like a database or
    // in a file and then return some json data to the browser as part of the server response

    // ==============================
    // Check request type
    // ==============================

    // check for the request type
    if ( req.method !== 'GET' ) {

        // exit the funtion at this point in the code
        return;

    }

    // ==============================
    // Request type correct - proceed forward
    // ==============================

    // and to work with the file system we will need to import in the fs module and the
    // path module

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
    // Send back a response
    // ==============================

    // " The HTTP 200 OK success status response code indicates that the request has
    // succeeded. "
    res.status( 200 );

    // and then send back to the browser as part of the server response an object
    // and use the json data transfer format and remember the object below will be
    // transformed into json automatically
    res.json( { fileData : data } );

    // close the database connection
    client.close();

    // exit the funtion at this point in the code
    return;

} // end of handler

// now let's go to the pages/section-8/index.js 2 - file





