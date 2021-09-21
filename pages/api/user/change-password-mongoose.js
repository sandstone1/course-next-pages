

/*
// 1 -

// import in the getSession hook
import { getSession } from 'next-auth/client';

// here we are creating an API route that can be reached by sending a request to
// api/user/change-password and in this file we will create our own API route

// req = HTTP incoming message, res = HTTP server response
export default async function handler( req, res ) {

    // in this function we want to extract the information from the old and new
    // password fields and we want to verify that the request is coming from an
    // authenticated user and we want to get the email address of that authenticated
    // user and then we want to check the database and see if the entered old password
    // matches the current password in the database and if that is true then we want
    // to replace the old password with the entered new password
    
    // check for the request type
    if ( req.method !== 'PUT' ) {

        // exit the function
        return;

    } 

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

    // if session equals null
    if ( !session ) {

        // send back a response with a status code of 401, which " indicates that the
        // request has not been applied because it lacks valid authentication credentials
        // for the target resource. "
        res.status( 401 ).json( { message : 'Not authenticated. Please try again.' } );

    }

}

// End of 1 -
*/

















// ===============================




















/*
// at the beginning of tutorial 230, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in the getSession hook
import { getSession } from 'next-auth/client';


// 3 -

// import in the User model
import User from '../../../backend/models/user_model';
// import in the connectDB function, which will connect our application to the database
import connectDB from '../../../backend/config/db';
// connect to the database
connectDB();

// End of 3 -


// ==============================
// Require authentication and protect API route
// ==============================

// @desc    - Update / change user password
// @route   - PUT request to api/user/change-password-mongoose
// @access  - Private route

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

        // exit the function
        return;

    }

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

    }


    // 2 -

    // ==============================
    // Extract data from incoming request
    // ==============================

    // now that we know the incoming request method is correct and we know the user is
    // authenticated, next we need to extract data from the incoming request and the
    // data that we need is the old and new passwords and the user email address and we
    // use the email to identify the user

    // get the user's email address from the session object
    const userEmail = session.user.email;

    // destructure off the currentPassword and the newPassword
    const { currentPassword, newPassword } = req.body;

    // ==============================
    // Connect to database and find user document
    // ==============================

    // next we want to connect to the database and find the user by the userEmail and to do
    // that let's first import in the User model and connectDB

    // find the user document in the database with an email that matches userEmail above
    const user = await User.findOne( { email : userEmail } );

    // ==============================
    // User does not exist
    // ==============================

    // if the user does not exist then we want to throw an error
    if ( !user ) {

        // 404 means can not find the resource
        res.status( 404 );

        // send back an error message to the frontend
        res.json( { message : 'User not found. Please try again.' } );

        // enter return; so that we exit the funtion at this point in the code
        return;

    }
    
    // ==============================
    // User exist - proceed forward
    // ==============================

    // ==============================
    // See if passwords match
    // ==============================

    // see if the databasePassword matches the entered currentPassword and if this is true then
    // proceed forward
    if ( await user.matchPassword( currentPassword ) ) {

        // ==============================
        // Password's match - proceed forward
        // ==============================

        // ==============================
        // Update the user password
        // ==============================

        // get the current password stored in the database
        const databasePassword = user.password;

        // if the passwords match then let's update
        // the user's password information and we can do that by looking at req.body.key so for
        // example, if the user updates their password we will be able to retrieve the updated
        // password in req.body.newPassword; otherwise, if the user did not make any changes or
        // updates to their current password then we will return the password saved in the database
        // or user.password or databasePassword
        user.password = newPassword || databasePassword;

        // remember, from MDN: Line 1 => " expr1 || expr2 "
        // Line 2 => " If expr1 can be converted to true, return expr1; else, return expr2 "

        // ==============================
        // Update the user document in the database
        // ==============================

        // then let's update the user document in the database based on the changes above and
        // then save the updated user document to the const " updatedUser "
        const updatedUser = await user.save();

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

        // enter return; so that we exit the funtion at this point in the code
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

        // enter return; so that we exit the funtion at this point in the code
        return;

    }

    // End of 2 -

}
*/

















// ===============================




















// at the beginning of tutorial 231, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in the getSession hook
import { getSession } from 'next-auth/react';
// import in the User model
import User from '../../../backend/models/user_model';
// import in the connectDB function, which will connect our application to the database
import connectDB from '../../../backend/config/db_mongoose';

// connect to the database
connectDB();


// ==============================
// Require authentication and protect API route
// ==============================

// @desc    - Update / change user password
// @route   - PUT request to api/user/change-password-mongoose
// @access  - Private route

// to access this route the user needs 1 thing: the user needs authorization and
// authorization is determined based on having an active session or a valid session objec

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

        // exit the function
        return;

    }

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

    // ==============================
    // Use the email to identify the user
    // ==============================

    // get the user's email address from the session object
    const userEmail = session.user.email;

    // ==============================
    // Find user document
    // ==============================

    // find the user document in the database with an email that matches userEmail above
    const user = await User.findOne( { email : userEmail } );

    // ==============================
    // User does not exist
    // ==============================

    // if the user does not exist then we want to throw an error
    if ( !user ) {

        // 404 means can not find the resource
        res.status( 404 );

        // send back an error message to the frontend
        res.json( { message : 'User not found. Please try again.' } );

        // exit the funtion at this point in the code
        return;

    }

    // ==============================
    // User exist - proceed forward
    // ==============================

    // ==============================
    // See if passwords match
    // ==============================

    // see if the databasePassword matches the entered currentPassword and if this is true then
    // proceed forward
    if ( await user.matchPassword( currentPassword ) ) {

        // ==============================
        // Password's match - proceed forward
        // ==============================

        // ==============================
        // Update the user password
        // ==============================

        // get the current password stored in the database
        const databasePassword = user.password;

        // if the passwords match then update the password and we can do that by looking at
        // req.body.key so if, for example, the user updates their password we will be able to
        // retrieve the updated password in req.body.newPassword; otherwise, if the user did
        // not update their current password then we will return the password saved in the
        // database or user.password or databasePassword
        user.password = newPassword || databasePassword;

        // remember, from MDN: Line 1 => " expr1 || expr2 "
        // Line 2 => " If expr1 can be converted to true, return expr1; else, return expr2 "

        // ==============================
        // Update the user document in the database
        // ==============================

        // then let's update the user document in the database based on the changes above and
        // then save the updated user document to the const " updatedUser "
        const updatedUser = await user.save();

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

        // exit the funtion at this point in the code
        return;

    } // end of if else

} // end of handler


