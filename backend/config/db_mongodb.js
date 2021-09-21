
/*
// 1 -

// first, install the mongodb package

// #11
// mongodb:
// " Home@Rogers-iMac next_auth % npm i mongodb " and this will install mongodb into
// our application
// lecture 231: Sending a "Change Password" Request From The Frontend

// we will use the mongodb package to connect to our mongodb database

// import in MongoClient
import { MongoClient } from 'mongodb';

// MongoClient will help us establish a connection to the database

// import in colors
import colors from 'colors';

// create our connectToDatabase function
export async function connectToDatabase() {

    try {

        // use MongoClient to call the connect method and inside the connect method we will pass in
        // our database string from MongoDB and then save the result to the const " client "
        const client = await MongoClient.connect( process.env.MONGO_URI, {

            // I was getting an error message that said " To use the new Server Discover and
            // Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient
            // constructor. "
            useUnifiedTopology : true

        } );

        // log out a message in the console and use the colors.js package at the end
        console.log( 'MongoDB is connected'.cyan.underline );

        // then return " client " so that when we call connectToDatabase() we get the client
        return client;

    } catch ( error ) {

        // if we can not connect to the database then log out an error message
        // and use the colors.js package at the end
        console.error( `Error: ${ error.message }`.red.underline.bold );

        // exit with an uncaught fatal exception
        process.exit( 1 );

    }

} // end of connectToDatabase()

// End of 1 -
*/


















// ===============================





















// at the beginning of tutorial 231, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in MongoClient
import { MongoClient } from 'mongodb';
// import in colors
import colors from 'colors';


// create our function
export async function connectToDatabase() {

    try {

        // the MongoClient will help us establish a connection to the database and use
        // MongoClient to call the connect method and inside the connect method we will pass in
        // our database string from MongoDB and then pass in a configuration object and then
        // save the result to the const " client "
        const client = await MongoClient.connect( process.env.MONGO_URI, {

            // I was getting an error message that said " To use the new Server Discover and
            // Monitoring engine, pass option { useUnifiedTopology : true } to the MongoClient
            // constructor. "
            useUnifiedTopology : true

        } );

        // log out a message in the console and use the colors.js package at the end
        console.log( 'MongoDB is connected'.cyan.underline );

        // then return " client " so that when we call connectToDatabase() we get the client
        return client;

    } catch ( error ) {

        // if we can not connect to the database then log out an error message and use
        // the colors.js package at the end
        console.error( `Error: ${ error.message }`.red.underline.bold );

        // exit with an uncaught fatal exception
        process.exit( 1 );

    } // end of try catch

} // end of connectToDatabase()

