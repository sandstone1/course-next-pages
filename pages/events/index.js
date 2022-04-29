
/*
// remember the url path for this file is " http://localhost:3016/events "

// this doesn't work yet in Next.js => import { events } from '../data/data.json';

// often we will need to generate a list of links dynamically and often this list of links
// will come from a database but in this example we will use a hard coded array of events
// from the data.json file

// use the Meta component to specify a title for this page
import Meta from '../../components/meta/meta';
// import in the EventItem component
import EventItem from '../../components/event-item/event-item';
// import in our stylesheet
import styles from './index.module.scss';


// 1 -

// import in getFeaturedEvents
import { getAllEvents } from '../../data/dummy-data';

// End of 1 -



export default function EventsPage() {


    // 1 - continued

    // call the getAllEvents function and the function will return all events and then
    // save the result to the const allEvents
    const allEvents = getAllEvents();

    // End of 1 -


    // ==============================
    // destructure props
    // ==============================

    // ==============================
    // component state
    // ==============================

    // ==============================
    // useRef();
    // ==============================

    // ==============================
    // initialize router
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


    return (

        <div className={ styles.eventsPageContainer }>

            <Meta title="Events page" />

            <h1>All Events</h1>

            {

                allEvents.length === 0 ? (
            
                    <h3>There are no events to show</h3>

                ) : (

                    allEvents.map( ( event ) => (
            
                        <EventItem
                            key={ event.id }
                            event={ event }
                        />
            
                    ) )
            
                )
            
            }

        </div>

    );

}
*/



















// ===============================




















/*
// at the beginning of tutorial 78, given all the notes, I created a new file below without
// the notes so we are starting fresh

// remember the url path for this file is " http://localhost:3016/events "

// often we will need to generate a list of links dynamically and often this list of links
// will come from a database but in this example we will use a hard coded array of events
// from the dummy-data.js file

// import in the useRouter hook to get access to the route parameter
import { useRouter } from 'next/router';
// use the Meta component to specify a title for this page
import Meta from '../../components/meta/meta';
// import in the EventItem component
import EventItem from '../../components/event-item/event-item';
// import in getFeaturedEvents
import { getAllEvents } from '../../data/dummy-data';
// import in our stylesheet
import styles from './index.module.scss';


// 2 -

// import in the SearchEventsComponent
import SearchEventsComponent from '../../components/search/search-events-by-date';

// End of 2 -


export default function EventsPage() {

    // call the getAllEvents function and the function will return all events and then
    // save the result to the const allEvents
    const allEvents = getAllEvents();

    // ==============================
    // destructure props
    // ==============================

    // ==============================
    // component state
    // ==============================

    // ==============================
    // useRef();
    // ==============================

    // ==============================
    // useRouter();
    // ==============================

    // get the router object and router.query.routeParameterName gives us access to the
    // route parameter value and then use that route parameter value to reach out to a
    // database and fetch a piece of data
    const router = useRouter();

    // ==============================
    // useSession();
    // ==============================

    // ==============================
    // initialize the context
    // ==============================

    // ==============================
    // useEffect();
    // ==============================


    // 2 - continued

    // ==============================
    // handleSearch function
    // ==============================

    const handleSearch = async ( year, month ) => {

        // since handleSearch is not part of a form submission there is no need to call
        // e.preventDefault();

        // build the endpoint
        const fullPath = `/events/${ year }/${ month }`;

        // use router.push(); to go to the fullPath endpoint, which will be the [ ...slug ].js
        // page and we will go the [ ...slug ].js page because the endpoint has 2 route
        // parameters ( i.e. /year/month ) and the [ ...slug ].js page will use these 2
        // route parameters ( i.e. year and month ) to search for events by date

        // remember if we only had 1 route parameter then the [ eventId ].js page will take over
        // but if we have 2 or more route parameters then the catch all route will take over and
        // the catch all route in this case is the [ ...slug ].js page
        router.push( fullPath );

    } // end of handleSearch

    // End of 2 -


    return (

        <div className={ styles.eventsPageContainer }>

            <Meta title="Events page" />

            <h1>All Events</h1>

            <SearchEventsComponent onSearch={ handleSearch }/>

            {

                allEvents.length === 0 ? (
            
                    <h3>There are no events to show</h3>

                ) : (

                    allEvents.map( ( event ) => (
            
                        <EventItem
                            key={ event.id }
                            event={ event }
                        />
            
                    ) )
            
                )
            
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
*/



















// ===============================





















// at the beginning of tutorial 82, given all the notes, I created a new file below without
// the notes so we are starting fresh

// remember the url path for this file is " http://localhost:3016/events "

// here we want to fetch all the data in advance with getStaticProps and we are setting
// " revalidate : 60 " so that every minute if a new request comes in then we regenerate the
// page on the server

// import in useState(); hook
import { useState } from 'react';
// import in the useRouter hook to get access to the route parameter
import { useRouter } from 'next/router';
// use the Meta component to specify a title for this page
import Meta from '../../components/meta/meta';
// import in the EventItem component
import EventItem from '../../components/event-item/event-item';
// import in the SearchEventsByDateComponent
import SearchEventsByDateComponent from '../../components/search/search-events-by-date';
// import in our stylesheet
import styles from './index.module.scss';


export default function EventsPage( { events } ) {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // ==============================
    // destructure props
    // ==============================

    // ==============================
    // useRef();
    // ==============================

    // ==============================
    // useRouter();
    // ==============================

    // get the router object and router.query.routeParameterName gives us access to the
    // route parameter value and then use that route parameter value to reach out to a
    // database and fetch a piece of data
    const router = useRouter();

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
    // handleSearch function
    // ==============================

    const handleSearch = async ( year, month ) => {

        // since handleSearch is not part of a form submission there is no need to call
        // e.preventDefault();

        // build the endpoint
        const fullPath = `/events/${ year }/${ month }`;

        // use router.push(); to go to the fullPath endpoint, which will be the [ ...slug ].js
        // page and we will go the [ ...slug ].js page because the endpoint has 2 route
        // parameters ( i.e. /year/month ) and the [ ...slug ].js page will use these 2
        // route parameters ( i.e. year and month ) to search for events by date

        // remember if we only had 1 route parameter then the [ eventId ].js page will take over
        // but if we have 2 or more route parameters then the catch all route will take over and
        // the catch all route in this case is the [ ...slug ].js page
        router.push( fullPath );

    } // end of handleSearch


    return (

        <div className={ styles.eventsPageContainer }>

            <Meta title="Events page" />

            <h1>All Events</h1>

            <SearchEventsByDateComponent onSearch={ handleSearch } />

            {

                events.length === 0 ? (
            
                    <h3>There are no events to show</h3>

                ) : (

                    events.map( ( event ) => (
            
                        <EventItem
                            key={ event.id }
                            event={ event }
                        />
            
                    ) )
            
                )
            
            }

            <style jsx global>
                {`
                    // remember "We (i.e. next.js) bundle styled-jsx to provide support for isolated scoped CSS."
                    body > div > div > main {

                        background : rgba( 246, 246, 246, 1 ) !important;

                    }
                    body > div > div > footer {

                        background : rgba( 246, 246, 246, 1 ) !important;
            
                    }
                `}
            </style>

        </div>

    );

}


// ==============================
// getStaticProps
// ==============================

export async function getStaticProps( context ) {

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

    // for this tutorial let's use the Firebase database api that we created to store
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
    // object and to get this data into an array format we need to transform the data
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

    // now that our data has been transformed into an array, we can use the array helper
    // functions like map, filter, find and reduce

    // ==============================
    // end of fetch API
    // ==============================

    // ==============================
    // return an object
    // ==============================

    // then do the following to make the events available throughout the application
    return {

        props : {
            events : transformedEvents
        },
        revalidate : 60

    }

    // and now we can use destructuring above to pass in the data or events to the page
    // component

} // end of getStaticProps


