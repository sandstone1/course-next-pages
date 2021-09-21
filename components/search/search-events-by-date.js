

// import in the useState hook
import { useState } from 'react';
// import in the Link component
import Link from 'next/link';
// import in the useRouter hook to get access to the route parameter
import { useRouter } from 'next/router';
// use the Meta component to specify a title for this page
import Meta from '../../components/meta/meta';
// import in our stylesheet
import styles from './search-events-by-date.module.scss';


// pass the handleSearch prop into the SearchEventsByDateComponent and remember this component is a
// child component to the EventsPage component
export default function SearchEventsByDateComponent( { onSearch } ) {

    // ==============================
    // destructure props
    // ==============================

    // set component level state
    const [ month, setMonth ] = useState( '1' );
    const [ year, setYear ]   = useState( '2021' );

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

    // ==============================
    // handleSubmit function
    // ==============================

    const handleSubmit = async ( e ) => {

        // since we're submitting a form, make sure we prevent the default browser behavior
        e.preventDefault();

        // call the onSearch function here and pass along the selected year and month
        // and remember this will call the handleSearch function in the events.js file
        // ( see events.js for details )
        onSearch( year, month );

    } // end of handleSubmit


    return (

        <div className={ styles.searchEventsContainer }>

            <Meta title="Search events" />

            <form noValidate="novalidate" onSubmit={ handleSubmit }>
    
                { /*  select dropdown - year */ }
                <div className={ styles.searchEventsContainerDiv1 }>

                    <label htmlFor="select-year">Year</label>
                    <select
                        value={ year }
                        onChange={ ( e ) => setYear( e.target.value ) }
                        id="select-year"
                    >
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                    </select>

                </div>

                { /*  select dropdown - month */ }
                <div className={ styles.searchEventsContainerDiv2 }>

                    <label htmlFor="select-month">Month</label>
                    <select
                        value={ month }
                        onChange={ ( e ) => setMonth( e.target.value ) }
                        id="select-month"
                    >
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>

                </div>

                <div className={ styles.searchEventsContainerDiv3 }>

                    <button
                        type="submit"
                    >
                        Find Events
                    </button>

                </div>

            </form>

        </div>

    );

}


