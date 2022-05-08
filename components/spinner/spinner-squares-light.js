

// import in our stylesheet
import styles from './spinner-squares-light-v2.module.scss';


// create the component
export default function SpinnerSquaresLight() {

    return (

        <div className={ styles.spinnerContainer }>

            <div className={ styles.spinnerContainerMain }>

                <div className={ styles.spinnerContainerMainDiv1 }>

                </div>

                <div className={ styles.spinnerContainerMainDiv2 }>

                </div>

            </div>

        </div>

    );

} // end of SpinnerSquaresLight() {}

