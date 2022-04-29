

// import in the useRouter hook
import { useRouter } from 'next/router';
// import in Link
import Link from 'next/link';
// import in the EventItem component
import EventItem from '../../components/event-item/event-item';
// import in the ErrorMessage component
import ErrorMessage from '../../components/error-message/em-search-term-page';
// import in the scss file
import styles from './[searchTerm].module.scss';


export default function SearchTermPage( { filteredEvents } ) {

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

    // get the router object
    const router = useRouter();

    // use destructuring to get the searchTerm
    const { searchTerm } = router.query;

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

    // use the filteredEvents prop from getServerSideProps
    // if filteredEvents does not exist or we have no filteredEvents then do the following:
    if ( !filteredEvents || filteredEvents.length === 0 ) {

        return (

            <ErrorMessage>
                There are no events that fit the search criteria. Please close this message and try again.
            </ErrorMessage>

        );

    } // end of if


	return (

        <div className={ styles.searchPageContainer }>

            <h1 className={ styles.searchPageContainerH1First }>{ `Search results for ${ searchTerm }` }</h1>

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
// getServerSideProps
// ==============================

export async function getServerSideProps( context ) {

    // ==============================
    // fetch the route parameter value
    // ==============================

    // remember we could also get " searchTerm " by using the useRouter hook in the component
    // function above but if we want to get the " searchTerm " inside getServerSideProps then
    // we need to use the code below

    // get the route parameter or dynamic path segment or searchTerm
    const searchTerm = context.params.searchTerm;

    // ==============================
    // getData()
    // ==============================

    // call the getData function and get data or the events in this case
    const transformedEvents = await getData();

    // now that our data has been transformed into an array, we can use the array helper
    // functions like map, filter, find and reduce

    // ==============================
    // filter data
    // ==============================

    // now that our data has been transformed into an array, we can use the array helper
    // functions like map, filter, find and reduce
    const filteredEvents = transformedEvents.filter( ( event ) => {

        // event.date is in the following format: " 05-12-2022 "; therefore, we need to
        // convert event.date into a similar format to what is displayed in the app so
        // that if a user searches for " May ", for example, the user can find it
        const transformedDate = new Date( event.date ).toLocaleDateString( 
            'en-US',
            { year : "numeric", month : "long", day : "numeric" }
        );

        // return events that meet both criteria
        return event.description.toLowerCase().includes( searchTerm.toLowerCase() ) ||
        transformedDate.toLowerCase().includes( searchTerm.toLowerCase() ) ||
        event.location.toLowerCase().includes( searchTerm.toLowerCase() ) ||
        event.title.toLowerCase().includes( searchTerm.toLowerCase() );

    } );

    // ==============================
    // return an object
    // ==============================

	// then do the following to make filteredEvents available throughout the application
    return {

        props : {
            filteredEvents : filteredEvents
        }

    }

    // and now we can use destructuring above to pass in the data or filteredEvents to the
    // page component

}

