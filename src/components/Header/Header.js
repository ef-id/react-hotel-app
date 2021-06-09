import { Navbar, Container, Nav } from 'react-bootstrap';

import Navigation from './Navigation/Navigation';

import mainImg from '../Header/hotel.jpg';
import logo from '../Header/logo.svg';
import style from '../Header/Header.module.css';

const Header = () => {
    return (
        <>
            <Navigation />
            <Navbar className={style.navbar}>
                <Container fluid> 
                    <Navbar.Brand href="#"><img src={logo} className={style.logoImg} /></Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className={style.navbarLink}>Home</Nav.Link>
                        <Nav.Link className={style.navbarLink}>Rooms</Nav.Link>
                        <Nav.Link className={style.navbarLink}>About us</Nav.Link>
                        <Nav.Link className={style.navbarLink}>Contact</Nav.Link>
                        <Nav.Link className={style.bookingBtn}>Book Now</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className={style.imageContainer}>
                <img src={mainImg} className={style.image} />
            </div>
        </>
    );
}

export default Header;