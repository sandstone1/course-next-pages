

// if we wanted a different title on this page, for example, then we would import in the
// Meta component and then pass in a title prop like the following:
// " title="Next File Upload | About" "
import Meta from '../components/meta/meta';
// import in our stylesheet
import styles from './about.module.scss';


const AboutPage = () => {

    return (

        <div className={ styles.aboutContainer }>

            <Meta 
                title="About this app | About"
                description="This page describes the features that have been incorporated
                into this app."
            />

            <h1>About</h1>

            <p>This is an app to learn and use Next.js</p>

            <p>Version 1.0.0</p>

            <div className={ styles.aboutContainerDiv1 }>Incorporated in this app to date:

                <ul>
                    <span>Authentication</span>
                    <li>Registration</li>
                    <li>Sign in and sign out</li>
                    <li>User authentication</li>
                    <li>Change password</li>
                    <li>Change the user interface based on the authentication status of the user</li>
                    <li>Client and server side user validation</li>
                    <li>Server side page guards to protect pages from unauthorized access</li>
                    <li>Protected API routes</li>
                </ul>

                <ul>
                    <span>Database</span>
                    <li>Create, read and update user information in a MongoDB database collection</li>
                </ul>

                <ul>
                    <span>Routing</span>    
                    <li>File based routing</li>
                    <li>Static and dynamic routing</li>
                    <li>Catch all routes</li>
                    <li>Navigating programatically</li>
                </ul>

                <ul>
                    <span>Pre rendering and data fetching</span>
                    <li>Pre rendering and data fetching with static site generation</li>
                    <li>Pre rendering and data fetching with incremental static regeneration</li>
                    <li>Data fetching with server side rendering</li>
                    <li>Client side data fetching using the Fetch API, Axios and the useSWR hook</li>
                </ul>

                <ul>
                    <span>APIs</span>
                    <li>Send and receive data from both internal and external APIs using the JSON data transfer format</li>
                    <li>Create REST API endpoints using API routes</li>
                </ul>

                <ul>
                    <span>State</span>
                    <li>Application wide state using the Context API</li>
                    <li>Component level state using the useState hook</li>
                </ul>

                <ul>
                    <span>Additional features</span>
                    <li>Search events by words or date using custom search functionality</li>
                    <li>Custom error handling</li>
                </ul>

                <ul>
                    <span>Design</span>
                    <li>Custom design using SASS, CSS Grid, Flexbox, CSS Modules and Styled JSX</li>
                    <li>Reponsive web design built for mobile, tablets and desktop</li>
                    <li>Custom animation</li>
                    <li>Custom fonts and icon fonts</li>
                </ul>

                <ul>
                    <span>SEO</span>
                    <li>App is optimized for SEO</li>
                    <li>Implementation of on page SEO</li>
                </ul>

            </div>

        </div>

    );

}


export default AboutPage;

