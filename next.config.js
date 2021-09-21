
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





















// at the beginning of tutorial 222, given all the notes, I created a new file below without
// the notes so we are starting fresh


// ==============================
// use es modules
// ==============================

// " We're working on extensive ES Modules support in Next.js, both as input modules and as an
// output target. Starting with Next.js 11.1, you can now import npm packages using ES Modules
// (e.g. "type": "module" in their package.json) with an experimental flag. "


// ==============================
// handle environment variables in next.js
// ==============================

/*
"To add environment variables to the JavaScript bundle, open next.config.js and add the env
config:

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


module.exports = {

    reactStrictMode: true,

    // prefer loading of ES Modules over CommonJS
    experimental: { esmExternals: true },

    // environment variable set up in next.js
    env: {
        customKey: 'my-value',
    }

}

