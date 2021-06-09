import { Row, Container } from 'react-bootstrap';
import style from '../Main/Main.module.css';

import golfImg from './images/golf.jpg';
import yachtingImg from './images/yachting.jpg';
import tennisImg from './images/tennis.jpg';

import Activity from './Activity/Activity';



const Main = () => {
    return (
        <Container fluid className={style.container}>
            <h1 className={style.title}>Activities</h1>
            <Row >
                <Activity img={golfImg} name="Golf Club"/>
                <Activity img={yachtingImg} name="Yachting"/>
                <Activity img={tennisImg} name="Tennis"/>
            </Row>
        </Container>
    );
}

export default Main;