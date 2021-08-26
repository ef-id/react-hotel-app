import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Navigation from './Navigation/Navigation';

import logo from '../Header/logo.svg';
import style from './Header.module.css';

import UserContext from '../../context/UserContext';
import { useContext } from 'react';

const Header = () => {

    const user = useContext(UserContext);

    return (
        <>
            <Navigation />
            <Navbar className={style.navbar}>
                <Container fluid>
                    <Navbar.Brand href="#"><Link to="/"><img src={logo} className={style.logoImg} /></Link></Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Link className={style.navbarLink} to="/">Home</Link>
                        <Link className={style.navbarLink} to='/rooms'>Rooms</Link>
                        <Link className={style.navbarLink} to='/gallery'>Gallery</Link>
                        <Link className={style.navbarLink} to='/contacts'>Contacts</Link>
                        <Link className={style.navbarLink} to='/my-bookings' style={{ display: user ? 'block' : 'none' }}>My Bookings</Link>
                        <Link className={style.bookingBtn} to={user ? '/booking' : '/login'}>Book a Room</Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

Header.contextType = UserContext; 

export default Header;