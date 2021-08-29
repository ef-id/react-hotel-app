import { Container, Row, Col } from "react-bootstrap";
import style from './Room.module.css';

import Room from './Room';
import RoomsGallery from "./RoomsGallery";


const sideSea = [
    {
        original: 'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/01/thumb_969_modules_big.jpeg',
    },
    {
        original: 'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/01/thumb_974_modules_big.jpeg',
    },
    {
        original: 'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/01/thumb_971_modules_big.jpeg',
    },
];
const premiumSideSea = [
    {
        original: 'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/02/thumb_1068_modules_big.jpeg',
    },
    {
        original: 'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/05/thumb_4366_modules_big.jpeg',
    },
    {
        original: 'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/02/thumb_1070_modules_big.jpeg',
    },
];
const familySea = [
    {
        original: 'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/02/thumb_1057_modules_big.jpeg',
    },
    {
        original: 'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/02/thumb_1059_modules_big.jpeg',
    },
    {
        original: 'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/02/thumb_1060_modules_big.jpeg',
    },
];
const familySideSea = [
    {
        original: 'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/02/thumb_1391_modules_big.jpeg',
    },
    {
        original: 'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/02/thumb_1388_modules_big.jpeg',
    },
    {
        original: 'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/02/thumb_1390_modules_big.jpeg',
    },
];
const maisonette = [
    {
        original: 'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/02/thumb_1381_modules_big.jpeg',
    },
    {
        original: 'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/02/thumb_1056_modules_big.jpeg',
    },
    {
        original: 'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/02/thumb_1055_modules_big.jpeg',
    },
];
const lagoon = [
    {
        original: 'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/03/thumb_2586_modules_big.jpeg',
    },
    {
        original: 'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/02/thumb_1413_modules_big.jpeg',
    },
    {
        original: 'https://dw7n6pv5zdng0.cloudfront.net/modules/0001/05/thumb_4861_modules_big.jpg',
    },
];


const AllRooms = () => {
    return (
        <Container fluid>

            <Row>
                <Col>
                    <RoomsGallery
                        images={sideSea}
                    />
                </Col>
                <Col>
                    <Room
                        title="SIDE SEA VIEW ROOM"
                        desc="30-36 SIZE M² | MINI BAR | BALCONY | PRICE PER NIGHT: €150"
                        info="Contemporary designed stylish double room, offering comfortable space for families with one child or two children. Bright and spaceous, each room with its 36 m2 of size features a king-size bed (180x200 cm), a single bed (90x200 cm), a private furnished balcony with stunning views, open closet area, bespoke bathroom design with en-suite sink and a bathroom with rain shower for a unique SPA experience."
                    />
                </Col>
            </Row>

            <Row>
                <Col className={style.colLeft}>
                    <Room
                        title="PREMIUM SIDE SEA VIEW ROOM"
                        desc="40-44 SIZE M² | MINI BAR | BALCONY | PRICE PER NIGHT: €180"
                        info="Sophisticated and elegantly furnished, these extra-spacious units are ideal for accommodatig two adults and one child. The panoramic windows and stylishly furnished balconies overlook the inner courtyard of the resort. Each room features a high ceiling, a king-size bed, chic interior seating area and a bespoke bathroom design to ensure your stay is both relaxed and rewarding."
                    />
                </Col>
                <Col>
                    <RoomsGallery
                        images={premiumSideSea}
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                    <RoomsGallery
                        images={familySea}
                    />
                </Col>
                <Col>
                    <Room
                        title="FAMILY ROOM WITH SEA VIEW"
                        desc="45-50 SIZE M² | MINI BAR | BALCONY | PRICE PER NIGHT: €180"
                        info="Our Family rooms come with two separate bedrooms with an intercoonnected door. Featuring a king-size bed and two single beds, these family units can comfortably accommodate up to two adults and two children. Panoramic windows and a furnished private balcony offers stunning views to the Black sea."
                    />
                </Col>
            </Row>

            <Row>
                <Col className={style.colLeft}>
                    <Room
                        title="FAMILY ROOM WITH SIDE SEA VIEW"
                        desc="55-60 SIZE M² | MINI BAR | BALCONY | PRICE PER NIGHT: €200"
                        info="Our Family rooms with Side Sea View (59 м2) come with two separate bedrooms with an interconnected door. Featuring a king-size bed and two single beds, 2 separate bathrooms and 2 separate balconies, these family units can comfortably accommodate 2 adults with 3 children. Panoramic windows and a furnished private balconies offers stunning views to the inner court yard and the Black sea."
                    />
                </Col>
                <Col>
                    <RoomsGallery
                        images={familySideSea}
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                    <RoomsGallery
                        images={maisonette}
                    />
                </Col>
                <Col>
                    <Room
                        title="MAISONETTE WITH SEA VIEW"
                        desc="95-112 SIZE M² | MINI BAR | SEA VIEW | PRICE PER NIGHT: €250"
                        info="This chic, spacious family duplex comes with a separate living room, a master bedroom, a twin bedroom and a single nanny's room, comfortably accommodating up to 5 adults and 1 child. Its impressive spaceous balcony offers stunning views across the Black sea and generous space for all the family to relax in style."
                    />
                </Col>
            </Row>

            <Row>
                <Col className={style.colLeft}>
                    <Room
                        title="LAGOON SWIM-UP ROOM"
                        desc="44-46 SIZE M² | MINI BAR | POOL IN ROOM | PRICE PER NIGHT: €250"
                        info="Enjoy a rare opportunity to sunbathe and take a dip into the pool direct from your room terrace with these luxurious units. Modern, spaceous and elegantly furnished, our Lagoon Swim-up rooms feature a king-size bed, chic interior seating area and a bespoke bathroom design to ensure your stay is both relaxed and rewarding."
                    />
                </Col>
                <Col>
                    <RoomsGallery
                        images={lagoon}
                    />
                </Col>
            </Row>

        </Container>

    )
}

export default AllRooms;