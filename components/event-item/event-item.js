

// import in the Link component
import Link from 'next/link';
// don't need a meta component for this file since we will use the meta component
// from the events/index.js file
// use the Meta component to specify a title for this page
// import Meta from '../../components/meta/meta';
// import in the calendar icon
import { FaRegCalendarAlt } from 'react-icons/fa';
// import in the location icon
import { ImLocation } from 'react-icons/im';
// import in our stylesheet
import styles from './event-item.module.scss';


export default function EventItem( { event } ) {

    // ==============================
    // destructure props
    // ==============================

    const { id, image, date, title, location } = event;

    // ==============================
    // component state
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
    // formatted address
    // ==============================

    // make a line break before the city name
    const formattedAddress = location.replace( ', ', '\n' );

    // split the address in two so we can display the address on 2 lines
    const formattedAddress2Strings = formattedAddress.split( '\n' );


    return (

        <div className={ styles.eventItemContainer }>

            <div className={ styles.eventItemContainerDiv1 }>

                <div className={ styles.eventItemContainerDiv1Column1 }>

                    <img
                        src={ image ? '/' + image : '/images/event-default.png' }
                        alt={ title }
                    />

                </div>

                <div className={ styles.eventItemContainerDiv1Column2 }>

                    <FaRegCalendarAlt 
                        style={ { verticalAlign: '-3px', fontSize: '2.15rem' } }
                    />
                    &nbsp;&nbsp;
                    <time>
                        { 
                            new Date( date ).toLocaleDateString( 
                                'en-US',
                                { year : "numeric", month : "long", day : "numeric" }
                            )
                        }
                    </time>

                    <h2>{ title }</h2>

                    <div>
                        
                        <ImLocation 
                            style={ { verticalAlign: '-4px', fontSize: '2.15rem' } }
                            className={ styles.eventItemContainerDiv1Column2DivIcon }
                        />
                        &nbsp;&nbsp;
                        <address>{ formattedAddress2Strings[ 0 ] }</address>
                        <address>{ formattedAddress2Strings[ 1 ] }</address>
                    </div>

                </div>

            </div>

            <div className={ styles.eventItemContainerDiv2 }>

                <Link
                    href={ `/events/${ id }` }
                >
                    <a>Details</a>
                </Link>

            </div>

        </div>

    );

}

