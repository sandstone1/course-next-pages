

// the function below will handle incoming requests sent to 
// " localhost:3016/api/newsletter/newsletter-registration-post " and inside the function
// we can execute server side code and any code we write inside this function will never
// end up in any client side code bundle 

// import in the connectToDatabase function
import { connectToDatabase } from '../../../backend/config/db_mongodb';


// ==============================
// Newsletter registration and save the user's email address to the database
// ==============================

// @desc    - Newsletter registration
// @route   - POST request to /api/newsletter/newsletter-registration-post
// @access  - Public route

// req = HTTP incoming message, res = HTTP server response
export default async function handler( req, res ) {

    // in this function we will accept an incoming request with email data and in this case we
    // do not want to verify that the request is coming from an authenticated user and then
    // we will store the email data somewhere, like a database or in a file and then return
    // some json data to the browser as part of the server response

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

    // extract the email address from the incoming request and save the email to the const
    // " email "
    const email = req.body.email;

    // ==============================
    // Server side validation - email does not exist
    // ==============================

    // check and make sure the email exist and do some server side validation here and
    // remember that frontend validation can be circumvented and therefore manipulated
    // so we shouldn't relay on frontend validation and remember frontend vaidation is
    // more of a convinent feature and something that is nice to have; instead, to really
    // make sure we get valid data and that we work with valid data we should always
    // validate the data on the server or inside the api route since the code on the server
    // can't be viewed or changed by unscrupulous users   
    if ( !email ) {

        // 400 represents a bad request or " indicates that the server cannot or will
        // not process the request due to something that is perceived to be a client error "
        res.status( 400 );

        // and then send back to the browser as part of the server response an object
        // and use the json data transfer format and remember the object below will be
        // transformed into json automatically
        res.json( { message : 'The email field needs to be filled out in order to sign up for the newsletter. Please try again.' } );

        // exit the funtion at this point in the code
        return;

    } // end of if

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
    // Connect to the database
    // ==============================
    
    // connect to the database and then save the result to the const " db "
    const db = client.db();

    // ==============================
    // Access the collection
    // ==============================    

    // access the collection and if it does not exist then MongoDB will create that collection
    // on the fly
    const newsletterRegistrationCollection = await db.collection( 'newsletter registration' );

    // ==============================
    // Find out if the document already exist
    // ==============================

    // if we find a document in the database with an email that matches the email above
    // then we know that the email is already registered
    const emailExists = await newsletterRegistrationCollection.findOne( { email : email } );

    // ==============================
    // Document with the email address from req.body.email already exist
    // ==============================

    // if the document already exists then we want to send back an error message
    if ( emailExists ) {

        // 400 represents a bad request or " indicates that the server cannot or will
        // not process the request due to something that is perceived to be a client error "
        res.status( 400 );

        // and then send back to the browser as part of the server response an object
        // and use the json data transfer format and remember the object below will be
        // transformed into json automatically
        res.json( { message : 'The email address aleady exists. Please try again.' } );

        // close the database connection
        client.close();

        // exit the funtion at this point in the code
        return;

    }

    // ==============================
    // Email address does not exist - proceed forward
    // ==============================

    // ==============================
    // Define newsletterRegistrationDocumentAdded
    // ==============================

    // remember, we have to define the variable " newsletterRegistrationDocumentAdded "
    // outside the try catch block and the reason to do this is to get scoping right

    // scoping " newsletterRegistrationDocumentAdded " is not important in this case
    // since we do not use " newsletterRegistrationDocumentAdded " outside the try catch
    // block
    let newsletterRegistrationDocumentAdded;

    // ==============================
    // Try inserting the user generated email into the database
    // ==============================

    // I had to use a try catch block here instead of a if else statement since I wasn't
    // catching the insertOne(); errors with the if else statement
    try {

        // ==============================
        // Create a new email document in the database
        // ==============================

        // let's use the insertOne(); method to add an email address to the database and then add
        // the properties and values that we want to add to the newsletter registration document in
        // the database
        newsletterRegistrationDocumentAdded = await newsletterRegistrationCollection.insertOne(

            {
                email : email
            }

        );

        // ==============================
        // Document created - proceed forward
        // ==============================

        // ==============================
        // Retrieve the document that we just added to the database
        // ==============================

        // in MongoDB, if we want to return the _id and email address informtion as part of the
        // server reponse then we need to find the document that we just created in the database
        // first
        const documentJustAdded = await newsletterRegistrationCollection.findOne( { email : email } );

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
                message : 'You have been added to our newsletter! Thank you.',
                _id     : documentJustAdded._id,
                email   : documentJustAdded.email
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


