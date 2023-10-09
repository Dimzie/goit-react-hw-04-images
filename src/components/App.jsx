import SearchBar from './SearchBar/SearchBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './ImageGallery/ImageGallery';
import { useState } from 'react';


export function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const onSubmit = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
  };

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery query={query} onLoadMore={onLoadMore} page={page} />
      <ToastContainer autoClose={3000} limit={3} />
    </div>
  );
}

export default App;