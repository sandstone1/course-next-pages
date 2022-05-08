
// the function below will handle incoming requests sent to 
// " localhost:3016/api/comments/[eventId] " and inside the function we can execute
// server side code and any code we write inside this function will never end up in
// any client side code bundle 

// import in the connectToDatabase function
import { connectToDatabase } from '../../../backend/config/db_mongodb';

// import in the connectToDatabaseOld function
import { connectToDatabaseOld } from '../../../backend/config/db_mongodb_old';

// ==============================
// Add user's comment to the database
// ==============================

// @desc    - Add user's comment to the database
// @route   - POST request to /api/comments/[eventId]
// @access  - Public route

// req = HTTP incoming message, res = HTTP server response
export default async function handler( req, res ) {

    // in this function we will accept an incoming request with name, email and comment data
    // and in this case we do not want to verify that the request is coming from an
    // authenticated user and then we will store the data in a database or in a file and then
    // return some json data to the client or browser as part of the server response

    // ==============================
    // Check request type
    // ==============================

    // check for the request type
    if ( req.method !== 'POST' && req.method !== 'GET' ) {

        // exit the funtion at this point in the code
        return;

    }

    // ==============================
    // Request type correct - proceed forward
    // ==============================

    // ==============================
    // Request type - POST
    // ==============================

    // check for the request type
    if ( req.method === 'POST' ) {

        // ==============================
        // Retrieve the dynamic route parameter
        // ==============================

        // use req to get access to the dynamic path segment and remember req.body gives us access
        // to the submitted data and req.method gives us access to the type of request and
        // req.query gives us access to the query parameters

        // retrieve the dynamic route parameter
        const eventId = req.query.eventId;

        // ==============================
        // Extract data from incoming request
        // ==============================

        // extract the name, email address and comment from the incoming request and then save
        // the data to the const " name ", " email " and " comment "
        const name    = req.body.name;
        const email   = req.body.email;
        const comment = req.body.comment;

        // ==============================
        // Build the new comment object
        // ==============================

        const newComment = {

            eventId : eventId,
            name    : name,
            email   : email,
            comment : comment

        }

        // ==============================
        // Server side validation - name, email or comment does not exist
        // ==============================

        // check and make sure the data exist and do some server side validation here and
        // remember that frontend validation can be circumvented and therefore manipulated
        // so we shouldn't relay on frontend validation and remember frontend vaidation is
        // more of a convinent feature and something that is nice to have; instead, to really
        // make sure we get valid data and that we work with valid data we should always
        // validate the data on the server or inside the api route since the code on the server
        // can't be viewed or changed by unscrupulous users
        if ( !name || !email || !comment ) {

            // 400 represents a bad request or " indicates that the server cannot or will
            // not process the request due to something that is perceived to be a client error "
            res.status( 400 );

            // and then send back to the browser as part of the server response an object
            // and use the json data transfer format and remember the object below will be
            // transformed into json automatically
            res.json( { message : 'Something went wrong. Please try again.' } );

            // exit the funtion at this point in the code
            return;

        } // end of if

        // ==============================
        // Name, email or comment ok - proceed forward
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
        const commentsCollection = await db.collection( 'comments' );

        // ==============================
        // Define newCommentAdded
        // ==============================

        // remember, we have to define the variable " newCommentAdded " outside the try catch block
        // and the reason to do this is to get scoping right

        // scoping " newCommentAdded " is not important in this case since we do not use
        // " newCommentAdded " outside the try catch block
        let newCommentAdded;

        // ==============================
        // Try inserting the new comment into the database
        // ==============================

        // I had to use a try catch block here instead of a if else statement since I wasn't
        // catching the find().toArray(); errors with the if else statement
        try {

            // ==============================
            // Create a new comment document in the database
            // ==============================

            // let's use the insertOne(); method to add the new comment object to the comments
            // collection
            newCommentAdded = await commentsCollection.insertOne( newComment );

            // ==============================
            // Retrieve the new comment that we just added to the database
            // ==============================

            // in MongoDB, if we want to return the comment informtion as part of the server
            // reponse then we need to find the comment that we just created in the database
            // first

            // we had to add 2 key value pairs in order to the get the correct comment since
            // a user could add multiple comments using the same email
            const commentJustAdded = await commentsCollection.findOne( { email : email, comment : comment } );

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
                    message : 'Your comment has been added! Thank you.',
                    comment : commentJustAdded
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

    } // end of request type - POST


    // ==============================
    // Request type - GET
    // ==============================

    // check for the request type
    if ( req.method === 'GET' ) {

        // ==============================
        // Retrieve the dynamic route parameter
        // ==============================

        // use req to get access to the dynamic path segment and remember req.body gives us access
        // to the submitted data and req.method gives us access to the type of request and
        // req.query gives us access to the query parameters

        // retrieve the dynamic route parameter
        const eventId = req.query.eventId;

        // ==============================
        // Get client and connect to the database
        // ==============================

        // get client
        const client = await connectToDatabaseOld();

        // ==============================
        // If connecting to the database fails
        // ==============================

        // if the database connection fails then in the catch block in the db_mongodb.js file
        // we can catch the error and the following if statement will tell us whether or not
        // we have a database connection error and if so then we want to send back an error
        // message to the frontend

        // one way to test the connectToDatabase() function in the db_mongodb.js file is to
        // change the MONGO_URI environemnt variable value inside the .env file and remember
        // after every change we have to restart the server
        if ( client === 'databaseConnectionError' ) {

            // 500 means we have an internal server error and this is the best status code for
            // not being able to connect to the database
            res.status( 500 );

            // send back an error message to the frontend
            res.json( { message : 'Connecting to the database failed. Please try again.' } );

            // exit the funtion at this point in the code
            return;

        }

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
        const commentsCollection = await db.collection( 'comments' );

        // ==============================
        // Try finding all comments and then filter all comments by eventId
        // ==============================

        // I had to use a try catch block here instead of a if else statement since I wasn't
        // catching the find().toArray(); errors with the if else statement
        try {

            // ==============================
            // Find all comments
            // ==============================

            // get all the comments or the comment list and to do that we need to use " find().toArray() "
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

            // remember the toArray() method will return all the documents in the collection
            // as an array, which is what we want; the find() method alone will not return the
            // all documents in the collection as an array and therefore we can't use the
            // returned documents in our code

            // so we need to find all the documents in the collection and then return those
            // documents in an array format

            // we will use the sort() method to sort the documents in the comments collection
            // and we will sort by using the one of the keys in the document and in our case we
            // will use the _id key and then add the value -1 in order to sort the comments in
            // decending order or in other words the first comment shown on the page will be the
            // latest comment added to the database
            const comments = await commentsCollection
                .find()
                .sort( { _id : -1 } ) // sort in decending order
                .toArray();

            // instead of filtering by event id inside the if statement below we could filter
            // by event id by running the code below:
            /*
            const comments = await commentsCollection
                .find()
                .filter( { eventId : eventId } )
                .sort( { _id : -1 } ) // sort in decending order
                .toArray();
            */

            // ==============================
            // Find the comments for this event
            // ==============================

            // use the filter method to find all the comments that are related to the
            // specified event
            const eventSpecificComments = comments.filter( ( comment ) => (

                comment.eventId === eventId

            ) );

            // ==============================
            // Send back a response that contains the comments array
            // ==============================

            // 200 represents a successful request
            res.status( 200 );

            // and then let's send back to the browser as part of the server response the
            // comments array
            res.json( eventSpecificComments );

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

    } // end of request type - GET

} // end of handler

