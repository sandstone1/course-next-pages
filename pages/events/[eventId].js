

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





















// at the beginning of tutorial 78, given all the notes, I created a new file below without
// the notes so we are starting fresh

// remember the url path for this file is " http://localhost:3016/events/any-event "

// import in the Link component
import Link from 'next/link';
// import in the useRouter hook to get access to the route parameter
import { useRouter } from 'next/router';
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
// import in Font Awesome
import { FaPencilAlt } from 'react-icons/fa';
// import in Font Awesome
import { FaTrash } from 'react-icons/fa';
// import in our stylesheet
import styles from './[eventId].module.scss';


export default function EventDetailsPage() {

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

    // use destructuring to get the eventId
    const { eventId } = router.query;

    // call the getEventById function and the function will return the specified event and
    // then save the result to the const event
    const event = getEventById( eventId );

    // ==============================
    // frontend validation
    // ==============================

    if ( !event ) {

        // if the event does not exist then set a new error message
        return (

            <ErrorMessage>
                The event was not found. Please close this message to go back to the events page and try again.
            </ErrorMessage>

        );

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


