
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




















/* 
// at the beginning of lecture 25, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in the useState hook
import { useCallback, /*useContext,*/ /* useEffect, useRef, useState } from 'react';
// import in the useRouter hook
import { useRouter } from 'next/router';
// import in the SearchContext
// import SearchTermContext from '../../context/search/search-context';
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
    const [ open, setOpen ] = useState( false );

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
    // useRef();
    // ==============================

    // ==============================
    // create DOM reference
    // ==============================

    // STEP 1

    // use the useRef(); hook to create a reference to a DOM element and let's start by
    // initializing several useRef variables
    const searchBoxInputContainerRef = useRef();
    const searchBoxContainerRef      = useRef();
    const searchBoxInputRef          = useRef();

    // End of STEP 1

    // ==============================
    // useSession();
    // ==============================

    // ==============================
    // initialize the context
    // ==============================

/*
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
    // console.log( errorMessageClose );

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

    }, [ errorMessageClose ] ); // end of useEffect
*/

    // ==============================
    // handleSubmit function
    // ==============================

/*
    const handleSubmit = ( e ) => {

        // since we're submitting a form, make sure we prevent the default browser behavior
        e.preventDefault();

        // if there is no value in the search field then redirect the user to the events page
        if ( !term ) {

            return;

        } else { // term exist

            // call the onSearch function in this compoennt and pass along the selected search
            // term and remember this function will call the handleSearch function in the
            // nav.js file
            onSearch( term );
         
        } // end of if else

    } // end of handleSubmit

    // ==============================
    // handleOnClick function
    // ==============================

    const handleOnClick = ( e ) => {
 
        // e.preventDefault(); prevented this event from bubbling up to the handleSubmit
        // function and then calling the code inside that function
        e.preventDefault();
        
        // for testing purposes
        // console.log( open )

        // ==============================
        // create DOM reference
        // ==============================

        // STEP 3

        if ( !open ) {

            // reference the specified DOM element below

            // remember we have to use " .current " in order to access the referenced element
            // and after we access the referenced element we can then apply styles to the ending
            // state ( see the sass file for the starting state and the transition key value pair
            // that gives the search box opening a nice animation effect )

            // remember that I could not just add a class to the element and then tie that class
            // to the @keyframe and animation key value pair in the sass file, I could not make
            // this work in react

            // make sure we reapply the transitin duration if needed ( see the handleClickOutside
            // function below )
            searchBoxInputContainerRef.current.style.transitionDuration = '0.2s';

            // change the ending width state to 30.0rem
            searchBoxInputContainerRef.current.style.width   = '36.0rem';

            // change the ending opacity state to 1
            searchBoxInputContainerRef.current.style.opacity   = 1;

            // change the ending scaleY value to 1
            // searchBoxInputContainerRef.current.style.transform = 'scaleY(1)';

            // change the ending scaleX value to 1
            searchBoxInputContainerRef.current.style.transform = 'scaleX(1)';

            // put the focus on the input field
            searchBoxInputRef.current.focus();

            // upon opening the search box, clear out any text from previous searches
            setTerm( '' );

            // set open to true
            setOpen( true );

        }

        // ==============================
        // ==============================
        // ==============================

        // if open is true and we press the search button again then close the search box
        if ( open ) {

            // change the ending width state to 0rem
            searchBoxInputContainerRef.current.style.width   = '0rem';

            // change the ending opacity state to 0
            searchBoxInputContainerRef.current.style.opacity   = 0;

            // change the ending scaleX value to 0
            searchBoxInputContainerRef.current.style.transform = 'scaleX(0)';

            // change the ending transition durantion to 0 since I thought it gave a better user
            // experience
            searchBoxInputContainerRef.current.style.transitionDuration = '0ms';

            // set open to false
            setOpen( false );

        } // end of if

        // End of STEP 3

    } // end of handleOnClick

    // ==============================
    // handleClickOutside function
    // ==============================

    // define handleClickOutside
    // the useCallback(); hook caches our handleClickOutside function and it allows us to
    // call the handleClickOutside function inside the useEffect(); hook and do so without
    // running into any issues

    // if I eliminate the useCallback(); hook then I get a message in the console that reads
    // " Line 494:11:  The 'handleClickOutside' function makes the dependencies
    // of useEffect Hook (at line 554) change on every render.  Move it inside the useEffect
    // callback.  Alternatively, wrap the definition of 'handleClickOutside' in its own
    // useCallback() Hook react-hooks/exhaustive-deps "
    const handleClickOutside = useCallback( ( e ) => {
        
        // ==============================
        // create DOM reference
        // ==============================

        // STEP 3
        if ( 
            searchBoxInputContainerRef.current &&
            !searchBoxInputContainerRef.current.contains( e.target ) &&
            searchBoxContainerRef.current &&
            !searchBoxContainerRef.current.contains( e.target )
        ) {

            // to get the style values in react using the useRef(); hook we have to do the
            // following and if styles.opacity is 1 then close the input field
            // const styles = getComputedStyle( searchBoxInputContainerRef.current )

            // for some reason the open state is one state behind the handleOnClick function
            // above
            if ( open === false ) {

                // change the ending width state to 0rem
                searchBoxInputContainerRef.current.style.width   = '0rem';

                // change the ending opacity state to 0
                searchBoxInputContainerRef.current.style.opacity   = 0;

                // change the ending scaleX value to 0
                searchBoxInputContainerRef.current.style.transform = 'scaleX(0)';

                // change the ending transition durantion to 0 since we don't want any kind of
                // uneasyness in the UI when we click on a link to go to a new page
                searchBoxInputContainerRef.current.style.transitionDuration = '0ms';

                // set open to false
                setOpen( false );

            }

        }

        // End of STEP 3

    }, [ searchBoxContainerRef, searchBoxInputContainerRef ] ); // end of handleClickOutside

    // ==============================
    // handleKeyPress function
    // ==============================

    const handleKeyPress = useCallback( ( e ) => {

        // if the escape key is pressed and open is false then close the search box
        if ( e.key === "Escape" && open === false ) {
    
            // change the ending width state to 0rem
            searchBoxInputContainerRef.current.style.width   = '0rem';

            // change the ending opacity state to 0
            searchBoxInputContainerRef.current.style.opacity   = 0;

            // change the ending scaleX value to 0
            searchBoxInputContainerRef.current.style.transform = 'scaleX(0)';

            // change the ending transition durantion to 0 since I thought it gave a better user
            // experience
            searchBoxInputContainerRef.current.style.transitionDuration = '0ms';

            // set open to false
            setOpen( false );

        }

    }, [] ); // end of handleKeyPress


    // ==============================
    // useEffect hook
    // ==============================

    useEffect( () => {

        // if we press the any key then we will call the handleKeyPress function above
        document.addEventListener( 'keydown', handleKeyPress, false );

        // if we click outside the modal ( anywhere in the document ) then we will call the
        // handleClickOutside function
        document.addEventListener( 'click', handleClickOutside, false );

        // make sure we remove the event listeners after we call the handleKeyPress and
        // handleClickOutside functions
        return () => {

            document.removeEventListener( 'keydown', handleKeyPress, false );

            document.removeEventListener( 'click', handleClickOutside, false );

        };

    }, [ handleClickOutside /* handleKeyPress */ /* ] ); // end of useEffect


    return (

        // ==============================
        // create DOM reference
        // ==============================

        // STEP 2 ( see below )

        // tie the initialized useRef variable from above into a specific DOM element so that we
        // can reference that DOM element in our code

        <div 
            className={ styles.searchBoxContainer }
            ref={ searchBoxContainerRef }
        >

            <form noValidate="novalidate" onSubmit={ handleSubmit }>

                <div 
                    className={ styles.searchBoxContainerFormInputContainer }
                    ref={ searchBoxInputContainerRef }
                >

                    { /*  submit button  */ /* }
                    <div 
                        className={ styles.searchBoxContainerFormButtonContainer1 }
                    >

                        <button type="submit">
                            <FaSearch style={ { verticalAlign: '-3px', fontSize: '1.6rem' } } />
                        </button>

                    </div>

                    { /*  search field  */ /* }
                    <input
                        name="term"
                        type="text"
                        placeholder="Search events"
                        value={ term }
                        onChange={ (e) => setTerm( e.target.value ) }
                        ref={ searchBoxInputRef }
                    />

                </div>


                { /*  handle onClick button  */ /* }
                <div 
                    className={ styles.searchBoxContainerFormButtonContainer2 }
                >

                    <button
                        onClick={ handleOnClick }
                    >
                        <FaSearch style={ { verticalAlign: '-3px', fontSize: '1.6rem' } } />
                    </button>

                </div>

            </form>

        </div>

    );

}
*/
















// ===============================





















// at the beginning of lecture 136, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in the useState hook
import { useCallback, useEffect, useRef, useState } from 'react';
// import in the useRouter hook
import { useRouter } from 'next/router';
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
    const [ open, setOpen ] = useState( false );

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
    // useRef();
    // ==============================

    // ==============================
    // create DOM reference
    // ==============================

    // STEP 1

    // use the useRef(); hook to create a reference to a DOM element and let's start by
    // initializing several useRef variables
    const searchBoxInputContainerRef = useRef();
    const searchBoxContainerRef      = useRef();
    const searchBoxInputRef          = useRef();
    const searchBox2ndButtonRef      = useRef();

    // End of STEP 1

    // ==============================
    // useSession();
    // ==============================

    // ==============================
    // initialize the context
    // ==============================

    // ==============================
    // handleSubmit function
    // ==============================

    const handleSubmit = ( e ) => {

        // since we're submitting a form, make sure we prevent the default browser behavior
        e.preventDefault();

        // if there is no value in the search field then redirect the user to the events page
        if ( !term ) {

            return;

        } else { // term exist

            // call the onSearch function in this compoennt and pass along the selected search
            // term and remember this function will call the handleSearch function in the
            // nav.js file
            onSearch( term );
         
        } // end of if else

    } // end of handleSubmit

    // ==============================
    // handleOnClick function
    // ==============================

    const handleOnClick = ( e ) => {
 
        // e.preventDefault(); prevented this event from bubbling up to the handleSubmit
        // function and then calling the code inside that function
        e.preventDefault();

        // ==============================
        // create DOM reference
        // ==============================

        // STEP 3

        if ( !open ) {

            // reference the specified DOM element below

            // remember we have to use " .current " in order to access the referenced element
            // and after we access the referenced element we can then apply styles to the ending
            // state ( see the sass file for the starting state and the transition key value pair
            // that gives the search box opening a nice animation effect )

            // remember that I could not just add a class to the element and then tie that class
            // to the @keyframe and animation key value pair in the sass file, I could not make
            // this work in react

            // change the ending width state to 30.0rem
            searchBoxInputContainerRef.current.style.width = '36.0rem';

            // change the ending opacity state to 1
            searchBoxInputContainerRef.current.style.opacity = 1;

            // change the ending scaleX value to 1
            searchBoxInputContainerRef.current.style.transform = 'scaleX(1)';

            // make sure we reapply the transitin duration if needed ( see the handleClickOutside
            // function below )
            searchBoxInputContainerRef.current.style.transitionDuration = '0.3s';

            // put the focus on the input field
            searchBoxInputRef.current.focus();

            // upon opening the search box, hide the second search button
            searchBox2ndButtonRef.current.style.display = 'none';

            // upon opening the search box, clear out any text from previous searches
            setTerm( '' );

            // set open to true
            setOpen( true );

        }

        // ==============================
        // ==============================
        // ==============================

        // if open is true and we press the search button again then close the search box
        if ( open ) {

            // change the ending width state to 0rem
            searchBoxInputContainerRef.current.style.width = '0rem';

            // change the ending opacity state to 0
            searchBoxInputContainerRef.current.style.opacity = 0;

            // change the ending scaleX value to 0
            searchBoxInputContainerRef.current.style.transform = 'scaleX(0)';

            // change the ending transition durantion to 0 since I thought it gave a better user
            // experience
            searchBoxInputContainerRef.current.style.transitionDuration = '0ms';

            // upon closing the search box, show the second search button
            searchBox2ndButtonRef.current.style.display = 'block';

            // set open to false
            setOpen( false );

        } // end of if

        // End of STEP 3

    } // end of handleOnClick

    // ==============================
    // handleClickOutside function
    // ==============================

    // define handleClickOutside
    // the useCallback(); hook caches our handleClickOutside function and it allows us to
    // call the handleClickOutside function inside the useEffect(); hook and do so without
    // running into any issues

    // if I eliminate the useCallback(); hook then I get a message in the console that reads
    // " Line 494:11:  The 'handleClickOutside' function makes the dependencies
    // of useEffect Hook (at line 554) change on every render.  Move it inside the useEffect
    // callback.  Alternatively, wrap the definition of 'handleClickOutside' in its own
    // useCallback() Hook react-hooks/exhaustive-deps "
    const handleClickOutside = useCallback( ( e ) => {
        
        // ==============================
        // create DOM reference
        // ==============================

        // STEP 3
        if ( 
            searchBoxInputContainerRef.current &&
            !searchBoxInputContainerRef.current.contains( e.target ) &&
            searchBoxContainerRef.current &&
            !searchBoxContainerRef.current.contains( e.target )
        ) {

            // for some reason the open state is one state behind the handleOnClick function
            // above
            if ( open === false ) {

                // change the ending width state to 0rem
                searchBoxInputContainerRef.current.style.width = '0rem';

                // change the ending opacity state to 0
                searchBoxInputContainerRef.current.style.opacity = 0;

                // change the ending scaleX value to 0
                searchBoxInputContainerRef.current.style.transform = 'scaleX(0)';

                // change the ending transition durantion to 0 since we don't want any kind of
                // uneasyness in the UI when we click on a link to go to a new page
                searchBoxInputContainerRef.current.style.transitionDuration = '0ms';

                // upon closing the search box, show the second search button
                searchBox2ndButtonRef.current.style.display = 'block';

                // set open to false
                setOpen( false );

            }

        }

        // End of STEP 3

    }, [ open ] ); // end of handleClickOutside

    // ==============================
    // handleKeyPress function
    // ==============================

    const handleKeyPress = useCallback( ( e ) => {

        // if the escape key is pressed and open is false then close the search box
        if ( e.key === "Escape" && open === false ) {
    
            // change the ending width state to 0rem
            searchBoxInputContainerRef.current.style.width = '0rem';

            // change the ending opacity state to 0
            searchBoxInputContainerRef.current.style.opacity = 0;

            // change the ending scaleX value to 0
            searchBoxInputContainerRef.current.style.transform = 'scaleX(0)';

            // change the ending transition durantion to 0 since I thought it gave a better user
            // experience
            searchBoxInputContainerRef.current.style.transitionDuration = '0ms';

            // upon closing the search box, show the second search button
            searchBox2ndButtonRef.current.style.display = 'block';

            // set open to false
            setOpen( false );

        }

    }, [ open ] ); // end of handleKeyPress


    // ==============================
    // useEffect hook
    // ==============================

    useEffect( () => {

        // if we press the any key then we will call the handleKeyPress function above
        document.addEventListener( 'keydown', handleKeyPress, false );

        // if we click outside the modal ( anywhere in the document ) then we will call the
        // handleClickOutside function
        document.addEventListener( 'click', handleClickOutside, false );

        // make sure we remove the event listeners after we call the handleKeyPress and
        // handleClickOutside functions
        return () => {

            document.removeEventListener( 'keydown', handleKeyPress, false );

            document.removeEventListener( 'click', handleClickOutside, false );

        };

    }, [ handleKeyPress, handleClickOutside ] ); // end of useEffect


    return (

        // ==============================
        // create DOM reference
        // ==============================

        // STEP 2 ( see below )

        // tie the initialized useRef variable from above into a specific DOM element so that we
        // can reference that DOM element in our code

        <div 
            className={ styles.searchBoxContainer }
            ref={ searchBoxContainerRef }
        >

            <form noValidate="novalidate" onSubmit={ handleSubmit }>

                <div 
                    className={ styles.searchBoxContainerFormInputContainer }
                    ref={ searchBoxInputContainerRef }
                >

                    { /*  submit button  */ }
                    <div 
                        className={ styles.searchBoxContainerFormButtonContainer1 }
                    >

                        <button type="submit">
                            <FaSearch style={ { verticalAlign: '-3px', fontSize: '1.6rem' } } />
                        </button>

                    </div>

                    { /*  search field  */ }
                    <input
                        name="term"
                        type="text"
                        placeholder="Search events"
                        value={ term }
                        onChange={ (e) => setTerm( e.target.value ) }
                        ref={ searchBoxInputRef }
                    />

                </div>


                { /*  handle onClick button  */ }
                <div 
                    className={ styles.searchBoxContainerFormButtonContainer2 }
                    ref={ searchBox2ndButtonRef }
                >

                    <button
                        onClick={ handleOnClick }
                    >
                        <FaSearch style={ { verticalAlign: '-3px', fontSize: '1.6rem' } } />
                    </button>

                </div>

            </form>

        </div>

    );

}


