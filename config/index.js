

// when we deploy we will create an environment variable called " NEXT_PUBLIC_API_URL "
// and the reason we add NEXT_PUBLIC is because we want this environment variable to
// be visible within the client / browser

// " By default, Next.js is not exposing process.env.X variables, due to security
// concerns as it pertains to the browser.

// In order to expose environment variables to the browser you must have a prefix of
// NEXT_PUBLIC_ in the name.  

// In your case, rename API_URL to NEXT_PUBLIC_API_URL, and use it. "

// export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3014';

// use the 2 lines of code below and not
// " export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3014'; "
// since Vercel was not reading " https://course-next-auth.vercel.app "
// and was instead using " http://localhost:3014 "

// let's create an environment variable called " dev "
const dev = process.env.NODE_ENV !== 'production';

// if we're in development mode use " localhost:3016 "
export const API_URL = dev ? 'http://localhost:3016' : 'https://course-next-auth.vercel.app';


