

// remember the url path for this file is " http://localhost:3016/events/any-parameter/any-parameter "

// remember this catch all route kicks in once we have 2 or more parameters passed into the
// url; otherwise, if we have only one parameter passed into the url
// ( i.e. http://localhost:3016/events/any-parameter ) then the [ eventId ].js file kicks in


// import in the useRouter hook to get access to the route parameter
import { useRouter } from 'next/router';
// use the Meta component to specify a title for this page
import Meta from '../../components/meta/meta';
// import in the EventItem component
import EventItem from '../../components/event-item/event-item';
// import in the ErrorMessage component
import ErrorMessage from '../../components/error-message/em-event-details-page';
// import in getFilteredEvents
import { getFilteredEvents } from '../../data/dummy-data';
// import in our stylesheet
import styles from './[...slug].module.scss';


export default function FilteredEventsPage(  ) {

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

    // create the router object and router.query.routeParameterName gives us access to the
    // route parameter value and then use that route parameter value to reach out to a
    // database and fetch a piece of data
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

    // get the first array value or the filtered year ( i.e. the first route parameter or
    // the first path segment )
    const filteredYear = slug[0];

    // get the second array value or the filtered month ( i.e. the second route parameter
    // or the second path segment ) 
    const filteredMonth = slug[1];

    // parse both filteredYear and filteredMonth into numbers
    const numYear  = parseInt( filteredYear );
    const numMonth = parseInt( filteredMonth );

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

    // run the getFilteredEvents function and the function will return all the filtered
    // events and then save the result to the const filteredEvents
    const filteredEvents = getFilteredEvents( dateFilter );

    // if filteredEvents does not exist or we have no filteredEvents then do the following:
    if ( !filteredEvents || filteredEvents.length === 0 ) {

        return (

            <ErrorMessage>
                There are no events that fit the search criteria. Please close this message to go back to the events page and try again.
            </ErrorMessage>

        );

    }
    
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

    const humanReadableDate = new Date( numYear, numMonth - 1 ).toLocaleDateString( 'en-US', 

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

