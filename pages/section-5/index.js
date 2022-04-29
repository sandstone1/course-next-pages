

/*
// remember the url path for this file is " http://localhost:3016 "

// import in the scss file
import styles from './index-hero.module.scss';


// 1 -

// let's say we want to load the product data dynamically but not use the useEffect hook
// and let's start by adding the dummy-backend.json file to our data folder

// we want to load data from this file but we don't want to load the data through an
// http request that is sent from the client side after the page is loaded; instead we
// want to pre fetch the data before this component is created and before this component
// gets pre rendered by next.js and we can do this by using getStaticProps

// go to 2 - below

// End of 1 -


export default function HomePage( { products } ) {


    return (

        <div className={ styles.homePageContainer }>

            { /* div 1 */ /* }
            <div className={ styles.homePageContainerImageContainer }>

                    <h2 className={ styles.homePageContainerImageContainerH2 }>Featured Events</h2>

            </div>

            { /* div 2 */ /* }
            <div className={ styles.homePageContainerContentContainer1 }>

                <ul>
                    {
                        products.map( ( product ) => (

                            <li
                                key={ product.id }
                            >
                                { product.title }
                            </li>

                        ) )

                    }          
                </ul>

            </div>            

            <style jsx global>
                {`
                    // remember "We (i.e. next.js) bundle styled-jsx to provide support for isolated scoped CSS."
                    body > div > div > main {

                        height : 1240px; !important; // this is #3

                    }
                    body > div > div > header > nav {

                        z-index : 1; // lay the header nav elements on top of the hero image element

                    }
                    body > div > div > footer {

                        z-index    : 0; // we did not have to change the z-index for the footer since the
                        // footer element appears later in the code
                        background : sienna;

                    }
                    body > div > div > footer > h2,
                    body > div > div > footer > div > span {

                        color : rgba( 255, 255, 255, 1 ) !important; // change the footer text color to white
            
                    }
                    body > div > div > footer > div > a {

                        color           : rgba( 255, 255, 255, 1 ) !important; // change the footer text color to white
                        text-decoration : underline;  // underline " About " 
            
                    }
                    @media all and ( max-width : 1280px ) {

                        body > div > div > main {

                            height : 2290px; !important; // this is #3
    
                        }

                        body > div > div > header > nav > div:nth-child( 1 ) {

                            margin : 1.5rem 0 1.0rem 0 !important; // provide spacing between logo and nav elements on
                            // small screen sizes
                    
                        }

                    }
                    @media all and ( max-width : 920px ) {

                        body > div > div > main {

                            height : 2190px; !important; // this is #3
    
                        }

                    }
                    @media all and ( max-width : 768px ) {

                        body > div > div > main {

                            height : 1940px; !important; // this is #3
    
                        }

                    }
                    @media all and ( max-width : 620px ) {

                        body > div > div > main {

                            height : 1740px; !important; // this is #3
    
                        }

                    }
                    @media all and ( max-width : 480px ) {

                        body > div > div > main {

                            height : 1440px; !important; // this is #3
    
                        }

                    }
                `}
			</style>

        </div>

    );

}


//  2 -

// ==============================
// getStaticProps
// ==============================

// getStaticProps prepares the props for our component and next.js will first excute the
// getStaticProps function and then excute the component function and remember getStaticProps
// returns an object with a props key and all this happens during build time or in development
// as part of the development server 

export async function getStaticProps( context ) {



	// then do the following to make the products available throughout the application
    return {

        props : {
            products : [
                { id : 'p1', title : 'Product 1' }
            ]
        }

    }

	// and now we can use destructuring above to pass in the data or products to the HomePage
	// component

} // end of getStaticProps

// and when I add products.map() above and test this out on the home page or at
// " http://localhost:3016/section-5 " I see " Product 1 " so everything is working as
// expected

// and remember this all worked on the server and not the client

// End of 2 -
*/



















// ===============================




















/*
// at the beginning of tutorial 90, given all the notes, I created a new file below without
// the notes so we are starting fresh

// remember the url path for this file is " http://localhost:3016 "

// import in the scss file
import styles from './index-hero.module.scss';


// 3 -

// import in the file system module from node.js
import fs from 'fs/promises';

// remember working with the fs module would fail if we tried to do so on the client
// side but we can work with the file system module in getStaticProps

// import in the path module
import path from 'path';

// End of 3 -


export default function HomePage( { products } ) {


    return (

        <div className={ styles.homePageContainer }>

            { /* div 1 */ /* }
            <div className={ styles.homePageContainerImageContainer }>

                    <h2 className={ styles.homePageContainerImageContainerH2 }>Featured Events</h2>

            </div>

            { /* div 2 */ /* }
            <div className={ styles.homePageContainerContentContainer1 }>

                <ul>
                    {
                        products.map( ( product ) => (

                            <li
                                key={ product.id }
                            >
                                { product.title }
                            </li>

                        ) )

                    }          
                </ul>

            </div>            

            <style jsx global>
                {`
                    // remember "We (i.e. next.js) bundle styled-jsx to provide support for isolated scoped CSS."
                    body > div > div > main {

                        height : 1240px; !important; // this is #3

                    }
                    body > div > div > header > nav {

                        z-index : 1; // lay the header nav elements on top of the hero image element

                    }
                    body > div > div > footer {

                        z-index    : 0; // we did not have to change the z-index for the footer since the
                        // footer element appears later in the code
                        background : sienna;

                    }
                    body > div > div > footer > h2,
                    body > div > div > footer > div > span {

                        color : rgba( 255, 255, 255, 1 ) !important; // change the footer text color to white
            
                    }
                    body > div > div > footer > div > a {

                        color           : rgba( 255, 255, 255, 1 ) !important; // change the footer text color to white
                        text-decoration : underline;  // underline " About " 
            
                    }
                    @media all and ( max-width : 1280px ) {

                        body > div > div > main {

                            height : 2290px; !important; // this is #3
    
                        }

                        body > div > div > header > nav > div:nth-child( 1 ) {

                            margin : 1.5rem 0 1.0rem 0 !important; // provide spacing between logo and nav elements on
                            // small screen sizes
                    
                        }

                    }
                    @media all and ( max-width : 920px ) {

                        body > div > div > main {

                            height : 2190px; !important; // this is #3
    
                        }

                    }
                    @media all and ( max-width : 768px ) {

                        body > div > div > main {

                            height : 1940px; !important; // this is #3
    
                        }

                    }
                    @media all and ( max-width : 620px ) {

                        body > div > div > main {

                            height : 1740px; !important; // this is #3
    
                        }

                    }
                    @media all and ( max-width : 480px ) {

                        body > div > div > main {

                            height : 1440px; !important; // this is #3
    
                        }

                    }
                `}
			</style>

        </div>

    );

}


// ==============================
// getStaticProps
// ==============================

// we want to load data from this file but we don't want to load the data through an
// http request that is sent from the client side after the page is loaded; instead we
// want to pre fetch the data before this component is created and before this component
// gets pre rendered by next.js and we can do this by using getStaticProps

// getStaticProps prepares the props for our component and next.js will first excute the
// getStaticProps function and then excute the component function and remember getStaticProps
// returns an object with a props key and all this happens during build time or in development
// as part of the development server 

export async function getStaticProps( context ) {


    // 3 - continued

    // we can use the file system module below to get access to the dummy backend json file
    // and use the path module, which is a module with helpful functionality for building
    // paths

    // process.cwd() gives us the current working directory or the project root folder or
    // " /Applications/MAMP/htdocs/stoneburyhomes/misc/max_s/next_pages_project "

    // remember " path.join( process.cwd(), 'data', 'dummy-backend.json' ); " gives us
    // " /Applications/MAMP/htdocs/stoneburyhomes/misc/max_s/next_pages_project/data/dummy-backend.json "
    const filePath = path.join( process.cwd(), 'data', 'dummy-backend.json' );

    // get the json data from the dummy backend file
    const jsonData = await fs.readFile( filePath );

    // convert the json data into a JavaScript object using JSON.parse();
    const data = JSON.parse( jsonData );

    // data looks like the following:

    /*
        {
            products: [
                { id: 'p1', title: 'Product 1' },
                { id: 'p2', title: 'Product 2' },
                { id: 'p3', title: 'Product 3' }
            ]
        }
    */

    // now if we go back to the home page, we see:

    /*
        Product 1
        Product 2
        Product 3
    */

    // and this is correct so everything is working as expected

    // remember all the data for this page was pre rendered and was pre rendered with the
    // help of getStaticProps(); and in this function we excuted a bunch of server side
    // code and this code never reaches the client and it is only executed when next.js
    // pre renders our page

    // End of 3 -


    // then do the following to make the products available throughout the application
    /*
    return {

        props : {
            products : data.products
        }

    }

	// and now we can use destructuring above to pass in the data or products to the HomePage
	// component

} // end of getStaticProps
*/




















// ===============================




















/*
// at the beginning of tutorial 91, given all the notes, I created a new file below without
// the notes so we are starting fresh

// remember the url path for this file is " http://localhost:3016/section-5 "

// import in the file system module from node.js
import fs from 'fs/promises';
// import in the path module
import path from 'path';
// import in the scss file
import styles from './index-hero.module.scss';


export default function HomePage( { products } ) {

    return (

        <div className={ styles.homePageContainer }>

            { /* div 1 */ /* }
            <div className={ styles.homePageContainerImageContainer }>

                    <h2 className={ styles.homePageContainerImageContainerH2 }>Featured Events</h2>

            </div>

            { /* div 2 */ /* }
            <div className={ styles.homePageContainerContentContainer1 }>

                <ul>
                    {
                        products.map( ( product ) => (

                            <li
                                key={ product.id }
                            >
                                { product.title }
                            </li>

                        ) )

                    }          
                </ul>

            </div>            

            <style jsx global>
                {`
                    // remember "We (i.e. next.js) bundle styled-jsx to provide support for isolated scoped CSS."
                    body > div > div > main {

                        height : 1240px; !important; // this is #3

                    }
                    body > div > div > header > nav {

                        z-index : 1; // lay the header nav elements on top of the hero image element

                    }
                    body > div > div > footer {

                        z-index    : 0; // we did not have to change the z-index for the footer since the
                        // footer element appears later in the code
                        background : sienna;

                    }
                    body > div > div > footer > h2,
                    body > div > div > footer > div > span {

                        color : rgba( 255, 255, 255, 1 ) !important; // change the footer text color to white
            
                    }
                    body > div > div > footer > div > a {

                        color           : rgba( 255, 255, 255, 1 ) !important; // change the footer text color to white
                        text-decoration : underline;  // underline " About " 
            
                    }
                    @media all and ( max-width : 1280px ) {

                        body > div > div > main {

                            height : 2290px; !important; // this is #3
    
                        }

                        body > div > div > header > nav > div:nth-child( 1 ) {

                            margin : 1.5rem 0 1.0rem 0 !important; // provide spacing between logo and nav elements on
                            // small screen sizes
                    
                        }

                    }
                    @media all and ( max-width : 920px ) {

                        body > div > div > main {

                            height : 2190px; !important; // this is #3
    
                        }

                    }
                    @media all and ( max-width : 768px ) {

                        body > div > div > main {

                            height : 1940px; !important; // this is #3
    
                        }

                    }
                    @media all and ( max-width : 620px ) {

                        body > div > div > main {

                            height : 1740px; !important; // this is #3
    
                        }

                    }
                    @media all and ( max-width : 480px ) {

                        body > div > div > main {

                            height : 1440px; !important; // this is #3
    
                        }

                    }
                `}
			</style>

        </div>

    );

}


// ==============================
// getStaticProps
// ==============================

// we want to load data from this file but we don't want to load the data through an
// http request that is sent from the client side after the page is loaded; instead we
// want to pre fetch the data before this component is created and before this component
// gets pre rendered by next.js and we can do this by using getStaticProps

// getStaticProps prepares the props for our component and next.js will first excute the
// getStaticProps function and then excute the component function and remember getStaticProps
// returns an object with a props key and all this happens during build time or in development
// as part of the development server 

export async function getStaticProps( context ) {

    // we can use the file system module below to get access to the dummy backend json file
    // and let's use the path module, which is a module with helpful functionality for building
    // paths

    // process.cwd() gives us the current working directory or the project root folder or
    // " /Applications/MAMP/htdocs/stoneburyhomes/misc/max_s/next_pages_project "

    // remember " path.join( process.cwd(), 'data', 'dummy-backend.json' ); " gives us
    // " /Applications/MAMP/htdocs/stoneburyhomes/misc/max_s/next_pages_project/data/dummy-backend.json "
    const filePath = path.join( process.cwd(), 'data', 'dummy-backend.json' );

    // get the json data from the dummy backend file
    const jsonData = await fs.readFile( filePath );

    // convert the json data into a JavaScript object using JSON.parse();
    const data = JSON.parse( jsonData );

    // data looks like the following:

    /*
        {
            products: [
                { id: 'p1', title: 'Product 1' },
                { id: 'p2', title: 'Product 2' },
                { id: 'p3', title: 'Product 3' }
            ]
        }
    */


    // 4 -
    
    // set a revalidate key and the value will be the time in seconds that next.js should
    // wait until it re generates the page so if we give revalidate a value of 10 then
    // for every incoming request to this page next.js should re generate the page unless
    // it has been less than 10 seconds since next.js re generated the page

    // for a highly dynamic page where content changes all the time we would want to use
    // a low value of say 1 second

    // remember that during development the page will be re generated for every request no
    // matter what you enter as the value to the revalidate key

    // so in production we have the best of both worlds, we have a pre rendered page that
    // is still updated after deployment

    // End of 4 -


    // then do the following to make the products available throughout the application
    /*
    return {

        props : {
            products : data.products
        }

    }

	// and now we can use destructuring above to pass in the data or products to the HomePage
	// component

} // end of getStaticProps
*/





















// ===============================





















// at the beginning of tutorial 91, given all the notes, I created a new file below without
// the notes so we are starting fresh

// remember the url path for this file is " http://localhost:3016/section-5 "

/*
// import in the file system module from node.js
import fs from 'fs/promises';
// import in the path module
import path from 'path';
// import in the scss file
import styles from './index-hero.module.scss';


// 5 -

// import in the Link component
import Link from 'next/link';

// add the Link component below

// End of 5 -


export default function HomePage( { products } ) {

    return (

        <div className={ styles.homePageContainer }>

            { /* div 1 */ /* }
            <div className={ styles.homePageContainerImageContainer }>

                    <h2 className={ styles.homePageContainerImageContainerH2 }>Featured Events</h2>

            </div>

            { /* div 2 */ /* }
            <div className={ styles.homePageContainerContentContainer1 }>

                <ul>
                    {
                        products.map( ( product ) => (

                            <li
                                key={ product.id }
                            >
                                <Link
                                    href={ `/section-5/${ product.id }` }
                                >
                                    <a>{ product.title }</a>
                                </Link>
                            </li>

                        ) )
                    }          
                </ul>

            </div>            

            <style jsx global>
                {`
                    // remember "We (i.e. next.js) bundle styled-jsx to provide support for isolated scoped CSS."
                    body > div > div > main {

                        height : 1240px; !important; // this is #3

                    }
                    body > div > div > header > nav {

                        z-index : 1; // lay the header nav elements on top of the hero image element

                    }
                    body > div > div > footer {

                        z-index    : 0; // we did not have to change the z-index for the footer since the
                        // footer element appears later in the code
                        background : sienna;

                    }
                    body > div > div > footer > h2,
                    body > div > div > footer > div > span {

                        color : rgba( 255, 255, 255, 1 ) !important; // change the footer text color to white
            
                    }
                    body > div > div > footer > div > a {

                        color           : rgba( 255, 255, 255, 1 ) !important; // change the footer text color to white
                        text-decoration : underline;  // underline " About " 
            
                    }
                    @media all and ( max-width : 1280px ) {

                        body > div > div > main {

                            height : 2290px; !important; // this is #3
    
                        }

                        body > div > div > header > nav > div:nth-child( 1 ) {

                            margin : 1.5rem 0 1.0rem 0 !important; // provide spacing between logo and nav elements on
                            // small screen sizes
                    
                        }

                    }
                    @media all and ( max-width : 920px ) {

                        body > div > div > main {

                            height : 2190px; !important; // this is #3
    
                        }

                    }
                    @media all and ( max-width : 768px ) {

                        body > div > div > main {

                            height : 1940px; !important; // this is #3
    
                        }

                    }
                    @media all and ( max-width : 620px ) {

                        body > div > div > main {

                            height : 1740px; !important; // this is #3
    
                        }

                    }
                    @media all and ( max-width : 480px ) {

                        body > div > div > main {

                            height : 1440px; !important; // this is #3
    
                        }

                    }
                `}
			</style>

        </div>

    );

}


// ==============================
// getStaticProps
// ==============================

// we want to load data from this file but we don't want to load the data through an
// http request that is sent from the client side after the page is loaded; instead we
// want to pre fetch the data before this component is created and before this component
// gets pre rendered by next.js and we can do this by using getStaticProps

// getStaticProps prepares the props for our component and next.js will first excute the
// getStaticProps function and then excute the component function and remember getStaticProps
// returns an object with a props key and all this happens during build time or in development
// as part of the development server 

export async function getStaticProps( context ) {

    // we can use the file system module below to get access to the dummy backend json file
    // and let's use the path module, which is a module with helpful functionality for building
    // paths

    // process.cwd() gives us the current working directory or the project root folder or
    // " /Applications/MAMP/htdocs/stoneburyhomes/misc/max_s/next_pages_project "

    // remember " path.join( process.cwd(), 'data', 'dummy-backend.json' ); " gives us
    // " /Applications/MAMP/htdocs/stoneburyhomes/misc/max_s/next_pages_project/data/dummy-backend.json "
    const filePath = path.join( process.cwd(), 'data', 'dummy-backend.json' );

    // get the json data from the dummy backend file
    const jsonData = await fs.readFile( filePath );

    // convert the json data into a JavaScript object using JSON.parse();
    const data = JSON.parse( jsonData );

    // data looks like the following:

    /*
        {
            products: [
                { id: 'p1', title: 'Product 1' },
                { id: 'p2', title: 'Product 2' },
                { id: 'p3', title: 'Product 3' }
            ]
        }
    */

    // the revalidate key value will be the time in seconds that next.js should wait until
    // it re generates the page so if we give revalidate a value of 10 then for every
    // incoming request to this page next.js should re generate the page unless
    // it has been less than 10 seconds since next.js re generated the page

    // for a highly dynamic page where content changes all the time we would want to use
    // a low value of say 1 second

    // remember that during development the page will be re generated for every request no
    // matter what you enter as the value to the revalidate key

    // so in production we have the best of both worlds, we have a pre rendered page that
    // is still updated after deployment

    // then do the following to make the products available throughout the application
    /*
    return {

        props : {
            products : data.products
        },
        revalidate : 10

    }

	// and now we can use destructuring above to pass in the data or products to the HomePage
	// component

} // end of getStaticProps
*/





















// ===============================





















// at the beginning of tutorial 91, given all the notes, I created a new file below without
// the notes so we are starting fresh

// remember the url path for this file is " http://localhost:3016/section-5 "

// import in the file system module from node.js
import fs from 'fs/promises';
// import in the path module
import path from 'path';
// import in the Link component
import Link from 'next/link';
// import in the scss file
import styles from './index-hero.module.scss';


export default function HomePage( { products } ) {

    return (

        <div className={ styles.homePageContainer }>

            { /* div 1 */ }
            <div className={ styles.homePageContainerImageContainer }>

                    <h2 className={ styles.homePageContainerImageContainerH2 }>Featured Events</h2>

            </div>

            { /* div 2 */ }
            <div className={ styles.homePageContainerContentContainer1 }>

                <ul>
                    {
                        products.map( ( product ) => (

                            <li
                                key={ product.id }
                            >
                                <Link
                                    href={ `/section-5/products/${ product.id }` }
                                >
                                    <a>{ product.title }</a>
                                </Link>
                            </li>

                        ) )
                    }          
                </ul>

            </div>            

            <style jsx global>
                {`
                    // remember "We (i.e. next.js) bundle styled-jsx to provide support for isolated scoped CSS."
                    body > div > div > main {

                        height : 1240px; !important; // this is #3

                    }
                    body > div > div > header > nav {

                        z-index : 1; // lay the header nav elements on top of the hero image element

                    }
                    body > div > div > footer {

                        z-index    : 0; // we did not have to change the z-index for the footer since the
                        // footer element appears later in the code
                        background : sienna;

                    }
                    body > div > div > footer > h2,
                    body > div > div > footer > div > span {

                        color : rgba( 255, 255, 255, 1 ) !important; // change the footer text color to white
            
                    }
                    body > div > div > footer > div > a {

                        color           : rgba( 255, 255, 255, 1 ) !important; // change the footer text color to white
                        text-decoration : underline;  // underline " About " 
            
                    }
                    @media all and ( max-width : 1280px ) {

                        body > div > div > main {

                            height : 2290px; !important; // this is #3
    
                        }

                        body > div > div > header > nav > div:nth-child( 1 ) {

                            margin : 1.5rem 0 1.0rem 0 !important; // provide spacing between logo and nav elements on
                            // small screen sizes
                    
                        }

                    }
                    @media all and ( max-width : 920px ) {

                        body > div > div > main {

                            height : 2190px; !important; // this is #3
    
                        }

                    }
                    @media all and ( max-width : 768px ) {

                        body > div > div > main {

                            height : 1940px; !important; // this is #3
    
                        }

                    }
                    @media all and ( max-width : 620px ) {

                        body > div > div > main {

                            height : 1740px; !important; // this is #3
    
                        }

                    }
                    @media all and ( max-width : 480px ) {

                        body > div > div > main {

                            height : 1440px; !important; // this is #3
    
                        }

                    }
                `}
			</style>

        </div>

    );

}


// ==============================
// getStaticProps
// ==============================

// we want to load data from this file but we don't want to load the data through an
// http request that is sent from the client side after the page is loaded; instead we
// want to pre fetch the data before this component is created and before this component
// gets pre rendered by next.js and we can do this by using getStaticProps

// getStaticProps prepares the props for our component and next.js will first excute the
// getStaticProps function and then excute the component function and remember getStaticProps
// returns an object with a props key and all this happens during build time or in development
// as part of the development server 

export async function getStaticProps( context ) {

    // we can use the file system module below to get access to the dummy backend json file
    // and let's use the path module, which is a module with helpful functionality for building
    // paths

    // process.cwd() gives us the current working directory or the project root folder or
    // " /Applications/MAMP/htdocs/stoneburyhomes/misc/max_s/next_pages_project "

    // remember " path.join( process.cwd(), 'data', 'dummy-backend.json' ); " gives us
    // " /Applications/MAMP/htdocs/stoneburyhomes/misc/max_s/next_pages_project/data/dummy-backend.json "
    const filePath = path.join( process.cwd(), 'data', 'dummy-backend.json' );

    // get the json data from the dummy backend file
    const jsonData = await fs.readFile( filePath );

    // convert the json data into a JavaScript object using JSON.parse();
    const data = JSON.parse( jsonData );

    // data looks like the following:

    /*
        {
            products: [
                { id: 'p1', title: 'Product 1' },
                { id: 'p2', title: 'Product 2' },
                { id: 'p3', title: 'Product 3' }
            ]
        }
    */

    // the revalidate key value will be the time in seconds that next.js should wait until
    // it re generates the page so if we give revalidate a value of 10 then for every
    // incoming request to this page next.js should re generate the page unless
    // it has been less than 10 seconds since next.js re generated the page

    // for a highly dynamic page where content changes all the time we would want to use
    // a low value of say 1 second

    // remember that during development the page will be re generated for every request no
    // matter what you enter as the value to the revalidate key

    // so in production we have the best of both worlds, we have a pre rendered page that
    // is still updated after deployment

	// then do the following to make the products available throughout the application
    return {

        props : {
            products : data.products
        },
        revalidate : 10

    }

	// and now we can use destructuring above to pass in the data or products to the HomePage
	// component

} // end of getStaticProps

