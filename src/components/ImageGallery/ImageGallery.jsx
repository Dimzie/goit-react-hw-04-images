import { fetchImages } from 'components/ImageAPI/ImageAPI';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import { useState, useEffect } from 'react';

export function ImageGallery({ query, page, onLoadMore }) {
  const [imgArr, setImgArr] = useState([]);
  const [loader, setLoader] = useState(false);
  const [totalHits, setTotalHits] = useState(0);

  useEffect(() => {
    if (page === 1) {
      setImgArr([]);
    }

    setLoader(true);

    fetchImages(query, page)
      .then((data) => {
        setImgArr((prevImgArr) => [...prevImgArr, ...data.hits]);
        setTotalHits(data.totalHits);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoader(false);
      });
  }, [query, page]);

  return (
    <>
      {loader && <Loader />}
      <ul className="ImageGallery">
        {imgArr.map((image) => (
          <ImageGalleryItem
            key={image.id}
            pageURL={image.webformatURL}
            user={image.user}
            largeImageURL={image.largeImageURL}
          />
        ))}
      </ul>
      {imgArr.length !== 0 && totalHits > imgArr.length && (
        <button onClick={onLoadMore} type="button" className="Button">
          Load More
        </button>
      )}
    </>
  );
}

export default ImageGallery;