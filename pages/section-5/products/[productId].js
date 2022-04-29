

/*
// remember the url path for this file is " http://localhost:3016/section-5/any-product "

// import in the file system module from node.js
import fs from 'fs/promises';
// import in the path module
import path from 'path';
// import in the useRouter hook to get access to the route parameter
import { useRouter } from 'next/router';
// use the Meta component to specify a title for this page
import Meta from '../../components/meta/meta';
// import in our stylesheet
import styles from './[productId].module.scss';


export default function ProductDetailsPage( { product } ) {

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
    // destructure product
    // ==============================

    // use destructuring to pull off the properties we need for this page
    const { 
        id,
        title,
        description
    } = product;

    // ==============================
    // useSession();
    // ==============================

    // ==============================
    // initialize the context
    // ==============================

    // ==============================
    // useEffect();
    // ==============================


    return (

        <div className={ styles.productDetailsPageContainer }>

            <Meta title="Product Details Page" />
            
            <div className={ styles.productDetailsPageContainerDiv1 }>

                <h3>{ product.title }</h3>

                <p>{ product.description }</p>

            </div>

        </div>

    );

}


// remember if we use the useEffect(); hook to retrieve the data then remember that data
// is not there when this page is initially rendered and therefore search engines will
// not see our data and therefore we will use getStaticProps to retrieve our data instead

// ==============================
// for Dynamic Routes we need to use both getStaticProps and getStaticPaths
// ==============================

// remember if we have a dynamic route then the default behavior by next.js is to not
// pre generate the page and the reason is that next.js doesn't know how many pages
// to pre generate for a dynamic route

// so dynamic routes are always generated just in time on the server but if we use
// getStaticProps then we are telling next.js that we want to render this page
// in advance

// therefore with dynamic routes we need to give next.js more information and this
// information will be in the form of paths from getStaticPaths and these paths tell
// next.js how many routes need to be pre generated

// remember getStaticPaths only works inside page component files


// ==============================
// getStaticProps
// ==============================

// we want to load data from this file but we don't want to load the data through an
// http request that is sent from the client side after the page is loaded; instead we
// want to pre fetch the data before this component is created and before this component
// gets pre rendered by next.js and we can do this by using getStaticProps

// getStaticProps prepares the props for our component and next.js will first execute the
// getStaticProps function and then execute the component function and remember getStaticProps
// returns an object with a props key and all this happens during build time or in development
// as part of the development server 

export async function getStaticProps( context ) {

    // first, let's use destructuring to get the params object and the params object is full
    // of key value pairs where the keys are the identifiers for the dynamic path segments or
    // in this case the key would be the productId and the values are the concrete values that
    // are entered into the url or in this case the values could be p1, p2 or p3
    const { params } = context;

    // get our productId
    const productId = params.productId;

    // remember we could also get " productId " by using the useRouter hook in the component
    // function above but if we want to get the " productId " inside getStaticProps then we
    // need to use the code below

    // we can use the file system module to get access to the dummy backend json file
    // and we will use the path module, which helps to build paths

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
                { id: 'p1', title: 'Product 1', description : 'This is product 1' },
                { id: 'p2', title: 'Product 2', description : 'This is product 2' },
                { id: 'p3', title: 'Product 3', description : 'This is product 3' }
            ]
        }
    */

    // get products
    /*
    const products = data.products;

    // get the selected product by using the find() method
    const product = products.find( ( product ) => (

        product.id === productId

    ) );

    // the revalidate key value will be the time in seconds that next.js should wait until
    // it re generates the page so if we give revalidate a value of 10 then for every
    // incoming request to this page next.js should re generate the page unless
    // it has been less than 10 seconds since next.js re generated the page

    // for a highly dynamic page where content changes all the time we would want to use
    // a low value of say 1 second

    // remember that during development this page will be re generated for every request no
    // matter what you enter as the value for the revalidate key

    // so in production we have the best of both worlds, we have a pre rendered page that
    // is still updated after deployment

	// then do the following to make the product available throughout the application
    return {

        props : {
            product : product
        },
        revalidate : 10

    }

    // and now we can use destructuring above to pass in the data or product to the page
    // component

} // end of getStaticProps


// ==============================
// getStaticPaths
// ==============================

export async function getStaticPaths() {

    // we need to get all the data so that next will know how many routes and html pages it
    // needs to generate

    // we can use the file system module below to get access to the dummy backend json file
    // and let's use the path module, which is a module with helpful functionality for building
    // paths
    const filePath = path.join( process.cwd(), 'data', 'dummy-backend.json' );

    // get the json data from the dummy backend file
    const jsonData = await fs.readFile( filePath );

    // convert the json data into a JavaScript object using JSON.parse();
    const data = JSON.parse( jsonData );

    // get products
    const products = data.products;
    
    // and this is what we are seeking to return
    /*
    return {
        paths : [
            { params : { id : '1' } },
            { params : { id : '2' } },
            { params : { id : '3' } }
        ]
    }
    */

    // so essentially we need to take the data that is returned and that data is an array
    // of objects and we need to turn that data into " { params : { id : '1' } } " and
    // then pass that key ( i.e. params ) value pair into paths and we can do this with 1
    // line of code ( see below )

    // Line 1
    // get an array of objects ( i.e. { params : { id : '1' } } ) and save this array
    // to the const called paths
    /*
    const paths = products.map( ( product ) => (

         { params : { productId : product.id } }

    ) );

    // now all we need to return is " paths : paths " and add " fallback : false " and this
    // means if we go to something in the data that does not exist then we will be forwarded to
    // a 404 page
    return {
        paths    : paths,
        fallback : false
    }

    // so now when next builds our app for production it will look at the paths value, which is
    // an array of objects and next will build a route and an html page for each object in the
    // array using the parameters we specified and in our case next will build 3 routes and
    // 3 pages because we have 3 different product ids and for each page next will use the
    // ProductDetailsPage component to create the page 

}

// now if we test this out by going to " http://localhost:3016/section-5/p1 " we see the
// following:

/*
    Product 1
    This is product 1
*/

// and this is correct so everything is working as expected






















// ===============================




















/*
// at the beginning of tutorial 98, given all the notes, I created a new file below without
// the notes so we are starting fresh


// remember the url path for this file is " http://localhost:3016/section-5/any-product "

// import in the file system module from node.js
import fs from 'fs/promises';
// import in the path module
import path from 'path';
// import in the useRouter hook to get access to the route parameter
import { useRouter } from 'next/router';
// use the Meta component to specify a title for this page
import Meta from '../../components/meta/meta';
// import in our stylesheet
import styles from './[productId].module.scss';


export default function ProductDetailsPage( { product } ) {

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
    // destructure product
    // ==============================

    // use destructuring to pull off the properties we need for this page
    const { 
        id,
        title,
        description
    } = product;

    // ==============================
    // useSession();
    // ==============================

    // ==============================
    // initialize the context
    // ==============================

    // ==============================
    // useEffect();
    // ==============================


    return (

        <div className={ styles.productDetailsPageContainer }>

            <Meta title="Product Details Page" />
            
            <div className={ styles.productDetailsPageContainerDiv1 }>

                <h3>{ product.title }</h3>

                <p>{ product.description }</p>

            </div>

        </div>

    );

}


// remember if we use the useEffect(); hook to retrieve the data then remember that data
// is not there when this page is initially rendered and therefore search engines will
// not see our data and therefore we will use getStaticProps to retrieve our data instead

// ==============================
// for Dynamic Routes we need to use both getStaticProps and getStaticPaths
// ==============================

// remember if we have a dynamic route then the default behavior by next.js is to not
// pre generate the page and the reason is that next.js doesn't know how many pages
// to pre generate for a dynamic route

// so dynamic routes are always generated just in time on the server but if we use
// getStaticProps then we are telling next.js that we want to render this page
// in advance

// therefore with dynamic routes we need to give next.js more information and this
// information will be in the form of paths from getStaticPaths and these paths tell
// next.js how many routes need to be pre generated

// remember getStaticPaths only works inside page component files


// 1 -

// ==============================
// getData
// ==============================

async function getData() {

    // remember we could also get " productId " by using the useRouter hook in the component
    // function above but if we want to get the " productId " inside getStaticProps then we
    // need to use the code below

    // we can use the file system module to get access to the dummy backend json file
    // and we will use the path module, which helps to build paths

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
                { id: 'p1', title: 'Product 1', description : 'This is product 1' },
                { id: 'p2', title: 'Product 2', description : 'This is product 2' },
                { id: 'p3', title: 'Product 3', description : 'This is product 3' }
            ]
        }
    */

    // return data
    /*
    return data;

} // end of getData

// End of 1 -


// ==============================
// getStaticProps
// ==============================

// we want to load data from this file but we don't want to load the data through an
// http request that is sent from the client side after the page is loaded; instead we
// want to pre fetch the data before this component is created and before this component
// gets pre rendered by next.js and we can do this by using getStaticProps

// getStaticProps prepares the props for our component and next.js will first execute the
// getStaticProps function and then execute the component function and remember getStaticProps
// returns an object with a props key and all this happens during build time or in development
// as part of the development server 

export async function getStaticProps( context ) {

    // first, let's use destructuring to get the params object and the params object is full
    // of key value pairs where the keys are the identifiers for the dynamic path segments or
    // in this case the key would be the productId and the values are the concrete values that
    // are entered into the url or in this case the values could be p1, p2 or p3
    const { params } = context;

    // get our productId
    const productId = params.productId;


    // 1 - continued

    // call the getData function and get data
    const data = await getData();

    // End of 1 -


    // get products
    const products = data.products;

    // get the selected product by using the find() method
    const product = products.find( ( product ) => (

        product.id === productId

    ) );

    // the revalidate key value will be the time in seconds that next.js should wait until
    // it re generates the page so if we give revalidate a value of 10 then for every
    // incoming request to this page next.js should re generate the page unless
    // it has been less than 10 seconds since next.js re generated the page

    // for a highly dynamic page where content changes all the time we would want to use
    // a low value of say 1 second

    // remember that during development this page will be re generated for every request no
    // matter what you enter as the value for the revalidate key

    // so in production we have the best of both worlds, we have a pre rendered page that
    // is still updated after deployment

	// then do the following to make the product available throughout the application
    return {

        props : {
            product : product
        },
        revalidate : 10

    }

    // and now we can use destructuring above to pass in the data or product to the page
    // component

} // end of getStaticProps


// ==============================
// getStaticPaths
// ==============================

export async function getStaticPaths() {

    // we need to get all the data so that next will know how many routes and html pages it
    // needs to generate


    // 1 - continued

    // call the getData function and get data
    const data = await getData();

    // if we test this out by linking to each route parameter we see that everything is
    // working as expected

    // End of 1 -


    // get products
    const products = data.products;
    
    // and this is what we are seeking to return
    /*
    return {
        paths : [
            { params : { id : '1' } },
            { params : { id : '2' } },
            { params : { id : '3' } }
        ]
    }
    */

    // so essentially we need to take the data that is returned and that data is an array
    // of objects and we need to turn that data into " { params : { id : '1' } } " and
    // then pass that key ( i.e. params ) value pair into paths and we can do this with 1
    // line of code ( see below )

    // Line 1
    // get an array of objects ( i.e. { params : { id : '1' } } ) and save this array
    // to the const called paths
    /*
    const paths = products.map( ( product ) => (

         { params : { productId : product.id } }

    ) );

    // now all we need to return is " paths : paths " and add " fallback : false " and this
    // means if we go to something in the data that does not exist then we will be forwarded to
    // a 404 page
    return {
        paths    : paths,
        fallback : false
    }

    // so now when next builds our app for production it will look at the paths value, which is
    // an array of objects and next will build a route and an html page for each object in the
    // array using the parameters we specified and in our case next will build 3 routes and
    // 3 pages because we have 3 different product ids and for each page next will use the
    // ProductDetailsPage component to create the page 

}
*/





















// ===============================





















// at the beginning of tutorial 98, given all the notes, I created a new file below without
// the notes so we are starting fresh


// remember the url path for this file is " http://localhost:3016/section-5/any-product "

// import in the file system module from node.js
import fs from 'fs/promises';
// import in the path module
import path from 'path';
// import in the useRouter hook to get access to the route parameter
import { useRouter } from 'next/router';
// use the Meta component to specify a title for this page
import Meta from '../../../components/meta/meta';
// import in our stylesheet
import styles from './[productId].module.scss';


export default function ProductDetailsPage( { product = {} } ) {

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
    // destructure product
    // ==============================

    // use destructuring to pull off the properties we need for this page
    const { 
        id,
        title,
        description
    } = product;

    // ==============================
    // useSession();
    // ==============================

    // ==============================
    // initialize the context
    // ==============================

    // ==============================
    // useEffect();
    // ==============================


    return (

        <div className={ styles.productDetailsPageContainer }>

            <Meta title="Product Details Page" />
            
            <div className={ styles.productDetailsPageContainerDiv1 }>

                <h3>{ product.title }</h3>

                <p>{ product.description }</p>

            </div>

        </div>

    );

}


// remember if we use the useEffect(); hook to retrieve the data then remember that data
// is not there when this page is initially rendered and therefore search engines will
// not see our data and therefore we will use getStaticProps to retrieve our data instead

// ==============================
// for Dynamic Routes we need to use both getStaticProps and getStaticPaths
// ==============================

// remember if we have a dynamic route then the default behavior by next.js is to not
// pre generate the page and the reason is that next.js doesn't know how many pages
// to pre generate for a dynamic route

// so dynamic routes are always generated just in time on the server but if we use
// getStaticProps then we are telling next.js that we want to render this page
// in advance

// therefore with dynamic routes we need to give next.js more information and this
// information will be in the form of paths from getStaticPaths and these paths tell
// next.js how many routes need to be pre generated

// remember getStaticPaths only works inside page component files

// ==============================
// getData
// ==============================

async function getData() {

    // remember we could also get " productId " by using the useRouter hook in the component
    // function above but if we want to get the " productId " inside getStaticProps then we
    // need to use the code below

    // we can use the file system module to get access to the dummy backend json file
    // and we will use the path module, which helps to build paths

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
                { id: 'p1', title: 'Product 1', description : 'This is product 1' },
                { id: 'p2', title: 'Product 2', description : 'This is product 2' },
                { id: 'p3', title: 'Product 3', description : 'This is product 3' }
            ]
        }
    */

    // return data
    return data;

} // end of getData

// ==============================
// getStaticProps
// ==============================

// we want to load data from this file but we don't want to load the data through an
// http request that is sent from the client side after the page is loaded; instead we
// want to pre fetch the data before this component is created and before this component
// gets pre rendered by next.js and we can do this by using getStaticProps

// getStaticProps prepares the props for our component and next.js will first execute the
// getStaticProps function and then execute the component function and remember getStaticProps
// returns an object with a props key and all this happens during build time or in development
// as part of the development server 

export async function getStaticProps( context ) {

    // first, let's use destructuring to get the params object and the params object is full
    // of key value pairs where the keys are the identifiers for the dynamic path segments or
    // in this case the key would be the productId and the values are the concrete values that
    // are entered into the url or in this case the values could be p1, p2 or p3
    const { params } = context;

    // get our productId
    const productId = params.productId;

    // call the getData function and get data
    const data = await getData();

    // get products
    const products = data.products;

    // get the selected product by using the find() method
    const product = products.find( ( product ) => (

        product.id === productId

    ) );

    // the revalidate key value will be the time in seconds that next.js should wait until
    // it re generates the page so if we give revalidate a value of 10 then for every
    // incoming request to this page next.js should re generate the page unless
    // it has been less than 10 seconds since next.js re generated the page

    // for a highly dynamic page where content changes all the time we would want to use
    // a low value of say 1 second

    // remember that during development this page will be re generated for every request no
    // matter what you enter as the value for the revalidate key

    // so in production we have the best of both worlds, we have a pre rendered page that
    // is still updated after deployment

	// then do the following to make the product available throughout the application
    return {

        props : {
            product : product
        },
        revalidate : 10

    }

    // and now we can use destructuring above to pass in the data or product to the page
    // component

} // end of getStaticProps


// ==============================
// getStaticPaths
// ==============================

export async function getStaticPaths() {

    // we need to get all the data so that next will know how many routes and html pages it
    // needs to generate

    // call the getData function and get data
    const data = await getData();

    // get products
    const products = data.products;
    
    // and this is what we are seeking to return
    /*
    return {
        paths : [
            { params : { id : '1' } },
            { params : { id : '2' } },
            { params : { id : '3' } }
        ]
    }
    */

    // so essentially we need to take the data that is returned and that data is an array
    // of objects and we need to turn that data into " { params : { id : '1' } } " and
    // then pass that key ( i.e. params ) value pair into paths and we can do this with 1
    // line of code ( see below )

    // Line 1
    // get an array of objects ( i.e. { params : { id : '1' } } ) and save this array
    // to the const called paths
    const paths = products.map( ( product ) => (

         { params : { productId : product.id } }

    ) );

    // now all we need to return is " paths : paths " and add " fallback : false " and this
    // means if we go to something in the data that does not exist then we will be forwarded to
    // a 404 page
    return {
        paths    : paths,
        fallback : true
    }

    // so now when next builds our app for production it will look at the paths value, which is
    // an array of objects and next will build a route and an html page for each object in the
    // array using the parameters we specified and in our case next will build 3 routes and
    // 3 pages because we have 3 different product ids and for each page next will use the
    // ProductDetailsPage component to create the page 

}


