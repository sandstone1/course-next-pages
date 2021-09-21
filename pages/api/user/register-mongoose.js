

// import in next connect
import nc from 'next-connect';
// import in the controller function
import { userRegisterController } from '../../../backend/controllers/user/register';


// create our serverless function
// the endpoint: api/user/register
const handler = nc()
    // apply middleware
    // .use(  )
    // apply GET, POST, UPDATE and DELETE requests
    // in this case, the client made a POST request to register a new user or create a new
    // user resource in the database
    .post( userRegisterController );


export default handler;

