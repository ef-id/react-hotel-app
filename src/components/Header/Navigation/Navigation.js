import { Navbar, Container } from 'react-bootstrap';
import style from './Navigation.module.css';

import { Link } from 'react-router-dom';

import UserContext from '../../../context/UserContext';
import { useContext } from 'react';


const Navigation = () => {

    const user = useContext(UserContext);

    return (
            <Navbar>
                <Container fluid>
                    <Navbar.Collapse className="justify-content-end">
                        <span className={style.navbarWelcomeText} style={{ display: user ? 'block' : 'none' }}>Welcome, {user?.email}</span>
                        <Link className={style.navbarLink} style={{ display: user ? 'block' : 'none' }} to="/logout">Logout</Link>
                        <Link className={style.navbarLink} style={{ display: user ? 'none' : 'block' }} to="/login">Login</Link>
                        <Link className={style.navbarLink} style={{ display: user ? 'none' : 'block' }} to="/register">Register</Link>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
    );
}


export default Navigation;