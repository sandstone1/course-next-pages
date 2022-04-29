
/*
// 1 -

// we will create a function called " handler " since this function will handle incoming
// requests and this function will get 2 parameters: a request object and a response
// object

// the function below will handle incoming requests sent to
// " localhost:3016/api/feedback/feedback " and inside the function we can execute
// server side code and any code we write inside this function will never end up in
// any client side code bundle 

// req = HTTP incoming message, res = HTTP server response
export default async function handler( req, res ) {

    // TEST
    const email        = req.body.email;
    const feedbackText = req.body.feedback;

    res.json( { email : email }, { feedback : feedbackText } );
    // END OF TEST

    // ==============================
    // Send back a response that contains an object
    // ==============================

    // 200 represents a successful request
    res.status( 200 );

    // and then send back to the browser as part of the server response an object
    // and use the json data transfer format and remember the object below will be
    // transformed into json automatically

    // so the response will not be a page nor will the reponse be an HTML reponse
    // instead the reponse will be some JSON data
    res.json( { message : 'This works!' } );

    // close the database connection
    client.close();

    // exit the funtion at this point in the code
    return;

} // end of handler


// now let's test this out by going to the following url:
// " http://localhost:3016/api/feedback/feedback " and when we arrive on this page
// we see the following text: " { message : "This works!" } " and this is correct so
// everything is working as expected

// and if we open the network tab inside Chrome dev tools we see the feedback line item
// and under the response tab we see

/*
    { "message" : "This works!" }
*/

// and under the headers tab we see

/*
    General
        Request URL     : http://localhost:3016/api/feedback/feedback
        Request Method  : GET
        Status Code     : 200 OK
        Remote Address  : [::1]:3016
        Referrer Policy : strict-origin-when-cross-origin

    Response Headers
        Connection     : keep-alive
        Content-Length : 25
        Content-Type   : application/json; charset=utf-8
        Date           : Sat, 27 Nov 2021 00:43:32 GMT
        ETag           : "19-Z+Jt2jCT4OWLXNdVegzrvQ59waM"
        Keep-Alive     : timeout=5
        Vary           : Accept-Encoding
*/

// and we see that the content-type is " application/json " and this is correct so everything
// is working as expected

// and api routes allow us to add features like newsletter signup, user feedback submission
// and comment submission

// End of 1 -



















// ===============================




















/*
// at the beginning of lecture 142, given all the notes, I created a new file below without
// the notes so we are starting fresh

// the function below will handle incoming requests sent to 
// " localhost:3016/api/feedback/feedback " and inside the function we can execute
// server side code and any code we write inside this function will never end up in
// any client side code bundle 


// 2 -

// import in the file system node.js module
import fs from 'fs';
// import in the path module
import path from 'path';


// End of 2 -


// req = HTTP incoming message, res = HTTP server response
export default async function handler( req, res ) {


    // 2 - continued

    // in this function we want to accept an income request with the email and feedback data
    // and in this case we do not want to verify that the request is coming from an authenticated
    // user and then we want to store the email and feedback data somewhere, like a database or
    // in a file and then return some json data to the browser as part of the server response


    // ==============================
    // Check request type
    // ==============================

    // check for the request type
    if ( req.method !== 'POST' ) {

        // exit the funtion at this point in the code
        return;

    }

    // ==============================
    // Request type correct - proceed forward
    // ==============================

    // ==============================
    // Extract data from incoming request
    // ==============================

    // let's extract data from the incoming request
    const email        = req.body.email;
    const feedbackText = req.body.feedback;

    // ==============================
    // Create a newFeedbackText object
    // ==============================

    // create a new feedback object to store in a database or in a file
    const newFeedbackText = {

        // to give us a unique id let's use " new Date().toISOString " and according to
        // w3schools.com: " The toISOString() method returns a date object as a string, using
        // the ISO standard. The standard is called ISO-8601 and the format is:
        // YYYY-MM-DDTHH:mm:ss.sssZ "

        // and according to Max, during development this is a good approach to creating a
        // unique ID
        id       : new Date().toISOString,
        email    : email,
        feedback : feedbackText

    };

    // and for the purposes of this tutorial we will store this object in a file and let's
    // create a new file inside the data folder called " feedback.json "

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

    // first we want to read the file in a synchronous manner and then fetch the data that
    // is in the file and then override that data with the updated data or the newFeedbackText
    // object that is located inside an array

    // to start, let's add an empty array or " [] " to the feedback.json file

    // ==============================
    // Retrieve the data strored in the feedback.json file
    // ==============================

    // read the file and this gives us the const " fileData " or the data that is currently
    // stored in that file
    const fileData = fs.readFileSync( filePath );

    // fileData will be json data so let's convert the json data into a usable JavaScript
    // object by using the JSON.parse(); method and save the result to the const " data "
    const data = JSON.parse( fileData );

    // remember " data " is an empty array and then we will interact with that array by
    // pushing the newFeedbackText object to the end of the array
    data.push( newFeedbackText );

    // ==============================
    // Store the newFeedbackText object in the feedback.json file
    // ==============================

    // then we want to write " data " back to the disk or to the feedback.json file
    // and inside fs.writeFileSync(); we want the first argument to be the filePath or
    // the feedback.json file and then we want the second argument to be the data that
    // we are writing to the file or to the feedback.json file and remember we have to
    // convert the " data " JavaScript object to json by using the JSON.stringify();
    // method
    fs.writeFileSync( filePath, JSON.stringify( data ) );

    // ==============================
    // Send back a response
    // ==============================

    // 201 " indicates that the request has succeeded and has led to the creation of a
    // resource "
    res.status( 201 );

    // and then send back to the browser as part of the server response an object
    // and use the json data transfer format and remember the object below will be
    // transformed into json automatically
    res.json( { message : 'Success!', feedback : newFeedbackText } );

    // close the database connection
    client.close();

    // exit the funtion at this point in the code
    return;

} // end of handler

// so now we have added some server side code to this api route using api specific features
// like looking into the request, extracting request body data, running server side code and
// sending a response back to the browser and with all this added we can now connect our
// front end code to our backend or to this api route

// and we can connect our front end code to our backend by sending a request from the front
// end to this api route or the " /api/feedback/feedback.js " route

// End of 2 -
*/




















// ===============================





















// at the beginning of lecture 143, given all the notes, I created a new file below without
// the notes so we are starting fresh

// the function below will handle incoming requests sent to 
// " localhost:3016/api/feedback/feedback " and inside the function we can execute
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
    if ( req.method !== 'POST' ) {

        // exit the funtion at this point in the code
        return;

    }

    // ==============================
    // Request type correct - proceed forward
    // ==============================

    // ==============================
    // Extract data from incoming request
    // ==============================

    // let's extract data from the incoming request
    const email        = req.body.email;
    const feedbackText = req.body.feedback;

    // ==============================
    // Create a newFeedbackText object
    // ==============================

    // create a new feedback object to store in a database or in a file
    const newFeedbackText = {

        // to give us a unique id let's use " new Date().toISOString " and according to
        // w3schools.com: " The toISOString() method returns a date object as a string, using
        // the ISO standard. The standard is called ISO-8601 and the format is:
        // YYYY-MM-DDTHH:mm:ss.sssZ "

        // and according to Max, during development this is a good approach to creating a
        // unique ID
        id       : new Date().toISOString(),
        email    : email,
        feedback : feedbackText

    };

    // and for the purposes of this tutorial we will store this object in a file and let's
    // create a new file inside the data folder called " feedback.json "

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

    // first we want to read the file in a synchronous manner and then fetch the data that
    // is in the file and then override that data with the updated data or the newFeedbackText
    // object that is located inside an array

    // to start, let's add an empty array or " [] " to the feedback.json file

    // ==============================
    // Retrieve the data strored in the feedback.json file
    // ==============================

    // read the file and this gives us the const " fileData " or the data that is currently
    // stored in that file
    const fileData = fs.readFileSync( filePath );

    // fileData will be json data so let's convert the json data into a usable JavaScript
    // object by using the JSON.parse(); method and save the result to the const " data "
    const data = JSON.parse( fileData );

    // remember " data " is an empty array and then we will interact with that array by
    // pushing the newFeedbackText object to the end of the array
    data.push( newFeedbackText );

    // ==============================
    // Store the newFeedbackText object in the feedback.json file
    // ==============================

    // then we want to write " data " back to the disk or to the feedback.json file
    // and inside fs.writeFileSync(); we want the first argument to be the filePath or
    // the feedback.json file and then we want the second argument to be the data that
    // we are writing to the file or to the feedback.json file and remember we have to
    // convert the " data " JavaScript object to json by using the JSON.stringify();
    // method
    fs.writeFileSync( filePath, JSON.stringify( data ) );

    // ==============================
    // Send back a response
    // ==============================

    // 201 " indicates that the request has succeeded and has led to the creation of a
    // resource "
    res.status( 201 );

    // and then send back to the browser as part of the server response an object
    // and use the json data transfer format and remember the object below will be
    // transformed into json automatically
    res.json( { message : 'Success!', feedback : newFeedbackText } );

    // close the database connection
    client.close();

    // exit the funtion at this point in the code
    return;

} // end of handler

// so now we have added some server side code to this api route using api specific features
// like looking into the request, extracting request body data, running server side code and
// sending a response back to the browser and with all this added we can now connect our
// front end code to our backend or to this api route

// and we can connect our front end code to our backend by sending a request from the front
// end to this api route or to the " /api/feedback/feedback.js " route


















/* // 1

// import in the getSession hook
import { getSession } from 'next-auth/react';
// import in the connectToDatabase function
import { connectToDatabase } from '../../../backend/config/db_mongodb';


// ==============================
// Require authentication and protect API route
// ==============================

// we want to get a list of all the users from the database and then return this
// information to the browser as part of the server response

// @desc    - GET all users
// @route   - GET request to /api/user/user-list-mongodb
// @access  - Private route

// to access this route the user needs 1 thing: the user needs authorization and
// authorization is determined based on having an active session or a valid session object

// req = HTTP incoming message, res = HTTP server response
export default async function handler( req, res ) {

    // in this function we want to get a list of all the users from the database and we
    // want to verify that the request is coming from an authenticated user and we want to
    // get the email address of that authenticated user and then we want to check the
    // database and see if the entered current password matches the password in the database
    // and if that is true then we want get a list of all the users from the database and then
    // return this information to the browser as part of the server response

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

    // ==============================
    // getSession and authenticate the user
    // ==============================

    // next we want to use the getSession(); hook and remember this hooks runs on the
    // client and the server and we want to check and see if we can get a session and
    // again we need to pass in a configuration object to the getSession(); hook and inside
    // the configuration object we will set req equal to the req argument from above

    // and getSession needs the req argument because getSession will look into the request
    // and see if a JWT is part of the request and remember the JWT will be located
    // inside a cookie and if the JWT is part of the request then getSession will validate
    // the JWT and extract the data from the JWT and if all this works as expected then
    // " getSession( { req : req } ); " will return a session object and we'll save that
    // session object to the const " session "

    const session = await getSession( { req : req } );

    // ==============================
    // If authentication fails
    // ==============================

    // if session equals null
    if ( !session ) {

        // send back a response with a status code of 401, which " indicates that the
        // request has not been applied because it lacks valid authentication credentials
        // for the target resource. "
        res.status( 401 ).json( { message : 'Not authenticated. Please try again.' } );

        // exit the funtion at this point in the code
        return;

    }

    // ==============================
    // Authentication successful - proceed forward
    // ==============================

    // ==============================
    // Connect to database
    // ==============================

    // get client
    const client = await connectToDatabase();

    // connect to the database and then save the result to the const " db "
    const db = client.db();

    // ==============================
    // If connecting to the database fails
    // ==============================

    // if session equals null
    if ( !db ) {

        // 500 means we have an internal server error and this is the best status code for
        // not being able to connect to the database
        res.status( 500 );

        // send back an error message to the frontend
        res.json( { message : 'Bad database connection. Please try again.' } );

        // close the database connection
        client.close();

        // exit the funtion at this point in the code
        return;

    }

    // ==============================
    // Database connection successful - proceed forward
    // ==============================

    // ==============================
    // Access the collection
    // ==============================

    // get access to the collection and if it does not exist then MongoDB will create
    // that collection on the fly
    const usersCollection = await db.collection( 'users' );

    // ==============================
    // Find all users
    // ==============================

    // get all the users or the user list and to do that we need to use " find().toArray() "
    // and remember " find(); " does not work

    // from stackoverflow    
    /*
        " It looks like you're using Native MongoDB Node.JS Driver
        to query your database. According to its readme, you should use .toArray() method
        to instantiate MongoDB cursor, returned from .find() call:

        collection.find( {
            author: req.user._id
        } ).toArray( function ( err, docs ) {
            // docs is an Array of documents here
        } );
        
        If you have troubles with Native MongoDB Node.JS Driver, I would suggest using some
        wrapper around it with more intuitive API, e.g.:

        mongojs
        monk
        mongoskin "   
    */

    /* // 2
    const users = await usersCollection.find().toArray();

    // if users exist then we want to send back the users array as part of the server
    // response
    if ( users ) {

        // ==============================
        // Users exist - proceed forward
        // ==============================

        // ==============================
        // Send back a response that contains the users array
        // ==============================

        // 200 represents a successful request
        res.status( 200 );

        // and then let's send back to the browser as part of the server response the
        // users array
        res.json( users );

        // close the database connection
        client.close();

        // exit the funtion at this point in the code
        return;

    } else {

        // ==============================
        // Users don't exist
        // ==============================

        // 404 means can not find the resource
        res.status( 404 );

        // send back an error message to the frontend
        res.json( { message : 'A list of users was not found.' } );

        // close the database connection
        client.close();

        // exit the funtion at this point in the code
        return;

    } // end of if else

} // end of handler

*/ // 3