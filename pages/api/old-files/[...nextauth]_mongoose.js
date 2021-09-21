
/*
// 1 -

// so how do we use next auth? first, we need to
// import in next auth
import NextAuth from 'next-auth';
// import in Providers
import Providers from 'next-auth/providers';
// import in the connectDB function, which will connect our application to the database
import connectDB from '../../../backend/config/db';
// import in the User model
import User from '../../../backend/models/user_model';

// connect to the database
connectDB();


// and when we call NextAuth(); then next auth will create and return a handler function
// and we need this handler function because this is still an api route and when we call
// NextAuth we can pass in a configuration object and this object will allow us to config
// NextAuth's behavior

// in our case we want to set the providers option and set it equal to an array and then
// make sure we import Providers above

// and when we do " Providers. " we see a pop up window that shows all the providers
// like Apple, Facebook, Google and Linked, for example, and refer to the next auth
// docs for more information on how to set up different providers

// and we will use the Credentials provider which means that we will use our own credentials
// and from the next auth docs: " The Credentials provider allows you to handle signing in
// with arbitrary credentials, such as a username and password, domain, or two factor
// authentication or hardware device (e.g. YubiKey U2F / FIDO). "

// and the Credentials provider takes a configuration object itself and inside the
// configuration object we can configure a couple things but the only thing we need to set
// here is authorize and authorize is a method and next.js will call this method for us
// when it receives an incoming signin request

// and authorize is an async function so it returns a promise and as an argument we will
// pass in the credentials that were submitted and this argument is an object with the data
// that was submitted when a user signs in and in our case that will be:

/*
    {
        email    : email,
        password : password
    }
*/

// End of 1 -

// go to 2 - below
/*
export default NextAuth(

    {

        // 4 -
        // to make sure that a JWT is created let's go to the NextAuth() {} configuration
        // object and besides setting up our providers ( see below ) let's add the session
        // object below

        // the session object will allow us to config how the session for the authenticated
        // user will be managed and inside the session object set the jwt key to true so that
        // we indicate to next auth that json web tokens are being used

        // from the docs:

        /*
            "Default values for this option are shown below:

            session: {
                // Use JSON Web Tokens for session instead of database sessions.
                // This option can be used with or without a database for users/accounts.
                // Note: `jwt` is automatically set to `true` if no database is specified.
                jwt: false,

                // Seconds - How long until an idle session expires and is no longer valid.
                maxAge: 30 * 24 * 60 * 60, // 30 days

                // Seconds - Throttle how frequently to write to database to extend a session.
                // Use it to limit write operations. Set to 0 to always update the database.
                // Note: This option is ignored if using JSON Web Tokens
                updateAge: 24 * 60 * 60, // 24 hours
            }
        */

        // for other authentication providers we have other ways to manage the session object,
        // for example, we could indicate to next auth that the session object be stored in
        // a database but for credential based authentication we must use JWTs

        // and remember we are not specifying a database because we are handling all
        // database access manually

        // and this is our backend or authentication route using next auth
        /*
        session : {

            jwt : true,

        },

        // End of 4 -

        providers : [

            Providers.Credentials(

                {
                
                    async authorize( credentials ) {
                        
                        // 2 -
                        // inside this function we have bring in our own authorization logic
                        // and in the process check and see if the credentials are valid
                        // and next we want to connect to the database and import in the
                        // connectDB function

                        // and now we want to find out if the entered email matches an email that
                        // is in the database and then find out if the entered password matches the
                        // password in the database that is associated with that email

                        // and remember we will set the user credentials on the frontend and then
                        // send those credentials to the backend as part of the client request 

                        // 3 -
                        // **
                        // take out 2 lines of code below
                        // destructure the email and password from req.body
                        // const { email, password } = req.body;
                        // **
                        // End of 3 -

                        // if we find the user document in the database with an email that matches
                        // the email credentials then we know that the user entered a valid email

                        // and then we want to retrieve the corresponding user document and save
                        // that user document to the const " user "
                        const user = await User.findOne( { email : credentials.email } );

                        // now let's check to see if the user exists and if the user exists then
                        // " user " will be true

                        // and then check to see if we were able to find a password match in the
                        // database or a password in the database that matches the password
                        // credentials and we can check to see if the passwords match by using the
                        // matchPassword(); method from the user_model.js file or
                        // " user.matchPassword( password ) " and if this evaluates to true then
                        // we know we have a password match
                        if ( user && ( await user.matchPassword( credentials.password ) ) ) {

                            // 3 -
                            // **
                            // think about removing the following 4 lines of code
                            // set token below to equal " generateToken( user._id ) " and now the token will
                            // equal a jwt that has a payload of user._id and a secret that is stored in
                            // our .env file and an options object that has the following key value pair
                            // " expiresIn : '30d' "
                            // **
                            // End of 3 -

                            // ==============================
                            // Emails match
                            // ==============================

                            // and

                            // ==============================
                            // Passwords match
                            // ==============================

                            // now that the emails and passwords match, let's return an object and
                            // in next auth we just return an object versus sending back a server
                            // response and using the json data transfer format to send that
                            // response

                            // and remember in this case, authorization succeeded

                            // and with next auth the object below will be encoded into the JWT

                            // and remember we don't return the password, even though it is hashed
                            // because we don't want to expose the password to the client 
                            return { email : user.email };

                            // and now let's go to 4 - above
                        
                        }

                        // if the emails don't match or the passwords don't match or both the
                        // emails and the passwords don't match then we'll throw an error
                        // that says " Invalid email and / or password. "
                        else {

                            // ==============================
                            // Emails don't match
                            // ==============================

                            // and / or

                            // ==============================
                            // Passwords don't match
                            // ==============================

                            // comment out when using next auth
                            // res.status( 401 );

                            // if we have an error inside the authorize() function then we want
                            // to throw an error or " throw new Error(); "
                            throw new Error( 'You have entered an invalid email and / or password. Please try again.' );

                        } // end of if else

                    } // end of async authorize( credentials ) {}

                } // end of Providers.Credentials({})

            ) // end of Providers.Credentials()

        ] // end of providers : []

    } // end of export default NextAuth() {}

); // end of export default NextAuth()



// End of 2 -
*/


















// ===============================





















// ==============================
// THIS FILE IS USING MONGOOSE
// ==============================

// ==============================
// THIS FILE WORKS
// ==============================

// at the beginning of tutorial 224, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in next auth
import NextAuth from 'next-auth';
// import in CredentialsProvider
import CredentialsProvider from 'next-auth/providers/credentials';
// import in the connectDB function, which will connect our application to the database
import connectDB from '../../../backend/config/db_mongoose';
// import in the User model
import User from '../../../backend/models/user_model';

// connect to the database
connectDB();


// and when we call NextAuth(); then next auth will create and return a handler function
// and we need this handler function because this is still an api route and when we call
// NextAuth we can pass in a configuration object and this object will allow us to config
// NextAuth's behavior

// in our case we want to set the providers option and set it equal to an array and then
// make sure we import Providers above

// and when we do " Providers. " we see a pop up window that shows all the providers
// like Apple, Facebook, Google and Linked, for example, and refer to the next auth
// docs for more information on how to set up different providers

// and we will use the Credentials provider which means that we will use our own credentials
// and from the next auth docs: " The Credentials provider allows you to handle signing in
// with arbitrary credentials, such as a username and password, domain, or two factor
// authentication or hardware device (e.g. YubiKey U2F / FIDO). "

// and the Credentials provider takes a configuration object itself and inside the
// configuration object we can configure a couple things but the only thing we need to set
// here is authorize and authorize is a method and next.js will call this method for us
// when it receives an incoming signin request

// and authorize is an async function so it returns a promise and as an argument we will
// pass in the credentials that were submitted and this argument is an object with the data
// that was submitted when a user signs in and in our case that will be:

/*
    {
        email    : email,
        password : password
    }
*/


export default NextAuth(

    {

        // to make sure that a JWT is created let's go to the NextAuth() {} configuration
        // object and besides setting up our providers ( see below ) let's add the session
        // object below

        // the session object will allow us to config how the session for the authenticated
        // user will be managed and inside the session object set the jwt key to true so that
        // we indicate to next auth that json web tokens are being used

        // from the docs:

        /*
            "Default values for this option are shown below:

            session: {
                // Use JSON Web Tokens for session instead of database sessions.
                // This option can be used with or without a database for users/accounts.
                // Note: `jwt` is automatically set to `true` if no database is specified.
                jwt: false,

                // Seconds - How long until an idle session expires and is no longer valid.
                maxAge: 30 * 24 * 60 * 60, // 30 days

                // Seconds - Throttle how frequently to write to database to extend a session.
                // Use it to limit write operations. Set to 0 to always update the database.
                // Note: This option is ignored if using JSON Web Tokens
                updateAge: 24 * 60 * 60, // 24 hours
            }
        */

        // for other authentication providers we have other ways to manage the session object,
        // for example, we could indicate to next auth that the session object be stored in
        // a database but for credential based authentication we must use JWTs

        // and remember we are not specifying a database because we are handling all
        // database access manually

        // and this is our backend or authentication route using next auth
        session : {

            jwt : true,

        },

        providers : [

            CredentialsProvider(

                {

                    async authorize( credentials ) {

                        // inside this function we have bring in our own authorization logic
                        // and in the process check and see if the credentials are valid
                        // and next we want to connect to the database and import in the
                        // connectDB function

                        // and now we want to find out if the entered email matches an email that
                        // is in the database and then find out if the entered password matches the
                        // password in the database that is associated with that email

                        // and remember we will set the user credentials on the frontend and then
                        // send those credentials to the backend as part of the client request 

                        // **
                        // take out 2 lines of code below
                        // destructure the email and password from req.body
                        // const { email, password } = req.body;
                        // **

                        // if we find the user document in the database with an email that matches
                        // the email credentials then we know that the user entered a valid email

                        // and then we want to retrieve the corresponding user document and save
                        // that user document to the const " user "
                        const user = await User.findOne( { email : credentials.email } );

                        // now let's check to see if the user exists and if the user exists then
                        // " user " will be true

                        // and then check to see if we were able to find a password match in the
                        // database or a password in the database that matches the password
                        // credentials and we can check to see if the passwords match by using the
                        // matchPassword(); method from the user_model.js file or
                        // " user.matchPassword( password ) " and if this evaluates to true then
                        // we know we have a password match
                        if ( user && ( await user.matchPassword( credentials.password ) ) ) {

                            // 3 -
                            // **
                            // think about removing the following 4 lines of code
                            // set token below to equal " generateToken( user._id ) " and now the token will
                            // equal a jwt that has a payload of user._id and a secret that is stored in
                            // our .env file and an options object that has the following key value pair
                            // " expiresIn : '30d' "
                            // **
                            // End of 3 -

                            // ==============================
                            // Emails match
                            // ==============================

                            // and

                            // ==============================
                            // Passwords match
                            // ==============================

                            // now that the emails and passwords match, let's return an object and
                            // in next auth we just return an object versus sending back a server
                            // response and using the json data transfer format to send that
                            // response

                            // and remember in this case, authorization succeeded

                            // and with next auth the object below will be encoded into the JWT

                            // ==============================
                            // Authentication was successful
                            // ==============================

                            // ==============================
                            // { name : user.name, email : user.email } will be encoded into the JWT
                            // ==============================

                            // and remember we don't return the password, even though it is hashed
                            // because we don't want to expose the password to the client 
                            return {
                                name  : user.name,
                                email : user.email
                            };

                        }

                        // if the emails don't match or the passwords don't match or both the
                        // emails and the passwords don't match then we'll throw an error
                        // that says " You have entered an invalid email and / or password.
                        // Please try again. "
                        else {

                            // ==============================
                            // Emails don't match
                            // ==============================

                            // and / or

                            // ==============================
                            // Passwords don't match
                            // ==============================

                            // comment out res.status( 401 ); when using next auth
                            // res.status( 401 );

                            // if we have an error inside the authorize() function then we want
                            // to throw an error or " throw new Error(); "
                            throw new Error( 'You have entered an invalid email and / or password. Please try again.' );

                        } // end of if else

                    } // end of async authorize( credentials ) {}

                } // end of Providers.Credentials({})

            ) // end of Providers.Credentials()

        ] // end of providers : []

    } // end of export default NextAuth() {}

); // end of export default NextAuth()


