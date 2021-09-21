
/*
// 1 -

// import in the connectToDatabase function
import { connectToDatabase } from '../../../backend/config/db_mongodb';
// import in the hashedPassword function
import { hashPassword } from '../../../backend/utils/password_utils';


// ==============================
// Register user and then save their information in the database
// ==============================

// @desc    - Register or sign up a new user
// @route   - POST request to /api/user/register-mongodb
// @access  - Public route

// req = HTTP incoming message, res = HTTP server response
export default async function handler( req, res ) {

    // ==============================
    // Extract data from incoming request
    // ==============================
    
    // destructure the name, email and password
    const { name, email, password, isAdmin } = req.body;

    // ==============================
    // Connect to the database
    // ==============================

    // let's get client
    const client = await connectToDatabase();

    // get access to the database by doing " client.db(); " and then save the result to
    // the const " db "
    const db = client.db();

    // ==============================
    // Access the collection
    // ==============================

    // now that we have access to the database we want to create a new user and store the
    // user in a collection and MongoDB works with collections and inside a collection are
    // documents and in this case a user would represent a document

    // we get access to a collection by calling the collection method on db and in this
    // case we are getting access to the users collection and remember if we add an argument
    // to a collection and that collection does not exist yet then that collection will be
    // created on the fly
    const usersCollection = await db.collection( 'users-mongodb' );

    // if we find the user document in the database with an email that matches the email above
    // then we know that the user entered an email that is already registered
    const userExists = await usersCollection.findOne( { email : email } );

    // ==============================
    // User already exist
    // ==============================

    // if the user already exists then we want to throw an error
    if ( userExists ) {

        // 400 represents a bad request
        res.status( 400 );

        // send back an error message to the frontend
        res.json( { message : 'User aleady exists. Please try again.' } );

        // enter return; so that we exit the funtion at this point in the code
        return;

    }

    // ==============================
    // Create the hashed password
    // ==============================

    // create the hashed password to store in the database and we get that by running the
    // hashedPassword function and using the user generated plain text password as the
    // argument
    const hashedPassword = await hashPassword( password );

    // ==============================
    // Create a new user document in the database
    // ==============================

    // let's use the insertOne(); method to add a user to the database and add the properties
    // and values that we want to add to the user document in the database
    const user = usersCollection.insertOne(

        {
            name     : name,
            email    : email,
            password : hashedPassword,
            isAdmin  : isAdmin
        }

    );

    // if the user was created successfully then do the following
    if ( user ) {

        // ==============================
        // Send the following information back to the browser as part of the server response
        // ==============================

        // 201 means a resource was created
        res.status( 201 ).json(

            {
                _id     : user._id,
                name    : user.name,
                email   : user.email,
                isAdmin : isAdmin
            }

        );

    } else { // if the user was not created successfully then do the following

        // 400 means the request was bad
        res.status( 400 );

        // send back an error message to the frontend
        res.json( { message : 'Invalid user data. Please try again.' } );

        // enter return; so that we exit the funtion at this point in the code
        return;

        // throw new Error( 'Invalid user data' );

    } // end of if else

} // end of handler


// End of 1 -
*/



















// ===============================





















// at the beginning of tutorial 231, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in the connectToDatabase function
import { connectToDatabase } from '../../../backend/config/db_mongodb';
// import in the hashPassword function
import { hashPassword } from '../../../backend/utils/password_utils';


// ==============================
// Register user and then save their information in the database
// ==============================

// @desc    - Register or sign up a new user
// @route   - POST request to /api/user/register-mongodb
// @access  - Public route

// req = HTTP incoming message, res = HTTP server response
export default async function handler( req, res ) {

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
    
    // destructure the name, email, password and isAdmin
    const { name, email, password, isAdmin } = req.body;

    // ==============================
    // Connect to the database
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

    // if we find the user document in the database with an email that matches the email above
    // then we know that the user entered an email that is already registered
    const userExists = await usersCollection.findOne( { email : email } );

    // ==============================
    // User already exist
    // ==============================

    // if the user already exists then we want to send back an error message
    if ( userExists ) {

        // 400 represents a bad request
        res.status( 400 );

        // send back an error message to the frontend
        res.json( { message : 'User aleady exists. Please try again.' } );

        // exit the funtion at this point in the code
        return;

    }

    // ==============================
    // User does not exist - proceed forward
    // ==============================

    // ==============================
    // Create the hashed password
    // ==============================

    // create a hashed password that we can store in the database and we get that by running
    // the hashPassword function and using the user generated plain text password as the
    // argument
    const hashedPassword = await hashPassword( password );

    // ==============================
    // Create a new user document in the database
    // ==============================

    // let's use the insertOne(); method to add a user to the database and add the properties
    // and values that we want to add to the user document in the database
    const user = usersCollection.insertOne(

        {
            name     : name,
            email    : email,
            password : hashedPassword,
            isAdmin  : isAdmin
        }

    );

    // if the user was created successfully then do the following
    if ( user ) {

        // ==============================
        // User created - proceed forward
        // ==============================

        // ==============================
        // Retrieve the user that we just added in the database
        // ==============================

        // in MongoDB, if we want to return the user's informtion as part of the server
        // reponse then we need to find the user we just created in the database first
        const userJustAdded = await usersCollection.findOne( { email : email } );

        // ==============================
        // Send the following information back to the browser as part of the server response
        // ==============================

        // 201 means a resource was created
        res.status( 201 ).json(

            {
                _id     : userJustAdded._id,
                name    : userJustAdded.name,
                email   : userJustAdded.email,
                isAdmin : userJustAdded.isAdmin
            }

        );

        // exit the funtion at this point in the code
        return;

    } else { // if the user was not created successfully then do the following

        // ==============================
        // User not created - proceed forward
        // ==============================

        // 400 means the request was bad
        res.status( 400 );

        // send back an error message to the frontend
        res.json( { message : 'Invalid user data. Please try again.' } );

        // exit the funtion at this point in the code
        return;

    } // end of if else

} // end of handler


