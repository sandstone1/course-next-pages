
/*
// 1 -

// import in the useState hook
import { useState } from 'react';
// import in the useRouter hook
import { useRouter } from 'next/router';
// import in Font Awesome
import { FaSearch } from 'react-icons/fa';
// import in the styles
import styles from '@/styles/SearchBox.module.scss';


const SearchBox = () => {

    // ==============================
    // Component State
    // ==============================

    const [ term, setTerm ] = useState( '' );

    // ==============================
    // useDispatch(); & useSelector();
    // ==============================

    // ==============================
    // useEffect();
    // ==============================

    // ==============================
    // Initialize Router
    // ==============================

    const router = useRouter();

    // ==============================
    // handleSubmit function
    // ==============================

    const handleSubmit = ( e ) => {

        // since we're submitting a form, we want to prevent default browser behavior
        e.preventDefault();

        // use router to redirect the user to the search page
        router.push( `/events/search?term=${ term }` );

        // reset term to an empty string
        setTerm( '' );

    } // end of handleSubmit


    return (

        <div className={ styles.searchBoxContainer }>

            <form noValidate="novalidate" onSubmit={ handleSubmit } >

                { /*  search field  */ /* }
                <input
                    name="term"
                    type="text"
                    // placeholder="Search Products..."
                    value={ term }
                    onChange={ (e) => setTerm( e.target.value ) }
                />

                { /*  submit button  */ /* }
                <div className={ styles.searchBoxContainerFormButtonContainer }>

                    <button type="submit">
                        <FaSearch style={ { verticalAlign: '-3px', fontSize: '1.6rem' } } />
                    </button>

                </div>

            </form>

        </div>

    );

}


export default SearchBox;

// go to the components/nav.js 2 - file now

// End of 1 -
*/
















// ===============================





















// at the beginning of lecture 25, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in the useState hook
import { useContext, useEffect, useRef, useState } from 'react';
// import in the useRouter hook
import { useRouter } from 'next/router';
// import in the SearchContext
import SearchTermContext from '../../context/search/search-context';
// import in the ErrorMessage component
import ErrorMessage from '../error-message/em-search-term-page';
// import in search icon
import { FaSearch } from 'react-icons/fa';
// import in the scss file
import styles from './search-box.module.scss';


export default function SearchBoxComponent( { onSearch } ) {

    // ==============================
    // component state
    // ==============================

    const [ term, setTerm ] = useState( '' );

    // ==============================
    // destructure props
    // ==============================

    // ==============================
    // useRef();
    // ==============================

    // ==============================
    // useRouter();
    // ==============================

    // get the router object
    const router = useRouter();

    // ==============================
    // useSession();
    // ==============================

    // ==============================
    // initialize the context
    // ==============================

    // after we dispatch the action creator, the action creator will send the reducer actions
    // and those actions will update the reducer and thereby update the state and then we can
    // use the useContext(); hook to initialize the SearchTermContext and then return the part
    // of the state that we want
    const searchTermContext = useContext( SearchTermContext );

    // and then we can use destructuring to pull off pieces of the state that we want and then
    // use those pieces of state in our output
    const { 
        errorMessageClose,
        searchTermResetActionCreator
    } = searchTermContext;

    // console log the errorMessageClose state
    console.log( errorMessageClose );

    // ==============================
    // useEffect();
    // ==============================

    // if the user successfully closed the error message component then we want to reset
    // the search term state
    useEffect( () => {

        if ( errorMessageClose ) {

                setTerm( '' );

                // as soon as we change the errorMessageClose state to true we call the
                // searchTermResetActionCreator and turn the state back to false so that
                // if a user tries to search for a second term that doesn't exist then we
                // start with a false state value and this turns to true as soon as the
                // user closes the error message and then the cycle repeats itself and
                // this works
                searchTermResetActionCreator();

        } // end of if

        return () => {
            // clean-up functions
        }

    }, [ errorMessageClose, searchTermResetActionCreator ] ); // end of useEffect

    // ==============================
    // handleSubmit function
    // ==============================

    const handleSubmit = ( e ) => {

        // since we're submitting a form, make sure we prevent the default browser behavior
        e.preventDefault();

        // if there is no value in the search field then redirect the user to the events page
        if ( !term ) {

            router.push( '/events' );

        } else { // term exist

            // call the onSearch function in this compoennt and pass along the selected search
            // term and remember this function will call the handleSearch function in the
            // nav.js file
            onSearch( term );
         
        } // end of if else

    } // end of handleSubmit


    return (

        <div className={ styles.searchBoxContainer }>

            <form noValidate="novalidate" onSubmit={ handleSubmit } >

                { /*  search field  */ }
                <input
                    name="term"
                    type="text"
                    // placeholder="Search Products..."
                    value={ term }
                    onChange={ (e) => setTerm( e.target.value ) }
                />

                { /*  submit button  */ }
                <div className={ styles.searchBoxContainerFormButtonContainer }>

                    <button type="submit">
                        <FaSearch style={ { verticalAlign: '-3px', fontSize: '1.6rem' } } />
                    </button>

                </div>

            </form>

        </div>

    );

}


