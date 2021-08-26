import { Col } from 'react-bootstrap';
import style from './InfoCard.module.css'

const InfoCard = (props) => {
    return (
        <Col className={style.offersContent}>
            <h4 className={style.offersTitle}>{props.cardTitle}</h4>
            <p className={style.offersDesc}>{props.cardDesc}</p>
        </Col>
    );
}

export default InfoCard