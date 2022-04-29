
/*
// remember the url path for this file is " http://localhost:3016/section-5/user-profile "

// use the Meta component to specify a title for this page
import Meta from '../../components/meta/meta';
// import in our stylesheet
import styles from './user-profile.module.scss';


export default function UserProfilePage( { username } ) {

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


    return (

        <div className={ styles.userProfilePageContainer }>

            <Meta title="User Profile Page" />
            
            <div className={ styles.userProfilePageContainerDiv1 }>

                <h3>{ username }</h3>

            </div>

        </div>

    );

}


// ==============================
// getServerSideProps
// ==============================

export async function getServerSideProps( context ) {

    // through the context object, we get access to params, request object and the response
    // object
    const { params, req, res } = context;

    // console log out the req and res
    // console.log( req );
    // console.log( res );

    /*
        we see 2 very large objects that represent the req and the res
    */

    // this function comes in handy when we have highly dynamic data and we want this
    // function to run for every incoming request

    // and the main difference between getStaticProps and getServerSideProps is the kind
    // of data you get access to in getServerSideProps and the timing of getServerSideProps

    // then do the following to make the username available throughout the application
    /*
    return {

        props : {
            username : 'Max'
        }

    }

    // and now we can use destructuring above to pass in the data or username to the page
    // component

} // end of getServerSideProps
*/




















// ===============================





















// at the beginning of tutorial 105, given all the notes, I created a new file below without
// the notes so we are starting fresh


// remember the url path for this file is " http://localhost:3016/section-5/user-profile "

// use the Meta component to specify a title for this page
import Meta from '../../components/meta/meta';
// import in our stylesheet
import styles from './user-profile.module.scss';


export default function UserProfilePage( { username } ) {

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


    return (

        <div className={ styles.userProfilePageContainer }>

            <Meta title="User Profile Page" />
            
            <div className={ styles.userProfilePageContainerDiv1 }>

                <h3>{ username }</h3>

            </div>

        </div>

    );

}


// ==============================
// getServerSideProps
// ==============================

// this function comes in handy when we have highly dynamic data and we want this
// function to run for every incoming request

// and the main difference between getStaticProps and getServerSideProps is the kind
// of data you get access to in getServerSideProps and the timing of getServerSideProps

export async function getServerSideProps( context ) {

    // through the context object, we get access to params, the request object and the
    // response object
    const { params, req, res } = context;

	// then do the following to make the username available throughout the application
    return {

        props : {
            username : 'Max'
        }

    }

    // and now we can use destructuring above to pass in the data or username to the page
    // component

} // end of getServerSideProps


