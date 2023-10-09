import { fetchImages } from 'components/ImageAPI/ImageAPI';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import React, { Component } from 'react';

export default class ImageGallery extends Component {
  state = {
    imgArr: [],
    loader: false,
    totalHits: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.query !== this.props.query ||
      prevProps.page !== this.props.page
    ) {
      if (this.props.page === 1) {
        this.setState({ imgArr: [] });
      }
      this.setState({ loader: true });
      fetchImages(this.props.query, this.props.page)
        .then(data => {
          this.setState(prevState => ({
            imgArr: [...prevState.imgArr, ...data.hits],
            totalHits: data.totalHits,
          }));
        })
        .catch(err => console.log(err))
        .finally(this.setState({ loader: false }));
    }
  }

  render() {
    return (
      <>
        {this.state.loader && <Loader />}
        <ul className="ImageGallery">
          {this.state.imgArr.map(image => {
            return (
              <ImageGalleryItem
                key={image.id}
                pageURL={image.webformatURL}
                user={image.user}
                largeImageURL={image.largeImageURL}
              />
            );
          })}
        </ul>
        {this.state.imgArr.length !== 0 &&
          this.state.totalHits > this.state.imgArr.length && (
            <button
              onClick={this.props.onLoadMore}
              type="button"
              className="Button"
            >
              Load More
            </button>
          )}
      </>
    );
  }
}
