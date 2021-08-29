import style from './Footer.module.css';
import { Container, Row, Col } from 'react-bootstrap';

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <Container fluid>
            <Row className={style.footer}>
                <Col md={{ span: 6, offset: 3}} className={style.secondFooter}>
                    <p className={style.footerParagraph}>Copyright &copy; 2021 Designed by Efsun Idriz. All Rights Reserved</p>
                </Col>
                <Col md={{ span: 3}}>
                    <FaFacebookF size={24} className={style.icons}/>
                    <FaTwitter size={24} className={style.icons}/>
                    <FaInstagram size={24} className={style.icons}/>
                </Col>
            </Row>
        </Container>
            

    );
}

export default Footer;