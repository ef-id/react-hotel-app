import { Navbar, Container, Nav } from 'react-bootstrap';
import style from '../Navigation/Navigation.module.css';


const Navigation = () => {
    return (
        <Navbar>
            <Container fluid>
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link className={style.navbarLink}>Login</Nav.Link>
                    <Nav.Link className={style.navbarLink}>Register</Nav.Link>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default Navigation;