
/*
// import in UserState
import UserState from '../context/user/user-state';
// import in the Layout component
import Layout from '../components/layout/layout';
// import in our global stylesheet
import '../styles/_globals.scss';


// 1 -

// import in the Provider component
import { Provider } from 'next-auth/client';

// and the Provider component can be wrapped around our Layout component and then add a session
// key and then set that key equal to the session object that we already have in our
// sign in and profile page components

// and remember in _app.js we don't just get the page component ( i.e. Component ) but we
// also get the props for that page ( i.e. pageProps )

// and remember we have 2 pages that have a session prop with session data and in most cases
// or on most pages the pageProps.session will be undefined but on the sign in and profile
// pages we have already defined the session object so we can use it straightaway in the
// Provider component below

// and this will allow next auth to skip the session request on the sign in and profile
// pages and thereby optimize the user experience 

// End of 1 -


// create the App component and pass in the page component or " Component " and the
// page props or " pageProps "
const App = ( { Component, pageProps } ) => {

	// and now let's wrap our Layout component around our page component
    return (

        // wrap everthing below in the UserState component and this component serves
        // as our app level state
        <UserState>

            <Provider session={ pageProps.session }>

                <Layout>
                
                    <Component { ...pageProps } />

                </Layout>

            </Provider>
        
        </UserState>

	);

}


export default App;
*/

















// ===============================




















/*
// at the beginning of tutorial 228, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in UserState
import UserState from '../context/user/user-state';
// import in the Provider component
import { Provider } from 'next-auth/client';
// import in the Layout component
import Layout from '../components/layout/layout';
// import in our global stylesheet
import '../styles/_globals.scss';


// and remember in _app.js we don't just get the page component ( i.e. Component ) but we
// also get the props for that page ( i.e. pageProps )

// in order to optimize page performance we will add the Provider component from next auth
// and ( from the documentation ): " Using the supplied React <Provider> allows instances of
// useSession() to share the session object across components, by using React Context under
// the hood. It also takes care of keeping the session updated and synced between tabs/windows. "

// " If you pass the session page prop to the <Provider> – as in the example above – you
// can avoid checking the session twice on pages that support both server and client side
// rendering. "

// in most cases the pageProps.session will be undefined but on pages where we have already
// defined the session object through getServerSideProps, for example, we should see
// performance benefits


// create the App component and pass in the page component or " Component " and the
// page props or " pageProps "
const App = ( { Component, pageProps } ) => {

	// and now let's wrap our Layout component around our page component
    return (

        // wrap everthing below in the UserState component and this component serves
        // as our app level state
        <UserState>

            <Provider session={ pageProps.session }>

                <Layout>
                
                    <Component { ...pageProps } />

                </Layout>

            </Provider>
        
        </UserState>

	);

}


export default App;
*/



















// ===============================





















// at the beginning of tutorial 228, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in UserState
import UserState from '../context/user/user-state';
// import in the SessionProvider component
import { SessionProvider } from 'next-auth/react';
// import in the Layout component
import Layout from '../components/layout/layout';
// import in our global stylesheet
import '../styles/_globals.scss';


// and remember in _app.js we don't just get the page component ( i.e. Component ) but we
// also get the props for that page ( i.e. pageProps )

// in order to optimize page performance we will add the SessionProvider component from next auth
// and ( from the documentation ): " Using the supplied <SessionProvider> allows instances of
// useSession() to share the session object across components, by using React Context under the
// hood. It also takes care of keeping the session updated and synced between tabs/windows. "

// " If you pass the session page prop to the <SessionProvider> – as in the example above –
// you can avoid checking the session twice on pages that support both server and client side
// rendering. "

// in most cases the pageProps.session will be undefined but on pages where we have already
// defined the session object through getServerSideProps, for example, we should see
// performance benefits


// create the App component and pass in the page component or " Component " and the
// page props or " pageProps "
const App = ( { Component, pageProps } ) => {

	// and now let's wrap our Layout component around our page component
    return (

        // wrap everthing below in the UserState component and this component serves
        // as our app level state
        <UserState>

            <SessionProvider session={ pageProps.session }>

                <Layout>
                
                    <Component { ...pageProps } />

                </Layout>

            </SessionProvider>
        
        </UserState>

	);

}


export default App;









// ==============================
// when I update to next-auth to version 4 I will need to make the following changes:
// ==============================

// 1 - change Provider to SessionProvider in the _app.js file and change the import as well
// 2 - change Provider to CredentialsProvider in the [...nextauth].js file and change import as well
// 3 - rename "next-auth/client" to "next-auth/react" throughout the entire application
// 4 - The useSession hook has been updated to return an object. This allows you to test states much
// more cleanly with the new status option.
// 4 - continued - change " const [ session, loading ] = useSession() " to
// " const { data : session, status } = useSession() " and I'll need to make this change in the
// nav.js file



// ==============================
// also, need to make the following changes:
// ==============================

// 5 - add a loading state to the signin.js file and maybe experiment with a client side page
// guard



// ==============================
// other details to be aware of:
// ==============================

// see upgrade page for details: https://next-auth.js.org/getting-started/upgrade-v4

// to install a specific version of next auth use " npm install [package-name]@[version-number]. "
// or " npm install next-auth@3.28.0 "

// to install the latest next auth package use " npm i next-auth@beta " and " In your project's
// package.json, make sure you don't have a ^ character before the version number. Read more
// in the npm docs. "

