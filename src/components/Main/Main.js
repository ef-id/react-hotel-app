import { Row, Container } from 'react-bootstrap';
import style from './Main.module.css';

import mainImg from '../Main/images/hotel.jpg';

import ArticleSection from './ArticleSection/ArticleSection';
import InfoCard from './InfoCard/InfoCard';

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

const imgs = [
    {
        original: 'https://lifeforpomorielagoon.eu/images/2/d7ef6d6bec05054637bd90db8ff4ecf3/ban1-366.jpg',
    },
    {
        original: 'https://legrand.bg/sites/default/files/2020-09/333.jpg',
    },
    {
        original: 'https://cf.bstatic.com/xdata/images/city/1680x560/655955.jpg?k=6decc43912f521cf9f450b1e45e71133075cb70b1b57a50f3ac4b6d82d408485&o=',
    },
];

const Main = () => {
    return (
        <Container fluid className={style.container}>
            <div className={style.imageContainer}>
                <img src={mainImg} alt="main" className={style.image} />
            </div>
            <ArticleSection
                mainTitle="Enjoy the exclusive oasis of pleasure"
                title="Wave Resort"
                info="Among the finest luxury hotels on the Black Sea coast, Wave resort is set in beautifully landscaped grounds, 5.5 km from Pomorie town center and 15 minutes from Bourgas airport, the resort offers impressive range of leisure facilities for those seeking for a peaceful holiday by the seaside."
            />
            <h3 className={style.title}>Special Offers</h3>
            <Row className='justify-content-md-center'>
                <InfoCard
                    cardTitle="Medical Packages"
                    cardDesc="Muskuloskletal system: Treatment and prevention of: degenerative joint discorders:  gonarthrosis, coxarthrosis, spondylarthrosis and others, post-traumatic and postoperative conditions, endocrine, osteoporosis, scleroderma, fibromyalgia."
                />
                <InfoCard
                    cardTitle="Wellness packages"
                    cardDesc="With special care to the body and its functions, we at WSPA have created programs to restore and regain mental balance by combining gymnastics, walks, water activities, hydrotherapy, facial and body therapies with a specially tailored diet."
                />
                <InfoCard
                    cardTitle="Inside the hammam"
                    cardDesc="Maybe you have heard about the Traditional Turkish bath, hammam, or maybe you still haven't... Dont's miss a chance to enjoy this unique ritual when searching for experiences to help you understand the Oriental culture better."
                />
            </Row>

            <Row className='justify-content-md-center'>
                <ImageGallery
                    items={imgs}
                    autoPlay={true}
                    showBullets={true}
                    showNav={false}
                    showThumbnails={false}
                    showFullscreenButton={false}
                    showPlayButton={false}
                />
            </Row>

            <h3 className={style.title}>Explore</h3>
            <Row className='justify-content-md-center'>
                <InfoCard
                    cardTitle="Black Sea"
                    cardDesc="The Black Sea is one of the most isolated from the world's oceans. As the Black Sea is connected by a very narrow strait of the Bosphorus near Istanbul with the salty Marmara Sea and then the Mediterranean Sea, it is said to be the largest indoor water basin in the world."
                />
                <InfoCard
                    cardTitle="Black Sea lye"
                    cardDesc="The Black Sea lye is the final product of the salt production in Pomorie. It is obtained from the rapa (lake water) of the Pomorie and Burgas salt lakes after the evaporation of the water in the salt pans and the crystallization of the salt."
                />
                <InfoCard
                    cardTitle="Lake Pomorie"
                    cardDesc="Lake Pomorie is a natural ultra-saline lagoon. In the past, Pomorie was an island that was connected to the mainland by the formation of two sandy slopes - to the west and to the north. Today the lake is separated from the sea by the northern sandy slope, which is about 5 km long and 50 m wide. "
                />
            </Row>
        </Container>
    );
}

export default Main;