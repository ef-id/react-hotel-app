import { Container, Row, Col } from 'react-bootstrap'
import style from './Contacts.module.css';


const Contacts = () => {
    return (
        <Container fluid className={style.container}>
            <Row>
                <Col className={style.contacts}>
                    <h5 className={style.titles}>W Hotels</h5>
                    <p>Camping area Aheloy, Pomorie, Bulgaria</p>

                    <p className={style.info}>
                        <span className={style.titles}>General/Reception</span>
                        <span>Tel.: +359 881 234 567</span>
                        <span>E-mail: info@whotels.bg</span>
                    </p>

                    <p className={style.info}>
                        <span className={style.titles}>Reservations call center</span>
                        <span>Tel.: +359 881 234 567</span>
                        <span>E-mail: reservations@whotels.bg</span>
                        <span>(Mon - Sun, 08:00 - 17:00)</span>
                    </p>

                    <p className={style.info}>
                        <span className={style.titles}>Sales & Marketing</span>
                        <span>Tel.: +359 881 234 567</span>
                        <span>E-mail: marketing@whotels.bg</span>
                    </p>

                    <p className={style.info}>
                        <span className={style.titles}>Wellness & Medical SPA center</span>
                        <span>Tel.: +359 881 234 567</span>
                        <span>E-mail: spa@whotels.bg</span>
                    </p>

                </Col>
                <Col>
                    <iframe
                        title="Hotel Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2935.6219584729492!2d27.63049431533119!3d42.62697297916984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a699d1b340d227%3A0xd25ee4dab5c52d02!2sWave%20Resort!5e0!3m2!1sbg!2sbg!4v1627446921696!5m2!1sbg!2sbg"
                        allowFullScreen
                        loading="lazy"
                        className={style.frame}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Contacts;
