import Modal from 'components/Modal/Modal';
import React from 'react';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  }

  render() {
    const { pageURL, user, largeImageURL } = this.props;
    return (
      <li  className="ImageGalleryItem">
        {this.state.showModal && (
          <Modal toggleModal={this.toggleModal} largeImageURL={largeImageURL} />
        )}
        <img onClick={this.toggleModal} className="ImageGalleryItem-image" src={pageURL} alt={user} />
      </li>
    );
  }
}

export default ImageGalleryItem;
