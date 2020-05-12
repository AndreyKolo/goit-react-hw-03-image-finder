import React from 'react';
import ImageGalleryItem from './imageGalleryItem/ImageGalleryItem';
import style from './imageGallery.module.css';

const ImageGallery = ({images, openModal}) => {
    return (
        <ul className={style.ImageGallery}>
            {images.map(image => <ImageGalleryItem key={image.id} image={image} openModal={openModal} />)}
        </ul>
    );
}

export default ImageGallery;