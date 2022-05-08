

// the function below will handle incoming requests sent to 
// " localhost:3016/api/user/change-password-put " and inside the function we can execute
// server side code and any code we write inside this function will never end up in
// any client side code bundle

// import in the getSession hook
import { getSession } from 'next-auth/react';
// import in the connectToDatabase function
import { connectToDatabase } from '../../../backend/config/db_mongodb';
// import in the hashPassword function
import { hashPassword, verifyPassword } from '../../../backend/utils/password_utils';


// ==============================
// Require authentication and protect API route
// ==============================

// @desc    - Update / change user password
// @route   - PUT request to api/user/change-password-put
// @access  - Private route

// to access this route the user needs 1 thing: the user needs authorization and
// authorization is determined based on having an active session or a valid session object

// req = HTTP incoming message, res = HTTP server response
export default async function handler( req, res ) {

    // in this function we want to extract the information from the old and new
    // password fields and we want to verify that the request is coming from an
    // authenticated user and we want to get the email address of that authenticated
    // user and then we want to check the database and see if the entered current password
    // matches the password in the database and if that is true then we want
    // to replace the current password with the entered new password

    // ==============================
    // Check request type
    // ==============================

    // check for the request type
    if ( req.method !== 'PUT' ) {

        // exit the funtion at this point in the code
        return;

    }

    // ==============================
    // Request type correct - proceed forward
    // ==============================

    // ==============================
    // Authenticate the user
    // ==============================

    // ==============================
    // Get the session object
    // ==============================

    // remember, the session object looks like the following:

    /*
        { user: {…}, expires: "2021-10-01T00:13:27.572Z" }
        expires: "2021-10-01T00:13:27.572Z"
        user: { 
            name: null,
            email: "john@example.com",
            image: null
        }
        [[Prototype]]: Object
    */

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

    // remember the session object will either contain the session data and be truthy
    // or will be equal to null or undefined and be falsy
    const session = await getSession( { req : req } );

    // ==============================
    // If authentication fails
    // ==============================

    // if session equals null or undefined
    if ( !session ) {

        // remember I can test this out by commenting out the server page gaurds in the
        // profile.js file

        // send back a response with a status code of 401, which " indicates that the
        // request has not been applied because it lacks valid authentication credentials
        // for the target resource. "
        res.status( 401 ).json( { message : 'Not authenticated. Please try again.' } );

        // close the database connection
        client.close();

        // exit the funtion at this point in the code
        return;

    }

    // ==============================
    // Authentication successful - proceed forward
    // ==============================

    // ==============================
    // Use the session email address to identify the user
    // ==============================

    // get the user's email address from the session object
    const userEmail = session.user.email;

    // now that we know the incoming request method is correct, we know the user is
    // authenticated and we have the user email address, next we need to extract data
    // from the incoming request

    // ==============================
    // Extract data from incoming request
    // ==============================

    // extract the currentPassword and newPassword from the incoming request and then
    // save the data to the const " currentPassword " and " newPassword "
    const currentPassword = req.body.currentPassword;
    const newPassword     = req.body.newPassword;

    // ==============================
    // Server side validation - confirm that currentPassword and newPassword exist
    // ==============================

    // check and make sure the data exist and do some server side validation here and
    // remember that frontend validation can be circumvented and therefore manipulated
    // so we shouldn't relay on frontend validation and remember frontend vaidation is
    // more of a convinent feature and something that is nice to have; instead, to really
    // make sure we get valid data and that we work with valid data we should always
    // validate the data on the server or inside the api route since the code on the server
    // can't be viewed or changed by unscrupulous users
    if ( currentPassword === '' || newPassword === '' ) {

        // 400 represents a bad request or " indicates that the server cannot or will
        // not process the request due to something that is perceived to be a client error "
        res.status( 400 );

        // and then send back to the browser as part of the server response an object
        // and use the json data transfer format and remember the object below will be
        // transformed into json automatically
        res.json( { message : 'All fields must be filled out in order to change your password. Please try again.' } );

        // exit the funtion at this point in the code
        return;

    } // end of if

    // ==============================
    // currentPassword and newPassword exist - proceed forward
    // ==============================

    // ==============================
    // Server side validation - confirm that the currentPassword does not equal the newPassword
    // ==============================

    if ( currentPassword === newPassword ) {

        // 400 represents a bad request or " indicates that the server cannot or will
        // not process the request due to something that is perceived to be a client error "
        res.status( 400 );

        // and then send back to the browser as part of the server response an object
        // and use the json data transfer format and remember the object below will be
        // transformed into json automatically
        res.json( { message : 'The current password equals the new password. Please try again.' } );

        // exit the funtion at this point in the code
        return;

    } // end of if

    // ==============================
    // currentPassword does not equal newPassword - proceed forward
    // ==============================

    // ==============================
    // Run connectToDatabase function and get client
    // ==============================

    // ==============================
    // Define client
    // ==============================

    // remember, we have to define the variable " client " outside the try catch block
    // and the reason to do this is to get scoping right

    // scoping is especially important if we use " client " outside the try catch block,
    // which we do in this case
    let client;

    // ==============================
    // Try connecting to the database
    // ==============================

    // try catch block
    try {

        // ==============================
        // Run connectToDatabase function and get client
        // ==============================

        // get client
        client = await connectToDatabase();

    } catch ( error ) {

        // ==============================
        // If connecting to the database fails
        // ==============================

        // one way to test the connectToDatabase() function in the db_mongodb.js file is to
        // change the MONGO_URI environemnt variable value inside the .env file and remember
        // after every change we have to restart the server

        // 500 means we have an internal server error and this is the best status code for
        // not being able to connect to the database
        res.status( 500 );

        // send back an error message to the frontend
        res.json( { message : 'Connecting to the database failed. Please try again.' } );

        // exit the funtion at this point in the code
        return;

    } // end of try catch

    // ==============================
    // Database connection successful - proceed forward
    // ==============================

    // ==============================
    // Connect to database
    // ==============================

    // connect to the database and then save the result to the const " db "
    const db = client.db();

    // ==============================
    // Access the collection
    // ==============================

    // get access to the collection and if it does not exist then MongoDB will create
    // that collection on the fly
    const usersCollection = await db.collection( 'users' );

    // ==============================
    // Find user document by email address or userEmail
    // ==============================

    // ==============================
    // Define userDocument
    // ==============================

    // remember, we have to define the variable " userDocument " outside the try catch block
    // and the reason to do this is to get scoping right

    // scoping is especially important if we use " userDocument " outside the try catch block,
    // which we do in this case
    let userDocument;

    // ==============================
    // Try finding the user document
    // ==============================

    // try catch block
    try {

        // ==============================
        // Find user document
        // ==============================

        // find the user document in the database with an email that matches userEmail above
        userDocument = await usersCollection.findOne( { email : userEmail } );

    } catch ( error ) { 
        
        // remember there is no way we can get to this catch block since the sign in page
        // verifies that the user has been found and has signed in with the correct email
        // and password credentials; nevertheless, I'll keep this catch block in place for
        // clarification purposes

        // ==============================
        // If we can not find the user document
        // ==============================

        // 404 means can not find the resource
        res.status( 404 );

        // send back an error message to the frontend
        res.json( { message : 'User not found. Please try again.' } );

        // close the database connection
        client.close();

        // exit the funtion at this point in the code
        return;

    } // end of try catch

    // ==============================
    // Found user document - proceed forward
    // ==============================

    // ==============================
    // See if passwords match
    // ==============================

    // get the current password stored in the database
    const databasePassword = userDocument.password;

    // compare the user generated currentPassword to the databasePassword and if they
    // are equal then the boolean " passwordsAreEqual " will be true
    const passwordsAreEqual = await verifyPassword( currentPassword, databasePassword )

    // see if the databasePassword matches the entered currentPassword and if this is true then
    // proceed forward
    if ( passwordsAreEqual ) {

        // ==============================
        // Password's match - proceed forward
        // ==============================

        // ==============================
        // Create the hashed password
        // ==============================

        // create a hashed password that we can store in the database and we get that by running
        // the hashPassword function and using the user generated plain text password as the
        // argument
        const hashedPassword = await hashPassword( newPassword );

        // ==============================
        // Update the user document / user password in the database
        // ==============================

        // ==============================
        // Define updatedUserDocument
        // ==============================

        // remember, we have to define the variable " updatedUserDocument " outside the try
        // catch block and the reason to do this is to get scoping right

        // scoping " updatedUserDocument " is not important in this case since we do not use
        // " updatedUserDocument " outside the try catch block
        let updatedUserDocument;

        // ==============================
        // Try updating the user document / user password in the database
        // ==============================

        // try catch block
        try {

            // ==============================
            // Update the user document / user password in the database
            // ==============================

            // use the updateOne function and the first argument will identify the document that
            // should be updated and the second argument will set the key value pair(s) that
            // should change in the database and in this case we want to update the user's
            // password

            // update the user document in the database and then save the updated user document
            // to the const " updatedUserDocument "
            updatedUserDocument = await usersCollection.updateOne(

                { email : userEmail }, // first argument

                { $set : { password : hashedPassword } } // second argument
        
            );

            // typically we would send back the updatedUserDocument information but since we
            // only updated the password and given that we do not want to send back the password
            // as part of the server response, we will send back a success message instead

            // ==============================
            // Send back a response that contains data or in this case, a success message
            // ==============================

            // 200 represents a successful request
            res.status( 200 );

            // send back an success message to the frontend
            res.json( { message : 'You have updated your password! Please close this message to be redirected to the home page.' } );

            // close the database connection
            client.close();

            // exit the funtion at this point in the code
            return;

        } catch ( error ) { // if the document was not created successfully then do the following

            // ==============================
            // Document not created - proceed forward
            // ==============================

            // " The 500 (internal server error) status code indicates that the server encountered
            // an unexpected condition that prevented it from fulfilling the request. "
            res.status( 500 );

            // and then send back to the browser as part of the server response an object
            // and use the json data transfer format and remember the object below will be
            // transformed into json automatically
            res.json( { message : 'We could not update your password. Please try again.' } );

            // close the database connection
            client.close();

            // exit the funtion at this point in the code
            return;

        } // end of try catch

    } else {

        // ==============================
        // Password's don't match
        // ==============================

        // 403 " indicates that the server understood the request but refuses to authorize it. "
        // or in other words the user is authenticated but is not authorized to change the current
        // password
        res.status( 403 );

        // send back an error message to the frontend
        res.json( { message : 'Your current password does not match the password in the database. Please try again.' } );

        // close the database connection
        client.close();

        // exit the funtion at this point in the code
        return;

    } // end of if else

} // end of handler


