

// the meta component will allow us to bring in meta tags, a page title, page keywords, etc.
// and do so across the entire application

// import in Head
import Head from 'next/head';


// bring in the Head attributes we need like the title, keywords and description
const Meta = ( { title, keywords, description } ) => {

    return (

        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
            <meta name="keywords" content={ keywords } />
            <meta name="description" content={ description } />
            <title>{ title }</title>
        </Head>

    );

}

// set the defaultProps
Meta.defaultProps = {

    title       : 'Next Auth Tutorial',
    keywords    : 'next, serverless, authentication',
    description : 'Next authentication tutorial'

}


export default Meta;
