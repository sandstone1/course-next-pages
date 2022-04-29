

// import in the scss file
import styles from './comment-list.module.scss';


export default function CommentList() {

    return (

        <ul className={ styles.commentListContainer } >

            {/* Render list of comments - fetched from API */}
            <li>

                <p>My comment is amazing!</p>

                <span>By <address>Maximilian</address></span>

            </li>

            <li>

                <p>My comment is amazing!</p>

                <span>By <address>Maximilian</address></span>

            </li>

        </ul>

    );

}

