import { Col } from 'react-bootstrap';
import style  from '../Activity/Activity.module.css';

const Activity = (props) => {

    return (
        <Col className={style.container}>
            <img src={props.img} className={style.image}/>
            <p className={style.title}>{props.name} </p>
        </Col>

    );
}

export default Activity;