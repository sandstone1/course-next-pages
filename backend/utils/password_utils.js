
// import in the hash function
import bcrypt from 'bcryptjs';

export async function hashPassword( password ) {

    // call hash on the user generated plain text password and then pass in the number of
    // salting rounds and remember the higher the number the stronger the password and the
    // longer the function will take to run and 12 is considered a good number
    const hashedPassword = await bcrypt.hash( password, 12 );

    // return the hashed password
    return hashedPassword;

} // end of hashedPassword


export async function verifyPassword( password, hashedPassword ) {

    // bcrypt will compare the entered password or plain text password with the
    // database password or encrypted password and this will result in either true or
    // false and then we will save this boolean value to the const " passwordsAreEqual "
    // and then return that boolean value
    const passwordsAreEqual = await bcrypt.compare( password, hashedPassword );

    // return passwordsAreEqual
    return passwordsAreEqual;

} // end of verifyPassword

