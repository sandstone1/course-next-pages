

/*
// import in the Link component
import Link from 'next/link';

// next let's surround the anchor tags with this Link component and then let's add in the
// href attribute to each Link component and remember we add the href to the Link component
// and then inside the Link component we have the anchor tags

// import in Simple Icons
import { SiNextDotJs } from 'react-icons/si';
// import in BoxIcons
import { BiLogInCircle } from 'react-icons/bi';
// import in Font Awesome
import { FaUser } from 'react-icons/fa';
// import in VS Code Icons
import { VscSignOut } from 'react-icons/vsc';

// import in our stylesheet
import styles from './nav.module.scss';


// 1 -

// in this component we only want to show the profile tab if the user is authenticated and
// since we used next auth all we have to do to determine whether or not a user is
// authenticated is

// (1) import in the useSession hook and then
// (2) call the useSession(); hook below and then use the 2 array elements that are returned
// by the useSession hook and 2 elements are
// (3) the session object and the loading boolean

// import in the useSession(); hook
import { useSession } from 'next-auth/client';

// End of 1 -


const Nav = () => {


    // 1 - continued

    // when we call the useSesssion(); hook it will return an array of 2 elements and those
    // 2 elements are the session object and the loading boolean

    // pull off the session and loading elements
    const [ session, loading ] = useSession();

    // let's console.log both elements
    console.log( loading );
    console.log( session );

    // and this results in the following:

    /*
        true => ( pertains to loading )

        undefined => ( pertains to the session object )

        true => ( pertains to loading )

        { user: {…}, expires: "2021-10-01T00:13:27.572Z" } => ( pertains to the session object )
        expires: "2021-10-01T00:13:27.572Z"
        user: { name: null, email: "john@example.com", image: null }
        [[Prototype]]: Object

        false => ( pertains to loading )

        { user: {…}, expires: "2021-10-01T00:13:27.572Z" } => ( pertains to the session object )
        expires: "2021-10-01T00:13:27.572Z"
        user: { name: null, email: "john@example.com", image: null }
        [[Prototype]]: Object
    */

    // in the session object, we can see the user data that we encoded in our token in the
    // [ ...nextauth ].js file ( i.e. return { email : user.email }; )

    // and we see an expires date, which tells us when this session will expire but this
    // session will be prolonged automatically if the user is active

    // so now we can use these 2 elements and let's add a session conditional around the
    // profile list item so in other words we only show the profile tab if the user is
    // authenticated or signed in

    // also, we can add the session conditional and loading boolean to the signin list item
    // so that we only show the signin tab if we are not authenticated or logged in and the
    // application is not loading

    // for the logout button we only want to show this button if we are logged in

    // and if we go to the signin page, we now see that the login tab is gone and this is
    // correct so everything is working as expected

    // next, we will learn how we can logout

    // End of 1 -


    /*
    return (

        <nav className={ styles.navContainer }>

            <div className={ styles.navContainerLeft }>

                <h4>

                    <Link href="/">
                        <a>
                            <SiNextDotJs style={ { verticalAlign: '-5px', fontSize: '3.6rem' } } />
                            &nbsp;&nbsp;Next Auth
                        </a>
                    </Link>

                </h4>

            </div>

            <div className={ styles.navContainerRight }>

                <ul>

                    { /* show signin tab only if we're not logged in and the app is not loading */ /* }
                    {
                        !session && !loading && (
                            <li>
                                <Link href="/signin">
                                    <a>
                                        <BiLogInCircle style={ { verticalAlign: '-5px', fontSize: '2.15rem' } } />
                                        &nbsp;&nbsp;Sign In
                                    </a>
                                </Link>
                            </li>
                        )
                    }

                    { /* show profile tab only if were authenticated and logged in */ /* }
                    { 
                        session && (
                            <li>
                                <Link href="/profile">
                                    <a>
                                        <FaUser style={ { verticalAlign: '-2px', fontSize: '1.75rem' } } />
                                        &nbsp;&nbsp;Profile
                                    </a>
                                </Link>
                            </li>
                        )
                    }

                    { /* show the logout button only if were authenticated and logged in */ /* }
                    {
                        session && (
                            <li>
                                <Link href="/logout">
                                    <a>
                                        <VscSignOut style={ { verticalAlign: '-5px', fontSize: '2.15rem' } } />
                                        &nbsp;&nbsp;Logout
                                    </a>
                                </Link>
                            </li>
                        )
                    }

                </ul>

            </div>

        </nav>

    );

}


export default Nav;
*/


















// ===============================




















/*
// at the beginning of tutorial 223, given all the notes, I created a new file below without
// the notes so we are starting fresh

// let's surround the anchor tags with the Link component and then add the href attribute
// to each Link component and then inside the Link component we have the anchor tags

// import in the Link component
import Link from 'next/link';
// import in the useSession(); hook
import { useSession, signOut } from 'next-auth/client';
// import in Simple Icons
import { SiNextDotJs } from 'react-icons/si';
// import in BoxIcons
import { BiLogInCircle } from 'react-icons/bi';
// import in Font Awesome
import { FaUser } from 'react-icons/fa';
// import in VS Code Icons
import { VscSignOut } from 'react-icons/vsc';

// import in our stylesheet
import styles from './nav.module.scss';


// 2 -
// import in the useRouter(); hook
import { useRouter } from 'next/router';

// End of 2 -


const Nav = () => {

    // ==============================
    // component state
    // ==============================


    // 2 - continued

    // ==============================
    // initialize router
    // ==============================

    // initialize router
    const router = useRouter();

    // End of 2 -


    // ==============================
    // initialize the context
    // ==============================
    
    // ==============================
    // useEffect();
    // ==============================

    // ==============================
    // useSession();
    // ==============================

    // in next auth all we have to do to determine whether or not a user is authenticated is
    // take the following 4 steps:

    /*
        step 1 - import in the useSession hook and then
        step 2 - call the useSession(); hook and then
        step 3 - pull off the session and loading elements and then
        step 4 - use those 2 elements in our code
    */

    // the useSesssion(); hook it will return an array of 2 elements: the session and
    // loading elements
    /*
    const [ session, loading ] = useSession();

    // the session object looks like the following:

    /*
        { user: {…}, expires: "2021-10-01T00:13:27.572Z" } => ( pertains to the session object )
        expires: "2021-10-01T00:13:27.572Z"
        user: { 
            name: null,
            email: "john@example.com",
            image: null
        }
        [[Prototype]]: Object
    */

    // in the session object, we can see the user data that we encoded in our token in the
    // [ ...nextauth ].js file ( i.e. return { email : user.email }; )


    // 2 - continued

    // to log out a user let's add " onClick={ handleLogout } " to the logout anchor tag below
    // and then add the handleLogout function below as well

    // to log out a user we can use another function provided by next auth called " signOut "
    // and let's add that function to " import { useSession } from 'next-auth/client'; " above

    // ==============================
    // handleLogout function
    // ==============================

    /*
    const handleLogout = async ( e ) => {

        // e.preventDefault(); got rid of the following error:
        /*
            Unhandled Runtime Error
            Error: Failed to load script /_next/static/chunks/pages/logout.js 
        */
        /*
        e.preventDefault();

        // ==============================
        // call the signOut function
        // ==============================

        // from the next auth documentation on how to advoid any flicker when signing out

        // from the next auth documentation:
        // "If you pass redirect: false to signOut, the page will not reload. The session
        // will be deleted, and the useSession hook is notified, so any indication about
        // the user will be shown as logged out automatically. It can give a very nice
        // experience for the user."
        const data = await signOut(
            { 
                redirect    : false,
                callbackUrl : "http://localhost:3014"
            }
        );

        // from the next auth documentation:
        // " If you need to redirect to another page but you want to avoid a page reload,
        // you can try: const data = await signOut({redirect: false, callbackUrl: "/foo"})
        // where data.url is the validated url you can redirect the user to without any
        // flicker by using Next.js's useRouter().push(data.url) "        
        router.push( data.url ); 

    } // end of handleLogout

    // remember that as soon as we call the signOut function the session object will change
    // from true to false and next.js will clear out the next-auth-session-token cookie and
    // let's test this out and when I do I see that everything is working as expected

    // and let's console.log out the session object and see what the session object looks
    // like

    // ** TEST
    // console.log( session );
    // ** TEST

    /*
        undefined
        null
        null
    */

    // and we can see that the session object is now null after logging out of the application
    // and this is correct so everything is working as expected

    // however, during the log out process I see the following error momentarily:
        
    /*
        Unhandled Runtime Error
        Error: Failed to load script /_next/static/chunks/pages/logout.js 
    */

    // I finally figured out how to get rid of this error ( see above )

    // End of 2 -


    /*
    return (

        <nav className={ styles.navContainer }>

            <div className={ styles.navContainerLeft }>

                <h4>

                    <Link href="/">
                        <a>
                            <SiNextDotJs style={ { verticalAlign: '-5px', fontSize: '3.6rem' } } />
                            &nbsp;&nbsp;Next Auth
                        </a>
                    </Link>

                </h4>

            </div>

            <div className={ styles.navContainerRight }>

                <ul>

                    { /* show signin tab only if we're not logged in and the app is not loading */ /* }
                    {
                        !session && !loading && (
                            <li>
                                <Link href="/signin">
                                    <a>
                                        <BiLogInCircle style={ { verticalAlign: '-5px', fontSize: '2.15rem' } } />
                                        &nbsp;&nbsp;Sign In
                                    </a>
                                </Link>
                            </li>
                        )
                    }

                    { /* show profile tab only if were authenticated and logged in */ /* }
                    { 
                        session && (
                            <li>
                                <Link href="/profile">
                                    <a>
                                        <FaUser style={ { verticalAlign: '-2px', fontSize: '1.75rem' } } />
                                        &nbsp;&nbsp;Profile
                                    </a>
                                </Link>
                            </li>
                        )
                    }

                    { /* show the logout button only if were authenticated and logged in */ /* }
                    {
                        session && (
                            <li>
                                <Link href="/logout">
                                    <a 
                                        onClick={ handleLogout }
                                    >
                                        <VscSignOut style={ { verticalAlign: '-5px', fontSize: '2.15rem' } } />
                                        &nbsp;&nbsp;Logout
                                    </a>
                                </Link>
                            </li>
                        )
                    }

                </ul>

            </div>

        </nav>

    );

}


export default Nav;
*/


















// ===============================




















/*
// at the beginning of tutorial 224, given all the notes, I created a new file below without
// the notes so we are starting fresh

// let's surround the anchor tags with the Link component and then add the href attribute
// to each Link component and then inside the Link component we have the anchor tags

// import in the Link component
import Link from 'next/link';
// import in the useRouter(); hook
import { useRouter } from 'next/router';
// import in the useSession(); hook and the signOut function
import { useSession, signOut } from 'next-auth/react';
// import in Simple Icons
import { SiNextDotJs } from 'react-icons/si';
// import in BoxIcons
import { BiLogInCircle } from 'react-icons/bi';
// import in Font Awesome
import { FaUser } from 'react-icons/fa';
// import in VS Code Icons
import { VscSignOut } from 'react-icons/vsc';

// import in our stylesheet
import styles from './nav.module.scss';


const Nav = () => {

    // ==============================
    // component state
    // ==============================

    // ==============================
    // useRef();
    // ==============================

    // ==============================
    // initialize router
    // ==============================

    // initialize router
    const router = useRouter();

    // ==============================
    // useSession();
    // ==============================

    // in next auth all we have to do to determine whether or not a user is authenticated is
    // take the following 4 steps:

    /*
        step 1 - import in the useSession hook and then
        step 2 - call the useSession(); hook and then
        step 3 - pull off the session and loading elements and then
        step 4 - use those 2 elements in our code
    */

    // the useSesssion(); hook it will return an array of 2 elements: the session and
    // loading elements
    // const [ session, loading ] = useSession();

    // the session object looks like the following:

    /*
        { user: {…}, expires: "2021-10-01T00:13:27.572Z" } => ( pertains to the session object )
        expires: "2021-10-01T00:13:27.572Z"
        user: { 
            name: null,
            email: "john@example.com",
            image: null
        }
        [[Prototype]]: Object
    */

    // in the session object, we can see the user data that we encoded in our token in the
    // [ ...nextauth ].js file ( i.e. return { email : user.email }; )

    // the revised session object looks like the following:

    /*
        {user : {…}, expires : '2021-10-06T18:48:04.355Z'} => ( pertains to the session object )
        expires : "2021-10-06T18:48:04.355Z"
        user : {
            email : "john@example.com"
            image : null
            name  : "John Doe"
        }
        [[Prototype]] : Object
    */

    // revised in version 4
    // call the useSession hook and then use session and status in the code below
    /*
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
    // useEffect();
    // ==============================

    // ==============================
    // handleLogout function
    // ==============================

    /*
    const handleLogout = async ( e ) => {

        // e.preventDefault(); got rid of the following error:
        /*
            Unhandled Runtime Error
            Error: Failed to load script /_next/static/chunks/pages/logout.js 
        */
        /*
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
                callbackUrl : "http://localhost:3014"
            }
        );

        // from the next auth documentation:
        // " If you need to redirect to another page but you want to avoid a page reload,
        // you can try: const data = await signOut({redirect: false, callbackUrl: "/foo"})
        // where data.url is the validated url you can redirect the user to without any
        // flicker by using Next.js's useRouter().push(data.url) "        
        router.push( data.url );

    } // end of handleLogout

    // remember that as soon as we call the signOut function the session object will change
    // from true to false or null and next.js will clear out the next-auth-session-token cookie


    return (

        <nav className={ styles.navContainer }>

            <div className={ styles.navContainerLeft }>

                <h4>

                    <Link href="/">
                        <a>
                            <SiNextDotJs style={ { verticalAlign: '-5px', fontSize: '3.6rem' } } />
                            &nbsp;&nbsp;Next
                        </a>
                    </Link>

                </h4>

            </div>

            <div className={ styles.navContainerRight }>

                <ul>

                    { /* show signin tab only if we're not authenticated and the app is not loading */ /* }
                    {
                        ( status === "unauthenticated" && status !== "loading" ) && (
                            <li>
                                <Link href="/signin">
                                    <a>
                                        <BiLogInCircle style={ { verticalAlign: '-5px', fontSize: '2.15rem' } } />
                                        &nbsp;&nbsp;Sign In
                                    </a>
                                </Link>
                            </li>
                        )
                    }

                    { /* show profile tab only if were authenticated and logged in */ /* }
                    { 
                        ( status === "authenticated" ) && (
                            <li>
                                <Link href="/profile">
                                    <a>
                                        <FaUser style={ { verticalAlign: '-2px', fontSize: '1.75rem' } } />
                                        &nbsp;&nbsp;{ session.user.name } Profile
                                    </a>
                                </Link>
                            </li>
                        )
                    }

                    { /* show the logout button only if were authenticated and logged in */ /* }
                    {
                        ( status === "authenticated" ) && (
                            <li>
                                <Link href="/logout">
                                    <a 
                                        onClick={ handleLogout }
                                    >
                                        <VscSignOut style={ { verticalAlign: '-5px', fontSize: '2.15rem' } } />
                                        &nbsp;&nbsp;Logout
                                    </a>
                                </Link>
                            </li>
                        )
                    }

                </ul>

            </div>

        </nav>

    );

}


export default Nav;
*/


















// ===============================





















// at the beginning of tutorial 233, given all the notes, I created a new file below without
// the notes so we are starting fresh

// let's surround the anchor tags with the Link component and then add the href attribute
// to each Link component and then inside the Link component we have the anchor tags

// import in the Link component
import Link from 'next/link';
// import in the useRouter(); hook
import { useRouter } from 'next/router';
// import in the useSession(); hook and the signOut function
import { useSession, signOut } from 'next-auth/react';
// import in the SearchBox component
import SearchBoxComponent from '../search-box/search-box-v2';
// import in Simple Icons
import { SiNextDotJs } from 'react-icons/si';
// import in BoxIcons
import { BiLogInCircle } from 'react-icons/bi';
// import in Font Awesome
import { FaUser } from 'react-icons/fa';
// import in VS Code Icons
import { VscSignOut } from 'react-icons/vsc';
// import in Font Awesome
import { FaMicrophone } from 'react-icons/fa';
// import in our stylesheet
import styles from './nav.module.scss';


const Nav = () => {

    // ==============================
    // component state
    // ==============================

    // ==============================
    // destructure props
    // ==============================

    // ==============================
    // useRef();
    // ==============================

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
    // useEffect();
    // ==============================

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
                callbackUrl : "http://localhost:3016"
            }
        );

        // from the next auth documentation:
        // " If you need to redirect to another page but you want to avoid a page reload,
        // you can try: const data = await signOut({redirect: false, callbackUrl: "/foo"})
        // where data.url is the validated url you can redirect the user to without any
        // flicker by using Next.js's useRouter().push(data.url) "        
        router.push( data.url );

    } // end of handleLogout

    // remember that as soon as we call the signOut function the session object will change
    // from true to false or null and next.js will clear out the next-auth-session-token cookie

    // ==============================
    // handleUserName function
    // ==============================

    const handleUserName = ( name ) => {

        // ==============================
        // define variables
        // ==============================

        // get the user first name
        const userFirstName = name.split( ' ' )[ 0 ];
        // get the user last name
        const userLastName = name.split( ' ' )[ 1 ];
        // get the user first name initial
        const userFirstNameInitial = userFirstName.slice( 0, 1 ).toUpperCase();
        // get the user last name initial
        const userLastNameInitial = userLastName.slice( 0, 1 ).toUpperCase();

        if ( userFirstName.length < 9 ) {

            // construct the const userName
            const userName = `${ userFirstName } ${ userLastNameInitial }`;

            return userName;

        } else {

            // construct the const userInitials
            const userInitials = `${ userFirstNameInitial }${ userLastNameInitial }`;

            return userInitials;

        } // end of if else

    } // end of handleUserName

    // ==============================
    // handleSearch function
    // ==============================

    const handleSearch = async ( searchTerm ) => {

        // since handleSearch is not part of a form submission there is no need to call
        // e.preventDefault();

        // build the endpoint
        const fullPath = `/search/${ searchTerm }`;

        // use router.push(); to go to the fullPath endpoint, which will be the
        // [ searchTerm ].js page
        router.push( fullPath );

    } // end of handleSearch


    return (

        <nav className={ styles.navContainer }>

            <div className={ styles.navContainerLeft }>

                <h4>

                    <Link href="/">
                        <a>
                            <SiNextDotJs style={ { verticalAlign: '-5px', fontSize: '3.6rem' } } />
                            &nbsp;&nbsp;Next
                        </a>
                    </Link>

                </h4>

            </div>

            <div className={ styles.navContainerRight }>

                <ul>

                    {
                    /*
                    { /* show the events tab at all times */ /* }
                    <li>
                        <Link href="/events-dj">
                            <a>
                                <FaMicrophone style={ { verticalAlign: '-4px', fontSize: '2.15rem' } } />
                                &nbsp;&nbsp;DJ Events
                            </a>
                        </Link>
                    </li>
                    */
                    }

                    { /* show the events tab at all times */ }
                    <li>
                        <Link href="/events">
                            <a>
                                <FaMicrophone style={ { verticalAlign: '-4px', fontSize: '2.15rem' } } />
                                &nbsp;&nbsp;Events
                            </a>
                        </Link>
                    </li>

                    { /* show signin tab only if we're not authenticated and the app is not loading */ }
                    {
                        ( status === "unauthenticated" && status !== "loading" ) && (
                            <li>
                                <Link href="/signin">
                                    <a>
                                        <BiLogInCircle style={ { verticalAlign: '-3.5px', fontSize: '2.15rem' } } />
                                        &nbsp;&nbsp;Sign In
                                    </a>
                                </Link>
                            </li>
                        )
                    }

                    <SearchBoxComponent onSearch={ handleSearch } />

                    { /* show profile tab only if were authenticated and logged in */ }
                    {
                        ( status === "authenticated" ) && (
                            <li>
                                <Link href="/profile">
                                    <a>
                                        <FaUser style={ { verticalAlign: '-2px', fontSize: '1.75rem' } } />
                                        &nbsp;&nbsp;{ handleUserName( session.user.name ) } Profile
                                    </a>
                                </Link>
                            </li>
                        )
                    }

                    { /* show the logout button only if were authenticated and logged in */ }
                    {
                        ( status === "authenticated" ) && (
                            <li>
                                <Link href="/logout">
                                    <a 
                                        onClick={ handleLogout }
                                    >
                                        <VscSignOut style={ { verticalAlign: '-4px', fontSize: '2.15rem' } } />
                                        &nbsp;&nbsp;Logout
                                    </a>
                                </Link>
                            </li>
                        )
                    }

                </ul>

            </div>

        </nav>

    );

}


export default Nav;



