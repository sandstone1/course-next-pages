

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
// @route   - PUT request to api/user/change-password-mongodb
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

        // close the database connection
        client.close();

        // exit the funtion at this point in the code
        return;

    }

    // ==============================
    // Authentication successful - proceed forward
    // ==============================

    // ==============================
    // Extract data from incoming request
    // ==============================

    // now that we know the incoming request method is correct and we know the user is
    // authenticated, next we need to extract data from the incoming request

    // destructure off the currentPassword and the newPassword
    const { currentPassword, newPassword } = req.body;

    // ==============================
    // Connect to database
    // ==============================

    // get client
    const client = await connectToDatabase();

    // connect to the database and then save the result to the const " db "
    const db = client.db();

    // ==============================
    // Access the collection
    // ==============================

    // get access to the collection and if it does not exist then MongoDB will create
    // that collection on the fly
    const usersCollection = await db.collection( 'users' );

    // ==============================
    // Use the email to identify the user
    // ==============================

    // get the user's email address from the session object
    const userEmail = session.user.email;

    // ==============================
    // Find user document
    // ==============================

    // find the user document in the database with an email that matches userEmail above
    const user = await usersCollection.findOne( { email : userEmail } );

    // ==============================
    // User does not exist
    // ==============================

    // if the user does not exist then we want to throw an error
    if ( !user ) {

        // 404 means can not find the resource
        res.status( 404 );

        // send back an error message to the frontend
        res.json( { message : 'User not found. Please try again.' } );

        // close the database connection
        client.close();

        // exit the funtion at this point in the code
        return;

    }

    // ==============================
    // User exist - proceed forward
    // ==============================

    // ==============================
    // See if passwords match
    // ==============================

    // get the current password stored in the database
    const databasePassword = user.password;

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

        // use the updateOne function and the first argument will identify the document that
        // should be updated and the second argument will set the key value pair(s) that
        // should change in the database and in this case we want to update the user's
        // password

        // update the user document in the database and then save the updated user document
        // to the const " updatedUser "
        const updatedUser = await usersCollection.updateOne(

            { email : userEmail }, // first argument

            { $set : { password : hashedPassword } } // second argument
    
        );

        // typically we would send back the updateUser information but since we only updated
        // the password and given that we do not want to send back the password as part
        // of the server response, we will send back a success message instead

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



