
/*
import mongoose from 'mongoose';

// let's create an asynchronous function called " connectDB " and this function will connect
// our application to the database
const connectDB = async () => {

    try {

        // mongoose.connect returns a promise so let's use the await keyword since we
        // are using async await and remember we have a second argument we can pass in
        // which is a set of options 

        // let's connect to the database and pass in an options object
        const connect = await mongoose.connect( process.env.MONGO_URI, {

            // with the current version of Mongoose there are 3 options we need to add
            // otherwise we will get warnings in the console and those 3 options are:
            useUnifiedTopology : true,
            useNewUrlParser    : true,
            useCreateIndex     : true

        } )

        // log out a message in the console
        console.log( `MongoDB Connected: ${ connect.connection.host }` );

    } catch ( error ) {

        // if something goes wrong then let's do a console.error(); and we want to show the
        // error message and MDN said that console.error();: " Outputs an error message to the
        // Web Console. "

        // if we can not connect to the database then log out an error message
        console.error( `Error: ${ error.message }` );

        // and then we need to exit so let's do process.exit( 1 ); and " 1 " indicates that we
        // are exiting with failure

        // to the questions " What is difference between method process.exit(1) and
        // process.exit(0) in node.js? " someone answered in stackoverflow and said: " Node
        // normally exits with a 0 status code when no more async operations are pending. There
        // are other exit codes which are described below: 1 - Uncaught Fatal Exception:
        // There was an uncaught exception, and it was not handled by a domain or an
        // uncaughtException event handler. "

        // exit with an uncaught fatal exception
        process.exit( 1 );

    }

}


export default connectDB;

// and now we need to bring connectDB into our server.js file and let's go to the server.js
// 4 - file now
*/
















// ===============================



















// at the beginning of lecture 18, given all the notes, I created a new file below without
// the notes so we are starting fresh

/*
import mongoose from 'mongoose';

// let's create an asynchronous function called " connectDB " and this function will connect
// our application to the database
const connectDB = async () => {

    try {

        // let's connect to the database and pass in an options object
        const connect = await mongoose.connect( process.env.MONGO_URI, {

            // with the current version of Mongoose there are 3 options we need to add
            // otherwise we will get warnings in the console and those 3 options are:
            useUnifiedTopology : true,
            useNewUrlParser    : true,
            useCreateIndex     : true

        } )


        // 1 -
        // to use colors let's change
        // " console.log( `MongoDB is connected: ${ connect.connection.host }` ); " to
        // " console.log( `MongoDB is connected: ${ connect.connection.host }`.cyan.underline ); "

        // and let's change " console.error( `Error: ${ error.message }` ); " to
        // " console.error( `Error: ${ error.message }`.red.underline.bold ); "
        // End of 1 -


        // log out a message in the console
        console.log( `MongoDB is connected: ${ connect.connection.host }`.cyan.underline );

    } catch ( error ) {

        // if we can not connect to the database then log out an error message
        console.error( `Error: ${ error.message }`.red.underline.bold );

        // exit with an uncaught fatal exception
        process.exit( 1 );

    }

}


export default connectDB;
*/


















// ===============================


















// const mongoose = require( 'mongoose' );
import mongoose from 'mongoose';
// import in colors
import colors from 'colors';


// let's create an asynchronous function called " connectDB " and this function will connect
// our application to the database
const connectDB = async () => {

    try {

        // let's connect to the database and pass in an options object
        const connect = await mongoose.connect( process.env.MONGO_URI, {

            // with the current version of Mongoose there are 3 options we need to add
            // otherwise we will get warnings in the console and those 3 options are:
            useUnifiedTopology : true,
            useNewUrlParser    : true,
            useCreateIndex     : true

        } )

        // log out a message in the console and use the colors.js package at the end
        console.log( `MongoDB is connected: ${ connect.connection.host }`.cyan.underline );

    } catch ( error ) {

        // if we can not connect to the database then log out an error message
        // and use the colors.js package at the end
        console.error( `Error: ${ error.message }`.red.underline.bold );

        // exit with an uncaught fatal exception
        process.exit( 1 );

    }

}


// module.export = connectDB;
export default connectDB;

