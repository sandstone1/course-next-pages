
// remember the url path for this file is " http://localhost:3016/events-dj/any-event "

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


export default function EventDetailsPage(  ) {

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
    const { eventId = {} } = router.query;

    // ==============================
    // filter method
    // ==============================

    // use the filter method to get the correct event and then display that event in the
    // output below and remember filteredEvent is an array of one array item
    const filteredEvent = events.filter( ( event ) => {

        return event.id === eventId;

    } );

    // ==============================
    // frontend validation
    // ==============================

    if ( !filteredEvent[0] ) {

        // if the event does not exist then set a new error message
        return (

            <p>
                The event was not found. Please close this message to go back to the events page and try again.
            </p>

        );

    } // end of if

    // make sure we are getting the right event
    console.log( filteredEvent[0] )

    // ==============================
    // destructure event
    // ==============================

    // destructure event properties needed for the EventPage component
    const { 
        id,
        name,
        date,
        time,
        image,
        performers,
        description,
        venue,
        address
    } = filteredEvent[0];

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

                <Link href={ `/events-dj/edit/${ filteredEvent[0].id }` }>

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

                <span>
                    { 
                        new Date( filteredEvent[0].date ).toLocaleDateString( 
                            'en-US',
                            { year : "numeric", month : "long", day : "numeric" }
                        )
                    }
                    &nbsp;at { filteredEvent[0].time }
                </span>

                <h1 className={ styles.eventDetailsPageContainerDiv2H1First }>
                    { filteredEvent[0].name }
                </h1>

                <img
                    src={ filteredEvent[0].image ? filteredEvent[0].image : '/images/event-default.png' }
                    alt="filtered event"
                />
                
                <h1 className={ styles.eventDetailsPageContainerDiv2H1Second }>
                    Preformers:
                </h1>

                <span>{ filteredEvent[0].performers }</span>

                <h1 className={ styles.eventDetailsPageContainerDiv2H1Third }>
                    Description:
                </h1>

                <p>{ filteredEvent[0].description }</p>

                <h1 className={ styles.eventDetailsPageContainerDiv2H1Fourth }>
                    Venue: { filteredEvent[0].venue }
                </h1>

                <span>{ filteredEvent[0].address }</span>

            </div>

        </div>

    );

}

