

/*
// remember the url path for this file is " http://localhost:3016/section-5/last-sales "

// import the useEffect(); hook
import { Fragment, useEffect, useState } from 'react';
// use the Meta component to specify a title for this page
import Meta from '../../components/meta/meta';
// import in axios
import axios from 'axios';
// import in the variable " API_URL "
import { API_URL } from '../../config/index';
// import in the ErrorMessage component
import ErrorMessage from '../../components/error-message/em-register-page';
// import in the Spinner component
import Spinner from '../../components/spinner/spinner';
// import in our stylesheet
import styles from './last-sales.module.scss';


// 1 -

// import in the swr hook
import useSWR from 'swr';

// End of 1 -


export default function LastSalesPage() {

    // ==============================
    // destructure props
    // ==============================

    // ==============================
    // component state
    // ==============================

    const [ users, setUsers ]         = useState( [] );
    const [ isLoading, setIsLoading ] = useState( false );
    const [ message, setMessage ]     = useState( '' );

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


    // 1 - continued

    // ==============================
    // useSWR();
    // ==============================

        // ==============================
        // Option 3 for getting data
        // ==============================

        // create our endpoint
        const endpoint = `${ API_URL }/api/user/user-list-mongodb`;

        // create fetcher and this returns res.data or data
        const fetcher = ( url ) => (
            axios.get( url ).then( res => res.data )
        );

        // destructure data and error from the useSWR hook
        const { data, error } = useSWR( endpoint, fetcher );

        // check for an error
        if ( error ) {
            
            // set the error message
            setMessage( 'An error has occurred' );

        };

        // check for no data
        if ( !data ) return <Spinner />;

        // once we have data then map through data below in the output

        // and if I test this out I see:

        /*
            John Doe
            Ted N
            Sally R
            Michael Ballard
            Harrison Ford
            Christopher Newland
        */

        // and this is correct so everything is working as expected

        // when using the SWR hook we see the following in the page source:
        // " <main><img src="/images/spinner.gif" width="300" class="spinner_spinnerContainer__KshrF" alt="spinner"/></main> "
        // so we see the Spinner component but no data

    // End of 1 -


/*
    // ==============================
    // useEffect();
    // ==============================

    useEffect( async () => {

        /*
        // ==============================
        // Option 1 for getting data
        // ==============================

        // ==============================
        // Fetch API
        // ==============================

        // STEP 1
        // initially, isLoading is set to true
        setIsLoading( true );

        // STEP 2
        // create our endpoint
        const endpoint = `${ API_URL }/api/user/user-list-mongodb`;

        // STEP 3
        // make the fetch request and save the result to the const called res
        const res = await fetch(
            endpoint,
            {
                method : 'GET'
            }
        );

        // STEP 4
        // first, check to see if there is a request error
        if ( !res.ok ) {

            // set the error message
            setMessage( 'Something went wrong' );

            // erase the error message after 5 seconds
            setTimeout( () => {

                setMessage( null );

            }, 5000 );

        } else {

            // STEP 5
            // the fetch request above returns a response object and then we can apply the
            // json(); method to the reponse object and this will convert the response
            // object into a JavaScript object that we can use and we will call this response
            // object " data " and the data object in this case will be the users array
            const data = await res.json();

            // once we get the data, set isLoading to false
            setIsLoading( false );

            // set users
            setUsers( data );

        }
        */

        // ==============================
        // End of fetch API
        // ==============================


/*
        // ==============================
        // Option 2 for getting data
        // ==============================

        // ==============================
        // Axios
        // ==============================

        // initially, isLoading is set to true
        setIsLoading( true );

        // create our endpoint
        const endpoint = `${ API_URL }/api/user/user-list-mongodb`;

        // below we are making a request ( using axios ) to this endpoint
        // " /api/user/user-list-mongodb.js " and axios returns the response object and
        // we can then destructure the data object off of the response object and the
        // data object in this case is the users array
        const { data } = await axios.get( endpoint );

        // once we get the data, set isLoading to false
        setIsLoading( false );

        // set users
        setUsers( data );

        // ==============================
        // End of axios
        // ==============================

    }, [] ); // end of useEffect();
*/


/*
    return (

        <Fragment>

            {
                
                isLoading ? (

                    <Spinner />

                ) : message ? (

                    <ErrorMessage
                        setMessage={ setMessage }
                    >
                        { message }
                    </ErrorMessage>

                ) : (

                    <div className={ styles.lastSalesPageContainer }>

                        <Meta title="Last Sales Page" />

                        <div className={ styles.lastSalesPageContainerDiv1 }>

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

}

// this is how we can fetch data on the client side and now if we inspect the page source
// we will see
// " <main><div class="last-sales_lastSalesPageContainer__3No_I"><div class="last-sales_lastSalesPageContainerDiv1__1mzRH"><ul></ul></div></div></main> "
// or in other words we do not see our data when using client side data fetching and this is
// bad for seo

// so, in summary, next.js is still pre rendering this page but it is doing so without the data
// because we are using client side data fetching
*/























// ===============================




















/*
// at the beginning of tutorial 110, given all the notes, I created a new file below without
// the notes so we are starting fresh

// remember the url path for this file is " http://localhost:3016/section-5/last-sales "

// import the useEffect(); hook
import { Fragment, useEffect, useState } from 'react';
// use the Meta component to specify a title for this page
import Meta from '../../components/meta/meta';
// import in axios
import axios from 'axios';
// import in the swr hook
import useSWR from 'swr';
// import in the variable " API_URL "
import { API_URL } from '../../config/index';
// import in the ErrorMessage component
import ErrorMessage from '../../components/error-message/em-register-page';
// import in the Spinner component
import Spinner from '../../components/spinner/spinner';
// import in our stylesheet
import styles from './last-sales.module.scss';


export default function LastSalesPage( { users } ) {

    // ==============================
    // destructure props
    // ==============================

    // ==============================
    // component state
    // ==============================


    // 3 -

    // use users from getStaticProps as our initial state

    // then this initial state will be overridden by client side data fetching below
    const [ usersArray, setUsersArray ] = useState( users );

    // End of 3 -


    const [ isLoading, setIsLoading ]  = useState( false );
    const [ message, setMessage ]      = useState( '' );

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

    // ==============================
    // useSWR();
    // ==============================

    // ==============================
    // Option 3 for getting data
    // ==============================

    // create our endpoint
    const endpoint = `https://jsonplaceholder.typicode.com/users`;

    // create fetcher and this returns res.data or data
    const fetcher = ( url ) => (
        axios.get( url ).then( res => res.data )
    );

    // destructure data and error from the useSWR hook
    const { data, error } = useSWR( endpoint, fetcher );

    // check for an error
    if ( error ) {
        
        // set the error message
        setMessage( 'An error has occurred' );

    };

    // check for no data

    // 3 -

    // change from " if ( !data ) return <Spinner />; " to
    // " if ( !data && !users ) return <Spinner />; "
    if ( !data && !users ) return <Spinner />;

    // and since we have already defined the users array in getStaticProps we will bypass
    // the Spinner component and remember we initialized our component level state with
    // the pre fetched data or the pre fetched users array

    // and now the code below will be pre rendered:

    /*
        <ul>
            {
                usersArray.map( ( user ) => (

                    <li
                        key={ user._id }
                    >
                        { user.name }
                    </li>

                ) )
            }
        </ul>
    */

    // and then when this component runs in the client it will use the fetch api or axios
    // to fetch the lastest data

    // with this pattern we get the benefits of pre rendering data with next.js and the benefits
    // of client side data fetching with the useEffect(); hook

    // and now if we test this out and go to " http://localhost:3016/section-5/last-sales "
    // and reload the page then we no longer see the Spinner component and this is correct
    // so everything is working as expected
    
    // and if we view the page source, we see:

    /*
        <main>
        <div class="last-sales_lastSalesPageContainer__3No_I">
        <div class="last-sales_lastSalesPageContainerDiv1__1mzRH">
        <ul>
        <li>Leanne Graham</li><li>Ervin Howell</li><li>Clementine Bauch</li>
        <li>Patricia Lebsack</li><li>Chelsey Dietrich</li><li>Mrs. Dennis Schulist</li>
        <li>Kurtis Weissnat</li><li>Nicholas Runolfsdottir V</li><li>Glenna Reichert</li>
        <li>Clementina DuBuque</li>
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

    // End of 3 -


    // once we have data then map through data below in the output

    // when using the SWR hook we see the following in the page source:
    // " <main><img src="/images/spinner.gif" width="300" class="spinner_spinnerContainer__KshrF" alt="spinner"/></main> "
    // so we see the Spinner component but no data

/*
    // ==============================
    // useEffect();
    // ==============================

    useEffect( async () => {

        // ==============================
        // Option 1 for getting data
        // ==============================

        // ==============================
        // Fetch API
        // ==============================

        // STEP 1
        // initially, isLoading is set to true
        setIsLoading( true );

        // STEP 2
        // create our endpoint
        const endpoint = `${ API_URL }/api/user/user-list-mongodb`;

        // STEP 3
        // make the fetch request and save the result to the const called res
        const res = await fetch(
            endpoint,
            {
                method : 'GET'
            }
        );

        // STEP 4
        // first, check to see if there is a request error
        if ( !res.ok ) {

            // set the error message
            setMessage( 'Something went wrong' );

            // erase the error message after 5 seconds
            setTimeout( () => {

                setMessage( null );

            }, 5000 );

        } else {

            // STEP 5
            // the fetch request above returns a response object and then we can apply the
            // json(); method to the reponse object and this will convert the response
            // object into a JavaScript object that we can use and we will call this response
            // object " data " and the data object in this case will be the users array
            const data = await res.json();

            // once we get the data, set isLoading to false
            setIsLoading( false );

            // set users
            setUsers( data );

        }

        // ==============================
        // End of fetch API
        // ==============================


        // ==============================
        // Option 2 for getting data
        // ==============================

        // ==============================
        // Axios
        // ==============================

        // initially, isLoading is set to true
        setIsLoading( true );

        // create our endpoint
        const endpoint = `${ API_URL }/api/user/user-list-mongodb`;

        // below we are making a request ( using axios ) to this endpoint
        // " /api/user/user-list-mongodb.js " and axios returns the response object and
        // we can then destructure the data object off of the response object and the
        // data object in this case is the users array
        const { data } = await axios.get( endpoint );

        // once we get the data, set isLoading to false
        setIsLoading( false );

        // set users
        setUsers( data );

        // ==============================
        // End of axios
        // ==============================

    }, [] ); // end of useEffect();
*/

/*
    return (

        <Fragment>

            {
                
                isLoading ? (

                    <Spinner />

                ) : message ? (

                    <ErrorMessage
                        setMessage={ setMessage }
                    >
                        { message }
                    </ErrorMessage>

                ) : (

                    <div className={ styles.lastSalesPageContainer }>

                        <Meta title="Last Sales Page" />

                        <div className={ styles.lastSalesPageContainerDiv1 }>

                            <ul>
                                {
                                    usersArray.map( ( user ) => (

                                        <li
                                            key={ user.id }
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

}

// this is how we can fetch data on the client side and now if we inspect the page source
// we will see
// " <main><div class="last-sales_lastSalesPageContainer__3No_I"><div class="last-sales_lastSalesPageContainerDiv1__1mzRH"><ul></ul></div></div></main> "
// or in other words we do not see our data when using client side data fetching and this is
// bad for seo

// so, in summary, next.js is still pre rendering this page but it is doing so without the data
// because we are using client side data fetching


// 2 -

// we are already fetching data on the client and now we want to prepare some data on the
// server or during the build process

// and we could add either getStaticProps or getServerSideProps and we will go for
// getStaticProps so that we can pre generate the page during the build process and
// possibly revalidate the page after deployment with the revalidate key value pair

// ==============================
// getStaticProps
// ==============================

export async function getStaticProps( context ) {

    // in this function we want to fetch the same data and we can use either fetch or
    // axios below

    // ==============================
    // Option 1 for getting data
    // ==============================

    // ==============================
    // Fetch API
    // ==============================

    // remove the component level state

    // STEP 1
    // create our endpoint

    // ==============================
    // Remember the endpoint has to be an external API
    // ==============================

    // we should not use fetch inside getStaticProps or getServerSideProps to talk to our
    // own API; however, we can use fetch inside getStaticProps or getServerSideProps
    // to communicate with external APIs

    // we need to remember that internal APIs are part of the project so what we should
    // do instead is write the api logic inside getStaticProps or getServerSideProps

    // for this tutorial let's use the jsonplaceholder api
    const endpoint = `https://jsonplaceholder.typicode.com/users`;

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
    // object into a JavaScript object that we can use and we will call this response
    // object " data " and the data object in this case is the users array
    const data = await res.json();

    // ==============================
    // End of fetch API
    // ==============================


/*
    // ==============================
    // Option 2 for getting data
    // ==============================

    // ==============================
    // Axios
    // ==============================

    // remove the component level state

    // create our endpoint
    const endpoint = `https://jsonplaceholder.typicode.com/users`;

    // below we are making a request ( using axios ) to this endpoint
    // " https://jsonplaceholder.typicode.com/users " and axios returns the response
    // object and we can then destructure the data object off of the response object
    // and the data object in this case is the users array
    const { data } = await axios.get( endpoint );

    // ==============================
    // End of axios
    // ==============================
*/

/*
    // then do the following to make the users array available throughout the application
    return {

        props : {
            users : data
        },
        revalidate : 10

    }

    // and now we can use destructuring above to pass in the data or users to the page
    // component

} // end of getStaticProps

// now let's go to 3 - above

// End of 2 -
*/

























// ===============================





















// at the beginning of tutorial 111, given all the notes, I created a new file below without
// the notes so we are starting fresh

// remember the url path for this file is " http://localhost:3016/section-5/last-sales "

// import the useEffect(); hook
import { Fragment, useEffect, useState } from 'react';
// use the Meta component to specify a title for this page
import Meta from '../../components/meta/meta';
// import in axios
import axios from 'axios';
// import in the swr hook
import useSWR from 'swr';
// import in the variable " API_URL "
import { API_URL } from '../../config/index';
// import in the ErrorMessage component
import ErrorMessage from '../../components/error-message/em-register-component';
// import in the Spinner component
import Spinner from '../../components/spinner/spinner';
// import in our stylesheet
import styles from './last-sales.module.scss';


export default function LastSalesPage( { users } ) {

    // ==============================
    // destructure props
    // ==============================

    // ==============================
    // component state
    // ==============================

    // use users from getStaticProps as our initial state and then this initial state
    // will be overridden by client side data fetching as needed
    const [ usersArray, setUsersArray ] = useState( users );
    const [ isLoading, setIsLoading ]   = useState( false );
    const [ message, setMessage ]       = useState( '' );

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

    // ==============================
    // useSWR();
    // ==============================

    // ==============================
    // Option 3 for getting data
    // ==============================

    // create our endpoint
    const endpoint = `https://jsonplaceholder.typicode.com/users`;

    // create fetcher and this returns res.data or data
    const fetcher = ( url ) => (
        axios.get( url ).then( res => res.data )
    );

    // destructure data and error from the useSWR hook
    const { data, error } = useSWR( endpoint, fetcher );

    // check for an error
    if ( error ) {
        
        // set the error message
        setMessage( 'An error has occurred' );

    };

    // check for no data and no users array
    if ( !data && !users ) return <Spinner />;

    // and since we have already defined the users array in getStaticProps we will bypass
    // the Spinner component and remember we initialized our component level state with
    // the pre fetched data or the pre fetched users array

    // and now the code below will be pre rendered:

    /*
        <ul>
            {
                usersArray.map( ( user ) => (

                    <li
                        key={ user._id }
                    >
                        { user.name }
                    </li>

                ) )
            }
        </ul>
    */

    // and then when this component runs in the client it will use the fetch api or axios
    // to fetch the lastest data

    // with this pattern we get the benefits of pre rendering data with next.js and the benefits
    // of client side data fetching with the useEffect(); hook

    // and now if we test this out and go to " http://localhost:3016/section-5/last-sales "
    // and reload the page then we no longer see the Spinner component and this is correct
    // so everything is working as expected
    
    // and if we view the page source, we see:

    /*
        <main>
        <div class="last-sales_lastSalesPageContainer__3No_I">
        <div class="last-sales_lastSalesPageContainerDiv1__1mzRH">
        <ul>
        <li>Leanne Graham</li><li>Ervin Howell</li><li>Clementine Bauch</li>
        <li>Patricia Lebsack</li><li>Chelsey Dietrich</li><li>Mrs. Dennis Schulist</li>
        <li>Kurtis Weissnat</li><li>Nicholas Runolfsdottir V</li><li>Glenna Reichert</li>
        <li>Clementina DuBuque</li>
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

/*
    // ==============================
    // useEffect();
    // ==============================

    useEffect( async () => {

        // ==============================
        // Option 1 for getting data
        // ==============================

        // ==============================
        // Fetch API
        // ==============================

        // STEP 1
        // initially, isLoading is set to true
        setIsLoading( true );

        // STEP 2
        // create our endpoint
        const endpoint = `${ API_URL }/api/user/user-list-mongodb`;

        // STEP 3
        // make the fetch request and save the result to the const called res
        const res = await fetch(
            endpoint,
            {
                method : 'GET'
            }
        );

        // STEP 4
        // first, check to see if there is a request error
        if ( !res.ok ) {

            // set the error message
            setMessage( 'Something went wrong' );

            // erase the error message after 5 seconds
            setTimeout( () => {

                setMessage( null );

            }, 5000 );

        } else {

            // STEP 5
            // the fetch request above returns a response object and then we can apply the
            // json(); method to the reponse object and this will convert the response
            // object into a JavaScript object that we can use and we will call this response
            // object " data " and the data object in this case will be the users array
            const data = await res.json();

            // once we get the data, set isLoading to false
            setIsLoading( false );

            // set users
            setUsers( data );

        }

        // ==============================
        // End of fetch API
        // ==============================


        // ==============================
        // Option 2 for getting data
        // ==============================

        // ==============================
        // Axios
        // ==============================

        // initially, isLoading is set to true
        setIsLoading( true );

        // create our endpoint
        const endpoint = `${ API_URL }/api/user/user-list-mongodb`;

        // below we are making a request ( using axios ) to this endpoint
        // " /api/user/user-list-mongodb.js " and axios returns the response object and
        // we can then destructure the data object off of the response object and the
        // data object in this case is the users array
        const { data } = await axios.get( endpoint );

        // once we get the data, set isLoading to false
        setIsLoading( false );

        // set users
        setUsers( data );

        // ==============================
        // End of axios
        // ==============================

    }, [] ); // end of useEffect();
*/


    return (

        <Fragment>

            {
                
                isLoading ? (

                    <Spinner />

                ) : message ? (

                    <ErrorMessage
                        setMessage={ setMessage }
                    >
                        { message }
                    </ErrorMessage>

                ) : (

                    <div className={ styles.lastSalesPageContainer }>

                        <Meta title="Last Sales Page" />

                        <div className={ styles.lastSalesPageContainerDiv1 }>

                            <ul>
                                {
                                    usersArray.map( ( user ) => (

                                        <li
                                            key={ user.id }
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

}

// this is how we can fetch data on the client side and now if we inspect the page source
// we will see
// " <main><div class="last-sales_lastSalesPageContainer__3No_I"><div class="last-sales_lastSalesPageContainerDiv1__1mzRH"><ul></ul></div></div></main> "
// or in other words we do not see our data when using client side data fetching and this is
// bad for seo

// so, in summary, next.js is still pre rendering this page but it is doing so without the data
// because we are using client side data fetching

// now we want to prepare some data on the server or during the build process

// and we could add either getStaticProps or getServerSideProps and we will go for
// getStaticProps so that we can pre generate the page during the build process and
// possibly revalidate the page after deployment with the revalidate key value pair

// ==============================
// getStaticProps
// ==============================

export async function getStaticProps( context ) {

    // in this function we want to fetch some data and we can either use fetch or
    // axios below

    // ==============================
    // Option 1 for getting data
    // ==============================

    // ==============================
    // Fetch API
    // ==============================

    // remove the component level state

    // STEP 1
    // create our endpoint

    // ==============================
    // Remember the endpoint has to be an external API
    // ==============================

    // we should not use fetch inside getStaticProps or getServerSideProps to talk to our
    // own API; however, we can use fetch inside getStaticProps or getServerSideProps
    // to communicate with external APIs

    // we need to remember that internal APIs are part of the project so what we should
    // do instead is write the api logic inside getStaticProps or getServerSideProps

    // for this tutorial let's use the jsonplaceholder api
    const endpoint = `https://jsonplaceholder.typicode.com/users`;

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
    // object into a JavaScript object that we can use and we will call this response
    // object " data " and the data object in this case is the users array
    const data = await res.json();

    // ==============================
    // End of fetch API
    // ==============================


/*
    // ==============================
    // Option 2 for getting data
    // ==============================

    // ==============================
    // Axios
    // ==============================

    // remove the component level state

    // create our endpoint
    const endpoint = `https://jsonplaceholder.typicode.com/users`;

    // below we are making a request ( using axios ) to this endpoint
    // " https://jsonplaceholder.typicode.com/users " and axios returns the response
    // object and we can then destructure the data object off of the response object
    // and the data object in this case is the users array
    const { data } = await axios.get( endpoint );

    // ==============================
    // End of axios
    // ==============================
*/

    // then do the following to make the users array available throughout the application
    return {

        props : {
            users : data
        },
        revalidate : 10

    }

    // and now we can use destructuring above to pass in the data or users to the page
    // component

} // end of getStaticProps


