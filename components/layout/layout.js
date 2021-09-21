

// and remember we want the Layout component to wrap around our page component or
// " <Component { ...pageProps } /> " so " <Component { ...pageProps } /> " will be passed in
// as a child to the Layout component

// import in the Head component
import Head from 'next/head';
// import in our meta component
import Meta from '../meta/meta';
// import in our Header component
import Header from '../header/header';
// import in our Footer component
import Footer from '../footer/footer';
// import in our stylesheet
import styles from './layout.module.scss';


const Layout = ( { children } ) => {

    return (

        <div className={ styles.layoutContainer }>

            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Meta />

            <Header />

            <main>
                { children }
            </main>

            <Footer />

        </div>            

    );

}


export default Layout;

