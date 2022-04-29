
/*
// remember the url path for this file is " http://localhost:3016 "

// import in the scss file
import styles from './index-hero.module.scss';


// 1 -

// import in getFeaturedEvents
import { getFeaturedEvents } from '../data/dummy-data';

// import in the EventItem component
import EventItem from '../components/event-item/event-item';

// End of 1 -


export default function HomePage() {


    // 1 - continued

    // call the getFeaturedEvents function and the function will return the featured events
    // and save the result to the const featuredEvents
    const featuredEvents = getFeaturedEvents();

    // End of 1 -


    return (

        <div className={ styles.homePageContainer }>

            { /* div 1 */ /* }
            <div className={ styles.homePageContainerImageContainer }>

                    <h2 className={ styles.homePageContainerImageContainerH2 }>Featured Events</h2>

            </div>

            { /* div 2 */ /* }
            <div className={ styles.homePageContainerContentContainer1 }>

                {

                    featuredEvents.length === 0 ? (
                
                        <h3>There are no featured events to show</h3>
    
                    ) : (
                    
                        featuredEvents.map( ( event ) => (
                
                            <EventItem
                                key={ event.id }
                                event={ event }
                            />
                
                        ) )
                
                    )
                
                }

            </div>            
            
            <style jsx global>
                {`
                    // remember "We (i.e. next.js) bundle styled-jsx to provide support for isolated scoped CSS."
                    body > div > div > main {

                        height : 1240px; !important; // this is #3

                    }
                    body > div > div > header > nav {

                        z-index : 1; // lay the header nav elements on top of the hero image element

                    }
                    body > div > div > footer {

                        z-index    : 0; // we did not have to change the z-index for the footer since the
                        // footer element appears later in the code
                        background : sienna;

                    }
                    body > div > div > footer > h2,
                    body > div > div > footer > div > span {

                        color : rgba( 255, 255, 255, 1 ) !important; // change the footer text color to white
            
                    }
                    body > div > div > footer > div > a {

                        color           : rgba( 255, 255, 255, 1 ) !important; // change the footer text color to white
                        text-decoration : underline;  // underline " About " 
            
                    }
                    @media all and ( max-width : 1280px ) {

                        body > div > div > main {

                            height : 2290px; !important; // this is #3
    
                        }

                        body > div > div > header > nav > div:nth-child( 1 ) {

                            margin : 1.5rem 0 1.0rem 0 !important; // provide spacing between logo and nav elements on
                            // small screen sizes
                    
                        }

                    }
                    @media all and ( max-width : 920px ) {

                        body > div > div > main {

                            height : 2190px; !important; // this is #3
    
                        }

                    }
                    @media all and ( max-width : 768px ) {

                        body > div > div > main {

                            height : 1940px; !important; // this is #3
    
                        }

                    }
                    @media all and ( max-width : 620px ) {

                        body > div > div > main {

                            height : 1740px; !important; // this is #3
    
                        }

                    }
                    @media all and ( max-width : 480px ) {

                        body > div > div > main {

                            height : 1440px; !important; // this is #3
    
                        }

                    }
                `}
			</style>

        </div>

    );

}
*/



















// ===============================




















/*
// at the beginning of tutorial 78, given all the notes, I created a new file below without
// the notes so we are starting fresh

// remember the url path for this file is " http://localhost:3016 "

// here we want to use getStaticProps since we don't need to pre render the page for every
// request and getStaticProps will pre render the page during the build process and then
// regenerate the page on the server if we set the revalidate key to a certain value

// import in useState(); hook
import { useState } from 'react';
// import in axios
import axios from 'axios';
// import in the EventItem component
import EventItem from '../components/event-item/event-item';
// import in the scss file
import styles from './index-hero-image-screen-v2.module.scss';


export default function HomePage( { featuredEvents } ) {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed

    // ==============================
    // destructure props
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

    return (

        <div className={ styles.homePageContainer }>

            { /* div 1 */ /* }
            <div className={ styles.homePageContainerImageContainer }>

                    <h2 className={ styles.homePageContainerImageContainerH2 }>Featured Events</h2>

            </div>

            { /* div 2 */ /* }
            <div className={ styles.homePageContainerContentContainer1 }>

                {

                    featuredEvents.length === 0 ? (
                
                        <h3>There are no featured events to show</h3>
    
                    ) : (
                    
                        featuredEvents.map( ( event ) => (

                            <EventItem
                                key={ event.id }
                                event={ event }
                            />
                
                        ) )
                
                    )
                
                }

            </div>

            <style jsx global>
                {`
                    // remember "We (i.e. next.js) bundle styled-jsx to provide support for isolated scoped CSS."
                    body > div > div > main {

                        height : 1240px; !important; // this is #3

                    }
                    body > div > div > header > nav {

                        z-index : 1; // lay the header nav elements on top of the hero image element

                    }
                    body > div > div > footer {

                        z-index    : 0; // we did not have to change the z-index for the footer since the
                        // footer element appears later in the code
                        background : sienna;

                    }
                    body > div > div > footer > h2,
                    body > div > div > footer > div > span {

                        color : rgba( 255, 255, 255, 1 ) !important; // change the footer text color to white
            
                    }
                    body > div > div > footer > div > a {

                        color           : rgba( 255, 255, 255, 1 ) !important; // change the footer text color to white
                        text-decoration : underline;  // underline " About " 
            
                    }
                    @media all and ( max-width : 1280px ) {

                        body > div > div > main {

                            height : 2290px; !important; // this is #3
    
                        }

                        body > div > div > header > nav > div:nth-child( 1 ) {

                            margin : 1.5rem 0 1.0rem 0 !important; // provide spacing between logo and nav elements on
                            // small screen sizes
                    
                        }

                    }
                    @media all and ( max-width : 920px ) {

                        body > div > div > main {

                            height : 2190px; !important; // this is #3
    
                        }

                    }
                    @media all and ( max-width : 768px ) {

                        body > div > div > main {

                            height : 1940px; !important; // this is #3
    
                        }

                    }
                    @media all and ( max-width : 620px ) {

                        body > div > div > main {

                            height : 1740px; !important; // this is #3
    
                        }

                    }
                    @media all and ( max-width : 480px ) {

                        body > div > div > main {

                            height : 1440px; !important; // this is #3
    
                        }

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

    // remove the component level state

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

    /*
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

    // STEP 5
    // get the featured events
    const featuredEvents = transformedEvents.filter( ( event ) => event.isFeatured );

    // ==============================
    // end of fetch API
    // ==============================

    // ==============================
    // return an object
    // ==============================

    // then do the following to make the featuredEvents available throughout the application
    return {

        props : {
            featuredEvents : featuredEvents
        },
        revalidate : 1800 // regenerate the page every 30 minutes

    }

    // and now we can use destructuring above to pass in the data or featuredEvents to the page
    // component

} // end of getStaticProps
*/




















// ===============================





















// at the beginning of tutorial 151, given all the notes, I created a new file below without
// the notes so we are starting fresh

// remember the url path for this file is " http://localhost:3016 "

// here we want to use getStaticProps since we don't need to pre render the page for every
// request and getStaticProps will pre render the page during the build process and then
// regenerate the page on the server if we set the revalidate key to a certain value

// import in useState(); hook
import { useState } from 'react';
// import in axios
import axios from 'axios';
// import in the EventItem component
import EventItem from '../components/event-item/event-item';
// import in the scss file
import styles from './index-hero-image-screen-v2.module.scss';


// 2 - 

// import in the NewsletterRegistrationComponent
import NewsletterRegistrationComponent from '../components/newsletter/newsletter-registration';

// add the component below

// End of 2 -


export default function HomePage( { featuredEvents } ) {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed

    // ==============================
    // destructure props
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

    return (

        <div className={ styles.homePageContainer }>

            { /* div 1 */ }
            <div className={ styles.homePageContainerNewsletterRegistrationContainer }>

                <NewsletterRegistrationComponent />

            </div>

            { /* div 2 */ }
            <div className={ styles.homePageContainerImageContainer }>

                <h2 className={ styles.homePageContainerImageContainerH2 }>Featured Events</h2>

            </div>

            { /* div 3 */ }
            <div className={ styles.homePageContainerContentContainer1 }>

                {

                    featuredEvents.length === 0 ? (
                
                        <h3>There are no featured events to show</h3>
    
                    ) : (
                    
                        featuredEvents.map( ( event ) => (

                            <EventItem
                                key={ event.id }
                                event={ event }
                            />
                
                        ) )
                
                    )
                
                }

            </div>

            <style jsx global>
                {`
                    // remember "We (i.e. next.js) bundle styled-jsx to provide support for isolated scoped CSS."
                    body > div > div > main {

                        height : 1650px; !important; // this is #3

                    }
                    body > div > div > header > nav {

                        z-index : 1; // lay the header nav elements on top of the hero image element

                    }
                    body > div > div > footer {

                        z-index    : 0; // we did not have to change the z-index for the footer since the
                        // footer element appears later in the code
                        background : sienna;

                    }
                    body > div > div > footer > h2,
                    body > div > div > footer > div > span {

                        color : rgba( 255, 255, 255, 1 ) !important; // change the footer text color to white
            
                    }
                    body > div > div > footer > div > a {

                        color           : rgba( 255, 255, 255, 1 ) !important; // change the footer text color to white
                        text-decoration : underline;  // underline " About " 
            
                    }
                    @media all and ( max-width : 1280px ) {

                        body > div > div > main {

                            height : 2290px; !important; // this is #3
    
                        }

                        body > div > div > header > nav > div:nth-child( 1 ) {

                            margin : 1.5rem 0 1.0rem 0 !important; // provide spacing between logo and nav elements on
                            // small screen sizes
                    
                        }

                    }
                    @media all and ( max-width : 920px ) {

                        body > div > div > main {

                            height : 2190px; !important; // this is #3
    
                        }

                    }
                    @media all and ( max-width : 768px ) {

                        body > div > div > main {

                            height : 1940px; !important; // this is #3
    
                        }

                    }
                    @media all and ( max-width : 620px ) {

                        body > div > div > main {

                            height : 1740px; !important; // this is #3
    
                        }

                    }
                    @media all and ( max-width : 480px ) {

                        body > div > div > main {

                            height : 1440px; !important; // this is #3
    
                        }

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

    // remove the component level state

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

    // STEP 5
    // get the featured events
    const featuredEvents = transformedEvents.filter( ( event ) => event.isFeatured );

    // ==============================
    // end of fetch API
    // ==============================

    // ==============================
    // return an object
    // ==============================

    // then do the following to make the featuredEvents available throughout the application
    return {

        props : {
            featuredEvents : featuredEvents
        },
        revalidate : 1800 // regenerate the page every 30 minutes

    }

    // and now we can use destructuring above to pass in the data or featuredEvents to the page
    // component

} // end of getStaticProps


