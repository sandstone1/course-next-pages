

// import in the progress bar styles
import styles from './progress-bar.module.scss';


const ProgressBar = ( { percentCompleted } ) => {

    return (

        <div className={ styles.progressBarContainer }>
    
            <div
                className={ styles.progressBarContainerDiv }
                style={ { width : `${ percentCompleted }%` } }
            >
                { percentCompleted }%
            </div>

        </div>

    );

}

export default ProgressBar;

