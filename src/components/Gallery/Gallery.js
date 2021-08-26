import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import { Gallery } from 'react-photoswipe-gallery';
import { Row } from 'react-bootstrap';

import ImageCard from './ImageCard/ImageCard';

let images = [
    'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/05/thumb_4096_modules_big.jpeg',
    'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/05/thumb_4055_modules_big.jpeg',
    'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/05/thumb_4052_modules_big.jpeg',
    'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/05/thumb_4060_modules_big.jpeg',
    'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/05/thumb_4050_modules_big.jpeg',
    'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/05/thumb_4063_modules_big.jpeg',
    'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/05/thumb_4067_modules_big.jpeg',
    'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/05/thumb_4065_modules_big.jpeg',
    'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/05/thumb_4136_modules_big.jpeg',
    'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/05/thumb_4077_modules_big.jpeg',
    'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/05/thumb_4075_modules_big.jpeg',
    'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/05/thumb_4071_modules_big.jpeg',
    'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/05/thumb_4087_modules_big.jpeg',
    'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/05/thumb_4083_modules_big.jpeg',
    'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/05/thumb_4103_modules_big.jpeg',
    'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/05/thumb_4114_modules_big.jpeg',
    'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/05/thumb_4113_modules_big.jpeg',
    'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/05/thumb_4068_modules_big.jpeg',
    'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/05/thumb_4120_modules_big.jpeg',
    'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/05/thumb_4124_modules_big.jpeg'
];

const MyGallery = () => {
    return (
        <Gallery>
            <Row md={4}>
                {images.map(x => <ImageCard img={x} />)}
            </Row>
        </Gallery>
    );
}

export default MyGallery;