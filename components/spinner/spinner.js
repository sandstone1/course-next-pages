

// import in the Fragment component from react
import { Fragment } from 'react';
// import in our stylesheet
import styles from './spinner.module.scss';


const Spinner = () => (

    // remember the spinner.gif file came from Brad's React Front To Back course
    <Fragment>

        <img
            src={ '/images/spinner.gif' }
            width={ 300 }
            className={ styles.spinnerContainer }
            alt={ 'spinner' }
        />

    </Fragment>

);


export default Spinner;
