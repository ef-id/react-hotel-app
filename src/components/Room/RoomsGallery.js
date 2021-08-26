import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

const RommsGallery = (props) => {
    return (

        <ImageGallery
            items={props.images}
            autoPlay={props.auto}
            showBullets={props.bullets}
            showNav={props.arrows}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false} 
        />
    )
}

export default RommsGallery;