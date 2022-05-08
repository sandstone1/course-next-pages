

// import in our stylesheet
import styles from './spinner-circle-light.module.scss';


// create the component
export default function SpinnerCircleLight() {

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

} // end of SpinnerCircleLight() {}

