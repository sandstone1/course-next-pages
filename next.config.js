
/*
// 1 - use es modules
// " We're working on extensive ES Modules support in Next.js, both as input modules and as an
// output target. Starting with Next.js 11.1, you can now import npm packages using ES Modules
// (e.g. "type": "module" in their package.json) with an experimental flag. "

// End of 1


// 2 - handle environment variables in next.js
// "To add environment variables to the JavaScript bundle, open next.config.js and add the env
// config:

/*
module.exports = {
    env: {
        customKey: 'my-value',
    },
}
  
Now you can access process.env.customKey in your code. For example:
  
function Page() {
    return <h1>The value of customKey is : { process.env.customKey }</h1>
}

export default Page"
*/

// End of 2

/*
module.exports = {

    reactStrictMode: true,

    // 1 -
    // prefer loading of ES Modules over CommonJS
    experimental: { esmExternals: true },

    // 2 -
    // environment variable set up in next.js
    env: {
        customKey: 'my-value',
    }

}
*/
















// ===============================





















// at the beginning of tutorial 209, given all the notes, I created a new file below without
// the notes so we are starting fresh


// ==============================
// use es modules
// ==============================

// " We're working on extensive ES Modules support in Next.js, both as input modules and as an
// output target. Starting with Next.js 11.1, you can now import npm packages using ES Modules
// (e.g. "type": "module" in their package.json) with an experimental flag. "


// ==============================
// configure our app for development and for production
// ==============================

// get the constant " PHASE_DEVELOPMENT_SERVER " and use this constant below so that we can
// check and see whether or not were in development or whether or not were in production
const { PHASE_DEVELOPMENT_SERVER } = require( 'next/constants' );


// module.exports can equal an object or a function and when using a function we can
// use an if statement inside the function to check on whether or not were in
// development mode or production mode
module.exports = ( phase ) => {

    // if we're in development then we need use one set of environment variable values
    if ( phase === PHASE_DEVELOPMENT_SERVER ) {

        // return a configuration object
        return {

            reactStrictMode: true,

            // prefer loading of ES Modules over CommonJS
            experimental: { esmExternals: true },

            // environment variable set up in next.js
            env: {
                mongodb_clustername : 'cluster1',
                mongodb_database    : 'next-auth',
                mongodb_username    : 'max-s-next-auth',
                mongodb_password    : 'test1234'
            }

        }

    }

    // if we make it past the if check above then we are in production and therefore
    // we need to use a different set of environment variable values

    // return a configuration object
    return {

        reactStrictMode: true,

        // prefer loading of ES Modules over CommonJS
        experimental: { esmExternals: true },

        // environment variable set up in next.js
        env: {
            mongodb_clustername : 'cluster1',
            mongodb_database    : 'next-auth',
            mongodb_username    : 'max-s-next-auth',
            mongodb_password    : 'test1234'
        }

    }

} // end of module.exports


