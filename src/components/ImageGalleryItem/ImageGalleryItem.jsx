import Modal from 'components/Modal/Modal';
import React from 'react';
import { useState } from 'react';


export function ImageGalleryItem({ pageURL, user, largeImageURL }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <li className="ImageGalleryItem">
      {showModal && <Modal toggleModal={toggleModal} largeImageURL={largeImageURL} />}
      <img
        onClick={toggleModal}
        className="ImageGalleryItem-image"
        src={pageURL}
        alt={user}
      />
    </li>
  );
}

export default ImageGalleryItem;