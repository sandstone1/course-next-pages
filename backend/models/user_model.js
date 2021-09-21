
/*
import mongoose from 'mongoose';


// 1 - continued
import bcrypt from 'bcryptjs';

// End of 1 -


// create a user schema

// from https://mongoosejs.com/docs/schematypes.html: " You can think of a Mongoose schema as
// the configuration object for a Mongoose model. "
const userSchema = mongoose.Schema(

    // inside the object let's define the fields for a user
    {
        name : {
            type     : String,
            required : true
        },

        email : {
            type     : String,
            required : true,
            unique   : true
        },

        password : {
            type     : String,
            required : true
        },

        isAdmin : {
            type     : Boolean,
            required : true,
            default  : false
        }

    },

    // we also want to have a createdAt field and an updatedAt field and we can do that by
    // creating a second object inside mongoose.Schema(); and inside the second object we will
    // set the following key value pair: " timestamps : true " and this will create the
    // createdAt field and the updatedAt field automatically
    {

        timestamps : true

    }

);


// 1 -
// coming from the user.controller.js 2 - file
// we want to create a method to compare the password that was entered by the user with the
// password that is in the database

userSchema.methods.matchPassword = async function( enteredPassword ) {

    // and now let's use bcrypt to compare the enteredPassword or the plain text password with
    // the database password or the encrypted password but first let's import in bcrypt above    
    return await bcrypt.compare( enteredPassword, this.password );

    // and remember this.password allows us to call matchPassword on the specified user document
    // or reference the correct user document in the database and then we can access that user's
    // password in the database with " this.password "

    // and from the Mongoose website: " Methods and Statics - Each Schema can define instance
    // and static methods for its model. "

    // from a blog: " Instance methods are methods that perform some action on a specific
    // instance of a Model rather than the entire Model itself. Methods that perform some
    // action on the entire Model are known as static methods. Static methods are also come
    // in handy in their own share of situations but if you’re looking for some functionality
    // on an individual database entry itself then you’ll be wanting to deal with instance
    // methods.

    // If the word ‘Instance’ is confusing you, just think about an Instance as a single
    // document because that what it really is. The term instance is common programming
    // terminology but it’s important to not get too wrapped up in terminology and more
    // important to understand the concept. "

    // and now let's use " matchPassword " in the user.controller.js 3 - file and let's
    // go to that file now

} 

// End of 1 -


// create a model by passing in the name of the model and the schema above

// and we will name the model in the first argument or " User " and we will pass in the
// userSchema as the second argument to mongoose.model();

// and remember MongoDB will create a collection based on pluralizing the name of the first
// argument below so MongoEB will create a collection called " Users "
const User = mongoose.model( 'User', userSchema );

// export our model
export default User;

// now let's go to the product.model.js file
*/























// ===============================

























/*
// at the beginning of lecture 38, given all the notes, I created a new file below without
// the notes so we are starting fresh

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';


// create a user schema

// from https://mongoosejs.com/docs/schematypes.html: " You can think of a Mongoose schema as
// the configuration object for a Mongoose model. "
const userSchema = mongoose.Schema(

    // inside the object let's define the fields for a user
    {
        name : {
            type     : String,
            required : true
        },

        email : {
            type     : String,
            required : true,
            unique   : true
        },

        password : {
            type     : String,
            required : true
        },

        isAdmin : {
            type     : Boolean,
            required : true,
            default  : false
        }

    },

    // we also want to have a createdAt field and an updatedAt field and we can do that by
    // creating a second object inside mongoose.Schema(); and inside the second object we will
    // set the following key value pair: " timestamps : true " and this will create the
    // createdAt field and the updatedAt field automatically
    {

        timestamps : true

    }

);


// create a method to compare the password that was entered by the user with the
// password that is in the database
userSchema.methods.matchPassword = async function( enteredPassword ) {

    // and now let's use bcrypt to compare the enteredPassword or the plain text password with
    // the database password or the encrypted password
    return await bcrypt.compare( enteredPassword, this.password );

    // and remember this.password allows us to call matchPassword on the specified user document
    // or reference the correct user document in the database and then we can access that user's
    // password in the database with " this.password "

    // and from the Mongoose website: " Methods and Statics - Each Schema can define instance
    // and static methods for its model. "

    // from a blog: " Instance methods are methods that perform some action on a specific
    // instance of a Model rather than the entire Model itself. Methods that perform some
    // action on the entire Model are known as static methods. Static methods are also come
    // in handy in their own share of situations but if you’re looking for some functionality
    // on an individual database entry itself then you’ll be wanting to deal with instance
    // methods.

    // If the word ‘Instance’ is confusing you, just think about an Instance as a single
    // document because that what it really is. The term instance is common programming
    // terminology but it’s important to not get too wrapped up in terminology and more
    // important to understand the concept. "

}


// 2 -
// coming from the user.routes.js 4 - file

// let's create a middleware function that encrypts the password before we save a user's
// password to the database

// in the node auth tutorial from the net ninja we did the following:

/*
// fire a function before a document is saved to the database
userSchema.pre( 'save', async function( next ) {

    const salt = await bcrypt.genSalt();

    this.password = await bcrypt.hash( this.password, salt );

    next();

} );
*/

/*
// before we save a new user in the database we want to encrypt the password 
userSchema.pre( 'save', async function( next ) {

    // first let's check to see if the password field has been modified and we can do that in
    // Mongoose by doing " this.isModified( 'password' ) "
    if ( !this.isModified( 'password' ) ) {

        // and if this field has not been modified then we just want to call next();
        next();

    }

    // if the password field has been modified then we will run the following 2 lines of
    // code:

    // then create the salt and we need the salt to hash the password and let's use 10 as
    // the number of rounds and from stackoverflow: " With "salt round" they actually mean
    // the cost factor. The cost factor controls how much time is needed to calculate a
    // single BCrypt hash. The higher the cost factor, the more hashing rounds are done. "
    const salt = await bcrypt.genSalt( 10 );

    // start with " this.password " and this.password references to the user that we are
    // creating and the password is the password that they entered into the registration
    // form so were taking the plain text password and adding the salt and then hashing
    // this combination, which results in a hashed password and then we will save that
    // hashed password in the database
    this.password = await bcrypt.hash( this.password, salt );

} );

// let's go back to the user.routes.js 5 - file now

// End of 2 -


// create a model by passing in the name of the model and the schema above

// and we will name the model in the first argument or " User " and we will pass in the
// userSchema as the second argument to mongoose.model();

// and remember MongoDB will create a collection based on pluralizing the name of the first
// argument below so MongoEB will create a collection called " Users "
const User = mongoose.model( 'User', userSchema );

// export our model
export default User;
*/























// ===============================


























// at the beginning of lecture 38, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in mongoose
import mongoose from 'mongoose';
// import in bcrypt
import bcrypt from 'bcryptjs';


// create a user schema

// from https://mongoosejs.com/docs/schematypes.html: " You can think of a Mongoose schema as
// the configuration object for a Mongoose model. "
const userSchema = mongoose.Schema(

    // inside the object let's define the fields for a user
    {

        name : {
            type     : String,
            required : true
        },

        email : {
            type     : String,
            required : true,
            unique   : true
        },

        password : {
            type     : String,
            required : true
        },

        isAdmin : {
            type     : Boolean,
            required : true,
            default  : false
        }

    },

    // we also want to have a createdAt field and an updatedAt field and we can do that by
    // creating a second object inside mongoose.Schema(); and inside the second object we will
    // set the following key value pair: " timestamps : true " and this will create the
    // createdAt field and the updatedAt field automatically
    {

        timestamps : true

    }

);


// create a method to compare the password that was entered by the user with the
// password that is in the database
userSchema.methods.matchPassword = async function( enteredPassword ) {

    // and now let's use bcrypt to compare the enteredPassword or the plain text password with
    // the database password or the encrypted password
    return await bcrypt.compare( enteredPassword, this.password );

    // and remember this.password allows us to call matchPassword on the specified user document
    // or reference the correct user document in the database and then we can access that user's
    // password in the database with " this.password "

    // and from the Mongoose website: " Methods and Statics - Each Schema can define instance
    // and static methods for its model. "

    // from a blog: " Instance methods are methods that perform some action on a specific
    // instance of a Model rather than the entire Model itself. Methods that perform some
    // action on the entire Model are known as static methods. Static methods are also come
    // in handy in their own share of situations but if you’re looking for some functionality
    // on an individual database entry itself then you’ll be wanting to deal with instance
    // methods.

    // If the word ‘Instance’ is confusing you, just think about an Instance as a single
    // document because that what it really is. The term instance is common programming
    // terminology but it’s important to not get too wrapped up in terminology and more
    // important to understand the concept. "

}


// before we save a new user in the database we want to encrypt the password 
userSchema.pre( 'save', async function( next ) {

    // first, let's check to see if the password field has been modified and we can do that in
    // Mongoose by doing " this.isModified( 'password' ) "
    if ( !this.isModified( 'password' ) ) {

        // and if this field has not been modified then we just want to call next();
        next();

    }

    // if the password field has been modified then we will run the following 2 lines of
    // code:

    // create the salt
    const salt = await bcrypt.genSalt( 12 );

    // create the hashed password
    this.password = await bcrypt.hash( this.password, salt );

} );


// create a model by passing in the name of the model and the schema above

// and we will name the model in the first argument or " User " and we will pass in the
// userSchema as the second argument to mongoose.model();

// and remember MongoDB will create a collection based on pluralizing the name of the first
// argument below so MongoEB will create a collection called " Users "

// in next.js I was getting error saying the User model already exist so I had to add
// " mongoose.models.User " in order to check and see if the User model already exist
// and if so then don't create a second User model but if the User model does not exist
// then create the User model by doing " mongoose.model( 'User', userSchema ) "
const User = mongoose.models.User || mongoose.model( 'User', userSchema );

// export our model
export default User;
