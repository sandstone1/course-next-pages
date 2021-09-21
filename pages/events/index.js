
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
// import in the SearchEventsComponent
import SearchEventsComponent from '../../components/search/search-events-by-date';
// import in our stylesheet
import styles from './index.module.scss';


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

