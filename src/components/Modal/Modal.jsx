import React from 'react';
import { Component } from 'react';

export class Modal extends Component {
  handleCloseKey = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }
    console.log(e);
  };

  handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.toggleModal();
    }
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseKey);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseKey);
  }

  render() {
    return (
      <div className="Overlay" onClick={this.handleOverlayClick}>
        <div className="Modal">
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
