

// import in the Nav component
import Nav from '../nav/nav';
// import in our stylesheet
import styles from './header.module.scss';


const Header = () => {

    return (

        <header className={ styles.headerContainer }>

            <Nav />

        </header>

    );

}

export default Header;

