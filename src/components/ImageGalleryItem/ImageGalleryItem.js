import { useState } from 'react';

import { ModalOverlay } from '../Modal/Modal';

import {
  ImageGalleryItem,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export default function ImageGalleryItemComponent({ imgLarge, tags, imgUrl }) {
  const [showModal, setShowModal] = useState(false);

  const toogleModal = () => {
    setShowModal(showModal => !showModal);
  };

  return (
    <ImageGalleryItem className="gallery-item">
      <ImageGalleryItemImage
        onClick={toogleModal}
        src={imgUrl}
        alt={tags}
        width="240"
        loading="lazy"
      />
      {showModal && (
        <ModalOverlay
          largeUrl={imgLarge}
          tags={tags}
          isOpen={showModal}
          onClick={toogleModal}
          />
      )}
    </ImageGalleryItem>
  );
}
