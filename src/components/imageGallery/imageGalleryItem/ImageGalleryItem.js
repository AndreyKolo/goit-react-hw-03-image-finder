import React from "react";
import style from "./imageGalleryItem.module.css";

const ImageGalleryItem = ({ image, openModal }) => {
  return (
    <li className={style.ImageGalleryItem}>
      {console.log(image)}
      <a href={image.largeImage} onClick={openModal}>
      <img
        src={image.webformatURL}
        data-largeurl={image.largeImageURL}
        alt="photo"
        className={style.ImageGalleryItemImage}
      />
      </a>
    </li>
  );
};

export default ImageGalleryItem;
