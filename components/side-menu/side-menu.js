


// let's surround the anchor tags with the Link component and then add the href attribute
// to each Link component and then inside the Link component we have the anchor tags

// import in the useEffect and useRef hooks
import { useCallback, useEffect, useRef } from 'react';
// import in the Link component
import Link from 'next/link';
// import in the useRouter(); hook
import { useRouter } from 'next/router';
// import in the useSession(); hook and the signOut function
import { useSession, signOut } from 'next-auth/react';
// import in Font Awesome times circle icon
import { FaTimesCircle } from 'react-icons/fa';
// import in our stylesheet
import styles from './side-menu.module.scss';


// pass down the resetShowSideMenu and showSideMenu properties from the nav component
export default function SideMenuComponent( { resetShowSideMenu, showSideMenu } ) {

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
    // create DOM reference
    // ==============================

    // STEP 1

    // use the useRef(); hook to create a reference to a DOM element and let's start by
    // initializing a useRef variable and we will call this variable " sideMenuContainerRef "   
    const sideMenuContainerRef = useRef();

    // End of STEP 1

    // ==============================
    // useRouter();
    // ==============================

    // initialize router
    const router = useRouter();

    // ==============================
    // useSession();
    // ==============================

    // revised in next auth version 4
    // call the useSession hook and then use session and status in the code below
    const { data : session, status } = useSession();

    // " Example Session Object

    /*
        {
            user: {
                name  : string
                email : string
                image : string
            },
            expires : Date // This is the expiry of the session, not any of the tokens
            // within the session
        } "
    */

    // the session object looks like the following:

    /*
        {user : {…}, expires : '2021-10-06T18:48:04.355Z'}
        expires : "2021-10-06T18:48:04.355Z"
        user : {
            email : "john@example.com"
            image : null
            name  : "John Doe"
        }
        [[Prototype]] : Object
    */

    /*
        " The useSession() React Hook in the NextAuth.js client is the easiest way to check
        if someone is signed in.

        useSession() returns an object containing two values : data and status:

        Bullet => data : this can be three values: Session / undefined / null
            - when the session hasn't been fetched yet, data will undefined
            - in case it failed to retrieve the session, data will be null
            - in case of success, data will be Session
        Bullet => status : enum mapping to three possible session states:
        "loading" | "authenticated" | "unauthenticated"
    */

    // ==============================
    // initialize the context
    // ==============================

    // ==============================
    // handleClickOutside function
    // ==============================

    const handleClickOutside = useCallback( ( e ) => {
        
        if (

            sideMenuContainerRef.current &&
            !sideMenuContainerRef.current.contains( e.target )

        ) {

            // call resetShowSideMenu and this will change the showSideMenu state in the nav.js
            // file, thereby closing the side menu
            resetShowSideMenu();

        }

    }, [ resetShowSideMenu ] ); // end of handleClickOutside


    // ==============================
    // handleKeyPress function
    // ==============================

    const handleKeyPress = useCallback( ( e ) => {
        
        // had to disable the Space Bar key since causing the page to move downward
        if ( e.key === " " ) {

            e.preventDefault();

        }

        // if the escape key is pressed then close the side menu
        if ( e.key === "Escape" ) {
    
            // call resetShowSideMenu and this will change the showSideMenu state in the nav.js
            // file, thereby closing the side menu
            resetShowSideMenu();

        }

    }, [ resetShowSideMenu ] ); // end of handleKeyPress


    // ==============================
    // useEffect();
    // ==============================

    // the useEffect hook will run after the initial page load ( this initial page load
    // will show the showSideMenu state as being false and will trigger the code below )
    // and then the useEffect hook will be called each time the showSideMenu states
    // changes 
    useEffect( () => {

        // ==============================
        // code block #1
        // ==============================
    
        // ==============================
        // create DOM reference
        // ==============================

        // STEP 3

        // reference the specified DOM element below

        // ==============================
        // slide the side menu to the left, thereby showing the side menu on the screen
        // after the user clicks on the profile user icon
        // ==============================

        // make sure the search box is displayed before running the animation
        if ( sideMenuContainerRef.current && showSideMenu ) {

            // test
            console.log( `${ showSideMenu  }` )

            // hide the side menu container on page load and then when the user clicks on the
            // profile icon, which will open the side menu then we want to change the visibility
            // key value pair from " visibility : hidden; " to " visibility : visible; " and
            // we will keep this state until the page is reloaded

            // in the meantime, everytime the user opens or closes the side menu we will
            // use the tranisition and transform properties to give the opening and closing
            // of the side menu a nice smooth amination effect            
            sideMenuContainerRef.current.style.visibility = 'visible';

            // move the side menu to its initial placement, which is 0vw and this shows
            // the side menu on the right hand side of page and the menu has a width of
            // 30vw
            sideMenuContainerRef.current.style.transform = 'translate3d( 0vw, 0, 0 )';

        } // end of if

        // ==============================
        // code block #2
        // ==============================

        // ==============================
        // slide the side menu off the screen and to the right after clicking the profile
        // user icon
        // ==============================

        if ( sideMenuContainerRef.current && !showSideMenu ) {

            // test
            console.log( `${ showSideMenu  }` )

            // move the side menu off the screen to the right or 30vw
            sideMenuContainerRef.current.style.transform = 'translate3d( 30vw, 0, 0 )';

        } // end of if

        // ==============================
        // code block #3
        // ==============================

        // ==============================
        // add event listeners for the click and keydown events
        // ==============================

        // make sure the side menu is opened before adding the event listeners
        if ( sideMenuContainerRef.current && showSideMenu ) {

            // if we press the any key then we will call the handleKeyPress function above
            document.addEventListener( 'keydown', handleKeyPress, false );

            // if we click outside the modal ( anywhere in the document ) then we will call the
            // handleClickOutside function
            document.addEventListener( 'click', handleClickOutside, false );
            
            // make sure we remove the event listeners after we call the handleKeyPress and
            // handleClickOutside functions
            return () => {

                document.removeEventListener( 'keydown', handleKeyPress, false );

                document.removeEventListener( 'click', handleClickOutside, false );

            };

        } // end of if

    }, [ showSideMenu, handleKeyPress, handleClickOutside ] ) // end of useEffect

    // ==============================
    // handleLogout function
    // ==============================

    const handleLogout = async ( e ) => {

        // e.preventDefault(); got rid of the following error:
        /*
            Unhandled Runtime Error
            Error: Failed to load script /_next/static/chunks/pages/logout.js 
        */
        e.preventDefault();

        // ==============================
        // call the signOut function
        // ==============================

        // from the next auth documentation on how to avoid any flicker when signing out

        // from the next auth documentation:
        // "If you pass redirect: false to signOut, the page will not reload. The session
        // will be deleted, and the useSession hook is notified, so any indication about
        // the user will be shown as logged out automatically. It can give a very nice
        // experience for the user."
        const data = await signOut(
            { 
                redirect    : false,
                // after some consideration, not doing a redirect resulted in a better user
                // experince
                // callbackUrl : "http://localhost:3016"
            }
        );

        // from the next auth documentation:
        // " If you need to redirect to another page but you want to avoid a page reload,
        // you can try: const data = await signOut({redirect: false, callbackUrl: "/foo"})
        // where data.url is the validated url you can redirect the user to without any
        // flicker by using Next.js's useRouter().push(data.url) "
        
        // after some consideration, not doing a redirect resulted in a better user experince
        // router.push( data.url );

        // ==============================
        // important gotcha
        // ==============================

        // had to make sure we switched the showSideMenu state back to false when logging out;
        // otherwise, the showSideMenu state remained in a " true " state so when we go to
        // sign in after logging out and then sign in we still see the side menu component
        // after signing in because our showSideMenu state is still " true "
        resetShowSideMenu()

    } // end of handleLogout

    // remember that as soon as we call the signOut function the session object will change
    // from true to false or null and next.js will clear out the next-auth-session-token cookie


    return (

        // ==============================
        // create DOM reference
        // ==============================

        // STEP 2 ( see below )

        // tie the initialized useRef variable from above into a specific DOM element so that we can
        // reference that DOM element in our code

        <div
            className={ styles.sideMenuContainer }
            ref={ sideMenuContainerRef }
        >

                <div className={ styles.sideMenuContainerHeading }>

                    <h3>Account</h3>

                    <FaTimesCircle
                        style={ { fontSize: '2.6rem' } }
                        onClick={ () => resetShowSideMenu() }
                    />

                </div>

                <ul>

                    { /* show the CATEGORY 1 tab at all times */ }
                    <li>
                        <Link href="/profile">
                            <a
                                onClick={ () => resetShowSideMenu() }
                            >
                                Profile
                            </a>
                        </Link>
                    </li>

                    { /* show the CATEGORY 2 tab at all times */ }
                    <li>
                        <Link href="/orders">
                            <a>
                                Orders
                            </a>
                        </Link>
                    </li>

                    { /* show the CATEGORY 3 at all times */ }
                    <li>
                        <Link href="/favorites">
                            <a>
                                Favorites
                            </a>
                        </Link>
                    </li>

                    { /* show the CATEGORY 4 at all times */ }
                    <li>
                        <Link href="/inbox">
                            <a>
                                Inbox
                            </a>
                        </Link>
                    </li>

                    { /* show the CATEGORY 5 at all times */ }
                    <li>
                        <Link href="/account-settings">
                            <a>
                                Account Settings
                            </a>
                        </Link>
                    </li>

                    { /* show the LOGOUT button only if were authenticated and logged in */ }
                    {
                        ( status === "authenticated" ) && (
                            <li>
                                <Link href="/logout">
                                    <a
                                        onClick={ handleLogout }
                                    >
                                        Logout
                                    </a>
                                </Link>
                            </li>
                        )
                    }

                </ul>

        </div>


    );

} // end of SideMenuComponent




