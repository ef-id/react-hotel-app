import { Item } from 'react-photoswipe-gallery';
import { Col } from 'react-bootstrap';
import style from './ImageCard.module.css';

const ImageCard = (props) => {
    return (
        <Col xs={6} className={style.content}>
            <Item
                original={props.img}
                thumbnail={props.img}
                width="1024"
                height="768"
            >
                {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={props.img} alt={props.img} className={style.image} />
                )}
            </Item>
        </Col>

    );
}

export default ImageCard;