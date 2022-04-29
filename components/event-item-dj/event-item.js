

// import in the Link component
import Link from 'next/link';
// don't need a meta component for this file since we will use the meta component
// from the events/index.js file
// use the Meta component to specify a title for this page
// import Meta from '../../components/meta/meta';
// import in our stylesheet
import styles from './event-item.module.scss';


export default function EventItem( { event } ) {

    // ==============================
    // destructure props
    // ==============================

    const { id, image, date, time, name } = event;

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

        <div className={ styles.eventItemContainer }>

            <div className={ styles.eventItemContainerDiv1 }>

                <div className={ styles.eventItemContainerDiv1Column1 }>

                    <img
                        src={ image ? image : '/images/event-default.png' }
                        alt="event image"
                    />

                </div>

                <div className={ styles.eventItemContainerDiv1Column2 }>

                    <time>
                        { 
                            new Date( event.date ).toLocaleDateString( 
                                'en-US',
                                { year : "numeric", month : "long", day : "numeric" }
                            )
                        }
                        &nbsp;at { event.time }
                    </time>

                    <h3>{ event.name }</h3>

                </div>

            </div>

            <div className={ styles.eventItemContainerDiv2 }>

                <Link
                    href={ `/events-dj/${event.id}` }
                >
                    Details
                </Link>

            </div>

        </div>

    );

}

