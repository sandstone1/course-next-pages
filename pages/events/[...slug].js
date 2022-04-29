



// ==============================
// OPTION 1 VERSION 1
// ==============================


// ==============================
// BEST OPTION - EASIER TO RECKON WITH THAN OPTION 2
// ==============================


// ==============================
// server side data fetching with getServerSideProps
// ==============================

// remember the url path for this file is " http://localhost:3016/events/any-parameter/any-parameter "

// remember this catch all route kicks in once we have 2 or more parameters passed into the
// url; otherwise, if we have only one parameter passed into the url
// ( i.e. http://localhost:3016/events/any-parameter ) then the [ eventId ].js file kicks in

// we are using getServerSideProps in this file since we have a lot of possible combinations
// for routes and pre generating all these routes or pages is not a great option because that
// could be a lot of pages and with getServerSideProps we will fetch the data on the fly for
// every incoming request and then we return a page for every incoming request

// use the Meta component to specify a title for this page
import Meta from '../../components/meta/meta';
// import in the EventItem component
import EventItem from '../../components/event-item/event-item';
// import in the ErrorMessage component
import ErrorMessage from '../../components/error-message/em-event-details-page';
// import in our stylesheet
import styles from './[...slug].module.scss';


export default function FilteredEventsPage( { date, filteredEvents, hasError } ) {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // since this page will not be updated on the client side we don't need to set initial
    // state or component level state

    // ==============================
    // destructure props
    // ==============================

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
    // useEffect();
    // ==============================

    // ==============================
    // frontend validation
    // ==============================

    // use the hasError prop from getServerSideProps

    if ( hasError ) {

        return (

            <ErrorMessage>
                Invalid search values. Please close this message to go back to the events page and try again.
            </ErrorMessage>

        );

    } // end of if

    // use the filteredEvents prop from getServerSideProps
    // if filteredEvents does not exist or we have no filteredEvents then do the following:
    if ( !filteredEvents || filteredEvents.length === 0 ) {

        return (

            <ErrorMessage>
                There are no events that fit the search criteria. Please close this message to go back to the events page and try again.
            </ErrorMessage>

        );

    } // end of if

    // ==============================
    // humanReadableDate
    // ==============================

    // use the date prop from getServerSideProps
    const humanReadableDate = new Date( date.year, date.month - 1 ).toLocaleDateString(
        
        'en-US',
        // pass in the configuration object
        {
            month : 'long',
            year  : 'numeric'
        }

    );


    return (

        <div className={ styles.filteredEventsPageContainer }>

            <Meta title="Filtered Events Page" />

            <h1>Events in { humanReadableDate }</h1>

            {

                filteredEvents.map( ( event ) => (
        
                    <EventItem
                        key={ event.id }
                        event={ event }
                    />
        
                ) )

            }

            <style jsx global>
                {`
                    // remember "We (i.e. next.js) bundle styled-jsx to provide support for isolated scoped CSS."
                    body > div > div > main {

                        background : rgba( 246, 246, 246, 1 ); !important;

                    }
                    body > div > div > footer {

                        background : rgba( 246, 246, 246, 1 ); !important;
            
                    }
                `}
            </style>

        </div>

    );

}


// ==============================
// getData
// ==============================

async function getData() {

    // in this function we want to fetch some data and we can either use fetch or
    // axios below

    // ==============================
    // Fetch API
    // ==============================

    // STEP 1
    // create our endpoint

    // ==============================
    // remember the endpoint has to be an external API
    // ==============================

    // we should not use fetch inside getStaticProps or getServerSideProps to talk to our
    // own API; however, we can use fetch inside getStaticProps or getServerSideProps
    // to communicate with external APIs

    // we need to remember that internal APIs are part of the project so what we should
    // do instead is write the api logic inside getStaticProps or getServerSideProps

    // for this tutorial, let's use the Firebase database api that we created to store
    // our events
    const endpoint = `https://next-course---max-s-default-rtdb.firebaseio.com/events.json`;

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
    // object " data " and the data object in this case is the events object and this
    // is an object and not an array because Firebase returns an object
    const data = await res.json();

    // STEP 4
    // remember the data we get back from Firebase will not be an array but will be an
    // object and to convert data from an object to an array we need to transform the data
    const transformedEvents = [];

    // loop through the keys or e1, e2 and e3

    // the for in loop will return a number of objects that match the original objects
    // in the dummy-data.js file and then those objects will be saved inside the
    // transformedEvents array, creating an array of objects or an array of event objects

    // remember:
    /*
        The for in loop iterates over an events object
        Each iteration returns a key ( i.e. e1, e2 and e3 )
        The key is used to access the value of the key
        The value of the key is events[ x ]
    */

    // the events object looks like:
    /*
        events
            e1
                date: "05-12-2022"
                description: "Everyone can learn to code! Yes, everyone! In t..."
                image: "images/coding_event.jpg"
                isFeatured: false
                location: "55 Mission Street, San Francisco, California 94103"
                time: "1:00 PM EST"
                title: "Programming for everyone"
            e2
                date: "05-30-2022"
                description: "We know: Networking is no fun if you are an int..."
                image: "images/introvert_event.jpg"
                isFeatured: true
                location: "25 Wall Street, New York, New York 10005"
                time: "7:00 PM EST"
                title: "Networking for introverts"
            e3
                date: "04-10-2022"
                description: "You probably need no help with networking in ge..."
                image: "images/extrovert_event.jpg"
                isFeatured: true
                location: "East 8th Street, Boston, Massachusetts 02127"
                time: "7:00 PM EST"
                title: "Networking for extroverts"
    */

    for ( const key in data ) {

        // push an object into the transformedEvents array
        transformedEvents.push( 
            {
                id          : key,
                date        : data[ key ].date,
                description : data[ key ].description,
                image       : data[ key ].image,
                isFeatured  : data[ key ].isFeatured,
                location    : data[ key ].location,
                time        : data[ key ].time,
                title       : data[ key ].title,
            }
        )

    } // end of the for in loop

    // return transformedEvents
    return transformedEvents;

    // ==============================
    // end of fetch API
    // ==============================

} // end of getData


// ==============================
// getServerSideProps
// ==============================

// this function comes in handy when we have highly dynamic data and we want this
// function to run for every incoming request

// and the main difference between getStaticProps and getServerSideProps is the kind
// of data you get access to in getServerSideProps and the timing of getServerSideProps

export async function getServerSideProps( context ) {

    // ==============================
    // fetch the route parameter value
    // ==============================

    // get the slug
    const slug = context.params.slug;

    // ==============================
    // prevent [ ...slug ].js from polluting [ eventId ].js
    // ==============================

    // ==============================
    // remember: " The TL;DR here is that you can’t use any hooks after you return early from
    // a component, inside a loop, or inside a conditional. "
    // ==============================

    // this quote is from
    // " https://typeofnan.dev/fix-the-react-hook-is-called-conditionally-error-in-react/ "
    // and because this " return <NotFound />; " came before the useSWR(); hook above then
    // I was getting a react error during the next build process that said something along
    // the lines of " React Hook is Called Conditionally " and moving this code to this spot
    // fixed the error

    // if the slug length is 1 then return the 404 page
    // remember somehow when I have an eventId route parameter that is not valid
    // ( i.e. http://localhost:3016/events/e15 ), for example, then next.js is redirecting me
    // to this [ ...slug ].js file so the code below just redirects me back to the 404
    // page if the slug length is 1

    if ( slug.length === 1 ) {

        // exit function and return the 404 page
        return {
            notFound : true
        };

    }

    // ==============================
    // continue parsing slug
    // ==============================

    // remember the slug is an array with 2 items: the year and the month and both items
    // are in a string format

    // slug looks like the following:
    /*
        (2) ['2021', '1']
            0: "2021"
            1: "1"
    */

    // get the first array value or the filtered year ( i.e. the first route parameter or
    // the first path segment )

    const filteredYear = slug[ 0 ];

    // get the second array value or the filtered month ( i.e. the second route parameter
    // or the second path segment ) 
    const filteredMonth = slug[ 1 ];

    // parse both filteredYear and filteredMonth into numbers
    const numYear  = parseInt( filteredYear );
    const numMonth = parseInt( filteredMonth );

    // ==============================
    // frontend validation
    // ==============================

    // make sure the path segments are numbers and that we have the correct year and
    // month values
    if (
        isNaN( numYear )  ||
        isNaN( numMonth ) ||
        numYear > 2023    ||
        numYear < 2021    ||
        numMonth > 12     ||
        numMonth < 1
    ) {

        // if validation fails then we want to return an object and remember we can't return
        // jsx inside getServerSideProps

        // set the hasError prop and then use this prop inside the component to show an
        // error message
        return {
            props : {
                hasError : true
            }
        };

    } // end of if

    // build the dateFilter object
    const dateFilter = {

        year  : numYear,
        month : numMonth

    }

    // ==============================
    // getData()
    // ==============================

    // call the getData function and get data or the transformed events
    const transformedEvents = await getData();

    // ==============================
    // filter data
    // ==============================

    // now that our data has been transformed into an array, we can use the array helper
    // functions like map, filter, find and reduce
    const filteredEvents = transformedEvents.filter( ( event ) => {

        // destructure off the year and month
        const { year, month } = dateFilter;

        // get the event date
        const eventDate = new Date( event.date );

        // return events that meet both criteria
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;

    } );

    // ==============================
    // return an object
    // ==============================

	// then do the following to make filteredEvents available throughout the application
    return {

        props : {
            filteredEvents : filteredEvents,
            date : {
                year  : numYear,
                month : numMonth
            }
        }

    }

    // and now we can use destructuring above to pass in the data or filteredEvents to the
    // page component

} // end of getServerSideProps

// unlike the [ productId ].js where we pre generate dynamic routes with getStaticProps and
// getStaticPaths, with [ ...slug ].js we generate dynamic routes just in time on every page
// request with getServerSideProps

// and remember this page is pre rendered on the fly on the server for every incoming
// request























// ===============================




















/* // #1

// ==============================
// OPTION 1 VERSION 2
// ==============================


// ==============================
// SECOND BEST OPTION - CLOSE SECOND - SOME WAYS EASIER TO RECKON WITH THAN OPTION 2
// ==============================


// ==============================
// server side data fetching with getServerSideProps
// ==============================

// remember the url path for this file is " http://localhost:3016/events/any-parameter/any-parameter "

// remember this catch all route kicks in once we have 2 or more parameters passed into the
// url; otherwise, if we have only one parameter passed into the url
// ( i.e. http://localhost:3016/events/any-parameter ) then the [ eventId ].js file kicks in

// we are using getServerSideProps in this file since we have a lot of possible combinations
// for routes and pre generating all these routes or pages is not a great option because that
// could be a lot of pages and with getServerSideProps we will fetch the data on the fly for
// every incoming request and then we return a page for every incoming request

// since we are building a form we will need to use the useState(); hook
import { Fragment, useEffect, useState } from 'react';
// use the Meta component to specify a title for this page
import Meta from '../../components/meta/meta';
// import in the EventItem component
import EventItem from '../../components/event-item/event-item';
// import in the ErrorMessage component
import ErrorMessage from '../../components/error-message/em-event-details-page';
// import in our stylesheet
import styles from './[...slug].module.scss';


export default function FilteredEventsPage( { date = {}, filteredEvents = {}, hasError = {} } ) {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed
    const [ dateGSP, setDateGSP ]                           = useState( date );
    const [ filteredEventsGSP, setFilteredEventsGSP ]       = useState( filteredEvents );
    const [ hasErrorGSP, setHasErrorGSP ]                   = useState( hasError );
    const [ frontendErrorMessage, setFrontendErrorMessage ] = useState( '' );
    const [ isLoading, setIsLoading ]                       = useState( false );

    // ==============================
    // destructure props
    // ==============================

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
    // useEffect();
    // ==============================

    
    useEffect( () => {

        // ==============================
        // frontend validation
        // ==============================

        if ( !dateGSP || !hasErrorGSP || !filteredEventsGSP ) {

            setIsLoading( true );

        }

        // use the hasError prop from getServerSideProps
        if ( hasErrorGSP ) {

            setFrontendErrorMessage( 'Invalid search values. Please close this message to go back to the events page and try again.' );

        } // end of if

        // use the filteredEvents prop from getServerSideProps
        // if filteredEvents does not exist or we have no filteredEvents then do the following:
        if ( !filteredEventsGSP || filteredEventsGSP.length === 0 ) {

            setFrontendErrorMessage( 'There are no events that fit the search criteria. Please close this message to go back to the events page and try again.' );

        } // end of if

    }, [ filteredEventsGSP, hasErrorGSP ] )
    




    // ==============================
    // humanReadableDate
    // ==============================

    // use the date prop from getServerSideProps
    const humanReadableDate = new Date( dateGSP.year, dateGSP.month - 1 ).toLocaleDateString(
        
        'en-US',
        // pass in the configuration object
        {
            month : 'long',
            year  : 'numeric'
        }

    );


    const handleFrontendErrorMessage = ( e ) => {

        console.log( frontendErrorMessage );

        setFrontendErrorMessage( '' );

        console.log( frontendErrorMessage );

    }


    return (

        <Fragment>

            {

                isLoading ? (

                    <Spinner />

                ) : frontendErrorMessage ? (

                    <ErrorMessage                    
                        setFrontendErrorMessage={ handleFrontendErrorMessage }
                    >
                        { frontendErrorMessage }                    
                    </ErrorMessage>

                ) : (

                    <div className={ styles.filteredEventsPageContainer }>

                        <Meta title="Filtered Events Page" />

                        <h1>Events in { humanReadableDate }</h1>

                        {

                            filteredEventsGSP.map( ( event ) => (
                    
                                <EventItem
                                    key={ event.id }
                                    event={ event }
                                />
                    
                            ) )

                        }

                        <style jsx global>
                            {`
                                // remember "We (i.e. next.js) bundle styled-jsx to provide support for isolated scoped CSS."
                                body > div > div > main {

                                    background : rgba( 246, 246, 246, 1 ); !important;

                                }
                                body > div > div > footer {

                                    background : rgba( 246, 246, 246, 1 ); !important;
                        
                                }
                            `}
                        </style>

                    </div>

                )

            }

        </Fragment>

    );

}


// ==============================
// getData
// ==============================

async function getData() {

    // in this function we want to fetch some data and we can either use fetch or
    // axios below

    // ==============================
    // Fetch API
    // ==============================

    // STEP 1
    // create our endpoint

    // ==============================
    // remember the endpoint has to be an external API
    // ==============================

    // we should not use fetch inside getStaticProps or getServerSideProps to talk to our
    // own API; however, we can use fetch inside getStaticProps or getServerSideProps
    // to communicate with external APIs

    // we need to remember that internal APIs are part of the project so what we should
    // do instead is write the api logic inside getStaticProps or getServerSideProps

    // for this tutorial, let's use the Firebase database api that we created to store
    // our events
    const endpoint = `https://next-course---max-s-default-rtdb.firebaseio.com/events.json`;

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
    // object " data " and the data object in this case is the events object and this
    // is an object and not an array because Firebase returns an object
    const data = await res.json();

    // STEP 4
    // remember the data we get back from Firebase will not be an array but will be an
    // object and to convert data from an object to an array we need to transform the data
    const transformedEvents = [];

    // loop through the keys or e1, e2 and e3

    // the for in loop will return a number of objects that match the original objects
    // in the dummy-data.js file and then those objects will be saved inside the
    // transformedEvents array, creating an array of objects or an array of event objects

    // remember:
    /*
        The for in loop iterates over an events object
        Each iteration returns a key ( i.e. e1, e2 and e3 )
        The key is used to access the value of the key
        The value of the key is events[ x ]
    */

    // the events object looks like:
    /*
        events
            e1
                date: "05-12-2022"
                description: "Everyone can learn to code! Yes, everyone! In t..."
                image: "images/coding_event.jpg"
                isFeatured: false
                location: "55 Mission Street, San Francisco, California 94103"
                time: "1:00 PM EST"
                title: "Programming for everyone"
            e2
                date: "05-30-2022"
                description: "We know: Networking is no fun if you are an int..."
                image: "images/introvert_event.jpg"
                isFeatured: true
                location: "25 Wall Street, New York, New York 10005"
                time: "7:00 PM EST"
                title: "Networking for introverts"
            e3
                date: "04-10-2022"
                description: "You probably need no help with networking in ge..."
                image: "images/extrovert_event.jpg"
                isFeatured: true
                location: "East 8th Street, Boston, Massachusetts 02127"
                time: "7:00 PM EST"
                title: "Networking for extroverts"
    */

/* // #2

    for ( const key in data ) {

        // push an object into the transformedEvents array
        transformedEvents.push( 
            {
                id          : key,
                date        : data[ key ].date,
                description : data[ key ].description,
                image       : data[ key ].image,
                isFeatured  : data[ key ].isFeatured,
                location    : data[ key ].location,
                time        : data[ key ].time,
                title       : data[ key ].title,
            }
        )

    } // end of the for in loop

    // return transformedEvents
    return transformedEvents;

    // ==============================
    // end of fetch API
    // ==============================

} // end of getData


// ==============================
// getServerSideProps
// ==============================

// this function comes in handy when we have highly dynamic data and we want this
// function to run for every incoming request

// and the main difference between getStaticProps and getServerSideProps is the kind
// of data you get access to in getServerSideProps and the timing of getServerSideProps

export async function getServerSideProps( context ) {

    // ==============================
    // fetch the route parameter value
    // ==============================

    // get the slug
    const slug = context.params.slug;

    // ==============================
    // prevent [ ...slug ].js from polluting [ eventId ].js
    // ==============================

    // ==============================
    // remember: " The TL;DR here is that you can’t use any hooks after you return early from
    // a component, inside a loop, or inside a conditional. "
    // ==============================

    // this quote is from
    // " https://typeofnan.dev/fix-the-react-hook-is-called-conditionally-error-in-react/ "
    // and because this " return <NotFound />; " came before the useSWR(); hook above then
    // I was getting a react error during the next build process that said something along
    // the lines of " React Hook is Called Conditionally " and moving this code to this spot
    // fixed the error

    // if the slug length is 1 then return the 404 page
    // remember somehow when I have an eventId route parameter that is not valid
    // ( i.e. http://localhost:3016/events/e15 ), for example, then next.js is redirecting me
    // to this [ ...slug ].js file so the code below just redirects me back to the 404
    // page if the slug length is 1

    if ( slug.length === 1 ) {

        // exit function and return the 404 page
        return {
            notFound : true
        };

    }

    // ==============================
    // continue parsing slug
    // ==============================

    // remember the slug is an array with 2 items: the year and the month and both items
    // are in a string format

    // slug looks like the following:
    /*
        (2) ['2021', '1']
            0: "2021"
            1: "1"
    */

    // get the first array value or the filtered year ( i.e. the first route parameter or
    // the first path segment )

/* // #3

    const filteredYear = slug[ 0 ];

    // get the second array value or the filtered month ( i.e. the second route parameter
    // or the second path segment ) 
    const filteredMonth = slug[ 1 ];

    // parse both filteredYear and filteredMonth into numbers
    const numYear  = parseInt( filteredYear );
    const numMonth = parseInt( filteredMonth );

    // ==============================
    // frontend validation
    // ==============================

    // make sure the path segments are numbers and that we have the correct year and
    // month values
    if (
        isNaN( numYear )  ||
        isNaN( numMonth ) ||
        numYear > 2023    ||
        numYear < 2021    ||
        numMonth > 12     ||
        numMonth < 1
    ) {

        // if validation fails then we want to return an object and remember we can't return
        // jsx inside getServerSideProps

        // set the hasError prop and then use this prop inside the component to show an
        // error message
        return {
            props : {
                hasError : true
            }
        };

    } // end of if

    // build the dateFilter object
    const dateFilter = {

        year  : numYear,
        month : numMonth

    }

    // ==============================
    // getData()
    // ==============================

    // call the getData function and get data or the transformed events
    const transformedEvents = await getData();

    // ==============================
    // filter data
    // ==============================

    // now that our data has been transformed into an array, we can use the array helper
    // functions like map, filter, find and reduce
    const filteredEvents = transformedEvents.filter( ( event ) => {

        // destructure off the year and month
        const { year, month } = dateFilter;

        // get the event date
        const eventDate = new Date( event.date );

        // return events that meet both criteria
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;

    } );

    // ==============================
    // return an object
    // ==============================

	// then do the following to make filteredEvents available throughout the application
    return {

        props : {
            filteredEvents : filteredEvents,
            date : {
                year  : numYear,
                month : numMonth
            }
        }

    }

    // and now we can use destructuring above to pass in the data or filteredEvents to the
    // page component

} // end of getServerSideProps

// unlike the [ productId ].js where we pre generate dynamic routes with getStaticProps and
// getStaticPaths, with [ ...slug ].js we generate dynamic routes just in time on every page
// request with getServerSideProps

// and remember this page is pre rendered on the fly on the server for every incoming
// request























// ===============================
























/* // #1

// ==============================
// OPTION 2
// ==============================


// ==============================
// SECOND BEST OPTION - TOUGHER TO UNDERSTAND THE CODE THAN OPTION 1 VERSION 1
// ==============================


// ==============================
// client side data fetching example with the useSWR(); hook
// ==============================

// remember the url path for this file is " http://localhost:3016/events/any-parameter/any-parameter "

// remember this catch all route kicks in once we have 2 or more parameters passed into the
// url; otherwise, if we have only one parameter passed into the url
// ( i.e. http://localhost:3016/events/any-parameter ) then the [ eventId ].js file kicks in

// remember we could use client side data fetching instead of getServerSideProps for this
// page since this page is not that important for search engines and the page would load a
// bit quicker because we don't need to pre render the page on the server and if we used
// client side data fetching then the data would be missing on the initial rendering of the
// page and therefore we would need to show a loading Spinner until the data arrives

// remember it doesn't make sense to have both client side data fetching and getServerSideProps
// in the same component, it can however make sense to have both client side data
// fetching and getStaticProps in the same component

// and client side data fetching and getServerSideProps really do the same thing so it doesn't
// make sense to have them both in the same component, at least not if our concern is having
// up to date data; however, it could make sense to have both if we need to look into request
// headers for example

// import in the useRouter hook to get access to the route parameter
import { useRouter } from 'next/router';
// import in the useSWR hook
import useSWR from 'swr';
// import in axios
import axios from 'axios';
// use the Meta component to specify a title for this page
import Meta from '../../components/meta/meta';
// import in the EventItem component
import EventItem from '../../components/event-item/event-item';
// import in the NotFound component
import NotFound from '../404.js';
// import in the ErrorMessage component
import ErrorMessage from '../../components/error-message/em-event-details-page';
// import in the Spinner component
import Spinner from '../../components/spinner/spinner';
// import in our stylesheet
import styles from './[...slug].module.scss';


export default function FilteredEventsPage() {

    // ==============================
    // component state
    // ==============================

    // ==============================
    // destructure props
    // ==============================

    // ==============================
    // useRef();
    // ==============================

    // ==============================
    // useRouter();
    // ==============================

    // remeber: useRouter hook has to be top level

    // create the router object and router.query.routeParameterName gives us access to the
    // route parameter value
    const router = useRouter();

    // ==============================
    // useSWR();
    // ==============================

    // ==============================
    // the useSWR(); hook has to be called after the useRouter(); hook; otherwise, will we get
    // some weird errors from react
    // ==============================

    // ==============================
    // if I change the data in the database; for example, if I change the data from 05-12-2022
    // to 04-12-2022 then the data will be automatically updated on the screen when using the
    // useSWR(); hook ( i.e. if I had 2 featured events showing for May 2022, after the database
    // update I will have 1 featured event showing for May 2022 )
    // ==============================

    // remember: useSWR hook has to be top level

    // create our endpoint
    const endpoint = `https://next-course---max-s-default-rtdb.firebaseio.com/events.json`;

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

    };

    // check for no data
    if ( !data ) return <Spinner />;

    // ==============================
    // Transform data from an object to an array
    // ==============================

    // remember the data we get back from Firebase will not be an array but will be an
    // object and to convert data from an object to an array we need to transform the data
    const transformedEvents = [];

    // loop through the keys or e1, e2 and e3

    // the for in loop will return a number of objects that match the original objects
    // in the dummy-data.js file and then those objects will be saved inside the
    // transformedEvents array, creating an array of objects or an array of event objects

    // remember:
    /*
        The for in loop iterates over an events object
        Each iteration returns a key ( i.e. e1, e2 and e3 )
        The key is used to access the value of the key
        The value of the key is events[ x ]
    */

    // the events object looks like:
    /*
        events
            e1
                date: "05-12-2022"
                description: "Everyone can learn to code! Yes, everyone! In t..."
                image: "images/coding_event.jpg"
                isFeatured: false
                location: "55 Mission Street, San Francisco, California 94103"
                time: "1:00 PM EST"
                title: "Programming for everyone"
            e2
                date: "05-30-2022"
                description: "We know: Networking is no fun if you are an int..."
                image: "images/introvert_event.jpg"
                isFeatured: true
                location: "25 Wall Street, New York, New York 10005"
                time: "7:00 PM EST"
                title: "Networking for introverts"
            e3
                date: "04-10-2022"
                description: "You probably need no help with networking in ge..."
                image: "images/extrovert_event.jpg"
                isFeatured: true
                location: "East 8th Street, Boston, Massachusetts 02127"
                time: "7:00 PM EST"
                title: "Networking for extroverts"
    */

/* // #2

    for ( const key in data ) {

        // push an object into the transformedEvents array
        transformedEvents.push( 
            {
                id          : key,
                date        : data[ key ].date,
                description : data[ key ].description,
                image       : data[ key ].image,
                isFeatured  : data[ key ].isFeatured,
                location    : data[ key ].location,
                time        : data[ key ].time,
                title       : data[ key ].title,
            }
        )

    } // end of the for in loop

    // ==============================
    // useRouter(); continued
    // ==============================

    // ==============================
    // continue parsing slug
    // ==============================

    // destructure slug and slug is an array with 2 items: the year and the month and both items
    // are in a string format

    // remember react will render the component before the useRouter hook runs so after the
    // first render slug is undefined or in our case an empty array and then after the second
    // render we get access to slug

    // make sure we set slug to a default value and in this case the default value will be an
    // empty array; otherwise, we will run into some weird undefined bugs on page reload
    const { slug = [] } = router.query;

    // console.log( slug );

    // on the first render, this results in:

    /*
        []
    */

    // before we were getting " underfined " and this was screwing up the code

    // on the second render, this results in:

    /*
        (2) ['2021', '1']
            0: "2021"
            1: "1"
    */

    // ==============================
    // prevent [ ...slug ].js from polluting [ eventId ].js
    // ==============================

    // ==============================
    // remember: " The TL;DR here is that you can’t use any hooks after you return early from
    // a component, inside a loop, or inside a conditional. "
    // ==============================

    // this quote is from
    // " https://typeofnan.dev/fix-the-react-hook-is-called-conditionally-error-in-react/ "
    // and because this " return <NotFound />; " came before the useSWR(); hook above then
    // I was getting a react error during the next build process that said something along
    // the lines of " React Hook is Called Conditionally " and moving this code to this spot
    // fixed the error

    // if the slug length is 1 then return the 404 page
    // remember somehow when I have an eventId route parameter that is not valid
    // ( i.e. http://localhost:3016/events/e15 ), for example, then next.js is redirecting me
    // to this [ ...slug ].js file so the code below just redirects me back to the 404
    // page if the slug length is 1

/* // #3

    if ( slug.length === 1 ) {

        // exit function and return the 404 page
        return <NotFound />;

    }

    // get the first array value or the filtered year ( i.e. the first route parameter or
    // the first path segment )
    const filteredYear = slug[ 0 ];

    // get the second array value or the filtered month ( i.e. the second route parameter
    // or the second path segment ) 
    const filteredMonth = slug[ 1 ];

    // parse both filteredYear and filteredMonth into numbers
    const numYear  = parseInt( filteredYear );
    const numMonth = parseInt( filteredMonth );

    // ==============================
    // frontend validation
    // ==============================

    // make sure the path segments are numbers and that we have the correct year and
    // month values
    if (
        isNaN( numYear )  ||
        isNaN( numMonth ) ||
        numYear > 2023    ||
        numYear < 2021    ||
        numMonth > 12     ||
        numMonth < 1
    ) {

        return (

            <ErrorMessage>
                Invalid search values. Please close this message to go back to the events page and try again.
            </ErrorMessage>

        );

    } // end of if

    // build the dateFilter object
    const dateFilter = {

        year  : numYear,
        month : numMonth

    }

    // ==============================
    // filter data
    // ==============================

    // now that our data has been transformed into an array, we can use the array helper
    // functions like map, filter, find and reduce
    const filteredEvents = transformedEvents.filter( ( event ) => {

        // destructure off the year and month
        const { year, month } = dateFilter;

        // get the event date
        const eventDate = new Date( event.date );

        // return events that meet both criteria
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;

    } );

    // ==============================
    // frontend validation
    // ==============================

    // use the filteredEvents prop from getServerSideProps
    // if filteredEvents does not exist or we have no filteredEvents then do the following:
    if ( !filteredEvents || filteredEvents.length === 0 ) {

        return (

            <ErrorMessage>
                There are no events that fit the search criteria. Please close this message to go back to the events page and try again.
            </ErrorMessage>

        );

    } // end of if

    // ==============================
    // useSession();
    // ==============================

    // ==============================
    // initialize the context
    // ==============================

    // ==============================
    // useEffect();
    // ==============================

    // ==============================
    // humanReadableDate
    // ==============================

    // use the date prop from getServerSideProps
    const humanReadableDate = new Date( numYear, numMonth - 1 ).toLocaleDateString(
        
        'en-US',
        // pass in the configuration object
        {
            month : 'long',
            year  : 'numeric'
        }

    );


    return (

        <div className={ styles.filteredEventsPageContainer }>

            <Meta title="Filtered Events Page" />

            <h1>Events in { humanReadableDate }</h1>

            {

                filteredEvents.map( ( event ) => (
        
                    <EventItem
                        key={ event.id }
                        event={ event }
                    />
        
                ) )

            }

            <style jsx global>
                {`
                    // remember "We (i.e. next.js) bundle styled-jsx to provide support for isolated scoped CSS."
                    body > div > div > main {

                        background : rgba( 246, 246, 246, 1 ); !important;

                    }
                    body > div > div > footer {

                        background : rgba( 246, 246, 246, 1 ); !important;
            
                    }
                `}
            </style>

        </div>

    );

}


























// ===============================





























// ==============================
// OPTION 2 with USESTATE
// ==============================


// ==============================
// THE BEST OPTION
// ==============================


// at the beginning of tutorial 120, given all the notes, I created a new file below without
// the notes so we are starting fresh

// ==============================
// client side data fetching example with the useSWR(); hook
// ==============================

// remember the url path for this file is " http://localhost:3016/events/any-parameter/any-parameter "

// remember this catch all route kicks in once we have 2 or more parameters passed into the
// url; otherwise, if we have only one parameter passed into the url
// ( i.e. http://localhost:3016/events/any-parameter ) then the [ eventId ].js file kicks in

// remember we could use client side data fetching instead of getServerSideProps for this
// page since this page is not that important for search engines and the page would load a
// bit quicker because we don't need to pre render the page on the server and if we used
// client side data fetching then the data would be missing on the initial rendering of the
// page and therefore we would need to show a loading Spinner until the data arrives

// remember it doesn't make sense to have both client side data fetching and getServerSideProps
// in the same component, it can however make sense to have both client side data
// fetching and getStaticProps in the same component

// and client side data fetching and getServerSideProps really do the same thing so it doesn't
// make sense to have them both in the same component, at least not if our concern is having
// up to date data; however, it could make sense to have both if we need to look into request
// headers for example

/* // #1

// since we are building a form we will need to use the useState(); hook
import { Fragment, useState } from 'react';
// import in the useRouter hook to get access to the route parameter
import { useRouter } from 'next/router';
// import in the useSWR hook
import useSWR from 'swr';
// import in axios
import axios from 'axios';
// use the Meta component to specify a title for this page
import Meta from '../../components/meta/meta';
// import in the EventItem component
import EventItem from '../../components/event-item/event-item';
// import in the NotFound component
import NotFound from '../404.js';
// import in the ErrorMessage component
import ErrorMessage from '../../components/error-message/em-event-details-page';
// import in the Spinner component
import Spinner from '../../components/spinner/spinner';
// import in our stylesheet
import styles from './[...slug].module.scss';


export default function FilteredEventsPage() {

    // ==============================
    // component state
    // ==============================  

    // set component level state
    const [ isLoading, setIsLoading ]                       = useState( false );
    const [ frontendErrorMessage, setFrontendErrorMessage ] = useState( '' );

    // ==============================
    // destructure props
    // ==============================

    // ==============================
    // useRef();
    // ==============================

    // ==============================
    // useRouter();
    // ==============================

    // create the router object and router.query.routeParameterName gives us access to the
    // route parameter value
    const router = useRouter();

    // destructure slug and slug is an array with 2 items: the year and the month and both items
    // are in a string format

    // remember react will render the component before the useRouter hook runs so after the
    // first render slug is undefined or in our case an empty array and then after the second
    // render we get access to slug

    // make sure we set slug to a default value and in this case the default value will be an
    // empty array; otherwise, we will run into some weird undefined bugs on page reload
    const { slug = [] } = router.query;

    // console.log( slug );

    // on the first render, this results in:

    /*
        []
    */

    // before we were getting " underfined " and this was screwing up the code

    // on the second render, this results in:

    /*
        (2) ['2021', '1']
            0: "2021"
            1: "1"
    */

    // ==============================
    // useSWR();
    // ==============================

    // ==============================
    // the useSWR(); hook has to be called after the useRouter(); hook; otherwise, will we get
    // some weird errors from react
    // ==============================

    // ==============================
    // if I change the data in the database; for example, if I change the data from 05-12-2022
    // to 04-12-2022 then the data will be automatically updated on the screen when using the
    // useSWR(); hook ( i.e. if I had 2 featured events showing for May 2022, after the database
    // update I will have 1 featured event showing for May 2022 )
    // ==============================

/* // #2

    // create our endpoint
    const endpoint = `https://next-course---max-s-default-rtdb.firebaseio.com/events.json`;

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

        setFrontendErrorMessage( 'An error has occurred.' );

    };

    // check for no data
    if ( !data ) {

        return <Spinner />

    }

    // ==============================
    // Transform data from an object to an array
    // ==============================

    // remember the data we get back from Firebase will not be an array but will be an
    // object and to convert data from an object to an array we need to transform the data
    const transformedEvents = [];

    // loop through the keys or e1, e2 and e3

    // the for in loop will return a number of objects that match the original objects
    // in the dummy-data.js file and then those objects will be saved inside the
    // transformedEvents array, creating an array of objects or an array of event objects

    // remember:
    /*
        The for in loop iterates over an events object
        Each iteration returns a key ( i.e. e1, e2 and e3 )
        The key is used to access the value of the key
        The value of the key is events[ x ]
    */

    // the events object looks like:
    /*
        events
            e1
                date: "05-12-2022"
                description: "Everyone can learn to code! Yes, everyone! In t..."
                image: "images/coding_event.jpg"
                isFeatured: false
                location: "55 Mission Street, San Francisco, California 94103"
                time: "1:00 PM EST"
                title: "Programming for everyone"
            e2
                date: "05-30-2022"
                description: "We know: Networking is no fun if you are an int..."
                image: "images/introvert_event.jpg"
                isFeatured: true
                location: "25 Wall Street, New York, New York 10005"
                time: "7:00 PM EST"
                title: "Networking for introverts"
            e3
                date: "04-10-2022"
                description: "You probably need no help with networking in ge..."
                image: "images/extrovert_event.jpg"
                isFeatured: true
                location: "East 8th Street, Boston, Massachusetts 02127"
                time: "7:00 PM EST"
                title: "Networking for extroverts"
    */

/* // #3

    for ( const key in data ) {

        // push an object into the transformedEvents array
        transformedEvents.push( 
            {
                id          : key,
                date        : data[ key ].date,
                description : data[ key ].description,
                image       : data[ key ].image,
                isFeatured  : data[ key ].isFeatured,
                location    : data[ key ].location,
                time        : data[ key ].time,
                title       : data[ key ].title,
            }
        )

    } // end of the for in loop

    // ==============================
    // frontend validation
    // ==============================

    // ==============================
    // remember: " The TL;DR here is that you can’t use any hooks after you return early from
    // a component, inside a loop, or inside a conditional. "
    // ==============================

    // this quote is from
    // " https://typeofnan.dev/fix-the-react-hook-is-called-conditionally-error-in-react/ "
    // and because this " return <NotFound />; " came before the useSWR(); hook above then
    // I was getting a react error during the next build process that said something along
    // the lines of " React Hook is Called Conditionally " and moving this code to this spot
    // fixed the error

    // if the slug length is 1 then return the 404 page
    // remember somehow when I have an eventId route parameter that is not valid
    // ( i.e. http://localhost:3016/events/e15 ), for example, then next.js is redirecting me
    // to this [ ...slug ].js file so the code below just redirects me back to the 404
    // page if the slug length is 1
    if ( slug.length === 1 ) {

        // exit function and return the 404 page
        return <NotFound />;

    }


    // ==============================
    // continue parsing slug
    // ==============================

    // get the first array value or the filtered year ( i.e. the first route parameter or
    // the first path segment )
    const filteredYear = slug[ 0 ];

    // get the second array value or the filtered month ( i.e. the second route parameter
    // or the second path segment ) 
    const filteredMonth = slug[ 1 ];

    // parse both filteredYear and filteredMonth into numbers
    const numYear  = parseInt( filteredYear );
    const numMonth = parseInt( filteredMonth );

    // ==============================
    // frontend validation
    // ==============================

    
    // make sure the path segments are numbers and that we have the correct year and
    // month values
    if (
        isNaN( numYear )  ||
        isNaN( numMonth ) ||
        numYear > 2023    ||
        numYear < 2021    ||
        numMonth > 12     ||
        numMonth < 1
    ) {

        setFrontendErrorMessage( 'Invalid search values. Please close this message to go back to the events page and try again.' );

    } // end of if
    

    // build the dateFilter object
    const dateFilter = {

        year  : numYear,
        month : numMonth

    }

    // ==============================
    // filter data
    // ==============================

    // now that our data has been transformed into an array, we can use the array helper
    // functions like map, filter, find and reduce
    const filteredEvents = transformedEvents.filter( ( event ) => {

        // destructure off the year and month
        const { year, month } = dateFilter;

        // get the event date
        const eventDate = new Date( event.date );

        // return events that meet both criteria
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;

    } );

    // ==============================
    // frontend validation
    // ==============================

    
    // use the filteredEvents prop from getServerSideProps
    // if filteredEvents does not exist or we have no filteredEvents then do the following:
    if ( !filteredEvents || filteredEvents.length === 0 ) {

        setFrontendErrorMessage( 'There are no events that fit the search criteria. Please close this message to go back to the events page and try again.' );


    } // end of if
    

    // ==============================
    // useSession();
    // ==============================

    // ==============================
    // initialize the context
    // ==============================

    // ==============================
    // useEffect();
    // ==============================

    // ==============================
    // humanReadableDate
    // ==============================

    // use the date prop from getServerSideProps
    const humanReadableDate = new Date( numYear, numMonth - 1 ).toLocaleDateString(
        
        'en-US',
        // pass in the configuration object
        {
            month : 'long',
            year  : 'numeric'
        }

    );

    // ==============================
    // hundleFrontendErrorMessage
    // ==============================

    const handleFrontendErrorMessage = ( e ) => {

        setFrontendErrorMessage( '' );

    } // end of handleFrontendErrorMessage


    return (

        <Fragment>

            {

                isLoading ? (

                    <Spinner />

                ) : frontendErrorMessage ? (

                    <ErrorMessage                    
                        setFrontendErrorMessage={ setFrontendErrorMessage }
                    >
                        { frontendErrorMessage }                    
                    </ErrorMessage>

                ) : ( 

                    <div className={ styles.filteredEventsPageContainer }>

                        <Meta title="Filtered Events Page" />

                        <h1>Events in { humanReadableDate }</h1>

                        {

                            filteredEvents.map( ( event ) => (
                    
                                <EventItem
                                    key={ event.id }
                                    event={ event }
                                />
                    
                            ) )

                        }

                        <style jsx global>
                            {`
                                // remember "We (i.e. next.js) bundle styled-jsx to provide support for isolated scoped CSS."
                                body > div > div > main {

                                    background : rgba( 246, 246, 246, 1 ); !important;

                                }
                                body > div > div > footer {

                                    background : rgba( 246, 246, 246, 1 ); !important;
                        
                                }
                            `}
                        </style>

                    </div>
    
                )

            }

        </Fragment>

    );

}

*/ // #4
























// ===============================
























// ==============================
// OPTION 3
// ==============================

/* // #1
// at the beginning of tutorial 120, given all the notes, I created a new file below without
// the notes so we are starting fresh

// ==============================
// client side data fetching example with the axios
// ==============================

// remember the url path for this file is " http://localhost:3016/events/any-parameter/any-parameter "

// remember this catch all route kicks in once we have 2 or more parameters passed into the
// url; otherwise, if we have only one parameter passed into the url
// ( i.e. http://localhost:3016/events/any-parameter ) then the [ eventId ].js file kicks in

// import in the useEffect and useState hook
import { Fragment, useEffect, useState } from 'react';
// import in the useRouter hook to get access to the route parameter
import { useRouter } from 'next/router';
// import in axios
import axios from 'axios';
// use the Meta component to specify a title for this page
import Meta from '../../components/meta/meta';
// import in the EventItem component
import EventItem from '../../components/event-item/event-item';
// import in the ErrorMessage component
import ErrorMessage from '../../components/error-message/em-event-details-page';
// import in the Spinner component
import Spinner from '../../components/spinner/spinner';
// import in our stylesheet
import styles from './[...slug].module.scss';


export default function FilteredEventsPage() {

    // ==============================
    // component state
    // ==============================  

    const [ isLoading, setIsLoading ]                       = useState( false );
    const [ transformedEvents, setTransformedEvents ]       = useState( [] );

    // ==============================
    // destructure props
    // ==============================

    // ==============================
    // useRef();
    // ==============================

    // ==============================
    // useRouter();
    // ==============================

    // create the router object and router.query.routeParameterName gives us access to the
    // route parameter value
    const router = useRouter();

    // destructure slug and slug is an array with 2 items: the year and the month and both items
    // are in a string format

    // remember react will render the component before the useRouter hook runs so after the
    // first render slug is undefined or in our case an empty array and then after the second
    // render we get access to slug

    // make sure we set slug to a default value and in this case the default value will be an
    // empty array; otherwise, we will run into some weird undefined bugs on page reload
    const { slug = [] } = router.query;

    // console.log( slug );

    // on the first render, this results in:

    /*
        []
    */

    // before we were getting " underfined " and this was screwing up the code

    // on the second render, this results in:

    /*
        (2) ['2021', '1']
            0: "2021"
            1: "1"
    */

    // ==============================
    // useEffect();
    // ==============================

    // ==============================
    // the useEffect(); hook has to be called after the useRouter(); hook; otherwise, will we get
    // some weird errors from react
    // ==============================

    // ==============================
    // if I change the data in the database; for example, if I change the data from 05-12-2022
    // to 04-12-2022 then the data will stay the same when using the useEffect(); hook / set
    // up below ( i.e. if I had 2 featured events showing for May 2022, after the database
    // update I will have 2 featured events showing for May 2022 )
    // ==============================

/* // #2

    useEffect( () => {

        async function getData() {

            // ==============================
            // Option 2 for getting data
            // ==============================
    
            // ==============================
            // Axios
            // ==============================
    
            // initially, isLoading is set to true
            setIsLoading( true );
    
            // create our endpoint
            const endpoint = `https://next-course---max-s-default-rtdb.firebaseio.com/events.json`;
    
            // below we are making a request ( using axios ) to this endpoint
            // " /api/user/user-list-mongodb.js " and axios returns the response object and
            // we can then destructure the data object off of the response object and the
            // data object in this case is the users array
            const { data } = await axios.get( endpoint );
    
            // once we get the data, set isLoading to false
            setIsLoading( false );
    
            // ==============================
            // Transform data from an object to an array
            // ==============================
    
            // remember the data we get back from Firebase will not be an array but will be an
            // object and to convert data from an object to an array we need to transform the data
            const transformedEvents = [];
    
            // loop through the keys or e1, e2 and e3
    
            // the for in loop will return a number of objects that match the original objects
            // in the dummy-data.js file and then those objects will be saved inside the
            // transformedEvents array, creating an array of objects or an array of event objects
    
            // remember:
            /*
                The for in loop iterates over an events object
                Each iteration returns a key ( i.e. e1, e2 and e3 )
                The key is used to access the value of the key
                The value of the key is events[ x ]
            */
    
            // the events object looks like:
            /*
                events
                    e1
                        date: "05-12-2022"
                        description: "Everyone can learn to code! Yes, everyone! In t..."
                        image: "images/coding_event.jpg"
                        isFeatured: false
                        location: "55 Mission Street, San Francisco, California 94103"
                        time: "1:00 PM EST"
                        title: "Programming for everyone"
                    e2
                        date: "05-30-2022"
                        description: "We know: Networking is no fun if you are an int..."
                        image: "images/introvert_event.jpg"
                        isFeatured: true
                        location: "25 Wall Street, New York, New York 10005"
                        time: "7:00 PM EST"
                        title: "Networking for introverts"
                    e3
                        date: "04-10-2022"
                        description: "You probably need no help with networking in ge..."
                        image: "images/extrovert_event.jpg"
                        isFeatured: true
                        location: "East 8th Street, Boston, Massachusetts 02127"
                        time: "7:00 PM EST"
                        title: "Networking for extroverts"
            */

/* // #3
    
            for ( const key in data ) {
    
                // push an object into the transformedEvents array
                transformedEvents.push( 
                    {
                        id          : key,
                        date        : data[ key ].date,
                        description : data[ key ].description,
                        image       : data[ key ].image,
                        isFeatured  : data[ key ].isFeatured,
                        location    : data[ key ].location,
                        time        : data[ key ].time,
                        title       : data[ key ].title,
                    }
                )
    
            } // end of the for in loop
    
            // set transformedEvents
            setTransformedEvents( transformedEvents );
    
            // ==============================
            // End of axios
            // ==============================
    
        }

        // call getData();
        getData();

    }, [] ); // end of useEffect();

    // ==============================
    // useSWR();
    // ==============================

    // ==============================
    // useSession();
    // ==============================

    // ==============================
    // initialize the context
    // ==============================

    // ==============================
    // useEffect(); worked - proceed forward
    // ==============================

    // ==============================
    // continue parsing slug
    // ==============================

    // get the first array value or the filtered year ( i.e. the first route parameter or
    // the first path segment )
    const filteredYear = slug[ 0 ];

    // get the second array value or the filtered month ( i.e. the second route parameter
    // or the second path segment ) 
    const filteredMonth = slug[ 1 ];

    // parse both filteredYear and filteredMonth into numbers
    const numYear  = parseInt( filteredYear );
    const numMonth = parseInt( filteredMonth );

    // ==============================
    // frontend validation
    // ==============================

    // if transformedEvents exist then proceed forward
    if ( !isLoading ) {

        // make sure the path segments are numbers and that we have the correct year and
        // month values
        if (
            isNaN( numYear )  ||
            isNaN( numMonth ) ||
            numYear > 2023    ||
            numYear < 2021    ||
            numMonth > 12     ||
            numMonth < 1
        ) {

            return (

                <ErrorMessage>
                    Invalid search values. Please close this message to go back to the events page and try again.
                </ErrorMessage>

            );

        } // end of if

    } // end of if

    // build the dateFilter object
    const dateFilter = {

        year  : numYear,
        month : numMonth

    }

    // ==============================
    // filter data
    // ==============================

    // now that our data has been transformed into an array, we can use the array helper
    // functions like map, filter, find and reduce
    const filteredEvents = transformedEvents.filter( ( event ) => {

        // destructure off the year and month
        const { year, month } = dateFilter;

        // get the event date
        const eventDate = new Date( event.date );

        // return events that meet both criteria
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;

    } );

    // set filteredEvents
    // setFilteredEvents( updatedFilteredEvents );

    // ==============================
    // frontend validation
    // ==============================

    if (
        !isNaN( numYear )  &&
        !isNaN( numMonth ) &&
        numYear > 2020     &&
        numYear < 2024     &&
        numMonth > 0       &&
        numMonth < 13
    ) {

        // use the filteredEvents prop from getServerSideProps
        // if filteredEvents does not exist or we have no filteredEvents then do the following:
        if ( !filteredEvents || filteredEvents.length === 0 ) {

            return (

                <ErrorMessage>
                    There are no events that fit the search criteria. Please close this message to go back to the events page and try again.
                </ErrorMessage>

            );

        } // end of if

    }

    // ==============================
    // humanReadableDate
    // ==============================

    // use the date prop from getServerSideProps
    const humanReadableDate = new Date( numYear, numMonth - 1 ).toLocaleDateString(
        
        'en-US',
        // pass in the configuration object
        {
            month : 'long',
            year  : 'numeric'
        }

    );


    return (

        <Fragment>

            {
                
                isLoading ? (

                    <Spinner />

                ) : (

                    <div className={ styles.filteredEventsPageContainer }>

                        <Meta title="Filtered Events Page" />

                        <h1>Events in { humanReadableDate }</h1>

                        {

                            filteredEvents.map( ( event ) => (
                    
                                <EventItem
                                    key={ event.id }
                                    event={ event }
                                />
                    
                            ) )

                        }

                        <style jsx global>
                            {`
                                // remember "We (i.e. next.js) bundle styled-jsx to provide support for isolated scoped CSS."
                                body > div > div > main {

                                    background : rgba( 246, 246, 246, 1 ); !important;

                                }
                                body > div > div > footer {

                                    background : rgba( 246, 246, 246, 1 ); !important;
                        
                                }
                            `}
                        </style>

                    </div>

                )

            }

        </Fragment>

    );

}
*/ // #4


























// ===============================

























// ==============================
// OPTION 4
// ==============================


// ==============================
// THIS OPTION DOESN'T WORK FOR DYNAMIC CATCH ALL ROUTE PARAMETERS
// keep getting react errors like too many renders
// ==============================

/* // #1

// at the beginning of tutorial 120, given all the notes, I created a new file below without
// the notes so we are starting fresh

// ==============================
// getStaticProps and getStaticPaths / getServerSideProps and client side data fetching with the useSWR(); hook
// ==============================

// remember the url path for this file is " http://localhost:3016/events/any-parameter/any-parameter "

// remember this catch all route kicks in once we have 2 or more parameters passed into the
// url; otherwise, if we have only one parameter passed into the url
// ( i.e. http://localhost:3016/events/any-parameter ) then the [ eventId ].js file kicks in

// remember we could use client side data fetching instead of getServerSideProps for this
// page since this page is not that important for search engines and the page would load a
// bit quicker because we don't need to pre render the page on the server and if we used
// client side data fetching then the data would be missing on the initial rendering of the
// page and therefore we would need to show a loading Spinner until the data arrives

// remember it doesn't make sense to have both client side data fetching and getServerSideProps
// in the same component, it can however make sense to have both client side data
// fetching and getStaticProps in the same component

// and client side data fetching and getServerSideProps really do the same thing so it doesn't
// make sense to have them both in the same component, at least not if our concern is having
// up to date data; however, it could make sense to have both if we need to look into request
// headers for example

// import in the useState(); hook
import { useState } from 'react';
// import in the useRouter hook to get access to the route parameter
import { useRouter } from 'next/router';
// import in the useSWR hook
import useSWR from 'swr';
// import in axios
import axios from 'axios';
// use the Meta component to specify a title for this page
import Meta from '../../components/meta/meta';
// import in the EventItem component
import EventItem from '../../components/event-item/event-item';
// import in the ErrorMessage component
import ErrorMessage from '../../components/error-message/em-event-details-page';
// import in the Spinner component
import Spinner from '../../components/spinner/spinner';
// import in our stylesheet
import styles from './[...slug].module.scss';


export default function FilteredEventsPage( { date, hasError, filteredEventsGSP } ) {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // use the eventObject from getStaticProps as our initial state
    // const [ filteredEvents, setFilteredEvents ] = useState( filteredEventsGSP );

    // ==============================
    // destructure props
    // ==============================

    // ==============================
    // useRef();
    // ==============================

    // ==============================
    // useRouter();
    // ==============================

    /*
    // create the router object and router.query.routeParameterName gives us access to the
    // route parameter value
    const router = useRouter();

    // destructure slug and slug is an array with 2 items: the year and the month and both items
    // are in a string format

    // remember react will render the component before the useRouter hook runs so after the
    // first render slug is undefined or in our case an empty array and then after the second
    // render we get access to slug

    // make sure we set slug to a default value and in this case the default value will be an
    // empty array; otherwise, we will run into some weird undefined bugs on page reload
    const { slug = [] } = router.query;

    // console.log( slug );

    // on the first render, this results in:

    /*
        []
    */

    // before we were getting " underfined " and this was screwing up the code

    // on the second render, this results in:

    /*
        (2) ['2021', '1']
            0: "2021"
            1: "1"
    */


    // ==============================
    // useSWR();
    // ==============================

    // ==============================
    // the useSWR(); hook has to be called after the useRouter(); hook; otherwise, will we get
    // some weird errors from react
    // ==============================

    // ==============================
    // if I change the data in the database; for example, if I change the data from 05-12-2022
    // to 04-12-2022 then the data will be automatically updated on the screen when using the
    // useSWR(); hook ( i.e. if I had 2 featured events showing for May 2022, after the database
    // update I will have 1 featured event showing for May 2022 )
    // ==============================

/* // #2

    // create our endpoint
    const endpoint = `https://next-course---max-s-default-rtdb.firebaseio.com/events.json`;

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

    };

    // check for no data
    if ( !data ) return <Spinner />;

    // ==============================
    // Transform data from an object to an array
    // ==============================

    // remember the data we get back from Firebase will not be an array but will be an
    // object and to convert data from an object to an array we need to transform the data
    const transformedEvents = [];

    // loop through the keys or e1, e2 and e3

    // the for in loop will return a number of objects that match the original objects
    // in the dummy-data.js file and then those objects will be saved inside the
    // transformedEvents array, creating an array of objects or an array of event objects

    // remember:
    /*
        The for in loop iterates over an events object
        Each iteration returns a key ( i.e. e1, e2 and e3 )
        The key is used to access the value of the key
        The value of the key is events[ x ]
    */

    // the events object looks like:
    /*
        events
            e1
                date: "05-12-2022"
                description: "Everyone can learn to code! Yes, everyone! In t..."
                image: "images/coding_event.jpg"
                isFeatured: false
                location: "55 Mission Street, San Francisco, California 94103"
                time: "1:00 PM EST"
                title: "Programming for everyone"
            e2
                date: "05-30-2022"
                description: "We know: Networking is no fun if you are an int..."
                image: "images/introvert_event.jpg"
                isFeatured: true
                location: "25 Wall Street, New York, New York 10005"
                time: "7:00 PM EST"
                title: "Networking for introverts"
            e3
                date: "04-10-2022"
                description: "You probably need no help with networking in ge..."
                image: "images/extrovert_event.jpg"
                isFeatured: true
                location: "East 8th Street, Boston, Massachusetts 02127"
                time: "7:00 PM EST"
                title: "Networking for extroverts"
    */

/* // #3

    for ( const key in data ) {

        // push an object into the transformedEvents array
        transformedEvents.push( 
            {
                id          : key,
                date        : data[ key ].date,
                description : data[ key ].description,
                image       : data[ key ].image,
                isFeatured  : data[ key ].isFeatured,
                location    : data[ key ].location,
                time        : data[ key ].time,
                title       : data[ key ].title,
            }
        )

    } // end of the for in loop

    /*
    // ==============================
    // continue parsing slug
    // ==============================

    // get the first array value or the filtered year ( i.e. the first route parameter or
    // the first path segment )
    const filteredYear = slug[ 0 ];

    // get the second array value or the filtered month ( i.e. the second route parameter
    // or the second path segment ) 
    const filteredMonth = slug[ 1 ];

    // parse both filteredYear and filteredMonth into numbers
    const numYear  = parseInt( filteredYear );
    const numMonth = parseInt( filteredMonth );
    */

    // ==============================
    // frontend validation
    // ==============================

/* // #4

    // make sure the path segments are numbers and that we have the correct year and
    // month values
    if ( hasError ) {

        return (

            <ErrorMessage>
                Invalid search values. Please close this message to go back to the events page and try again.
            </ErrorMessage>

        );

    } // end of if

    /*
    // build the dateFilter object
    const dateFilter = {

        year  : numYear,
        month : numMonth

    }
    */

/* // #5

    // check for no data
    if ( !date ) return <Spinner />;

    // ==============================
    // filter data
    // ==============================

    // now that our data has been transformed into an array, we can use the array helper
    // functions like map, filter, find and reduce
    const filteredEvents = transformedEvents.filter( ( event ) => {

        // get the event date
        const eventDate = new Date( event.date );

        // return events that meet both criteria
        return eventDate.getFullYear() === date.year && eventDate.getMonth() === date.month - 1;

    } );

    // set filteredEvents
    // setFilteredEvents( latestFilteredEvents );

    // ==============================
    // frontend validation
    // ==============================

    // use the filteredEvents prop from getServerSideProps
    // if filteredEvents does not exist or we have no filteredEvents then do the following:
    if ( !filteredEvents || filteredEvents.length === 0 ) {

        return (

            <ErrorMessage>
                There are no events that fit the search criteria. Please close this message to go back to the events page and try again.
            </ErrorMessage>

        );

    } // end of if

    // ==============================
    // useSession();
    // ==============================

    // ==============================
    // initialize the context
    // ==============================

    // ==============================
    // useEffect();
    // ==============================

    // ==============================
    // humanReadableDate
    // ==============================

    // use the date prop from getServerSideProps
    const humanReadableDate = new Date( date.year, date.month - 1 ).toLocaleDateString(
        
        'en-US',
        // pass in the configuration object
        {
            month : 'long',
            year  : 'numeric'
        }

    );


    return (

        <div className={ styles.filteredEventsPageContainer }>

            <Meta title="Filtered Events Page" />

            <h1>Events in { humanReadableDate }</h1>

            {

                filteredEvents.map( ( event ) => (
        
                    <EventItem
                        key={ event.id }
                        event={ event }
                    />
        
                ) )

            }

            <style jsx global>
                {`
                    // remember "We (i.e. next.js) bundle styled-jsx to provide support for isolated scoped CSS."
                    body > div > div > main {

                        background : rgba( 246, 246, 246, 1 ); !important;

                    }
                    body > div > div > footer {

                        background : rgba( 246, 246, 246, 1 ); !important;
            
                    }
                `}
            </style>

        </div>

    );

}



// ==============================
// getData
// ==============================

async function getData() {

    // in this function we want to fetch some data and we can either use fetch or
    // axios below

    // ==============================
    // Fetch API
    // ==============================

    // STEP 1
    // create our endpoint

    // ==============================
    // remember the endpoint has to be an external API
    // ==============================

    // we should not use fetch inside getStaticProps or getServerSideProps to talk to our
    // own API; however, we can use fetch inside getStaticProps or getServerSideProps
    // to communicate with external APIs

    // we need to remember that internal APIs are part of the project so what we should
    // do instead is write the api logic inside getStaticProps or getServerSideProps

    // for this tutorial, let's use the Firebase database api that we created to store
    // our events
    const endpoint = `https://next-course---max-s-default-rtdb.firebaseio.com/events.json`;

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
    // object " data " and the data object in this case is the events object and this
    // is an object and not an array because Firebase returns an object
    const data = await res.json();

    // STEP 4
    // remember the data we get back from Firebase will not be an array but will be an
    // object and to convert data from an object to an array we need to transform the data
    const transformedEvents = [];

    // loop through the keys or e1, e2 and e3

    // the for in loop will return a number of objects that match the original objects
    // in the dummy-data.js file and then those objects will be saved inside the
    // transformedEvents array, creating an array of objects or an array of event objects

    // remember:
    /*
        The for in loop iterates over an events object
        Each iteration returns a key ( i.e. e1, e2 and e3 )
        The key is used to access the value of the key
        The value of the key is events[ x ]
    */

    // the events object looks like:
    /*
        events
            e1
                date: "05-12-2022"
                description: "Everyone can learn to code! Yes, everyone! In t..."
                image: "images/coding_event.jpg"
                isFeatured: false
                location: "55 Mission Street, San Francisco, California 94103"
                time: "1:00 PM EST"
                title: "Programming for everyone"
            e2
                date: "05-30-2022"
                description: "We know: Networking is no fun if you are an int..."
                image: "images/introvert_event.jpg"
                isFeatured: true
                location: "25 Wall Street, New York, New York 10005"
                time: "7:00 PM EST"
                title: "Networking for introverts"
            e3
                date: "04-10-2022"
                description: "You probably need no help with networking in ge..."
                image: "images/extrovert_event.jpg"
                isFeatured: true
                location: "East 8th Street, Boston, Massachusetts 02127"
                time: "7:00 PM EST"
                title: "Networking for extroverts"
    */

/* // #6

    for ( const key in data ) {

        // push an object into the transformedEvents array
        transformedEvents.push( 
            {
                id          : key,
                date        : data[ key ].date,
                description : data[ key ].description,
                image       : data[ key ].image,
                isFeatured  : data[ key ].isFeatured,
                location    : data[ key ].location,
                time        : data[ key ].time,
                title       : data[ key ].title,
            }
        )

    } // end of the for in loop

    // return transformedEvents
    return transformedEvents;

    // ==============================
    // end of fetch API
    // ==============================

} // end of getData


// ==============================
// getStaticProps
// ==============================

// this function comes in handy when we have highly dynamic data and we want this
// function to run for every incoming request

// and the main difference between getStaticProps and getServerSideProps is the kind
// of data you get access to in getServerSideProps and the timing of getServerSideProps

export async function getServerSideProps( context ) {

    // ==============================
    // fetch the route parameter value
    // ==============================

    // get the slug
    const slug = context.params.slug;

    // remember the slug is an array with 2 items: the year and the month and both items
    // are in a string format

    // slug looks like the following:
    /*
        (2) ['2021', '1']
            0: "2021"
            1: "1"
    */

    // get the first array value or the filtered year ( i.e. the first route parameter or
    // the first path segment )

/* // #7

    const filteredYear = slug[ 0 ];

    // get the second array value or the filtered month ( i.e. the second route parameter
    // or the second path segment ) 
    const filteredMonth = slug[ 1 ];

    // parse both filteredYear and filteredMonth into numbers
    const numYear  = parseInt( filteredYear );
    const numMonth = parseInt( filteredMonth );

    // ==============================
    // frontend validation
    // ==============================

    // make sure the path segments are numbers and that we have the correct year and
    // month values
    if (
        isNaN( numYear )  ||
        isNaN( numMonth ) ||
        numYear > 2023    ||
        numYear < 2021    ||
        numMonth > 12     ||
        numMonth < 1
    ) {

        // if validation fails then we want to return an object and remember we can't return
        // jsx inside getServerSideProps

        // set the hasError prop and then use this prop inside the component to show an
        // error message
        return {
            props : {
                hasError : true
            }
        };

    } // end of if

    // build the dateFilter object
    const dateFilter = {

        year  : numYear,
        month : numMonth

    }

    // ==============================
    // getData()
    // ==============================

    // call the getData function and get data or the transformed events
    const transformedEvents = await getData();

    // ==============================
    // filter data
    // ==============================

    // now that our data has been transformed into an array, we can use the array helper
    // functions like map, filter, find and reduce
    const filteredEvents = transformedEvents.filter( ( event ) => {

        // destructure off the year and month
        const { year, month } = dateFilter;

        // get the event date
        const eventDate = new Date( event.date );

        // return events that meet both criteria
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;

    } );

    // ==============================
    // return an object
    // ==============================

	// then do the following to make filteredEvents available throughout the application
    return {

        props : {
            filteredEventsGSP : filteredEvents,
            date : {
                year  : numYear,
                month : numMonth
            }
        }

    }

    // and now we can use destructuring above to pass in the data or filteredEvents to the
    // page component

} // end of getServerSideProps


// ==============================
// getSStaticPaths
// ==============================

// from stackoverflow:

/*
    If you are creating a dynamic page eg: product/[slug].tsx then even if you don't
    want to create any page on build time you need to create a getStaticPaths method to
    set the fallback property and let NextJS know what to do when the page you are trying
    to get doesn't exist.

    export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

        return {
            paths: [], //indicates that no page needs be created at build time
            fallback: 'blocking' //indicates the type of fallback
        }

    }

    getStaticPaths does mainly two things:

    Indicate which paths should be created on build time (returning a paths array)

    Indicate what to do when a certain page eg: "product/myProduct123" doesn't exist in
    the NextJS Cache (returning a fallback type)
*/

/*
export async function getStaticPaths( context ) {

    return {

        paths    : [], //indicates that no page needs be created at build time
        fallback : true //indicates the type of fallback

    }

}
*/

// unlike the [ productId ].js where we pre generate dynamic routes with getStaticProps and
// getStaticPaths, with [ ...slug ].js we generate dynamic routes just in time on every page
// request with getServerSideProps

// and remember this page is pre rendered on the fly on the server for every incoming
// request




