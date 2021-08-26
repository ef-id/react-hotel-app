import { Container, Row, Col } from 'react-bootstrap';
import style from './ArticleSection.module.css';

const ArticleSection = (props) => {
    return (
        <Container fluid>
            <Row >
                <Col md={{ span: 6 }} className={style.firstSection}>
                    <h1 className={style.firstSectionTitle}>{props.mainTitle}</h1>
                </Col>
                <Col className={style.secondSection} md={{ span: 3 }}>
                    <h3 className={style.secondSectionTitle}>{props.title}</h3>
                    <p className={style.secondSectionDesc}>{props.info}</p>
                </Col>
            </Row>
        </Container>
    );
}

export default ArticleSection;