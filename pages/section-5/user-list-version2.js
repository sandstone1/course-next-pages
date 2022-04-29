

// remember the url path for this file is " http://localhost:3016/section-5/user-list "


// import the useEffect(); hook
import { Fragment, useEffect, useState } from 'react';
// import in the Link component
import Link from 'next/link';
// import in axios
import axios from 'axios';
// import in the useQuery hook
import { useQuery } from 'react-query';
// import in the swr hook
import useSWR from 'swr';
// use the Meta component to specify a title for this page
import Meta from '../../components/meta/meta';
// import in the ErrorMessage component
import ErrorMessage from '../../components/error-message/em-user-list-page';
// import in the Spinner component
import Spinner from '../../components/spinner/spinner';
// import in our stylesheet
import styles from './user-list.module.scss';


// import in the variable " API_URL "
import { API_URL } from '../../config/index';


export default function UserListPage() {

    // ==============================
    // destructure props
    // ==============================

    // ==============================
    // component state
    // ==============================

    // use userList from getStaticProps as our initial state and then this initial state
    // will be overridden by client side data fetching as needed
    const [ users, setUsers ]                               = useState( [] );
    const [ frontendErrorMessage, setFrontendErrorMessage ] = useState( '' );

    // console log out the users array
    // console.log( users );

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

/* // 4

    // ==============================
    // react query
    // ==============================

    // fetchUsers function
    const fetchUsers = async () => {

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
        // the fetch request above returns a response object and then we can apply the
        // json(); method to the reponse object and this will convert the response
        // object into a JavaScript object that we can use and we will call this JavaScript
        // object " data " and the data object in this case is the users array
        const data = await res.json();

        // STEP 4
        // return data
        return data;

    } // end of the fetchUsers function

    // useQuery hook
    // destructure data and status from the react query hook
    const { data, status } = useQuery( 'users', fetchUsers,
    
        // configuration object
        {
            staleTime : 0,
            // cacheTime : 10,
            // onSuccess : () => console.log( 'data fetched with no problems' )
        }

    ); // end of the useQuery hook

    // if the request was successful then set users equal to the latest data from react
    // query
    if ( status === 'success' ) {

        // STEP 5
        // set the component state
        setUsers( data )

    } // end of if

*/ // 4


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

    // ==============================
    // useSWR(); continued
    // ==============================

    // check for an error
    if ( error ) {
        
        return (

            <ErrorMessage>
                An error has occurred.
            </ErrorMessage>

        );

    }; // end of if

    // check for no data and no userList
    if ( !data ) return <Spinner />;

    // if the request was successful then set the component state
    // setUsers( data );

    // console.log( data );

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

/* // 5

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

            /* // 2

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

            */ // 2

/* // 5

        }

        // call getData
        getData();

        // anytime the userList array changes, fetch or axios will make a request
        // to the api endpoint and updata the data object, thereby updating state

    }, [ ] ); // end of useEffect

*/ // 5

    // ==============================
    // if I change the data in the database; for example, if I change " Sally R " to
    // " Sally Roe " then the data will not be automatically updated on the screen when
    // using the useSWR(); hook and in order to get the data to update I had to reload
    // the page
    // ==============================

    // ==============================
    // if I change the data in the database; for example, if I change " Sally R " to
    // " Sally Roe " then the data will be automatically updated on the screen when
    // using the fetch API
    // ==============================

    // ==============================
    // if I change the data in the database; for example, if I change " Sally R " to
    // " Sally Roe " then the data will be automatically updated on the screen when
    // using axios
    // ==============================

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
                /*
                // react query status
                status === 'loading' ? (

                    <Spinner />

                // react query status
                ) : status === 'error' ? (

                    <ErrorMessage>
                        An error has occured + { error.message } 
                    </ErrorMessage>

                ) : 
                */
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
                                    data.map( ( user ) => (

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
