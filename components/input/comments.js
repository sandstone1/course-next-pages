

// import in the useState(); hook
import { useState } from 'react';
// import in the CommentList component
import CommentList from './comment-list';
// import in the NewComment component
import NewComment from './new-comment';
// import in the scss file
import styles from './comments.module.scss';


export default function Comments( { eventId } ) {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed

    // set component level state
    const [ showComments, setShowComments ] = useState( false );

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

    // ==============================
    // toggleCommentsHandler function
    // ==============================
    function toggleCommentsHandler() {

        setShowComments( ( prevStatus ) => !prevStatus );

    } // end of toggleCommentsHandler

    // ==============================
    // addCommentHandler function
    // ==============================
    function addCommentHandler( commentData ) {
    
        // send data to API

    } // end of addCommentHandler
  

    return (

        <section className={ styles.commentsContainer }>

            { /*  clickable button  */ }
            <div className={ styles.commentsContainerButtonContainer }>

                <button
                    type="button"
                    className={ styles.commentsContainerButtonContainerButton }
                    onClick={ toggleCommentsHandler }
                >
                    { showComments ? 'Hide' : 'Show' } Comments
                </button>

            </div>

            { /* NewComment component */ }
            { showComments && <NewComment onAddComment={ addCommentHandler } /> }

            { /* CommentList component */ }
            { showComments && <CommentList /> }

        </section>

    );

}


