

/*
// remember the url path for this file is " http://localhost:3016/section-5/any-user "

// use the Meta component to specify a title for this page
import Meta from '../../components/meta/meta';
// import in our stylesheet
import styles from './[userId].module.scss';


export default function UserDetailsPage( { id } ) {

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

        <div className={ styles.userDetailsPageContainer }>

            <Meta title="User Details Page" />
            
            <div className={ styles.userDetailsPageContainerDiv1 }>

                <h3>{ id }</h3>

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

    // get the userId
    const userId = context.params.userId;

	// then do the following to make the username available throughout the application
    return {

        props : {
            id : userId
        }

    }

    // and now we can use destructuring above to pass in the data or userId to the page
    // component

} // end of getServerSideProps

// before we test this out we need to move the [ productId ].js file into a seperate folder;
// otherwise, next.js won't know which dynamic route to use
// ( i.e. [ productId ]js or [ userId ].js )

// now let's test this out by going to the following page:
// " http://localhost:3016/section-5/u1 " and when we do we see " u1 " so everything is
// working as expected

// unlike the [ productId ].js where we pre generate dynamic routes with getStaticProps and
// getStaticPaths, with [ userId ].js we generate dynamic routes just in time on every page
// request with getServerSideProps 
*/





















// ===============================




















/*
// at the beginning of tutorial 106, given all the notes, I created a new file below without
// the notes so we are starting fresh

// remember the url path for this file is " http://localhost:3016/section-5/any-user "

// use the Meta component to specify a title for this page
import Meta from '../../components/meta/meta';
// import in our stylesheet
import styles from './[userId].module.scss';


export default function UserDetailsPage( { id } ) {

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

        <div className={ styles.userDetailsPageContainer }>

            <Meta title="User Details Page" />
            
            <div className={ styles.userDetailsPageContainerDiv1 }>

                <h3>{ id }</h3>

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

    // get the userId
    const userId = context.params.userId;


    // 1 -

    // console log out " Server side code " so we can see when this function runs
    console.log( 'Server side code' );

    // End of 1 -


	// then do the following to make the username available throughout the application
    return {

        props : {
            id : userId
        }

    }

    // and now we can use destructuring above to pass in the data or userId to the page
    // component

} // end of getServerSideProps

// unlike the [ productId ].js where we pre generate dynamic routes with getStaticProps and
// getStaticPaths, with [ userId ].js we generate dynamic routes just in time on every page
// request with getServerSideProps 
*/






















// ===============================





















// at the beginning of tutorial 106, given all the notes, I created a new file below without
// the notes so we are starting fresh

// remember the url path for this file is " http://localhost:3016/section-5/any-user "

// use the Meta component to specify a title for this page
import Meta from '../../components/meta/meta';
// import in our stylesheet
import styles from './[userId].module.scss';


export default function UserDetailsPage( { id } ) {

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

        <div className={ styles.userDetailsPageContainer }>

            <Meta title="User Details Page" />
            
            <div className={ styles.userDetailsPageContainerDiv1 }>

                <h3>{ id }</h3>

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

    // get the userId
    const userId = context.params.userId;

	// then do the following to make the username available throughout the application
    return {

        props : {
            id : userId
        }

    }

    // and now we can use destructuring above to pass in the data or userId to the page
    // component

} // end of getServerSideProps

// unlike the [ productId ].js where we pre generate dynamic routes with getStaticProps and
// getStaticPaths, with [ userId ].js we generate dynamic routes just in time on every page
// request with getServerSideProps 

