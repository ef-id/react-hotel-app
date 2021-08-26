import style from './Room.module.css'
import { Col } from "react-bootstrap";

const Room = (props) => {

    return (
        <Col className={style.col}>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.desc}>{props.desc}</span>
            <p className={style.info}>
                {props.info}
            </p>
        </Col>
    );
}

export default Room