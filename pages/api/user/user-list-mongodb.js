

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

