

// import in the connectDB function, which will connect our application to the database
import connectDB from '../../config/db_mongoose';
// import in the User model
import User from '../../models/user_model';

// connect to the database
connectDB();


// ==============================
// Register user and then save their information in the database
// ==============================

// @desc    - Register or sign up a new user
// @route   - POST request to /api/user/register-mongoose
// @access  - Public route

// req = HTTP incoming message, res = HTTP server response
export const userRegisterController = async ( req, res ) => {

    // destructure the name, email and password
    const { name, email, password } = req.body;

    // if we find the user document in the database with an email that matches the email above
    // then we know that the user entered an email that is already registered
    const userExists = await User.findOne( { email : email } );

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

        // throw new Error( 'User aleady exists. Please try again.' );

    }


    /*
    // ==============================
    // Create the hashed password
    // ==============================

    // create the hashed password to store in the database and we get that by running the
    // hashedPassword function and using the user generated plain text password as the
    // argument
    const hashedPassword = await hashedPassword( password );
    */
    

    // ==============================
    // Create a new user document in the database
    // ==============================

    // let's use the create(); method to add a user to the database and add the properties
    // and values that we want to add to the user document in the database
    const user = await User.create(

        {
            name     : name,
            email    : email,
            password : password
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
                isAdmin : user.isAdmin,
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

    }

}; // end of userRegisterController


