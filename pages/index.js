
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





















// at the beginning of tutorial 78, given all the notes, I created a new file below without
// the notes so we are starting fresh

// remember the url path for this file is " http://localhost:3016 "

// import in getFeaturedEvents
import { getFeaturedEvents } from '../data/dummy-data';
// import in the EventItem component
import EventItem from '../components/event-item/event-item';
// import in the scss file
import styles from './index-hero.module.scss';


export default function HomePage() {

    // call the getFeaturedEvents function and the function will return the featured events
    // and save the result to the const featuredEvents
    const featuredEvents = getFeaturedEvents();


    return (

        <div className={ styles.homePageContainer }>

            { /* div 1 */ }
            <div className={ styles.homePageContainerImageContainer }>

                    <h2 className={ styles.homePageContainerImageContainerH2 }>Featured Events</h2>

            </div>

            { /* div 2 */ }
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
