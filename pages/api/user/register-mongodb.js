
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





















// at the beginning of tutorial 213, given all the notes, I created a new file below without
// the notes so we are starting fresh

// the function below will handle incoming requests sent to 
// " localhost:3016/api/user/register-post " and inside the function we can execute
// server side code and any code we write inside this function will never end up in
// any client side code bundle

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

    // in this function we will accept an incoming request with name, email, password,
    // confirmPassword and isAdmin data and in this case we do not want to verify that the
    // request is coming from an authenticated user and then we will store the data in
    // a database or in a file and then return some json data to the client or browser
    // as part of the server response

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

    // extract the name, email address, password, confirmPassword, isAdmin from the incoming
    // request and then save the data to the const " name ", " email ", " password ",
    // " confirmPassword " and " isAdmin "
    const name            = req.body.name;
    const email           = req.body.email;
    const password        = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const isAdmin         = req.body.isAdmin;

    // ==============================
    // Server side validation - confirm name, email, password, confirmPassword and isAdmin
    // exist
    // ==============================

    // check and make sure the data exist and do some server side validation here and
    // remember that frontend validation can be circumvented and therefore manipulated
    // so we shouldn't relay on frontend validation and remember frontend vaidation is
    // more of a convinent feature and something that is nice to have; instead, to really
    // make sure we get valid data and that we work with valid data we should always
    // validate the data on the server or inside the api route since the code on the server
    // can't be viewed or changed by unscrupulous users
    if ( name === '' ||  email === '' || password === '' || confirmPassword === '' || isAdmin === '' ) {

        // 400 represents a bad request or " indicates that the server cannot or will
        // not process the request due to something that is perceived to be a client error "
        res.status( 400 );

        // and then send back to the browser as part of the server response an object
        // and use the json data transfer format and remember the object below will be
        // transformed into json automatically
        res.json( { message : 'All fields must be filled out in order to register. Please try again.' } );

        // exit the funtion at this point in the code
        return;

    } // end of if

    // ==============================
    // Name, email, password, confirmPassword and isAdmin are ok - proceed forward
    // ==============================

    // ==============================
    // Server side validation - confirm that the password equals the confirmPassword
    // ==============================

    if ( password !== confirmPassword ) {

        // 400 represents a bad request or " indicates that the server cannot or will
        // not process the request due to something that is perceived to be a client error "
        res.status( 400 );

        // and then send back to the browser as part of the server response an object
        // and use the json data transfer format and remember the object below will be
        // transformed into json automatically
        res.json( { message : 'Passwords do not match. Please try again.' } );

        // exit the funtion at this point in the code
        return;

    } // end of if

    // ==============================
    // Password equals confirmPassword - proceed forward
    // ==============================

    // ==============================
    // Server side validation - validate the email
    // ==============================

    // ==============================
    // Email validation function
    // ==============================

    // this came from
    // " https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript "
    // and was the second answer on the page
    function validateEmail( email ) {

        // the regex
        const regex = /\S+@\S+\.\S+/;

        // test the regex against the email
        const isEmailValid = regex.test( email );

        // return the boolean isEmailValid
        return isEmailValid;

    } // end of validateEmail
    
    if ( !validateEmail( email ) ) {

        // 400 represents a bad request or " indicates that the server cannot or will
        // not process the request due to something that is perceived to be a client error "
        res.status( 400 );

        // and then send back to the browser as part of the server response an object
        // and use the json data transfer format and remember the object below will be
        // transformed into json automatically
        res.json( { message : 'The email you entered is not valid. Please try again.' } );

        // exit the funtion at this point in the code
        return;

    } // end of if

    // ==============================
    // Email is ok - proceed forward
    // ==============================

    // ==============================
    // Server side validation - validate the password
    // ==============================

    // ==============================
    // Password validation function
    // ==============================

    // this came from
    // " https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a "
    function validatePassword( password ) {

        // the regex
        const regex = /^[A-Za-z\d]{6,}$/;

        // test the regex against the password
        const isPasswordValid = regex.test( password );

        // return the boolean isPasswordValid
        return isPasswordValid;

    } // end of validatePassword

    if ( !validatePassword( password ) ) {

        // 400 represents a bad request or " indicates that the server cannot or will
        // not process the request due to something that is perceived to be a client error "
        res.status( 400 );

        // and then send back to the browser as part of the server response an object
        // and use the json data transfer format and remember the object below will be
        // transformed into json automatically
        res.json( { message : 'Your password must be at least 6 characters and contain only numbers and letters. Please try again.' } );

        // exit the funtion at this point in the code
        return;

    } // end of if

    // ==============================
    // Password is ok - proceed forward
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
        // Get client and connect to the database
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
    // Connect to the database
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
    // Find out if the document already exist
    // ==============================

    // if we find the user document in the database with an email that matches the email above
    // then we know that the user entered an email that is already registered
    const userDocumentExists = await usersCollection.findOne( { email : email } );

    // ==============================
    // Document with the email address from req.body.email already exist
    // ==============================

    // if the user document already exists then we want to send back an error message
    if ( userDocumentExists ) {

        // 400 represents a bad request
        res.status( 400 );

        // send back an error message to the frontend
        res.json( { message : 'User aleady exists. Please try again.' } );

        // close the database connection
        client.close();

        // exit the funtion at this point in the code
        return;

    }

    // ==============================
    // User document does not exist - proceed forward
    // ==============================

    // ==============================
    // Create the hashed password
    // ==============================

    // create a hashed password that we can store in the database and we get that by running
    // the hashPassword function and using the user generated plain text password as the
    // argument
    const hashedPassword = await hashPassword( password );

    // ==============================
    // Define userDocument
    // ==============================

    // remember, we have to define the variable " userDocument " outside the try catch
    // block and the reason to do this is to get scoping right

    // scoping " userDocument " is not important in this case since we do not use
    // " userDocument " outside the try catch block
    let userDocument;

    // ==============================
    // Try inserting the user document into the database
    // ==============================

    // I had to use a try catch block here instead of a if else statement since I wasn't
    // catching the insertOne(); errors with the if else statement
    try {

        // ==============================
        // Create a new user document in the database
        // ==============================

        // let's use the insertOne(); method to add a user to the database and add the properties
        // and values that we want to add to the user document in the database
        userDocument = await usersCollection.insertOne(

            {
                name     : name,
                email    : email,
                password : hashedPassword,
                isAdmin  : isAdmin
            }

        );

        // ==============================
        // Document created - proceed forward
        // ==============================

        // ==============================
        // Retrieve the document that we just added to the database
        // ==============================

        // in MongoDB, if we want to return the some or all of the key value pairs in the user
        // document as part of the server reponse then we need to find the document that we just
        // created in the database first
        const userDocumentJustAdded = await usersCollection.findOne( { email : email } );

        // ==============================
        // Send the following information back to the browser as part of the server response
        // ==============================

        // 201 " indicates that the request has succeeded and has led to the creation of a
        // resource "
        res.status( 201 );

        // and then send back to the browser as part of the server response an object
        // and use the json data transfer format and remember the object below will be
        // transformed into json automatically
        res.json(

            { 
                message : 'You have successfully registered! Please close this message to be redirected to the home page.',
                _id     : userDocumentJustAdded._id,
                name    : userDocumentJustAdded.name,
                email   : userDocumentJustAdded.email,
                isAdmin : userDocumentJustAdded.isAdmin
            }

        );

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
        res.json( { message : 'Something went wrong. Please try again.' } );

        // close the database connection
        client.close();

        // exit the funtion at this point in the code
        return;

    } // end of try catch

} // end of handler


