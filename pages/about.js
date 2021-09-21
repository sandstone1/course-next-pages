

// if we wanted a different title on this page, for example, then we would import in the
// Meta component and then pass in a title prop like the following:
// " title="Next File Upload | About" "
import Meta from '../components/meta/meta';
// import in our stylesheet
import styles from './about.module.scss';


const AboutPage = () => {

    return (

        <div className={ styles.aboutContainer }>

            <Meta title="About this app | About" />

            <h1>About</h1>

            <p>This is an app to learn and use Next.js</p>

            <p>Version 1.0.0</p>

            <div className={ styles.aboutContainerDiv1 }>Incorporated in this app to date:

                <ul>
                    <li>Registration</li>
                    <li>Sign in and sign out</li>
                    <li>User authentication</li>
                    <li>Change password</li>
                    <li>Change the user interface based on the authentication status of the user</li>
                    <li>Client and server side user validation</li>
                    <li>Server side page guards to protect pages from unauthorized access</li>
                    <li>Protected API routes</li>
                    <li>Create, read and update user information in a MongoDB database collection</li>
                </ul>

                <ul>
                    <li>File based routing</li>
                    <li>Static and dynamic routing</li>
                    <li>Catch all routes</li>
                    <li>Navigating programatically</li>
                </ul>

            </div>

        </div>

    );

}


export default AboutPage;

