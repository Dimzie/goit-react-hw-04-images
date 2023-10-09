import { PiMagnifyingGlassBold } from 'react-icons/pi';
import { toast } from 'react-toastify';
import { useState } from 'react';


export function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === '') {
      return toast.warn('Please write something');
    }

    onSubmit(query);
  };

  const onInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <header className="Searchbar">
      <form onSubmit={onHandleSubmit} className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="button-label">
            <PiMagnifyingGlassBold />
          </span>
        </button>

        <input
          value={query}
          name="input"
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onInputChange}
        />
      </form>
    </header>
  );
}

export default SearchBar;
