


// ==============================
// USING THE USESWR(); HOOK
// ==============================

// remember the url path for this file is " http://localhost:3016/section-5/user-list "

// import the useEffect(); hook
import { Fragment, useEffect, useState } from 'react';
// import in the Link component
import Link from 'next/link';
// import in axios
import axios from 'axios';
// import in the swr hook
import useSWR from 'swr';
// import in the getSession hook
import { getSession } from 'next-auth/react';
// import in the connectToDatabase function
import { connectToDatabase } from '../../backend/config/db_mongodb';
// use the Meta component to specify a title for this page
import Meta from '../../components/meta/meta';
// import in the ErrorMessage component
import ErrorMessage from '../../components/error-message/em-user-list-page';
// import in the Spinner component
import Spinner from '../../components/spinner/spinner';
// import in our stylesheet
import styles from './user-list.module.scss';


export default function UserListPage( props ) {

    // ==============================
    // destructure props
    // ==============================

    const { 
        userList,
        hasErrorSession,
        hasErrorDatabase,
        hasErrorUsers
    } = props;

    // ==============================
    // component state
    // ==============================

    // use userList from getStaticProps as our initial state and then this initial state
    // will be overridden by client side data fetching as needed
    const [ users, setUsers ]                               = useState( userList );
    const [ frontendErrorMessage, setFrontendErrorMessage ] = useState( '' );

    // for testing purposes
    console.log( users );

    // ==============================
    // useRef();
    // ==============================

    // ==============================
    // useRouter();
    // ==============================

    // ==============================
    // useSession();
    // ==============================

    // ==============================
    // initialize the context
    // ==============================

/* // 6 - turn the useSWR(); hook and use the fetch API instead

    // ==============================
    // useSWR();
    // ==============================

    // remember: useSWR hook has to be top level

    // create our endpoint
    const endpoint = '/api/user/user-list-mongodb';

    // create our data object

    // create our config object

    // create fetcher and this returns res.data or data
    async function fetcher( url ) {

        const { data } = await axios.get(
            url
        );
        
        return data;

    } // end of fetcher

    // destructure data and error from the useSWR hook
    const { data, error } = useSWR( endpoint, fetcher );

    // check for an error
    if ( error ) {
        
        return (

            <ErrorMessage>
                An error has occurred.
            </ErrorMessage>

        );

    }; // end of if

    // check for no data and no userList
    if ( !data && !userList ) return <Spinner />;

    // remember to add in the useEffect hook to handle " data "
    useEffect( () => {

        // make sure we have data
        if ( data ) {

            setUsers( data );

        }

    // rerender every time data changes
    }, [ data ] );

    // ==============================
    // end of useSWR();
    // ==============================

*/ // 6 - turn the useSWR(); hook and use the fetch API instead

    // and since we have already defined the userList array in getStaticProps we will bypass
    // the Spinner component and remember we initialized our component level state with
    // the pre fetched data or the pre fetched userList array

    // and then when this component runs in the client it will use the useSWR(); hook to
    // fetch the lastest data

    // with this pattern we get the benefits of pre rendering data with next.js and the benefits
    // of client side data fetching with the useSWR(); hook

    // and now if we test this out and go to " http://localhost:3016/section-5/user-list "
    // and reload the page we no longer see the Spinner component and this is correct
    // so everything is working as expected

    // and if we view the page source, we see:

    /*
        <main>
            <div class="user-list_userListPageContainer__2N6nQ">
                <div class="user-list_userListPageContainerDiv1__1qa8Y">
                    <ul>
                        <li>John Doe</li>
                        <li>Ted N</li>
                        <li>Sally R</li>
                        <li>Michael Ballard</li>
                        <li>Harrison Ford</li>
                        <li>Christopher Newland</li>
                    </ul>
                </div>
            </div>
        </main>
    */

    // and this is correct so everything is working as expected

    // so now we see our data and this is great for seo

    // and if the data changes after our initial page load then we will see the updated
    // data in the page ( due to client side data fetching ) but we will not see the
    // updated data in the page source

    // combining pre rendering with client side data fetching can sometimes lead to the
    // best possible user experience because we have data right from the start and then
    // we can update the data as needed from inside the browser or client

// 5 - use the number 5 market to use the useSWR(); hook instead of the fetch API and
// remember to erase #7 below

    // ==============================
    // useEffect();
    // ==============================

    useEffect( () => {

        const getData = async () => {

            // ==============================
            // fetch API
            // ==============================

            // STEP 1
            // create our endpoint
            const endpoint = `/api/user/user-list-mongodb`;

            // create our data object

            // create our config object

            // STEP 2
            // make the fetch request and save the result to the const called res
            const res = await fetch(
                endpoint,
                {
                    method : 'GET'
                }
            );

            // STEP 3
            // first, check to see if there is a request error
            if ( !res.ok ) {

                // set the error message
                setFrontendErrorMessage( `Something went wrong. Please close this message to go back to the home page.` );

            } else {

                // STEP 4
                // the fetch request above returns a response object and then we can apply the
                // json(); method to the reponse object and this will convert the response
                // object into a JavaScript object that we can use and we will call this JavaScript
                // object " data " and the data object in this case is the users array
                const data = await res.json();

                // STEP 5
                // set the component state
                setUsers( data );

            }

            // ==============================
            // end of fetch API
            // ==============================

/* // 7 - turn off axios

            // ==============================
            // axios
            // ==============================
        
            // STEP 1
            // create our endpoint
            const endpoint = `/api/user/user-list-mongodb`;

            // create our data object

            // create our config object

            // STEP 2
            // make a request to the above endpoint and after making the request axios
            // will return a response object and we can then destructure the data object
            // off of the response object and the data object in this case is the users
            // array
            const { data } = await axios.get( endpoint );
    
            // STEP 3
            // set the component state
            setUsers( data );

            // ==============================
            // end of axios
            // ==============================

*/ // 7 - turn off axios

        }

        // call getData
        getData();

        // anytime the userList array changes, fetch or axios will make a request
        // to the api endpoint and updata the data object, thereby updating state

    }, [ users ] ); // end of useEffect

// 5 - use the number 5 market to use the useSWR(); hook instead of the fetch API and
// remember to erase #7 above

    // ==============================
    // if I change the data in the database; for example, if I change " Sally R " to
    // " Sally Roe " then the data will be automatically updated on the screen when
    // using the useSWR(); hook
    // ==============================

    // ==============================
    // if I change the data in the database; for example, if I change " Sally R " to
    // " Sally Roe " then the data will be automatically updated on the screen when
    // using the fetch API
    // -----------
    // remember if I change the data in the database then the getServerSideProps function
    // will update the page source automatically and props.userList will automatically
    // update as well but we need some way to trigger an update in the browser and we
    // can use the useEffect(); hook and the fetch API as detailed above to trigger the
    // data update in the browser 
    // ==============================

    // ==============================
    // if I change the data in the database; for example, if I change " Sally R " to
    // " Sally Roe " then the data will be automatically updated on the screen when
    // using axios
    // ==============================

    // ==============================
    // error handling
    // ==============================

    if ( hasErrorSession ) {
        
        return (

            // set the error message
            <ErrorMessage>
                Not authenticated. Please <Link href="/signin"><a style={ { color : 'rgba( 52, 58, 64, 1 )', textDecoration : 'underline' } }>sign in</a></Link> and then try again.
            </ErrorMessage>

        );

    }

    if ( hasErrorDatabase ) {

        return (

            // set the error message
            <ErrorMessage>
                Bad database connection.  Please close this message to go back to the home page.
            </ErrorMessage>

        );

    }

    if ( hasErrorUsers ) {

        return (

            // set the error message
            <ErrorMessage>
                A list of users was not found.  Please close this message to go back to the home page.
            </ErrorMessage>

        );

    }

    /* // 3

    // ==============================
    // reference - frontendErrorMessage handling
    // ==============================

    // for this page, instead of resetting the frontendErrorMessage, I decided it would be
    // best to redirect the user to the home page within the error message component

    // however, the code below works and is a good reference going forward

    // ==============================
    // code snippet 1
    // ==============================

    // ==============================
    // handleFrontendErrorMessage function
    // ==============================

    const handleFrontendErrorMessage = () => {

        // set frontend error message to an empty string and this is working
        // setFrontendErrorMessage( '' );

    }; // end of handleFrontendErrorMessage

    // ==============================
    // code snippet 2
    // ==============================

    <ErrorMessage
        onErrorMessageClose={ handleFrontendErrorMessage }
    >
        { frontendErrorMessage }
    </ErrorMessage>

    // ==============================
    // code snippet 3
    // ==============================

    // this code works!

    // after closing the error message, call the handleFrontendErrorMessage function,
    // which will clear the frontendErrorMessage state
    onErrorMessageClose();

    */ // 3


    return (

        <Fragment>

            {
                frontendErrorMessage ? (

                    <ErrorMessage>
                        { frontendErrorMessage }
                    </ErrorMessage>

                ) : (

                    <div className={ styles.userListPageContainer }>

                        <Meta title="Last Sales Page" />

                        <div className={ styles.userListPageContainerDiv1 }>

                            <ul>
                                {
                                    users.map( ( user ) => (

                                        <li
                                            key={ user._id }
                                        >
                                            { user.name }
                                        </li>

                                    ) )
                                }
                            </ul>

                        </div>

                    </div>

                )

            }

        </Fragment>

    );

} // end of UserListPage


// now we want to prepare some data on the server and we use getServerSideProps so that
// we can get access to the request object

// ==============================
// getServerSideProps
// ==============================

export async function getServerSideProps( context ) {

    // remember that internal APIs are part of the project so what we should do in these
    // cases is write the api logic inside getStaticProps or getServerSideProps

    // therefore, we need to bring in our api code from " api/user/user-list-mongodb "
    // into getServerSideProps and then modify it slightly

    // ==============================
    // require authentication and protect API route
    // ==============================

    // in this function we want to get a list of all the users from the database and we
    // want to verify that the request is coming from an authenticated user

    // @desc    - GET all users
    // @route   - GET request to /api/user/user-list-mongodb ( assuming we're working in the
    // backend )
    // @access  - Private route

    // to access this route the user needs one thing: the user needs authorization and
    // authorization is determined based on having an active session or a valid session
    // object

    // ==============================
    // use getSession and authenticate the user
    // ==============================

    // we want to use the getSession(); hook and remember this hooks runs on the
    // client and the server and we want to check and see if we can get a valid session object
    // and remember we need to pass in a configuration object to the getSession(); hook and
    // inside the configuration object we will set req equal to context.req

    // and the getSession hook needs the req argument because getSession will look into the
    // request and see if a JWT is part of the request ( remember the JWT will be located
    // inside a cookie ) and if the JWT is part of the request then getSession will validate
    // the JWT and extract the data from the JWT and if all of this works as expected then
    // " getSession( { req : context.req } ); " will return a session object and we can save
    // that session object to the const " session "

    // req = HTTP incoming message, res = HTTP server response
    const session = await getSession( { req : context.req } );

    // ==============================
    // if authentication fails
    // ==============================

    // if session equals null
    if ( !session ) {

        // set the hasErrorSession prop and then use this prop inside the component to show
        // an error message
        return {
            props : {
                hasErrorSession : true
            }
        };

    }

    // ==============================
    // authentication successful - proceed forward
    // ==============================

    // ==============================
    // connect to database
    // ==============================

    // call the connectToDatabase function and get client
    const client = await connectToDatabase();

    // use client to connect to the database and then save the result to the const
    // " database "
    const database = client.db();

    // ==============================
    // if connecting to the database fails
    // ==============================

    // if database connection fails
    if ( !database ) {

        // set the hasErrorDatabase prop and then use this prop inside the component to show
        // an error message
        return {
            props : {
                hasErrorDatabase : true
            }
        };

    }

    // ==============================
    // database connection successful - proceed forward
    // ==============================

    // ==============================
    // access the collection
    // ==============================

    // access to the collection and if the collection does not exist then MongoDB will create
    // that collection on the fly
    const userListCollection = await database.collection( 'users' );

    // ==============================
    // find all users
    // ==============================

    // get all the users or the user list and remember to do that we need to use
    // " find().toArray() "

    // remember " In MongoDB, data is stored as documents. These documents are stored in
    // MongoDB in JSON (JavaScript Object Notation) format. "
    const data = await userListCollection.find().toArray();

    // console.log( data );

    // data gives us the following array ( noticed how _id, createdAt and updatedAt is not
    // enclosed in strings => THIS ARRAY WILL NOT WORK INSIDE THE COMPONENT )

    /*
        [
            {
                _id: 61229b8253c423184b1623a7,
                isAdmin: false,
                name: 'John Doe',
                email: 'john@example.com',
                password: '$2a$12$rGsWKoNwu57l8IYwo2fuVumLiD/KkvE/cE/KsAnHR2Lj433cIyVEO',
                createdAt: 2021-08-22T18:46:26.831Z,
                updatedAt: 2021-09-06T17:54:43.351Z,
                __v: 0
            },
            {
                _id: 6122a07ff2c69b19dc79b943,
                isAdmin: false,
                name: 'Ted N',
                email: 'ted@example.com',
                password: '$2a$12$Tp40ZZnbCEaEN3LQXKUbvesmKUFL7gkrMGIjTFd31Mr.QlCqh9gVO',
                createdAt: 2021-08-22T19:07:43.661Z,
                updatedAt: 2021-08-22T19:07:43.661Z,
                __v: 0
            },
            {
                _id: 613a76723a19af67c7329c71,
                name: 'Sally R',
                email: 'sally@example.com',
                password: '$2a$12$KmIzgQr.h/EYE4mGb8uxo./Mq3WYAHdvDYo37lT3.qsIJlc39VecS',
                isAdmin: false
            },
            {
                _id: 613d566dd1bad37bd5658f01,
                name: 'Michael Ballard',
                email: 'michael@example.com',
                password: '$2a$12$MIRDjN5GyVJNd2/ljP3KxOjCT2RSQTElkb63MY6/n0VliuinITbsC',
                isAdmin: false
            },
            {
                _id: 613d5809d1bad37bd5658f02,
                name: 'Harrison Ford',
                email: 'harrison@example.com',
                password: '$2a$12$SVfYEXxnaHbv7yCq4BLtuOeUDLt/cS4E9/Wwwpwa3SrwYKUsQ2dOq',
                isAdmin: false
            },
            {
                _id: 613d5929d1bad37bd5658f03,
                name: 'Christopher Newland',
                email: 'christopher@example.com',
                password: '$2a$12$kZT/2HZnZtkaTki1a/xpgekpqtMCdhNOZ5iNBiydNolj09HrPoEZO',
                isAdmin: false
            }
        ]
    */

    // ==============================
    // Transform data into a usable JavaScript array
    // ==============================

    // we need to transform data into a usable JavaScript array by first stringifying data
    // and remember the data array contained a number of objects and then use JSON.parse
    // to parse the result into a usable JavaScript array and / or object

    // so in order to make " data " work inside the component we first had to stringify " data "
    // and then take the stringified version of " data " and apply JSON.parse(); to it in order
    // to turn " data " into a JavaScript object

    // the answer on how to transform data into a usable JavaScript array and / or object came from
    // " https://stackoverflow.com/questions/66817759/next-js-error-serializing-res-returned-from-getserversideprops "

    // JSON.stringify:

    // " A common use of JSON is to exchange data to / from a web server.
    // When sending ( SENDING ) data to a web server, the data has to be a string.
    // Convert a JavaScript object into a string with JSON.stringify(). "

    // JSON.stringify example:

    /*
        const obj = { name: "John", age: 30, city: "New York" };
        const myJSON = JSON.stringify( obj );
        results in => { "name":"John","age":30,"city":"New York" }
    */

    // JSON.parse:

    // " A common use of JSON is to exchange data to / from a web server.
    // When receiving ( RECEIVING ) data from a web server, the data is always a string.
    // Parse the data with JSON.parse(), and the data becomes a JavaScript object. "

    /*
        <script>
        const txt = '{"name":"John", "age":30, "city":"New York"}'
        const obj = JSON.parse(txt);
        document.getElementById("demo").innerHTML = obj.name + ", " + obj.age;
        </script>
    */

    // results in => John, 30

    // so we had to take data and stringify it and then turn it into a JavaScript
    // object so that we could use that array and / or object in our component

    const dataTransformed = JSON.parse( JSON.stringify( data ) );

    // console.log( dataTransformed );

    // dataTransformed gives us the following array ( other than the booleans noticed how all
    // the values are now stringified or enclosed in strings => THIS ARRAY WILL WORK INSIDE
    // THE COMPONENT )

    /*
        [
            {
                _id: '61229b8253c423184b1623a7',
                isAdmin: false,
                name: 'John Doe',
                email: 'john@example.com',
                password: '$2a$12$rGsWKoNwu57l8IYwo2fuVumLiD/KkvE/cE/KsAnHR2Lj433cIyVEO',
                createdAt: '2021-08-22T18:46:26.831Z',
                updatedAt: '2021-09-06T17:54:43.351Z',
                __v: 0
            },
            {
                _id: '6122a07ff2c69b19dc79b943',
                isAdmin: false,
                name: 'Ted N',
                email: 'ted@example.com',
                password: '$2a$12$Tp40ZZnbCEaEN3LQXKUbvesmKUFL7gkrMGIjTFd31Mr.QlCqh9gVO',
                createdAt: '2021-08-22T19:07:43.661Z',
                updatedAt: '2021-08-22T19:07:43.661Z',
                __v: 0
            },
            {
                _id: '613a76723a19af67c7329c71',
                name: 'Sally R',
                email: 'sally@example.com',
                password: '$2a$12$KmIzgQr.h/EYE4mGb8uxo./Mq3WYAHdvDYo37lT3.qsIJlc39VecS',
                isAdmin: false
            },
            {
                _id: '613d566dd1bad37bd5658f01',
                name: 'Michael Ballard',
                email: 'michael@example.com',
                password: '$2a$12$MIRDjN5GyVJNd2/ljP3KxOjCT2RSQTElkb63MY6/n0VliuinITbsC',
                isAdmin: false
            },
            {
                _id: '613d5809d1bad37bd5658f02',
                name: 'Harrison Ford',
                email: 'harrison@example.com',
                password: '$2a$12$SVfYEXxnaHbv7yCq4BLtuOeUDLt/cS4E9/Wwwpwa3SrwYKUsQ2dOq',
                isAdmin: false
            },
            {
                _id: '613d5929d1bad37bd5658f03',
                name: 'Christopher Newland',
                email: 'christopher@example.com',
                password: '$2a$12$kZT/2HZnZtkaTki1a/xpgekpqtMCdhNOZ5iNBiydNolj09HrPoEZO',
                isAdmin: false
            }
        ]
    */

    // inside the component this array looks like ( THIS WILL WORK INSIDE THE COMPONENT ):

    /*
        (6) [ {…}, {…}, {…}, {…}, {…}, {…} ]

        0: { _id: '61229b8253c423184b1623a7', isAdmin: false, name: 'John Doe', email: 'john@example.com',
        password: '$2a$12$rGsWKoNwu57l8IYwo2fuVumLiD/KkvE/cE/KsAnHR2Lj433cIyVEO', … }

        1: { _id: '6122a07ff2c69b19dc79b943', isAdmin: false, name: 'Ted N', email: 'ted@example.com',
        password: '$2a$12$Tp40ZZnbCEaEN3LQXKUbvesmKUFL7gkrMGIjTFd31Mr.QlCqh9gVO', … }

        2: { _id: '613a76723a19af67c7329c71', name: 'Sally R', email: 'sally@example.com',
        password: '$2a$12$KmIzgQr.h/EYE4mGb8uxo./Mq3WYAHdvDYo37lT3.qsIJlc39VecS', isAdmin: false }

        3: { _id: '613d566dd1bad37bd5658f01', name: 'Michael Ballard', email: 'michael@example.com',
        password: '$2a$12$MIRDjN5GyVJNd2/ljP3KxOjCT2RSQTElkb63MY6/n0VliuinITbsC', isAdmin: false }

        4: { _id: '613d5809d1bad37bd5658f02', name: 'Harrison Ford', email: 'harrison@example.com',
        password: '$2a$12$SVfYEXxnaHbv7yCq4BLtuOeUDLt/cS4E9/Wwwpwa3SrwYKUsQ2dOq', isAdmin: false }

        5: { _id: '613d5929d1bad37bd5658f03', name: 'Christopher Newland', email: 'christopher@example.com',
        password: '$2a$12$kZT/2HZnZtkaTki1a/xpgekpqtMCdhNOZ5iNBiydNolj09HrPoEZO', isAdmin: false }
        
        length: 6
        
        [[Prototype]]: Array(0)
    */

    // ==============================
    // users don't exist
    // ==============================

    if ( !dataTransformed ) {

        // set the hasErrorUsers prop and then use this prop inside the component to show
        // an error message
        return {
            props : {
                hasErrorUsers : true
            }
        };

    }

    // ==============================
    // users exist - proceed forward
    // ==============================

    // ==============================
    // return an object
    // ==============================

    // then do the following to make the users array available throughout the application
    return {

        props : {
            userList : dataTransformed
        }

    }

    // and now we can use destructuring above to pass in the data or users to the page
    // component

} // end of getServerSideProps


