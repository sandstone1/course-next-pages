

/*
// remember the url path for this file is " http://localhost:3016/events/any-event "

// import in the Link component
import Link from 'next/link';
// import in the useRouter hook to get access to the route parameter
import { useRouter } from 'next/router';
// use the Meta component to specify a title for this page
import Meta from '../../components/meta/meta';
// import in the events array
const { events } = require( '../../data/data.json' );
// import in Font Awesome
import { FaPencilAlt } from 'react-icons/fa';
// import in Font Awesome
import { FaTrash } from 'react-icons/fa';
// import in our stylesheet
import styles from './[eventId].module.scss';


// 1 -

// import in getFeaturedEvents
import { getEventById } from '../../data/dummy-data';

// import in the calendar icon
import { FaRegCalendarAlt } from 'react-icons/fa';
// import in the location icon
import { ImLocation } from 'react-icons/im';

// End of 1 -


export default function EventDetailsPage() {

    // ==============================
    // component state
    // ==============================

    // ==============================
    // useRef();
    // ==============================

    // ==============================
    // initialize router
    // ==============================

    // get the router object and router.query.routeParameterName gives us access to the
    // route parameter value and then use that route parameter value to reach out to a
    // database and fetch a piece of data
    const router = useRouter();

    // use destructuring to get the eventId
    const { eventId } = router.query;


    // 1 - continued

    // call the getEventById function and the function will return the specified event and
    // then save the result to the const event
    const event = getEventById( eventId );

    // ==============================
    // frontend validation
    // ==============================

    if ( !event ) {

        // if the event does not exist then set a new error message
        return <p
            style={ 
                {
                    gridColumn : '2 / 12',
                    margin     : '12.0rem 0 0 0',

                    fontSize   : '2.4rem',
                    fontWeight : '700',
                    color      : 'rgba( 52, 58, 64, 1 )',
                    textAlign  : 'center'
                }
            }
        >
            The event was not found. Please try again.
        </p>

    } // end of if

    // ==============================
    // destructure event
    // ==============================

    // destructure event properties needed for the event details page
    const { 
        id,
        title,
        description,
        location,
        date,
        time,
        image,
        isFeatured
    } = event;

    // End of 1 -


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

        <div className={ styles.eventDetailsPageContainer }>

            <Meta title="Event Details Page" />
            
            <div className={ styles.eventDetailsPageContainerDiv1 }>

                <Link href={ `/events/edit/${ id }` }>

                    <a>
                        <FaPencilAlt style={ { verticalAlign: '-2px', fontSize: '1.6rem' } } />
                        &nbsp;&nbsp;Edit Event
                    </a>

                </Link>

                <a 
                    href="#"
                    // onClick={ handleDeleteEvent }
                >
                    <FaTrash style={ { verticalAlign: '-2px', fontSize: '1.6rem' } } />
                    &nbsp;Delete Event
                </a>

            </div>
            

            <div className={ styles.eventDetailsPageContainerDiv2 }>

                <h1 className={ styles.eventDetailsPageContainerDiv2H1First }>
                    { title }
                </h1>

                <img
                    src={ image ? `/${image}` : '/images/event-default.png' }
                    alt={ title }
                />

                <h1 className={ styles.eventDetailsPageContainerDiv2H1Second }>
                    Description:
                </h1>

                <p>{ description }</p>

                <h1 className={ styles.eventDetailsPageContainerDiv2H1Third }>
                    Location:
                </h1>

                <ImLocation 
                    style={ { verticalAlign: '-4px', fontSize: '2.15rem', color : 'rgba( 64, 99, 171, 1 )' } }
                />
                &nbsp;
                <span>{ location }</span>

                <h1 className={ styles.eventDetailsPageContainerDiv2H1Fourth }>
                    When:
                </h1>

                <FaRegCalendarAlt 
                    style={ { verticalAlign: '-3px', fontSize: '2.15rem', color : 'rgba( 64, 99, 171, 1 )' } }
                />
                &nbsp;&nbsp;
                <span>
                    { 
                        new Date( date ).toLocaleDateString( 
                            'en-US',
                            { year : "numeric", month : "long", day : "numeric" }
                        )
                    }
                    &nbsp;at { time }
                </span>

            </div>

        </div>

    );

}
*/




















// ===============================





















// at the beginning of tutorial 153, given all the notes, I created a new file below without
// the notes so we are starting fresh

// remember the url path for this file is " http://localhost:3016/events/any-event "

// we definitely want this page to be crawlable and we will use getStaticProps and since
// this is a dynamic page route we will also use getStaticPaths and since the data won't
// change very often getStaticProps is a better choice than getServerSideProps in this use
// case

// import in useState(); hook
import { useState } from 'react';
// import in the Link component
import Link from 'next/link';
// use the Meta component to specify a title for this page
import Meta from '../../components/meta/meta';
// import in the ErrorMessage component
import ErrorMessage from '../../components/error-message/em-event-details-page';
// import in getFeaturedEvents
import { getEventById } from '../../data/dummy-data';
// import in the calendar icon
import { FaRegCalendarAlt } from 'react-icons/fa';
// import in the location icon
import { ImLocation } from 'react-icons/im';
// import in pencil icon
import { FaPencilAlt } from 'react-icons/fa';
// import in trash icon
import { FaTrash } from 'react-icons/fa';
// import in our stylesheet
import styles from './[eventId].module.scss';


// 2 -
// import in the CommentGetandPost component
import CommentGetandPostComponent from '../../components/comments/comment-get-post';

// End of 2 -



export default function EventDetailsPage( { event = {} } ) {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // ==============================
    // destructure props
    // ==============================

    // destructure event properties needed for the event details page
    const { 
        id,
        title,
        description,
        location,
        date,
        time,
        image,
        isFeatured
    } = event;

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

    // no need to check and see if event is undefined then set an error message because
    // we are using " fallback : false " in getStaticPaths and therefore next.js will
    // automatically show a 404 page if something in the data does not exist


    return (

        <div className={ styles.eventDetailsPageContainer }>

            <Meta title="Event Details Page" />
            
            <div className={ styles.eventDetailsPageContainerDiv1 }>

                <Link href={ `/events/edit/${ id }` }>

                    <a>
                        <FaPencilAlt style={ { verticalAlign: '-2px', fontSize: '1.6rem' } } />
                        &nbsp;&nbsp;Edit Event
                    </a>

                </Link>

                <a 
                    href="#"
                    // onClick={ handleDeleteEvent }
                >
                    <FaTrash style={ { verticalAlign: '-2px', fontSize: '1.6rem' } } />
                    &nbsp;Delete Event
                </a>

            </div>
            
            <div className={ styles.eventDetailsPageContainerDiv2 }>

                <h1 className={ styles.eventDetailsPageContainerDiv2H1First }>
                    { title }
                </h1>

                <img
                    src={ image ? `/${image}` : '/images/event-default.png' }
                    alt={ title }
                />

                <h1 className={ styles.eventDetailsPageContainerDiv2H1Second }>
                    Description:
                </h1>

                <p>{ description }</p>

                <h1 className={ styles.eventDetailsPageContainerDiv2H1Third }>
                    Location:
                </h1>

                <ImLocation 
                    style={ { verticalAlign: '-4px', fontSize: '2.15rem', color : 'rgba( 64, 99, 171, 1 )' } }
                />
                &nbsp;
                <span>{ location }</span>

                <h1 className={ styles.eventDetailsPageContainerDiv2H1Fourth }>
                    When:
                </h1>

                <FaRegCalendarAlt 
                    style={ { verticalAlign: '-3px', fontSize: '2.15rem', color : 'rgba( 64, 99, 171, 1 )' } }
                />
                &nbsp;&nbsp;
                <span>
                    { 
                        new Date( date ).toLocaleDateString( 
                            'en-US',
                            { year : "numeric", month : "long", day : "numeric" }
                        )
                    }
                    &nbsp;at { time }
                </span>

            </div>

            <CommentGetandPostComponent eventId={ id } />

        </div>

    );

}


// remember if we use the useEffect(); hook to retrieve the data then remember that data
// is not there when this page is initially rendered and therefore search engines will
// not see our data and therefore we will use getStaticProps to retrieve our data instead

// ==============================
// for Dynamic Routes we need to use both getStaticProps and getStaticPaths
// ==============================

// remember if we have a dynamic route then the default behavior by next.js is to not
// pre generate the page and the reason is that next.js doesn't know how many pages
// to pre generate for a dynamic route

// so dynamic routes are always generated just in time on the server but if we use
// getStaticProps then we are telling next.js that we want to render this page
// in advance

// therefore with dynamic routes we need to give next.js more information and this
// information will be in the form of paths from getStaticPaths and these paths tell
// next.js how many routes need to be pre generated

// remember getStaticPaths only works inside page component files

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

    // return transformedEvents
    return transformedEvents;

    // ==============================
    // end of fetch API
    // ==============================

} // end of getData


// ==============================
// getStaticProps
// ==============================

export async function getStaticProps( context ) {

    // ==============================
    // fetch the route parameter value
    // ==============================

    // remember we could also get " eventId " by using the useRouter hook in the component
    // function above but if we want to get the " eventId " inside getStaticProps then we
    // need to use the code below

    // get the route parameter or dynamic path segment or eventId
    const eventId = context.params.eventId;

    // ==============================
    // getData()
    // ==============================

    // call the getData function and get data or the events in this case
    const transformedEvents = await getData();

    // now that our data has been transformed into an array, we can use the array helper
    // functions like map, filter, find and reduce

    // ==============================
    // find data
    // ==============================

    // getEventById
    const event = transformedEvents.find( ( event ) => (

        eventId === event.id

    ) );

    // ==============================
    // return an object
    // ==============================

    // then do the following to make the event available throughout the application
    return {

        props : {
            event : event
        },
        revalidate : 30 // regenerate the page every 30 seconds so if a new request comes
        // in and it has been more than 30 seconds since the page was last generated
        // then regnerate the page

    }

    // and now we can use destructuring above to pass in the data or event to the page
    // component

} // end of getStaticProps


// ==============================
// getStaticPaths
// ==============================

export async function getStaticPaths() {

    // we need to get all the data so that next will know how many routes and html pages it
    // needs to generate

    // ==============================
    // getData()
    // ==============================

    // call the getData function and get data
    const transformedEvents = await getData();
    
    // and this is what we are seeking to return
    /*
    return {
        paths : [
            { params : { id : '1' } },
            { params : { id : '2' } },
            { params : { id : '3' } }
        ]
    }
    */

    // ==============================
    // create paths
    // ==============================

    // so essentially we need to take the data that is returned and that data is an array
    // of objects and we need to turn that data into " { params : { id : '1' } } " and
    // then pass that key ( i.e. params ) value pair into paths and we can do this with 1
    // line of code ( see below )

    // Line 1
    // get an array of objects ( i.e. { params : { id : '1' } } ) and save this array
    // to the const called paths
    const paths = transformedEvents.map( ( event ) => (

        { params : { eventId : event.id } }

    ) );

    // ==============================
    // return an object
    // ==============================

    // now all we need to return is " paths : paths " and add " fallback : false " and this
    // means if we go to something in the data that does not exist then we will be forwarded to
    // a 404 page
    return {
        paths    : paths,
        fallback : false
    }

    // so now when next builds our app for production it will look at the paths value, which is
    // an array of objects and next will build a route and an html page for each object in the
    // array using the parameters we specified and in our case next will build 3 routes and
    // 3 pages because we have 3 different event ids and for each page next will use the
    // EventDetailsPage component to create the page

    // remember if we had 1000 events, for example, we may only want to pre render the
    // top 30 events and in that case we would change " fallback : false " to
    // " fallback : true " or " fallback : 'blocking' " and then show a Spinner component in
    // the component above so that if a user clicks on an event that falls outside the top 30
    // events then that event will still show on the event details page 

}


