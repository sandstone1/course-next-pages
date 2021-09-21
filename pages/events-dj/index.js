

// remember the url path for this file is " http://localhost:3016/events-dj "

// this doesn't work yet in Next.js => import { events } from '../data/data.json';

// often we will need to generate a list of links dynamically and often this list of links
// will come from a database but in this example we will use a hard coded array of events
// from the data.json file

// use the Meta component to specify a title for this page
import Meta from '../../components/meta/meta';
// import in the events array
const { events } = require( '../../data/data.json' );
// import in the EventItem component
import EventItem from '../../components/event-item-dj/event-item';
// import in our stylesheet
import styles from './index.module.scss';


export default function EventsPage() {

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

            <h1>The Page for All Events</h1>

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

        </div>

    );

}

